const devices = [
  { id: 1, category: 'Електроніка', name: 'Лампа', watts: 10, hours: 3, icon: 'lamp', allowQuantity: true, maxQuantity: 8 },
  { id: 2, category: 'Електроніка', name: 'Роутер', watts: 12, hours: 10, icon: 'router', allowQuantity: false },
  { id: 3, category: 'Електроніка', name: 'Смартфон', watts: 15, hours: 2, icon: 'smartphone', allowQuantity: true, maxQuantity: 6 },
  { id: 4, category: 'Електроніка', name: 'Ноутбук', watts: 60, hours: 4, icon: 'laptop', allowQuantity: true, maxQuantity: 4 },
  {
    id: 5,
    category: 'Електроніка',
    name: 'Монітор',
    watts: 50,
    hours: 4,
    icon: 'monitor',
    allowQuantity: true,
    maxQuantity: 4,
    allowCustomWatts: true,
    variants: [
      { id: 'monitor-small', label: 'До 27″ — 50 Вт', watts: 50 },
      { id: 'monitor-large', label: 'Від 27″ — 70 Вт', watts: 70 },
      { id: 'monitor-pro', label: 'Ігровий / професійний — 100 Вт', watts: 100 }
    ]
  },
  {
    id: 6,
    category: 'Електроніка',
    name: 'Комп’ютер',
    watts: 150,
    hours: 4,
    icon: 'desktop',
    allowQuantity: false,
    allowCustomWatts: true,
    variants: [
      { id: 'pc-office', label: 'Офісний — 150 Вт', watts: 150 },
      { id: 'pc-gaming', label: 'Ігровий — 500 Вт', watts: 500 },
      { id: 'pc-workstation', label: 'Робоча станція — 750 Вт', watts: 750 }
    ]
  },
  { id: 7, category: 'Електроніка', name: 'Телевізор', watts: 90, hours: 3, icon: 'television', allowQuantity: false },
  { id: 8, category: 'Електроніка', name: 'StarLink', watts: 50, hours: 5, icon: 'satellite', allowQuantity: false },
  { id: 9, category: 'Електроніка', name: 'Ігрова приставка', watts: 140, hours: 2, icon: 'gamepad', allowQuantity: false },
  { id: 20, category: 'Велика побутова техніка', name: 'Холодильник', watts: 120, hours: 12, icon: 'fridge', allowQuantity: false },
  { id: 21, category: 'Велика побутова техніка', name: 'Пральна машина', watts: 500, hours: 1, icon: 'washer', allowQuantity: false },
  { id: 22, category: 'Велика побутова техніка', name: 'Сушильна машина', watts: 800, hours: 1, icon: 'dryer', allowQuantity: false },
  { id: 23, category: 'Велика побутова техніка', name: 'Кондиціонер', watts: 900, hours: 4, icon: 'air-conditioner', allowQuantity: false },
  { id: 24, category: 'Велика побутова техніка', name: 'Електроплита', watts: 1200, hours: 1, icon: 'stove', allowQuantity: false },
  { id: 30, category: 'Дрібна побутова техніка', name: 'Кавоварка', watts: 900, hours: 0.3, icon: 'coffee-maker', allowQuantity: false },
  { id: 31, category: 'Дрібна побутова техніка', name: 'Мікрохвильовка', watts: 1200, hours: 0.3, icon: 'microwave', allowQuantity: false },
  { id: 32, category: 'Дрібна побутова техніка', name: 'Електрочайник', watts: 1500, hours: 0.2, icon: 'kettle', allowQuantity: false },
  { id: 33, category: 'Дрібна побутова техніка', name: 'Фен', watts: 1100, hours: 0.3, icon: 'hairdryer', allowQuantity: false },
  { id: 40, category: 'Інструменти', name: 'Шуруповерт', watts: 500, hours: 1, icon: 'screwdriver', allowQuantity: true, maxQuantity: 4 },
  { id: 41, category: 'Інструменти', name: 'Дриль', watts: 800, hours: 0.5, icon: 'drill', allowQuantity: false },
  { id: 42, category: 'Інструменти', name: 'Зварювальний апарат', watts: 1500, hours: 1, icon: 'welder', allowQuantity: false },
  { id: 43, category: 'Інструменти', name: 'Компресор', watts: 1200, hours: 1, icon: 'compressor', allowQuantity: false }
];

const SVG_NS = 'http://www.w3.org/2000/svg';

const iconDefinitions = {
  lamp: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'circle', attrs: { cx: '12', cy: '8.5', r: '4.5', fill: 'none', 'stroke-width': '1.6' } },
      { tag: 'line', attrs: { x1: '12', y1: '13', x2: '12', y2: '16', 'stroke-width': '1.6' } },
      { tag: 'line', attrs: { x1: '9.5', y1: '16', x2: '14.5', y2: '16', 'stroke-width': '1.6' } },
      { tag: 'line', attrs: { x1: '10.75', y1: '18', x2: '13.25', y2: '18', 'stroke-width': '1.6' } }
    ]
  },
  router: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '4.5', y: '13', width: '15', height: '6', rx: '1.7' } },
      { tag: 'circle', attrs: { cx: '9', cy: '16', r: '0.8', fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: '12', cy: '16', r: '0.8', fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: '15', cy: '16', r: '0.8', fill: 'currentColor', stroke: 'none' } },
      { tag: 'line', attrs: { x1: '8', y1: '6', x2: '8', y2: '12' } },
      { tag: 'line', attrs: { x1: '16', y1: '6', x2: '16', y2: '12' } },
      { tag: 'path', attrs: { d: 'M6 10c1.8-2 4.2-3.1 6-3.1s4.2 1.1 6 3.1', fill: 'none' } }
    ]
  },
  smartphone: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '8', y: '3', width: '8', height: '18', rx: '2' } },
      { tag: 'line', attrs: { x1: '10', y1: '6', x2: '14', y2: '6' } },
      { tag: 'circle', attrs: { cx: '12', cy: '18', r: '0.9', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  laptop: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '5', y: '5', width: '14', height: '9', rx: '1.2' } },
      { tag: 'path', attrs: { d: 'M4 16h16l-1.5 3H5.5L4 16Z', fill: 'none' } },
      { tag: 'line', attrs: { x1: '9', y1: '18.5', x2: '15', y2: '18.5' } }
    ]
  },
  monitor: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '4', y: '4', width: '16', height: '11', rx: '1.6' } },
      { tag: 'line', attrs: { x1: '12', y1: '15', x2: '12', y2: '19' } },
      { tag: 'line', attrs: { x1: '9', y1: '19', x2: '15', y2: '19' } }
    ]
  },
  desktop: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '7', y: '3.5', width: '10', height: '17', rx: '1.7' } },
      { tag: 'line', attrs: { x1: '7', y1: '11.5', x2: '17', y2: '11.5' } },
      { tag: 'circle', attrs: { cx: '14.5', cy: '6.8', r: '0.8', fill: 'currentColor', stroke: 'none' } },
      { tag: 'rect', attrs: { x: '9', y: '14.5', width: '6', height: '3', rx: '0.8', fill: 'none' } }
    ]
  },
  television: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '3.5', y: '5', width: '17', height: '11', rx: '1.6' } },
      { tag: 'line', attrs: { x1: '8', y1: '18', x2: '10', y2: '20' } },
      { tag: 'line', attrs: { x1: '16', y1: '18', x2: '14', y2: '20' } },
      { tag: 'line', attrs: { x1: '9', y1: '20', x2: '15', y2: '20' } }
    ]
  },
  satellite: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'path', attrs: { d: 'M6 14c0-4.4 3.6-8 8-8 .74 0 1.45.1 2.14.28L12 10l4 4 3.72-4.14c.18.69.28 1.4.28 2.14 0 4.4-3.6 8-8 8', fill: 'none' } },
      { tag: 'line', attrs: { x1: '6', y1: '18.5', x2: '10.5', y2: '14' } },
      { tag: 'line', attrs: { x1: '17', y1: '3', x2: '21', y2: '7' } },
      { tag: 'line', attrs: { x1: '15.5', y1: '4.5', x2: '19.5', y2: '8.5' } },
      { tag: 'circle', attrs: { cx: '12', cy: '10', r: '1.1', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  gamepad: {
    viewBox: '0 0 24 24',
    elements: [
      {
        tag: 'path',
        attrs: {
          d: 'M7 9.5h10c1.38 0 2.5 1.12 2.5 2.5v2.6c0 .86-.83 1.48-1.66 1.27l-2.22-.56a1.8 1.8 0 0 0-1.72.48l-.9.9a1.5 1.5 0 0 1-2.12 0l-.9-.9a1.8 1.8 0 0 0-1.72-.48l-2.22.56C5.33 15.58 4.5 14.96 4.5 14.1V12c0-1.38 1.12-2.5 2.5-2.5Z',
          fill: 'none'
        }
      },
      { tag: 'line', attrs: { x1: '8.8', y1: '12', x2: '11.2', y2: '12' } },
      { tag: 'line', attrs: { x1: '10', y1: '10.8', x2: '10', y2: '13.2' } },
      { tag: 'circle', attrs: { cx: '14.8', cy: '12.3', r: '0.8', fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: '16.9', cy: '14', r: '0.8', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  fridge: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '7', y: '3.5', width: '10', height: '17', rx: '1.7' } },
      { tag: 'line', attrs: { x1: '7', y1: '11', x2: '17', y2: '11' } },
      { tag: 'circle', attrs: { cx: '9.7', cy: '7.5', r: '0.6', fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: '9.7', cy: '14.5', r: '0.6', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  washer: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '5', y: '4', width: '14', height: '16', rx: '1.8' } },
      { tag: 'circle', attrs: { cx: '12', cy: '13', r: '4', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M9.5 11.5c1 .8 2.5.8 3.5 0s2.5-.8 3.5 0', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '9', cy: '7', r: '0.6', fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: '11', cy: '7', r: '0.6', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  dryer: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '5', y: '4', width: '14', height: '16', rx: '1.8' } },
      { tag: 'circle', attrs: { cx: '12', cy: '13', r: '4', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M9.5 13a2.5 2.5 0 0 0 3.5 0 2.5 2.5 0 0 1 3.5 0', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M8.5 10.8a3.8 3.8 0 0 1 6.7 0', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '9', cy: '7', r: '0.6', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  'air-conditioner': {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '3.5', y: '6', width: '17', height: '8.5', rx: '2' } },
      { tag: 'line', attrs: { x1: '6', y1: '10.5', x2: '10', y2: '10.5' } },
      { tag: 'line', attrs: { x1: '11.5', y1: '10.5', x2: '15.5', y2: '10.5' } },
      { tag: 'path', attrs: { d: 'M8 14.5c0 1.8 1.2 3.2 3 3.7', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M13 14.5c0 1.8-1.2 3.2-3 3.7', fill: 'none' } }
    ]
  },
  stove: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '5', y: '4', width: '14', height: '16', rx: '1.8' } },
      { tag: 'circle', attrs: { cx: '9', cy: '8.5', r: '1.6', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '15', cy: '8.5', r: '1.6', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '9', cy: '13.5', r: '1.4', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '15', cy: '13.5', r: '1.4', fill: 'none' } }
    ]
  },
  'coffee-maker': {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'path', attrs: { d: 'M7 4h10v5a4 4 0 0 1-4 4h-2v3.5a2.5 2.5 0 0 0 5 0V15', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M7 4v12a3 3 0 0 0 3 3h1.2', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '14.5', cy: '7', r: '0.8', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  microwave: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '4', y: '6', width: '16', height: '12', rx: '1.8' } },
      { tag: 'rect', attrs: { x: '7', y: '9', width: '8', height: '6', rx: '1', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '17', cy: '10.5', r: '0.6', fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: '17', cy: '13.5', r: '0.6', fill: 'currentColor', stroke: 'none' } }
    ]
  },
  kettle: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'path', attrs: { d: 'M8 8a4 4 0 0 1 8 0v8a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V9.5', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M16 9c1.2 0 2.5-.8 3-2l-2-1.5', fill: 'none' } },
      { tag: 'line', attrs: { x1: '9', y1: '5', x2: '15', y2: '5' } }
    ]
  },
  hairdryer: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'path', attrs: { d: 'M5 10h9a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2H9a4 4 0 0 0-4 4v3Z', fill: 'none' } },
      { tag: 'line', attrs: { x1: '5', y1: '10', x2: '5', y2: '13.5' } },
      { tag: 'line', attrs: { x1: '5', y1: '13.5', x2: '7.5', y2: '17' } },
      { tag: 'line', attrs: { x1: '17', y1: '6', x2: '20', y2: '6' } },
      { tag: 'line', attrs: { x1: '17', y1: '8', x2: '19.5', y2: '8' } }
    ]
  },
  screwdriver: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'path', attrs: { d: 'M5.5 16.5 11 11l2 2-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12Z', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M12.5 9.5 15 7l2 2-2.5 2.5', fill: 'none' } },
      { tag: 'line', attrs: { x1: '16', y1: '5', x2: '18', y2: '3' } },
      { tag: 'line', attrs: { x1: '18', y1: '3', x2: '19.5', y2: '4.5' } }
    ]
  },
  drill: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'path', attrs: { d: 'M4 9h12a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2h-3v3l-2 1-1.5-1V15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z', fill: 'none' } },
      { tag: 'line', attrs: { x1: '6', y1: '11', x2: '6', y2: '13' } },
      { tag: 'line', attrs: { x1: '9', y1: '11', x2: '9', y2: '13' } },
      { tag: 'line', attrs: { x1: '18', y1: '11', x2: '20', y2: '11' } }
    ]
  },
  welder: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '6', y: '5', width: '12', height: '15', rx: '2' } },
      { tag: 'rect', attrs: { x: '9', y: '9', width: '6', height: '5', rx: '1', fill: 'none' } },
      { tag: 'line', attrs: { x1: '12', y1: '5', x2: '12', y2: '3' } },
      { tag: 'path', attrs: { d: 'M15.5 17.5 18 21', fill: 'none' } },
      { tag: 'path', attrs: { d: 'M9 17.5 6 21', fill: 'none' } }
    ]
  },
  compressor: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'rect', attrs: { x: '5', y: '10', width: '14', height: '7', rx: '3.2' } },
      { tag: 'circle', attrs: { cx: '9', cy: '13.5', r: '1.5', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '15', cy: '13.5', r: '1.5', fill: 'none' } },
      { tag: 'line', attrs: { x1: '12', y1: '7', x2: '12', y2: '10' } },
      { tag: 'rect', attrs: { x: '10', y: '5', width: '4', height: '2', rx: '0.8' } }
    ]
  },
  generic: {
    viewBox: '0 0 24 24',
    elements: [
      { tag: 'path', attrs: { d: 'M8 4h8l3 6v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V10Z', fill: 'none' } },
      { tag: 'circle', attrs: { cx: '12', cy: '13', r: '2', fill: 'none' } },
      { tag: 'line', attrs: { x1: '10', y1: '18', x2: '14', y2: '18' } }
    ]
  }
};

function createIconElement(key) {
  const definition = iconDefinitions[key] || iconDefinitions.generic;
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', definition.viewBox);
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.5');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');

  definition.elements.forEach(({ tag, attrs }) => {
    const element = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
    svg.appendChild(element);
  });

  return svg;
}

function escapeSvgText(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function hashString(value) {
  const input = String(value ?? '');
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

const stationPalettes = [
  { test: /bluetti/i, colors: { primary: '#4338ca', secondary: '#7c3aed', accent: '#a855f7', detail: '#c4b5fd', border: '#5b21b6' } },
  { test: /powerplant/i, colors: { primary: '#0f766e', secondary: '#16a34a', accent: '#22d3ee', detail: '#bbf7d0', border: '#0d9488' } }
];

const defaultStationPalette = {
  primary: '#1d4ed8',
  secondary: '#7c3aed',
  accent: '#38bdf8',
  detail: '#cbd5f5',
  border: '#1e40af'
};

function getStationPalette(name) {
  if (!name) {
    return defaultStationPalette;
  }

  const paletteEntry = stationPalettes.find((entry) => entry.test.test(name));
  return paletteEntry ? paletteEntry.colors : defaultStationPalette;
}

function createStationIllustration(station) {
  const palette = getStationPalette(station.name);
  const safeName = escapeSvgText(station.name || station.model || 'Зарядна станція');
  const safeModel = escapeSvgText(station.model || station.name || 'Модель');
  const capacityLabel = `${Math.round(station.capacityWh)} Wh`;
  const powerLabel = `${Math.round(station.powerW)} W`;
  const safeMetrics = escapeSvgText(`${capacityLabel} • ${powerLabel}`);
  const gradientId = `station-grad-${hashString(`${station.name}-${station.model}`)}`;
  const bodyId = `station-body-${hashString(`${station.model}-${station.powerW}`)}`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" role="img" aria-label="${safeName}">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.primary}" />
          <stop offset="100%" stop-color="${palette.secondary}" />
        </linearGradient>
        <linearGradient id="${bodyId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${palette.detail}" stop-opacity="0.92" />
          <stop offset="100%" stop-color="${palette.accent}" stop-opacity="0.98" />
        </linearGradient>
      </defs>
      <rect width="220" height="160" rx="28" fill="url(#${gradientId})" />
      <rect x="36" y="44" width="148" height="72" rx="20" fill="url(#${bodyId})" stroke="${palette.border}" stroke-width="4" />
      <rect x="164" y="64" width="16" height="32" rx="8" fill="${palette.detail}" fill-opacity="0.92" />
      <g opacity="0.35" fill="none" stroke="#0b0a1d" stroke-width="3" stroke-linecap="round">
        <path d="M70 76h34" />
        <path d="M70 90h26" />
        <path d="M70 62h42" />
      </g>
      <circle cx="128" cy="88" r="12" fill="#0f172a" fill-opacity="0.22" />
      <path d="M126 80 134 88 126 96" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.45" />
      <text x="40" y="122" fill="#f8fafc" font-size="18" font-weight="700" font-family="Manrope, 'Segoe UI', Roboto, sans-serif">${safeModel}</text>
      <text x="40" y="140" fill="#e2e8f0" font-size="12" font-weight="500" font-family="Manrope, 'Segoe UI', Roboto, sans-serif">${safeMetrics}</text>
    </svg>
  `;

  const compact = svg.replace(/\s{2,}/g, ' ').trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(compact)}`;
}

const stations = [
  {
    name: 'Bluetti Apex 300',
    model: 'Apex 300',
    capacityWh: 2700,
    powerW: 3800,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-bluetti-apex-300-2700wh-750000mah-3800w/'
  },
  {
    name: 'Bluetti AC180',
    model: 'AC180',
    capacityWh: 1152,
    powerW: 1800,
    link: 'https://martin-shop.online/shop/zaryadnaya-stantsiya-bluetti-ac180-1152wh-320000mah-1800w/'
  },
  {
    name: 'Bluetti AC50B',
    model: 'AC50B',
    capacityWh: 448,
    powerW: 700,
    link: 'https://martin-shop.online/shop/zaryadnaya-stantsiya-bluetti-ac50b-448wh-124444mah-700w/'
  },
  {
    name: 'Bluetti EB3A',
    model: 'EB3A',
    capacityWh: 268,
    powerW: 744,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-bluetti-eb3a-268wh-7444/'
  },
  {
    name: 'PowerPlant G24',
    model: 'G24',
    capacityWh: 2048,
    powerW: 2400,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-powerplant-g24-2048wh-2400w/'
  },
  {
    name: 'PowerPlant HS1800',
    model: 'HS1800',
    capacityWh: 1536,
    powerW: 1800,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-powerplant-hs1800-1536wh-426667mah1800w/'
  },
  {
    name: 'PowerPlant HS1000',
    model: 'HS1000',
    capacityWh: 1024,
    powerW: 1800,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-powerplant-hs1000-1024wh-284444mah-1800w/'
  },
  {
    name: 'PowerPlant HS800',
    model: 'HS800',
    capacityWh: 835.2,
    powerW: 1000,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-powerplant-hs800-835-2wh-232000mah-1000w/'
  },
  {
    name: 'PowerPlant HS3600',
    model: 'HS3600',
    capacityWh: 3248,
    powerW: 3600,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-powerplant-hs3600-3248wh-902222mah-3600w/'
  },
  {
    name: 'PowerPlant PP-425',
    model: 'PP-425',
    capacityWh: 148,
    powerW: 200,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-powerplant-pp-425-40000mah-pd-30w-ac-200w-dc12-16-8v-2xusb-c-2xusb-qc3-0/'
  },
  {
    name: 'PowerPlant PP-286',
    model: 'PP-286',
    capacityWh: 88.8,
    powerW: 120,
    link: 'https://martin-shop.online/shop/zaryadna-stantsiya-powerplant-pp-286-24000mah-pd-18w-ac-120w-dc12-16-8v-usb-c-2xusb-qc3-0wireless/'
  }
];

stations.forEach((station) => {
  if (!station.image) {
    station.image = createStationIllustration(station);
  }
});

const state = new Map(
  devices.map((device) => {
    const hasVariants = Array.isArray(device.variants) && device.variants.length > 0;
    const initialVariant = hasVariants ? device.variants[0] : null;
    const initialWatts = initialVariant ? initialVariant.watts : device.watts;
    const allowQuantity = device.allowQuantity !== false;
    const maxQuantity = allowQuantity ? Math.max(1, Math.min(99, device.maxQuantity || 99)) : 1;

    return [
      device.id,
      {
        ...device,
        allowQuantity,
        maxQuantity,
        quantity: 0,
        variantId: initialVariant ? initialVariant.id : null,
        watts: initialWatts,
        hours: device.hours,
        timeUnit: 'hours',
        timeValue: device.hours,
        timeValueInput: formatTimeValueForInput(device.hours, 'hours'),
        customWatts: device.allowCustomWatts ? initialWatts : null,
        baseline: {
          variantId: initialVariant ? initialVariant.id : null,
          watts: initialWatts,
          hours: device.hours,
          timeUnit: 'hours',
          timeValue: device.hours,
          timeValueInput: formatTimeValueForInput(device.hours, 'hours')
        }
      }
    ];
  })
);

const CONSULTATION_URL = 'https://martin-shop.online/contact/';

const deviceCategoriesElement = document.getElementById('device-categories');
const bufferHelperEl = document.getElementById('buffer-helper');
const selectedSection = document.getElementById('selected-section');
const selectedTableBody = document.getElementById('selected-devices');
const totalEnergyEl = document.getElementById('total-energy');
const totalBufferedEl = document.getElementById('total-buffered');
const totalPowerEl = document.getElementById('total-power');
const recommendationCard = document.getElementById('recommendation-card');
const matchLabel = document.getElementById('match-label');
const stationNameEl = document.getElementById('station-name');
const stationSpecsEl = document.getElementById('station-specs');
const stationMediaEl = document.getElementById('station-media');
const stationImageEl = document.getElementById('station-image');
const stationLinkEl = document.getElementById('station-link');
const stationConsultEl = document.getElementById('station-consult');
const alternativesSection = document.getElementById('alternatives-section');
const alternativeListEl = document.getElementById('alternative-list');
const categoryBreakdownEl = document.getElementById('category-breakdown');
const saveScenarioBtn = document.getElementById('save-scenario');
const resetScenarioBtn = document.getElementById('reset-scenario');
const shareScenarioBtn = document.getElementById('share-scenario');
const scenarioFeedbackEl = document.getElementById('scenario-feedback');
const shareDialogEl = document.getElementById('share-dialog');
const shareUrlInput = document.getElementById('share-url');
const copyShareLinkBtn = document.getElementById('copy-share-link');
const shareOptionElements = shareDialogEl ? Array.from(shareDialogEl.querySelectorAll('.share-option')) : [];
const infoTriggerBtn = document.querySelector('.info-trigger');
const infoTooltipEl = document.getElementById('buffer-tooltip');

const BUFFER_FACTOR = 0.94;
const BUFFER_PERCENT = Math.round(BUFFER_FACTOR * 100);

if (stationMediaEl) {
  stationMediaEl.classList.add('is-empty');
  stationMediaEl.setAttribute('aria-hidden', 'true');
}

if (stationImageEl) {
  stationImageEl.loading = 'lazy';
  stationImageEl.decoding = 'async';
}

if (scenarioFeedbackEl) {
  scenarioFeedbackEl.dataset.state = 'hidden';
}

const cardRegistry = new Map();
const categoryRegistry = new Map();
const selectedRowRegistry = new Map();
const metricAnimations = new WeakMap();
let previousTotalEnergy = 0;
let previousBufferedEnergy = 0;
let previousTotalPower = 0;
const STORAGE_KEY = 'power-calculator-scenario-v4';
const categoryPreferences = new Map();
let pendingCategoryPreferences = null;
let isRestoringState = false;
let scenarioFeedbackTimer = null;
let previousFocusElement = null;
let shareDialogHideTimer = null;
let currentShareUrl = '';
let tooltipVisible = false;
let tooltipHideTimer = null;
function showSelectedSection() {
  if (!selectedSection) {
    return;
  }

  if (selectedSection.classList.contains('visible')) {
    return;
  }

  selectedSection.classList.remove('hidden', 'animating-out');
  requestAnimationFrame(() => {
    selectedSection.classList.add('visible', 'animating-in');
    const handleAnimationEnd = (event) => {
      if (event.target !== selectedSection) {
        return;
      }
      selectedSection.classList.remove('animating-in');
    };
    selectedSection.addEventListener('animationend', handleAnimationEnd, { once: true });
  });
}

function hideSelectedSection() {
  if (!selectedSection) {
    return;
  }

  if (!selectedSection.classList.contains('visible')) {
    selectedSection.classList.add('hidden');
    return;
  }

  selectedSection.classList.remove('animating-in');
  selectedSection.classList.add('animating-out');
  const handleAnimationEnd = (event) => {
    if (event.target !== selectedSection) {
      return;
    }
    selectedSection.classList.remove('animating-out');
    if (!selectedSection.classList.contains('visible')) {
      selectedSection.classList.add('hidden');
    }
  };

  selectedSection.addEventListener('animationend', handleAnimationEnd, { once: true });
  selectedSection.classList.remove('visible');
}

function formatTimeValueForInput(value, unit) {
  if (!Number.isFinite(value)) {
    return '';
  }

  if (unit === 'minutes') {
    return String(Math.max(0, Math.round(value)));
  }

  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(Math.trunc(rounded)) : rounded.toFixed(1);
}

function formatNumber(value, digits = 0) {
  return value.toLocaleString('uk-UA', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function animateMetric(element, from, to, suffix, decimals = 0, duration = 600) {
  if (!element) {
    return;
  }

  const existingFrame = metricAnimations.get(element);
  if (existingFrame) {
    cancelAnimationFrame(existingFrame);
  }

  if (from === to) {
    metricAnimations.delete(element);
    element.textContent = `${formatNumber(to, decimals)} ${suffix}`;
    return;
  }

  const startTime = performance.now();
  const difference = to - from;

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = from + difference * easedProgress;
    element.textContent = `${formatNumber(currentValue, decimals)} ${suffix}`;

    if (progress < 1) {
      const frame = requestAnimationFrame(step);
      metricAnimations.set(element, frame);
    } else {
      element.textContent = `${formatNumber(to, decimals)} ${suffix}`;
      metricAnimations.delete(element);
    }
  };

  const frame = requestAnimationFrame(step);
  metricAnimations.set(element, frame);
}

function getVariant(device, variantId = device.variantId) {
  if (device && device.allowCustomWatts && variantId === 'custom') {
    return {
      id: 'custom',
      label: `Власне значення — ${formatNumber(device.watts)} Вт`,
      watts: device.watts
    };
  }

  if (!Array.isArray(device?.variants)) {
    return null;
  }
  return device.variants.find((variant) => variant.id === variantId) || device.variants[0] || null;
}

function resetDeviceToBaseline(device) {
  if (!device?.baseline) {
    return;
  }

  device.quantity = 0;
  device.variantId = device.baseline.variantId;
  device.watts = device.baseline.watts;
  device.timeUnit = device.baseline.timeUnit;
  device.timeValue = device.baseline.timeValue;
  device.timeValueInput = device.baseline.timeValueInput;
  device.hours = device.baseline.hours;
  if (device.allowCustomWatts) {
    device.customWatts = device.baseline.watts;
  }
}

function getDeviceMetaText(device) {
  const variant = getVariant(device);
  let powerText = variant ? variant.label : `${formatNumber(device.watts)} Вт`;

  if (device.allowCustomWatts && device.variantId === 'custom') {
    powerText = `Власне значення — ${formatNumber(device.watts)} Вт`;
  }

  let durationText = '';
  if (!isTimeValueSettled(device)) {
    durationText = '—';
  } else if (typeof device.timeValue === 'number') {
    if (device.timeUnit === 'minutes') {
      durationText = `${formatNumber(device.timeValue, 0)} хв`;
    } else {
      const digits = device.timeValue % 1 === 0 ? 0 : 1;
      durationText = `${formatNumber(device.timeValue, digits)} год`;
    }
  }

  return durationText ? `${powerText} • ${durationText}` : powerText;
}

function setQuantity(id, quantity) {
  const device = state.get(id);
  if (!device) return;

  const numeric = Number(quantity);
  let nextQuantity = 0;

  if (device.allowQuantity) {
    nextQuantity = Number.isFinite(numeric) ? Math.max(0, Math.min(device.maxQuantity, Math.round(numeric))) : 0;
  } else {
    nextQuantity = Number.isFinite(numeric) && numeric > 0 ? 1 : 0;
  }

  if (device.quantity === nextQuantity) {
    return;
  }

  device.quantity = nextQuantity;
  updateInterface();
}

function adjustQuantity(id, delta) {
  const device = state.get(id);
  if (!device) return;
  const base = Number.isFinite(device.quantity) ? device.quantity : 0;
  if (!device.allowQuantity) {
    const next = delta < 0 ? 0 : 1;
    setQuantity(id, next);
    return;
  }

  setQuantity(id, base + delta);
}

function setTimeValue(id, value) {
  const device = state.get(id);
  if (!device) return;
  if (typeof value === 'string') {
    if (device.timeValueInput === value) {
      return;
    }

    const trimmed = value.trim();

    if (trimmed === '') {
      const changed = device.timeValueInput !== '' || device.timeValue !== 0 || device.hours !== 0;
      device.timeValueInput = '';
      device.timeValue = 0;
      device.hours = 0;
      if (changed) {
        updateInterface();
      }
      return;
    }

    const normalized = trimmed.replace(',', '.');
    if (device.timeUnit === 'minutes' && normalized.includes('.')) {
      device.timeValueInput = value;
      updateInterface();
      return;
    }

    if (/^\d*\.$/.test(normalized)) {
      device.timeValueInput = value;
      updateInterface();
      return;
    }

    const numeric = Number(normalized);
    if (!Number.isFinite(numeric)) {
      device.timeValueInput = value;
      updateInterface();
      return;
    }

    commitTimeValue(device, numeric);
    return;
  }

  commitTimeValue(device, value);
}

function commitTimeValue(device, numericValue) {
  const max = device.timeUnit === 'minutes' ? 24 * 60 : 24;
  const min = 0;
  const clamped = Math.max(min, Math.min(max, Number(numericValue) || 0));

  let nextValue;
  if (device.timeUnit === 'minutes') {
    nextValue = Math.round(clamped);
  } else {
    nextValue = Math.round(clamped * 10) / 10;
  }

  const nextHours = device.timeUnit === 'minutes' ? nextValue / 60 : nextValue;
  const nextDisplay = formatTimeValueForInput(nextValue, device.timeUnit);

  if (device.timeValue === nextValue && device.hours === nextHours && device.timeValueInput === nextDisplay) {
    return;
  }

  device.timeValue = nextValue;
  device.hours = nextHours;
  device.timeValueInput = nextDisplay;
  updateInterface();
}

function isTimeValueSettled(device) {
  if (!device) {
    return true;
  }

  const raw = typeof device.timeValueInput === 'string' ? device.timeValueInput.trim() : '';
  if (raw === '') {
    return false;
  }

  const normalized = raw.replace(',', '.');

  if (/^\d*\.$/.test(normalized)) {
    return false;
  }

  if (device.timeUnit === 'minutes' && normalized.includes('.')) {
    return false;
  }

  return Number.isFinite(Number(normalized));
}

function adjustTimeValue(id, direction) {
  const device = state.get(id);
  if (!device) return;
  const step = device.timeUnit === 'minutes' ? 5 : 0.5;
  const base = isTimeValueSettled(device) ? device.timeValue : 0;
  setTimeValue(id, base + step * direction);
}

function setTimeUnit(id, unit) {
  if (unit !== 'hours' && unit !== 'minutes') {
    return;
  }

  const device = state.get(id);
  if (!device) {
    return;
  }

  if (device.timeUnit === unit) {
    return;
  }

  const hasValue = isTimeValueSettled(device);
  const baseHours = hasValue ? device.hours : 0;

  device.timeUnit = unit;

  if (!hasValue) {
    device.timeValue = 0;
    device.hours = 0;
    device.timeValueInput = '';
    updateInterface();
    return;
  }

  if (unit === 'hours') {
    const nextValue = Math.max(0, Math.min(24, Math.round(baseHours * 10) / 10));
    device.timeValue = nextValue;
    device.hours = nextValue;
    device.timeValueInput = formatTimeValueForInput(nextValue, 'hours');
  } else {
    const nextValue = Math.max(0, Math.min(24 * 60, Math.round(baseHours * 60)));
    device.timeValue = nextValue;
    device.hours = nextValue / 60;
    device.timeValueInput = formatTimeValueForInput(nextValue, 'minutes');
  }

  updateInterface();
}

function setCustomWatts(id, watts) {
  const device = state.get(id);
  if (!device || !device.allowCustomWatts) {
    return;
  }

  const numeric = Number(watts);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    const shouldUpdate = device.customWatts !== null || (device.variantId === 'custom' && device.watts !== 0);
    device.customWatts = null;
    if (device.variantId === 'custom') {
      device.watts = 0;
    }
    if (shouldUpdate) {
      updateInterface();
    }
    return;
  }

  const rounded = Math.round(numeric);
  const wattsChanged = device.customWatts !== rounded;
  const activeCustom = device.variantId === 'custom';
  const needsUpdate = wattsChanged || (activeCustom && device.watts !== rounded);

  if (!needsUpdate) {
    return;
  }

  device.customWatts = rounded;
  if (activeCustom) {
    device.watts = rounded;
  }
  updateInterface();
}

function setVariant(id, variantId) {
  const device = state.get(id);
  if (!device || !Array.isArray(device.variants)) {
    if (device && device.allowCustomWatts && variantId === 'custom') {
      if (device.variantId === 'custom' && (Number.isFinite(device.customWatts) ? device.watts === device.customWatts : device.watts === 0)) {
        return;
      }

      device.variantId = 'custom';
      device.watts = Number.isFinite(device.customWatts) ? device.customWatts : 0;
      updateInterface();
    }
    return;
  }

  if (device.allowCustomWatts && variantId === 'custom') {
    const targetWatts = Number.isFinite(device.customWatts) ? device.customWatts : 0;
    if (device.variantId === 'custom' && device.watts === targetWatts) {
      return;
    }

    device.variantId = 'custom';
    device.watts = targetWatts;
    updateInterface();
    return;
  }

  const nextVariant = getVariant(device, variantId);
  if (!nextVariant) {
    return;
  }

  if (device.variantId === nextVariant.id && device.watts === nextVariant.watts) {
    return;
  }

  device.variantId = nextVariant.id;
  device.watts = nextVariant.watts;
  if (device.allowCustomWatts && Number.isFinite(device.customWatts)) {
    device.customWatts = nextVariant.watts;
  }
  updateInterface();
}

function createCategorySection(category, index) {
  const section = document.createElement('section');
  section.className = 'category-block';

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'category-toggle';
  toggle.setAttribute('aria-expanded', 'false');

  const titleWrap = document.createElement('span');
  titleWrap.className = 'category-title';
  titleWrap.textContent = category;
  toggle.appendChild(titleWrap);

  const count = document.createElement('span');
  count.className = 'category-count';
  count.textContent = '0';
  toggle.appendChild(count);

  const chevron = document.createElement('span');
  chevron.className = 'category-chevron';
  chevron.setAttribute('aria-hidden', 'true');
  chevron.innerHTML = '&#9662;';
  toggle.appendChild(chevron);

  section.appendChild(toggle);

  const content = document.createElement('div');
  content.className = 'category-content';
  content.style.height = '0px';

  const description = document.createElement('p');
  description.textContent = 'Оберіть потрібні пристрої та вкажіть їх кількість для розрахунку.';
  content.appendChild(description);

  const grid = document.createElement('div');
  grid.className = 'device-grid';

  const devicesInCategory = Array.from(state.values()).filter((device) => device.category === category);

  devicesInCategory.forEach((device) => {
    const card = document.createElement('article');
    card.className = 'device-card';
    if (!device.allowQuantity) {
      card.classList.add('single-unit');
    }
    card.dataset.deviceId = String(device.id);
    card.setAttribute('aria-expanded', 'false');
    card.tabIndex = 0;

    const pill = document.createElement('span');
    pill.className = 'device-quantity-pill';
    pill.textContent = device.allowQuantity ? 'x0' : '—';

    const header = document.createElement('div');
    header.className = 'device-card-header';

    const info = document.createElement('div');
    info.className = 'device-card-info';

    const icon = document.createElement('span');
    icon.className = 'device-icon';
    icon.appendChild(createIconElement(device.icon));
    info.appendChild(icon);

    const textBlock = document.createElement('div');
    textBlock.className = 'device-card-text';

    const heading = document.createElement('h3');
    heading.textContent = device.name;
    textBlock.appendChild(heading);

    const meta = document.createElement('p');
    meta.className = 'device-meta';
    meta.textContent = getDeviceMetaText(device);
    textBlock.appendChild(meta);

    info.appendChild(textBlock);
    header.appendChild(info);

    const controls = document.createElement('div');
    controls.className = 'device-card-controls';

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.className = 'device-add device-action';
    addButton.textContent = '+';
    addButton.setAttribute('aria-label', `Додати ${device.name}`);
    addButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const current = state.get(device.id);
      const base = current && Number.isFinite(current.quantity) ? current.quantity : 0;

      if (!device.allowQuantity) {
        setQuantity(device.id, base > 0 ? 0 : 1);
        return;
      }

      const nextQuantity = base > 0 ? Math.min(base + 1, device.maxQuantity) : 1;
      setQuantity(device.id, nextQuantity);
    });

    controls.appendChild(pill);
    controls.appendChild(addButton);

    let subtractButton = null;
    if (device.allowQuantity) {
      subtractButton = document.createElement('button');
      subtractButton.type = 'button';
      subtractButton.className = 'device-minus device-action';
      subtractButton.textContent = '–';
      subtractButton.setAttribute('aria-label', `Зменшити кількість ${device.name}`);
      subtractButton.addEventListener('click', (event) => {
        event.stopPropagation();
        adjustQuantity(device.id, -1);
      });
      controls.appendChild(subtractButton);
    }

    header.appendChild(controls);
    card.appendChild(header);

    const input = null;

    grid.appendChild(card);
    cardRegistry.set(device.id, { card, quantityPill: pill, input, meta, addButton, subtractButton });

    card.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest('button')) {
        return;
      }

      const current = state.get(device.id);
      const base = current && Number.isFinite(current.quantity) ? current.quantity : 0;
      if (device.allowQuantity) {
        if (base <= 0) {
          setQuantity(device.id, 1);
        }
        return;
      }

      const next = base > 0 ? 0 : 1;
      setQuantity(device.id, next);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

  content.appendChild(grid);
  section.appendChild(content);

  toggle.addEventListener('click', () => toggleCategory(category));

  categoryRegistry.set(category, { section, toggle, content, counter: count });

  return section;
}

function renderCategories() {
  const categories = [...new Set(devices.map((device) => device.category))];
  const fragment = document.createDocumentFragment();

  categories.forEach((category, index) => {
    fragment.appendChild(createCategorySection(category, index));
  });

  deviceCategoriesElement.appendChild(fragment);
  applyCategoryExpansionPreferences(categories);
}

function applyCategoryExpansionPreferences(categories) {
  const order = categories || Array.from(categoryRegistry.keys());
  const pending = pendingCategoryPreferences instanceof Map ? pendingCategoryPreferences : null;

  order.forEach((category, index) => {
    const stored = categoryPreferences.has(category)
      ? categoryPreferences.get(category)
      : pending?.get(category);

    const expanded = stored !== undefined ? Boolean(stored) : index === 0;
    setCategoryExpanded(category, expanded, { updatePreference: stored === undefined });
  });

  if (pending) {
    pendingCategoryPreferences = null;
  }
}

function toggleCategory(category) {
  const meta = categoryRegistry.get(category);
  if (!meta) {
    return;
  }

  const isExpanded = meta.section.classList.contains('expanded');
  setCategoryExpanded(category, !isExpanded);
}

function setCategoryExpanded(category, expanded, { updatePreference = true } = {}) {
  const meta = categoryRegistry.get(category);
  if (!meta) {
    if (!pendingCategoryPreferences) {
      pendingCategoryPreferences = new Map();
    }
    pendingCategoryPreferences.set(category, expanded);
    if (updatePreference) {
      categoryPreferences.set(category, expanded);
    }
    return;
  }

  const { section, toggle, content } = meta;
  const currentlyExpanded = section.classList.contains('expanded');
  if (currentlyExpanded === expanded) {
    if (updatePreference) {
      categoryPreferences.set(category, expanded);
    }
    return;
  }

  const startHeight = content.getBoundingClientRect().height;
  const targetHeight = expanded ? content.scrollHeight : 0;

  content.classList.add('animating');
  content.style.height = `${startHeight}px`;

  requestAnimationFrame(() => {
    section.classList.toggle('expanded', expanded);
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    content.style.height = `${targetHeight}px`;
  });

  const onTransitionEnd = (event) => {
    if (event.target !== content) {
      return;
    }
    content.classList.remove('animating');
    content.style.height = expanded ? 'auto' : '0px';
    content.removeEventListener('transitionend', onTransitionEnd);
  };

  content.addEventListener('transitionend', onTransitionEnd);

  if (updatePreference) {
    categoryPreferences.set(category, expanded);
    persistState(true);
  }
}

function createQuantityControls(device) {
  const wrapper = document.createElement('div');
  wrapper.className = 'quantity-controls';

  if (!device.allowQuantity) {
    wrapper.classList.add('quantity-static');
    const badge = document.createElement('span');
    badge.className = 'quantity-static-badge';
    badge.textContent = device.quantity > 0 ? '1' : '—';
    wrapper.appendChild(badge);
    return { wrapper, input: null, display: badge };
  }

  const minus = document.createElement('button');
  minus.type = 'button';
  minus.textContent = '−';
  minus.addEventListener('click', () => adjustQuantity(device.id, -1));

  const input = document.createElement('input');
  input.type = 'number';
  input.min = '0';
  input.max = '99';
  input.value = String(device.quantity);
  input.addEventListener('input', (event) => {
    const target = event.target;
    setQuantity(device.id, target.value);
  });

  const plus = document.createElement('button');
  plus.type = 'button';
  plus.textContent = '+';
  plus.addEventListener('click', () => adjustQuantity(device.id, 1));

  wrapper.append(minus, input, plus);
  return { wrapper, input, display: null };
}

function createTimeControls(device) {
  const wrapper = document.createElement('div');
  wrapper.className = 'time-controls';

  const controls = document.createElement('div');
  controls.className = 'time-value-controls';

  const minus = document.createElement('button');
  minus.type = 'button';
  minus.textContent = '−';
  minus.addEventListener('click', () => adjustTimeValue(device.id, -1));

  const input = document.createElement('input');
  input.type = 'number';
  input.min = '0';
  input.max = device.timeUnit === 'minutes' ? '1440' : '24';
  input.step = device.timeUnit === 'minutes' ? '5' : '0.1';
  const displayValue = device.timeValueInput === '' ? '' : device.timeValueInput;
  input.value = displayValue;
  input.addEventListener('input', (event) => {
    const target = event.target;
    setTimeValue(device.id, target.value);
  });

  const plus = document.createElement('button');
  plus.type = 'button';
  plus.textContent = '+';
  plus.addEventListener('click', () => adjustTimeValue(device.id, 1));

  controls.append(minus, input, plus);

  const unitSelect = document.createElement('select');
  unitSelect.className = 'time-unit-select';

  const hoursOption = document.createElement('option');
  hoursOption.value = 'hours';
  hoursOption.textContent = 'год';

  const minutesOption = document.createElement('option');
  minutesOption.value = 'minutes';
  minutesOption.textContent = 'хв';

  unitSelect.append(hoursOption, minutesOption);
  unitSelect.value = device.timeUnit;
  unitSelect.addEventListener('change', (event) => {
    const target = event.target;
    setTimeUnit(device.id, target.value);
  });

  wrapper.append(controls, unitSelect);
  return { wrapper, input, unitSelect };
}

function createVariantSelector(device) {
  if (!Array.isArray(device.variants) || device.variants.length === 0) {
    return null;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'variant-selector';

  const select = document.createElement('select');
  select.className = 'variant-select';

  device.variants.forEach((variant) => {
    const option = document.createElement('option');
    option.value = variant.id;
    option.textContent = variant.label;
    select.appendChild(option);
  });

  if (device.allowCustomWatts) {
    const customOption = document.createElement('option');
    customOption.value = 'custom';
    customOption.textContent = 'Свій варіант';
    select.appendChild(customOption);
  }

  select.value = device.variantId === 'custom' ? 'custom' : device.variantId || device.variants[0].id;
  select.addEventListener('change', (event) => {
    const target = event.target;
    setVariant(device.id, target.value);
  });

  const currentPower = document.createElement('span');
  currentPower.className = 'variant-power';
  currentPower.textContent = `Поточна потужність: ${formatNumber(device.watts)} Вт`;

  wrapper.append(select, currentPower);

  let customInput = null;

  if (device.allowCustomWatts) {
    const customWrapper = document.createElement('div');
    customWrapper.className = 'custom-watts';

    const customLabel = document.createElement('label');
    customLabel.textContent = 'Свій варіант, Вт';

    customInput = document.createElement('input');
    customInput.type = 'number';
    customInput.min = '1';
    customInput.step = '10';
    customInput.placeholder = 'Наприклад, 320';
    customInput.value = Number.isFinite(device.customWatts) ? String(device.customWatts) : '';
    customInput.disabled = select.value !== 'custom';
    const inputId = `custom-watts-${device.id}`;
    customInput.id = inputId;
    customLabel.setAttribute('for', inputId);
    customInput.addEventListener('input', (event) => {
      const target = event.target;
      setCustomWatts(device.id, target.value);
    });

    customWrapper.append(customLabel, customInput);
    wrapper.appendChild(customWrapper);
  }

  return { wrapper, select, currentPower, customInput };
}

function createSelectedRow(device) {
  const row = document.createElement('tr');
  row.dataset.deviceId = String(device.id);

  const nameCell = document.createElement('td');
  nameCell.className = 'cell-device';
  nameCell.setAttribute('data-label', 'Пристрій');
  nameCell.textContent = device.name;
  row.appendChild(nameCell);

  const quantityCell = document.createElement('td');
  quantityCell.className = 'cell-quantity';
  quantityCell.setAttribute('data-label', 'Кількість');
  const quantityControls = createQuantityControls(device);
  quantityCell.appendChild(quantityControls.wrapper);
  row.appendChild(quantityCell);

  const powerCell = document.createElement('td');
  powerCell.className = 'cell-power';
  powerCell.setAttribute('data-label', 'Потужність, Вт');
  const variantControls = createVariantSelector(device);
  if (variantControls) {
    powerCell.appendChild(variantControls.wrapper);
  } else {
    powerCell.textContent = `${formatNumber(device.watts)} Вт`;
  }
  row.appendChild(powerCell);

  const hoursCell = document.createElement('td');
  hoursCell.className = 'cell-time';
  hoursCell.setAttribute('data-label', 'Час роботи');
  const timeControls = createTimeControls(device);
  hoursCell.appendChild(timeControls.wrapper);
  row.appendChild(hoursCell);

  const energyCell = document.createElement('td');
  energyCell.className = 'cell-energy';
  energyCell.setAttribute('data-label', 'Споживання, Wh');
  row.appendChild(energyCell);

  const removeCell = document.createElement('td');
  removeCell.className = 'cell-remove';
  removeCell.setAttribute('data-label', 'Керування');
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'remove-button';
  removeButton.setAttribute('aria-label', `Видалити ${device.name}`);
  removeButton.innerHTML = '&times;';
  removeButton.addEventListener('click', () => setQuantity(device.id, 0));
  removeCell.appendChild(removeButton);
  row.appendChild(removeCell);

  return {
    id: device.id,
    row,
    nameCell,
    quantityInput: quantityControls.input,
    quantityDisplay: quantityControls.display,
    powerCell,
    variantSelect: variantControls ? variantControls.select : null,
    variantPower: variantControls ? variantControls.currentPower : null,
    customInput: variantControls ? variantControls.customInput : null,
    timeInput: timeControls.input,
    timeUnitSelect: timeControls.unitSelect,
    energyCell,
    removalCancel: null
  };
}

function updateSelectedRow(meta, device, index) {
  meta.row.style.setProperty('--row-delay', `${index * 60}ms`);
  meta.nameCell.textContent = device.name;

  const quantityText = String(device.quantity);
  if (meta.quantityInput) {
    if (meta.quantityInput.value !== quantityText) {
      meta.quantityInput.value = quantityText;
    }
  }
  if (meta.quantityDisplay) {
    meta.quantityDisplay.textContent = device.quantity > 0 ? '1' : '—';
  }

  if (meta.variantSelect) {
    const expectedValue = device.variantId === 'custom' ? 'custom' : device.variantId || device.variants?.[0]?.id || '';
    if (meta.variantSelect.value !== expectedValue) {
      meta.variantSelect.value = expectedValue;
    }
    if (meta.variantPower) {
      meta.variantPower.textContent = `Поточна потужність: ${formatNumber(device.watts)} Вт`;
    }
    if (meta.customInput) {
      const customValue = Number.isFinite(device.customWatts) ? String(device.customWatts) : '';
      if (meta.customInput.value !== customValue) {
        meta.customInput.value = customValue;
      }
      meta.customInput.disabled = meta.variantSelect.value !== 'custom';
    }
  } else if (meta.powerCell) {
    meta.powerCell.textContent = `${formatNumber(device.watts)} Вт`;
  }

  if (meta.timeUnitSelect.value !== device.timeUnit) {
    meta.timeUnitSelect.value = device.timeUnit;
  }
  meta.timeInput.max = device.timeUnit === 'minutes' ? '1440' : '24';
  meta.timeInput.step = device.timeUnit === 'minutes' ? '5' : '0.1';
  const displayValue = device.timeValueInput === '' ? '' : device.timeValueInput;
  if (meta.timeInput.value !== displayValue) {
    meta.timeInput.value = displayValue;
  }

  const effectiveHours = isTimeValueSettled(device) ? device.hours : 0;
  const energy = Math.round(device.watts * device.quantity * effectiveHours * 10) / 10;
  const energyDigits = Number.isInteger(energy) ? 0 : 1;
  meta.energyCell.textContent = `${formatNumber(energy, energyDigits)} Wh`;
}

function renderSelectedDevices(selectedDevices) {
  const existingIds = new Set(selectedRowRegistry.keys());
  const fragment = document.createDocumentFragment();

  selectedDevices.forEach((device, index) => {
    let meta = selectedRowRegistry.get(device.id);
    if (!meta) {
      meta = createSelectedRow(device);
      selectedRowRegistry.set(device.id, meta);
    }

    if (typeof meta.removalCancel === 'function') {
      meta.removalCancel();
    }

    meta.row.classList.remove('removing');
    updateSelectedRow(meta, device, index);
    fragment.appendChild(meta.row);
    existingIds.delete(device.id);
  });

  selectedTableBody.appendChild(fragment);

  existingIds.forEach((id) => {
    const meta = selectedRowRegistry.get(id);
    if (!meta) {
      return;
    }

    if (typeof meta.removalCancel === 'function') {
      return;
    }

    const { row } = meta;
    row.classList.add('removing');
    row.style.setProperty('--row-delay', '0ms');

    const finalizeRemoval = () => {
      row.removeEventListener('animationend', finalizeRemoval);
      clearTimeout(timeoutId);
      if (row.parentNode === selectedTableBody) {
        selectedTableBody.removeChild(row);
      } else if (row.parentNode) {
        row.parentNode.removeChild(row);
      }
      selectedRowRegistry.delete(id);
      meta.removalCancel = null;
    };

    const timeoutId = setTimeout(finalizeRemoval, 260);
    row.addEventListener('animationend', finalizeRemoval, { once: true });

    meta.removalCancel = () => {
      row.classList.remove('removing');
      row.removeEventListener('animationend', finalizeRemoval);
      clearTimeout(timeoutId);
      meta.removalCancel = null;
    };
  });
}

function getRecommendation(totalPower, totalEnergy) {
  if (totalPower === 0 || totalEnergy === 0) {
    return null;
  }

  const sortedStations = stations
    .map((station) => ({ ...station }))
    .sort((a, b) => a.capacityWh - b.capacityWh);

  const matchingStations = sortedStations.filter((station) => station.capacityWh >= totalEnergy && station.powerW >= totalPower);

  if (matchingStations.length > 0) {
    return { station: matchingStations[0], alternatives: matchingStations.slice(1) };
  }

  const powerOnly = sortedStations.filter((station) => station.powerW >= totalPower);
  if (powerOnly.length > 0) {
    return { station: powerOnly[0], alternatives: powerOnly.slice(1) };
  }

  return { station: sortedStations[sortedStations.length - 1], alternatives: sortedStations.slice(0, -1) };
}

function renderRecommendation(recommendation, totalPower, totalEnergy) {
  if (!recommendation) {
    matchLabel.textContent = 'Очікування даних…';
    matchLabel.classList.remove('warning');
    stationNameEl.textContent = 'Оберіть пристрої для рекомендації';
    stationSpecsEl.innerHTML = '';
    if (stationImageEl) {
      stationImageEl.removeAttribute('src');
      stationImageEl.alt = '';
    }
    if (stationMediaEl) {
      stationMediaEl.classList.add('is-empty');
      stationMediaEl.setAttribute('aria-hidden', 'true');
    }
    stationLinkEl.classList.add('disabled');
    stationLinkEl.href = '#';
    stationConsultEl.classList.add('disabled');
    stationConsultEl.href = CONSULTATION_URL;
    alternativesSection.style.display = 'none';
    return;
  }

  const { station, alternatives } = recommendation;

  const energyMatch = station.capacityWh >= totalEnergy;
  const powerMatch = station.powerW >= totalPower;

  if (energyMatch && powerMatch) {
    matchLabel.textContent = 'Повна сумісність';
    matchLabel.classList.remove('warning');
  } else {
    matchLabel.textContent = 'Потрібна перевірка';
    matchLabel.classList.add('warning');
  }

  stationNameEl.textContent = station.name;
  stationSpecsEl.innerHTML = '';

  if (stationImageEl && station.image) {
    stationImageEl.src = station.image;
    stationImageEl.alt = `Зарядна станція ${station.name}`;
  } else if (stationImageEl) {
    stationImageEl.removeAttribute('src');
    stationImageEl.alt = '';
  }

  if (stationMediaEl) {
    if (station.image) {
      stationMediaEl.classList.remove('is-empty');
      stationMediaEl.setAttribute('aria-hidden', 'false');
    } else {
      stationMediaEl.classList.add('is-empty');
      stationMediaEl.setAttribute('aria-hidden', 'true');
    }
  }

  const specs = [
    { label: 'Модель', value: station.model },
    { label: 'Ємність', value: `${formatNumber(station.capacityWh)} Wh` },
    { label: 'Потужність', value: `${formatNumber(station.powerW)} W` }
  ];

  specs.forEach((item) => {
    const dt = document.createElement('dt');
    dt.textContent = item.label;
    const dd = document.createElement('dd');
    dd.textContent = item.value;
    stationSpecsEl.append(dt, dd);
  });

  stationLinkEl.classList.remove('disabled');
  stationLinkEl.href = station.link;
  stationConsultEl.classList.remove('disabled');
  stationConsultEl.href = CONSULTATION_URL;

  renderAlternatives(alternatives, station);
}

function renderAlternatives(alternatives, selectedStation) {
  alternativeListEl.innerHTML = '';

  const otherStations = stations.filter((station) => station !== selectedStation);
  const fallbackList = alternatives && alternatives.length > 0 ? alternatives : otherStations;

  fallbackList.forEach((station) => {
    const card = document.createElement('article');
    card.className = 'alternative-card';

    const info = document.createElement('div');
    info.className = 'alternative-info';

    const title = document.createElement('h3');
    title.textContent = station.name;
    info.appendChild(title);

    const specs = document.createElement('p');
    specs.className = 'alternative-specs';
    specs.textContent = `Ємність: ${formatNumber(station.capacityWh)} Wh • Потужність: ${formatNumber(station.powerW)} W`;
    info.appendChild(specs);

    const actions = document.createElement('div');
    actions.className = 'alternative-actions';

    const link = document.createElement('a');
    link.href = station.link;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Купити станцію';

    actions.append(link);
    info.appendChild(actions);

    const media = document.createElement('figure');
    media.className = 'alternative-media';

    if (station.image) {
      const img = document.createElement('img');
      img.src = station.image;
      img.alt = `Зарядна станція ${station.name}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      media.appendChild(img);
      media.setAttribute('aria-hidden', 'false');
    } else {
      media.classList.add('is-empty');
      media.setAttribute('aria-hidden', 'true');
    }

    card.append(info, media);
    alternativeListEl.appendChild(card);
  });

  alternativesSection.style.display = fallbackList.length > 0 ? 'block' : 'none';
}

function renderCategoryBreakdown(categoryEnergies, totalEnergy) {
  if (!categoryBreakdownEl) {
    return;
  }

  categoryBreakdownEl.innerHTML = '';

  const entries = Array.from(categoryEnergies.entries()).filter(([, value]) => value > 0);

  if (entries.length === 0 || totalEnergy === 0) {
    const placeholder = document.createElement('p');
    placeholder.className = 'breakdown-placeholder';
    placeholder.textContent = 'Додайте пристрої, щоб побачити розподіл споживання.';
    categoryBreakdownEl.appendChild(placeholder);
    return;
  }

  const sorted = entries.sort((a, b) => b[1] - a[1]);

  sorted.forEach(([category, energy]) => {
    const percent = totalEnergy > 0 ? Math.min(100, Math.round((energy / totalEnergy) * 1000) / 10) : 0;
    const digits = energy % 1 === 0 ? 0 : 1;

    const item = document.createElement('article');
    item.className = 'breakdown-item';

    const header = document.createElement('div');
    header.className = 'breakdown-header';

    const label = document.createElement('span');
    label.className = 'breakdown-label';
    label.textContent = category;

    const value = document.createElement('span');
    value.className = 'breakdown-value';
    value.textContent = `${formatNumber(Math.round(energy * 10) / 10, digits)} Wh`;

    header.append(label, value);

    const bar = document.createElement('div');
    bar.className = 'breakdown-bar';

    const fill = document.createElement('span');
    fill.className = 'breakdown-bar-fill';
    fill.style.width = `${percent}%`;
    fill.textContent = `${percent.toFixed(1)}%`;

    bar.appendChild(fill);
    item.append(header, bar);
    categoryBreakdownEl.appendChild(item);
  });
}

function showScenarioMessage(message, type = 'info') {
  if (!scenarioFeedbackEl) {
    return;
  }
  scenarioFeedbackEl.textContent = message;
  scenarioFeedbackEl.dataset.state = type;
  if (scenarioFeedbackTimer) {
    clearTimeout(scenarioFeedbackTimer);
  }
  scenarioFeedbackTimer = setTimeout(() => {
    scenarioFeedbackEl.dataset.state = 'hidden';
  }, 4000);
}

function serializeState() {
  const devicesData = [];
  state.forEach((device) => {
    devicesData.push({
      id: device.id,
      quantity: device.quantity,
      variantId: device.variantId,
      watts: device.watts,
      customWatts: device.customWatts,
      timeUnit: device.timeUnit,
      timeValue: device.timeValue,
      timeValueInput: device.timeValueInput,
      hours: device.hours
    });
  });

  const categories = {};
  if (pendingCategoryPreferences instanceof Map) {
    pendingCategoryPreferences.forEach((value, key) => {
      categories[key] = value;
    });
  }
  categoryRegistry.forEach((meta, category) => {
    const stored = categoryPreferences.has(category)
      ? categoryPreferences.get(category)
      : meta.section.classList.contains('expanded');
    categories[category] = stored;
  });

  return {
    version: 4,
    devices: devicesData,
    categories
  };
}

function persistState(force = false) {
  if (isRestoringState && !force) {
    return;
  }
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    const payload = serializeState();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('Не вдалося зберегти сценарій', error);
  }
}

function applySerializedState(serialized, { announce = false } = {}) {
  if (!serialized || typeof serialized !== 'object') {
    return false;
  }

  const deviceEntries = Array.isArray(serialized.devices) ? serialized.devices : [];
  const lookup = new Map();
  deviceEntries.forEach((entry) => {
    if (!entry || !Object.prototype.hasOwnProperty.call(entry, 'id')) {
      return;
    }
    const numericId = Number(entry.id);
    if (!Number.isFinite(numericId)) {
      return;
    }
    lookup.set(numericId, entry);
  });

  isRestoringState = true;
  try {
    state.forEach((device, id) => {
      const saved = lookup.get(id);
      if (saved) {
        const numericQuantity = Number(saved.quantity);
        const targetQuantity = device.allowQuantity
          ? Math.max(0, Math.min(device.maxQuantity, Math.round(Number.isFinite(numericQuantity) ? numericQuantity : 0)))
          : Number.isFinite(numericQuantity) && numericQuantity > 0
            ? 1
            : 0;
        device.quantity = targetQuantity;

        if (Array.isArray(device.variants) && device.variants.length > 0) {
          let variantId = saved.variantId;
          if (variantId === 'custom' && device.allowCustomWatts) {
            device.variantId = 'custom';
            const customValue = Number(saved.customWatts);
            if (Number.isFinite(customValue) && customValue > 0) {
              const rounded = Math.round(customValue);
              device.customWatts = rounded;
              device.watts = rounded;
            } else {
              device.customWatts = null;
              device.watts = 0;
            }
          } else {
            const exists = device.variants.some((variant) => variant.id === variantId);
            if (!exists) {
              variantId = device.baseline?.variantId || device.variants[0].id;
            }
            device.variantId = variantId;
            const variant = getVariant(device, variantId);
            if (variant) {
              device.watts = variant.watts;
              if (device.allowCustomWatts && variantId !== 'custom') {
                device.customWatts = variant.watts;
              }
            }
          }
        } else if (Number.isFinite(Number(saved.watts)) && Number(saved.watts) > 0) {
          device.watts = Math.round(Number(saved.watts));
        }

        if (device.allowCustomWatts && saved.variantId !== 'custom') {
          const custom = Number(saved.customWatts);
          if (Number.isFinite(custom) && custom > 0) {
            device.customWatts = Math.round(custom);
          }
        }

        const unit = saved.timeUnit === 'minutes' ? 'minutes' : 'hours';
        device.timeUnit = unit;
        if (Number.isFinite(Number(saved.timeValue))) {
          const numeric = Math.max(0, Number(saved.timeValue));
          device.timeValue = numeric;
          device.hours = unit === 'minutes' ? numeric / 60 : numeric;
          device.timeValueInput = typeof saved.timeValueInput === 'string'
            ? saved.timeValueInput
            : formatTimeValueForInput(numeric, unit);
        } else if (Number.isFinite(Number(saved.hours))) {
          const hours = Math.max(0, Number(saved.hours));
          device.hours = hours;
          device.timeValue = unit === 'minutes' ? Math.round(hours * 60) : hours;
          device.timeValueInput = formatTimeValueForInput(device.timeValue, unit);
        } else {
          device.timeValueInput = formatTimeValueForInput(device.timeValue, unit);
        }
      } else {
        resetDeviceToBaseline(device);
      }
    });

    if (serialized.categories && typeof serialized.categories === 'object') {
      categoryPreferences.clear();
      const map = new Map();
      Object.entries(serialized.categories).forEach(([category, value]) => {
        const normalized = Boolean(value);
        categoryPreferences.set(category, normalized);
        map.set(category, normalized);
      });
      pendingCategoryPreferences = map;
    }
  } finally {
    isRestoringState = false;
  }

  updateInterface();
  if (announce) {
    showScenarioMessage('Конфігурацію застосовано.', 'success');
  }
  return true;
}

function resetScenario() {
  isRestoringState = true;
  try {
    state.forEach((device) => {
      resetDeviceToBaseline(device);
    });
    categoryPreferences.clear();
    pendingCategoryPreferences = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } finally {
    isRestoringState = false;
  }

  applyCategoryExpansionPreferences();
  updateInterface();
  showScenarioMessage('Сценарій очищено.', 'success');
}

function encodeScenarioForUrl(data) {
  try {
    const json = JSON.stringify(data);
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  } catch (error) {
    console.warn('Не вдалося підготувати дані для посилання', error);
    return null;
  }
}

function decodeScenarioFromParam(param) {
  if (!param) {
    return null;
  }
  try {
    const binary = atob(param);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json);
  } catch (error) {
    console.warn('Не вдалося декодувати конфігурацію з посилання', error);
    return null;
  }
}

function buildScenarioUrl() {
  if (typeof window === 'undefined') {
    return null;
  }

  const payload = serializeState();
  const encoded = encodeScenarioForUrl(payload);
  if (!encoded) {
    return null;
  }

  const url = new URL(window.location.href);
  url.searchParams.set('setup', encoded);
  return url.toString();
}

async function copyScenarioLink(explicitUrl, { silent = false } = {}) {
  if (typeof window === 'undefined') {
    return false;
  }

  const shareUrl = explicitUrl || buildScenarioUrl();
  if (!shareUrl) {
    if (!silent) {
      showScenarioMessage('Не вдалося сформувати посилання.', 'error');
    }
    return false;
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(shareUrl);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    if (!silent) {
      showScenarioMessage('Посилання скопійовано у буфер обміну.', 'success');
    }
    return true;
  } catch (error) {
    console.warn('Не вдалося скопіювати посилання', error);
    if (!silent) {
      showScenarioMessage('Скопіюйте посилання вручну: ' + shareUrl, 'error');
    }
    return false;
  }
}

function updateShareOptionLinks(shareUrl) {
  if (!shareOptionElements.length) {
    return;
  }

  const encodedUrl = encodeURIComponent(shareUrl);
  const baseMessage = 'Переглянь мою конфігурацію зарядних станцій:';
  const encodedText = encodeURIComponent(`${baseMessage} ${shareUrl}`);
  const encodedMessageOnly = encodeURIComponent(baseMessage);

  shareOptionElements.forEach((option) => {
    if (!(option instanceof HTMLAnchorElement)) {
      return;
    }
    const network = option.dataset.network;
    let href = shareUrl;
    switch (network) {
      case 'telegram':
        href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedMessageOnly}`;
        break;
      case 'viber':
        href = `viber://forward?text=${encodedText}`;
        break;
      case 'whatsapp':
        href = `https://wa.me/?text=${encodedText}`;
        break;
      case 'facebook':
        href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      default:
        href = shareUrl;
    }
    option.href = href;
  });
}

function openShareDialog(shareUrl) {
  if (!shareDialogEl) {
    copyScenarioLink(shareUrl);
    return;
  }

  currentShareUrl = shareUrl;
  if (shareUrlInput) {
    shareUrlInput.value = shareUrl;
  }
  updateShareOptionLinks(shareUrl);

  if (shareDialogHideTimer) {
    window.clearTimeout(shareDialogHideTimer);
    shareDialogHideTimer = null;
  }

  if (tooltipVisible) {
    setTooltipVisibility(false);
  }

  shareDialogEl.hidden = false;
  shareDialogEl.setAttribute('data-open', 'true');
  previousFocusElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const focusTarget = shareDialogEl.querySelector('.share-close');
  window.requestAnimationFrame(() => {
    if (focusTarget && typeof focusTarget.focus === 'function') {
      focusTarget.focus();
    }
  });
}

function closeShareDialog({ restoreFocus = true } = {}) {
  if (!shareDialogEl) {
    return;
  }

  shareDialogEl.setAttribute('data-open', 'false');
  if (shareDialogHideTimer) {
    window.clearTimeout(shareDialogHideTimer);
  }
  shareDialogHideTimer = window.setTimeout(() => {
    if (shareDialogEl.dataset.open !== 'true') {
      shareDialogEl.hidden = true;
    }
    shareDialogHideTimer = null;
  }, 540);

  if (restoreFocus && previousFocusElement && typeof previousFocusElement.focus === 'function') {
    previousFocusElement.focus();
  }
  previousFocusElement = null;
  currentShareUrl = '';
}

async function handleShareScenario() {
  const shareUrl = buildScenarioUrl();
  if (!shareUrl) {
    showScenarioMessage('Не вдалося сформувати посилання.', 'error');
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Конфігурація зарядної станції',
        text: 'Переглянь мою конфігурацію зарядних станцій.',
        url: shareUrl
      });
      showScenarioMessage('Посилання успішно надіслано.', 'success');
      return;
    } catch (error) {
      if (error && error.name === 'AbortError') {
        return;
      }
      console.warn('Системне меню поширення недоступне', error);
    }
  }

  if (shareDialogEl) {
    openShareDialog(shareUrl);
  } else {
    await copyScenarioLink(shareUrl);
  }
}

function setTooltipVisibility(visible) {
  if (!infoTriggerBtn || !infoTooltipEl) {
    return;
  }

  tooltipVisible = visible;
  if (tooltipHideTimer) {
    window.clearTimeout(tooltipHideTimer);
    tooltipHideTimer = null;
  }
  infoTooltipEl.dataset.visible = visible ? 'true' : 'false';
  infoTriggerBtn.setAttribute('aria-expanded', visible ? 'true' : 'false');
  infoTooltipEl.setAttribute('aria-hidden', visible ? 'false' : 'true');
}

function scheduleTooltipHide(delay = 120) {
  if (tooltipHideTimer) {
    window.clearTimeout(tooltipHideTimer);
  }
  tooltipHideTimer = window.setTimeout(() => {
    setTooltipVisibility(false);
  }, delay);
}

function initializeInfoTooltip() {
  if (!infoTriggerBtn || !infoTooltipEl) {
    return;
  }

  infoTriggerBtn.setAttribute('aria-expanded', 'false');
  setTooltipVisibility(false);

  infoTriggerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    setTooltipVisibility(!tooltipVisible);
  });

  infoTriggerBtn.addEventListener('mouseenter', () => {
    setTooltipVisibility(true);
  });

  infoTriggerBtn.addEventListener('mouseleave', () => {
    scheduleTooltipHide();
  });

  infoTriggerBtn.addEventListener('focus', () => {
    setTooltipVisibility(true);
  });

  infoTriggerBtn.addEventListener('blur', () => {
    scheduleTooltipHide(160);
  });

  infoTooltipEl.addEventListener('mouseenter', () => {
    if (tooltipHideTimer) {
      window.clearTimeout(tooltipHideTimer);
      tooltipHideTimer = null;
    }
    setTooltipVisibility(true);
  });

  infoTooltipEl.addEventListener('mouseleave', () => {
    scheduleTooltipHide();
  });
}

function loadScenarioFromStorage() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return false;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return false;
  }

  try {
    const parsed = JSON.parse(raw);
    applySerializedState(parsed);
    return true;
  } catch (error) {
    console.warn('Не вдалося відновити сценарій з пам’яті', error);
    return false;
  }
}

function loadScenarioFromQuery() {
  if (typeof window === 'undefined') {
    return false;
  }

  const params = new URLSearchParams(window.location.search);
  const encoded = params.get('setup');
  if (!encoded) {
    return false;
  }

  const data = decodeScenarioFromParam(encoded);
  if (!data) {
    showScenarioMessage('Не вдалося прочитати конфігурацію з посилання.', 'error');
    return false;
  }

  applySerializedState(data, { announce: true });
  params.delete('setup');
  const nextQuery = params.toString();
  const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ''}`;
  window.history.replaceState({}, '', nextUrl);
  return true;
}

function initializeScenarioControls() {
  if (saveScenarioBtn) {
    saveScenarioBtn.addEventListener('click', () => {
      persistState(true);
      showScenarioMessage('Сценарій збережено у браузері.', 'success');
    });
  }

  if (resetScenarioBtn) {
    resetScenarioBtn.addEventListener('click', () => {
      resetScenario();
    });
  }

  if (shareScenarioBtn) {
    shareScenarioBtn.addEventListener('click', () => {
      handleShareScenario();
    });
  }
}

function initializeShareDialog() {
  if (!shareDialogEl) {
    return;
  }

  shareDialogEl.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.hasAttribute('data-share-close')) {
      event.preventDefault();
      closeShareDialog();
    }
  });

  shareDialogEl.addEventListener('transitionend', (event) => {
    if (event.target === shareDialogEl && shareDialogEl.dataset.open !== 'true') {
      shareDialogEl.hidden = true;
    }
  });

  if (copyShareLinkBtn) {
    copyShareLinkBtn.addEventListener('click', async () => {
      const urlToCopy = currentShareUrl || buildScenarioUrl();
      await copyScenarioLink(urlToCopy || undefined);
    });
  }

  if (shareOptionElements.length > 0) {
    shareOptionElements.forEach((option) => {
      option.addEventListener('click', () => {
        closeShareDialog({ restoreFocus: false });
      });
    });
  }
}

function handleDocumentPointerDown(event) {
  if (tooltipVisible && infoTooltipEl && infoTriggerBtn) {
    const target = event.target;
    if (
      target instanceof Node &&
      !infoTooltipEl.contains(target) &&
      !infoTriggerBtn.contains(target)
    ) {
      setTooltipVisibility(false);
    }
  }
}

function handleDocumentKeyDown(event) {
  if (event.key !== 'Escape') {
    return;
  }

  if (shareDialogEl && shareDialogEl.dataset.open === 'true') {
    event.preventDefault();
    closeShareDialog();
    return;
  }

  if (tooltipVisible) {
    setTooltipVisibility(false);
  }
}

function updateInterface() {
  const selectedDevices = [];
  let totalPower = 0;
  let totalEnergy = 0;
  const categoryCounts = new Map();
  const categoryEnergies = new Map();

  state.forEach((device) => {
    if (device.quantity > 0) {
      selectedDevices.push(device);
      totalPower += device.watts * device.quantity;
      const effectiveHours = isTimeValueSettled(device) ? device.hours : 0;
      totalEnergy += device.watts * device.quantity * effectiveHours;
      categoryCounts.set(device.category, (categoryCounts.get(device.category) || 0) + device.quantity);
      categoryEnergies.set(
        device.category,
        (categoryEnergies.get(device.category) || 0) + device.watts * device.quantity * effectiveHours
      );
    }

    const cardMeta = cardRegistry.get(device.id);
    if (cardMeta) {
      const isActive = device.quantity > 0;
      cardMeta.card.classList.toggle('active', isActive);
      cardMeta.card.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      if (device.allowQuantity) {
        cardMeta.quantityPill.textContent = `x${device.quantity}`;
      } else {
        cardMeta.quantityPill.textContent = isActive ? '1' : '—';
      }
      const quantityText = String(device.quantity);
      if (cardMeta.input && cardMeta.input.value !== quantityText) {
        cardMeta.input.value = quantityText;
      }
      cardMeta.meta.textContent = getDeviceMetaText(device);
      if (device.allowQuantity) {
        cardMeta.addButton.textContent = '+';
        cardMeta.addButton.setAttribute(
          'aria-label',
          isActive ? `Додати ще ${device.name}` : `Додати ${device.name}`
        );
        cardMeta.addButton.toggleAttribute('disabled', device.quantity >= device.maxQuantity);
        if (cardMeta.subtractButton) {
          cardMeta.subtractButton.toggleAttribute('disabled', device.quantity <= 0);
        }
      } else {
        cardMeta.addButton.textContent = isActive ? '✓' : '+';
        cardMeta.addButton.setAttribute(
          'aria-label',
          isActive ? `Прибрати ${device.name}` : `Додати ${device.name}`
        );
        cardMeta.addButton.removeAttribute('disabled');
        if (cardMeta.subtractButton) {
          cardMeta.subtractButton.toggleAttribute('disabled', true);
        }
      }
    }
  });

  if (selectedDevices.length > 0) {
    showSelectedSection();
  } else {
    hideSelectedSection();
  }
  renderSelectedDevices(selectedDevices);

  categoryRegistry.forEach((meta, category) => {
    const count = categoryCounts.get(category) || 0;
    meta.counter.textContent = String(count);
  });

  totalEnergy = Math.round(totalEnergy * 10) / 10;
  const combinedFactor = Math.max(0.01, BUFFER_FACTOR);
  const bufferedEnergy = totalEnergy > 0 ? Math.round((totalEnergy / combinedFactor) * 10) / 10 : 0;

  const energyDigits = Number.isInteger(totalEnergy) ? 0 : 1;
  animateMetric(totalEnergyEl, previousTotalEnergy, totalEnergy, 'Wh', energyDigits);

  const bufferedDigits = Number.isInteger(bufferedEnergy) ? 0 : 1;
  animateMetric(totalBufferedEl, previousBufferedEnergy, bufferedEnergy, 'Wh', bufferedDigits);
  const totalPowerRounded = Math.round(totalPower);
  animateMetric(totalPowerEl, previousTotalPower, totalPowerRounded, 'W');

  previousTotalEnergy = totalEnergy;
  previousBufferedEnergy = bufferedEnergy;
  previousTotalPower = totalPowerRounded;

  if (bufferHelperEl) {
    bufferHelperEl.textContent = `Враховано сумарний ККД інвертора та резерв батареї (${BUFFER_PERCENT}%).`;
  }

  renderCategoryBreakdown(categoryEnergies, totalEnergy);

  totalPower = totalPowerRounded;
  const recommendation = getRecommendation(totalPower, bufferedEnergy);
  renderRecommendation(recommendation, totalPower, bufferedEnergy);

  persistState();
}

const loadedFromQuery = loadScenarioFromQuery();
if (!loadedFromQuery) {
  loadScenarioFromStorage();
}

renderCategories();
initializeScenarioControls();
initializeShareDialog();
initializeInfoTooltip();
document.addEventListener('pointerdown', handleDocumentPointerDown);
document.addEventListener('keydown', handleDocumentKeyDown);
updateInterface();
