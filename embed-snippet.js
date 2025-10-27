(() => {
  if (window.__POWER_CALCULATOR_EMBED__) {
    return;
  }
  window.__POWER_CALCULATOR_EMBED__ = true;

  const defaultBase = 'https://your-cdn.example.com/power-calculator/';

  const config = {
    assetBase: window.POWER_CALCULATOR_ASSET_BASE || defaultBase,
    htmlPath: window.POWER_CALCULATOR_HTML || 'index.html',
    cssPath: window.POWER_CALCULATOR_CSS || 'styles.css',
    scriptPath: window.POWER_CALCULATOR_SCRIPT || 'script.js',
    mountSelector: window.POWER_CALCULATOR_MOUNT || '#power-calculator-root'
  };

  function normalizeBase(base) {
    if (!base) return '';
    return base.endsWith('/') ? base : `${base}/`;
  }

  const assetBase = normalizeBase(config.assetBase);

  function ensureMount(selector) {
    if (selector) {
      const existing = document.querySelector(selector);
      if (existing) {
        return existing;
      }
    }

    const fallback = document.createElement('div');
    fallback.id = (selector && selector.startsWith('#')) ? selector.slice(1) : 'power-calculator-root';
    fallback.className = 'power-calculator-host';
    document.body.appendChild(fallback);
    return fallback;
  }

  function injectLink(rel, href, attributes = {}) {
    if (!href) return null;
    const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
    if (existing) {
      return existing;
    }

    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    link.dataset.powerCalculator = attributes['data-power-calculator'] || href;
    Object.entries(attributes).forEach(([attr, value]) => {
      link.setAttribute(attr, value);
    });
    document.head.appendChild(link);
    return link;
  }

  function injectFontStack() {
    injectLink('preconnect', 'https://fonts.googleapis.com');
    injectLink('preconnect', 'https://fonts.gstatic.com', { crossorigin: 'anonymous' });
    injectLink(
      'stylesheet',
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap',
      { 'data-power-calculator': 'font-manrope' }
    );
  }

  function injectStylesheet(href) {
    return injectLink('stylesheet', href);
  }

  async function fetchMarkup(url) {
    const response = await fetch(url, { credentials: 'omit' });
    if (!response.ok) {
      throw new Error(`Не вдалося завантажити шаблон (${response.status})`);
    }
    return response.text();
  }

  function extractFragment(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const fragment = document.createDocumentFragment();
    const glow = doc.body.querySelector('.background-glow');
    const main = doc.body.querySelector('.app-shell');

    if (!main) {
      throw new Error('У шаблоні не знайдено .app-shell');
    }

    if (glow) {
      fragment.appendChild(glow);
    }
    fragment.appendChild(main);
    return fragment;
  }

  function injectScript(src) {
    return new Promise((resolve, reject) => {
      if (!src) {
        resolve();
        return;
      }

      if (document.querySelector(`script[data-power-calculator="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.setAttribute('data-power-calculator', src);
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Не вдалося завантажити логіку калькулятора'));
      document.body.appendChild(script);
    });
  }

  async function bootstrap() {
    const mount = ensureMount(config.mountSelector);
    mount.classList.add('power-calculator-embed');

    injectFontStack();
    injectStylesheet(`${assetBase}${config.cssPath}`);

    try {
      const html = await fetchMarkup(`${assetBase}${config.htmlPath}`);
      const fragment = extractFragment(html);
      mount.replaceChildren(fragment);
    } catch (error) {
      mount.textContent = 'Не вдалося підготувати калькулятор. Перевірте шлях до файлів.';
      console.error(error);
      window.__POWER_CALCULATOR_EMBED__ = false;
      return;
    }

    try {
      await injectScript(`${assetBase}${config.scriptPath}`);
    } catch (error) {
      console.error(error);
      const fallback = document.createElement('p');
      fallback.className = 'power-calculator-error';
      fallback.textContent = 'Не вдалося завантажити функціонал калькулятора.';
      document.body.appendChild(fallback);
      window.__POWER_CALCULATOR_EMBED__ = false;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
  } else {
    bootstrap();
  }
})();
