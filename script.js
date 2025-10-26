const devices = [
  { id: 1, category: 'Електроніка', name: 'Лампа', watts: 10, hours: 3 },
  { id: 2, category: 'Електроніка', name: 'Роутер', watts: 12, hours: 10 },
  { id: 3, category: 'Електроніка', name: 'Смартфон', watts: 15, hours: 2 },
  { id: 4, category: 'Електроніка', name: 'Ноутбук', watts: 60, hours: 4 },
  {
    id: 5,
    category: 'Електроніка',
    name: 'Монітор',
    watts: 50,
    hours: 4,
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
    variants: [
      { id: 'pc-office', label: 'Офісний — 150 Вт', watts: 150 },
      { id: 'pc-gaming', label: 'Ігровий — 500 Вт', watts: 500 },
      { id: 'pc-workstation', label: 'Робоча станція — 750 Вт', watts: 750 }
    ]
  },
  { id: 7, category: 'Електроніка', name: 'Телевізор', watts: 90, hours: 3 },
  { id: 8, category: 'Електроніка', name: 'StarLink', watts: 50, hours: 5 },
  { id: 9, category: 'Електроніка', name: 'Ігрова приставка', watts: 140, hours: 2 },
  { id: 20, category: 'Велика побутова техніка', name: 'Холодильник', watts: 120, hours: 12 },
  { id: 21, category: 'Велика побутова техніка', name: 'Пральна машина', watts: 500, hours: 1 },
  { id: 22, category: 'Велика побутова техніка', name: 'Сушильна машина', watts: 800, hours: 1 },
  { id: 23, category: 'Велика побутова техніка', name: 'Кондиціонер', watts: 900, hours: 4 },
  { id: 24, category: 'Велика побутова техніка', name: 'Електроплита', watts: 1200, hours: 1 },
  { id: 30, category: 'Дрібна побутова техніка', name: 'Кавоварка', watts: 900, hours: 0.3 },
  { id: 31, category: 'Дрібна побутова техніка', name: 'Мікрохвильовка', watts: 1200, hours: 0.3 },
  { id: 32, category: 'Дрібна побутова техніка', name: 'Електрочайник', watts: 1500, hours: 0.2 },
  { id: 33, category: 'Дрібна побутова техніка', name: 'Фен', watts: 1100, hours: 0.3 },
  { id: 40, category: 'Інструменти', name: 'Шуруповерт', watts: 500, hours: 1 },
  { id: 41, category: 'Інструменти', name: 'Дриль', watts: 800, hours: 0.5 },
  { id: 42, category: 'Інструменти', name: 'Зварювальний апарат', watts: 1500, hours: 1 },
  { id: 43, category: 'Інструменти', name: 'Компресор', watts: 1200, hours: 1 }
];

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

const state = new Map(
  devices.map((device) => {
    const hasVariants = Array.isArray(device.variants) && device.variants.length > 0;
    const initialVariant = hasVariants ? device.variants[0] : null;

    return [
      device.id,
      {
        ...device,
        quantity: 0,
        variantId: initialVariant ? initialVariant.id : null,
        watts: initialVariant ? initialVariant.watts : device.watts
      }
    ];
  })
);

const CONSULTATION_URL = 'https://martin-shop.online/contact/';

const deviceCategoriesElement = document.getElementById('device-categories');
const selectedSection = document.getElementById('selected-section');
const selectedTableBody = document.getElementById('selected-devices');
const totalPowerEl = document.getElementById('total-power');
const totalEnergyEl = document.getElementById('total-energy');
const recommendationCard = document.getElementById('recommendation-card');
const matchLabel = document.getElementById('match-label');
const stationNameEl = document.getElementById('station-name');
const stationSpecsEl = document.getElementById('station-specs');
const stationLinkEl = document.getElementById('station-link');
const stationConsultEl = document.getElementById('station-consult');
const alternativesSection = document.getElementById('alternatives-section');
const alternativeListEl = document.getElementById('alternative-list');

const cardRegistry = new Map();

function formatNumber(value, digits = 0) {
  return value.toLocaleString('uk-UA', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function getVariant(device, variantId = device.variantId) {
  if (!Array.isArray(device.variants)) {
    return null;
  }
  return device.variants.find((variant) => variant.id === variantId) || device.variants[0] || null;
}

function getDeviceMetaText(device) {
  const variant = getVariant(device);
  const powerText = variant ? variant.label : `${formatNumber(device.watts)} Вт`;
  const hoursText = typeof device.hours === 'number' ? `${formatNumber(device.hours, device.hours % 1 === 0 ? 0 : 1)} год` : '';
  return hoursText ? `${powerText} • ${hoursText}` : powerText;
}

function setQuantity(id, quantity) {
  const device = state.get(id);
  if (!device) return;
  device.quantity = Math.max(0, Math.min(99, Number(quantity) || 0));
  updateInterface();
}

function adjustQuantity(id, delta) {
  const device = state.get(id);
  if (!device) return;
  setQuantity(id, device.quantity + delta);
}

function setHours(id, hours) {
  const device = state.get(id);
  if (!device) return;
  const nextValue = Number(hours);
  if (!Number.isFinite(nextValue)) {
    return;
  }
  const clamped = Math.max(0, Math.min(24, nextValue));
  device.hours = Math.round(clamped * 10) / 10;
  updateInterface();
}

function setVariant(id, variantId) {
  const device = state.get(id);
  if (!device || !Array.isArray(device.variants)) {
    return;
  }

  const nextVariant = getVariant(device, variantId);
  if (!nextVariant) {
    return;
  }

  device.variantId = nextVariant.id;
  device.watts = nextVariant.watts;
  updateInterface();
}

function createCategorySection(category) {
  const section = document.createElement('section');
  section.className = 'category-block';

  const title = document.createElement('h2');
  title.textContent = category;
  section.appendChild(title);

  const description = document.createElement('p');
  description.textContent = 'Оберіть потрібні пристрої та вкажіть їх кількість для розрахунку.';
  section.appendChild(description);

  const grid = document.createElement('div');
  grid.className = 'device-grid';

  const devicesInCategory = Array.from(state.values()).filter((device) => device.category === category);

  devicesInCategory.forEach((device) => {
    const card = document.createElement('article');
    card.className = 'device-card';
    card.dataset.deviceId = String(device.id);

    const pill = document.createElement('span');
    pill.className = 'device-quantity-pill';
    pill.textContent = 'x0';
    card.appendChild(pill);

    const title = document.createElement('h3');
    title.textContent = device.name;
    card.appendChild(title);

    const meta = document.createElement('p');
    meta.className = 'device-meta';
    meta.textContent = getDeviceMetaText(device);
    card.appendChild(meta);

    const quickActions = document.createElement('div');
    quickActions.className = 'device-quick-actions';

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.className = 'device-add';
    addButton.textContent = 'Додати';
    addButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const current = state.get(device.id);
      const nextQuantity = current && current.quantity > 0 ? current.quantity : 1;
      setQuantity(device.id, nextQuantity);
    });

    const controls = document.createElement('div');
    controls.className = 'device-controls';

    const minus = document.createElement('button');
    minus.type = 'button';
    minus.setAttribute('aria-label', `Зменшити кількість для ${device.name}`);
    minus.textContent = '−';
    minus.addEventListener('click', (event) => {
      event.stopPropagation();
      adjustQuantity(device.id, -1);
    });

    const input = document.createElement('input');
    input.type = 'number';
    input.inputMode = 'numeric';
    input.min = '0';
    input.max = '99';
    input.value = String(device.quantity);
    input.addEventListener('input', (event) => {
      event.stopPropagation();
      const target = event.target;
      setQuantity(device.id, target.value);
    });
    input.addEventListener('click', (event) => event.stopPropagation());

    const plus = document.createElement('button');
    plus.type = 'button';
    plus.setAttribute('aria-label', `Збільшити кількість для ${device.name}`);
    plus.textContent = '+';
    plus.addEventListener('click', (event) => {
      event.stopPropagation();
      adjustQuantity(device.id, 1);
    });

    controls.append(minus, input, plus);
    quickActions.append(addButton, controls);
    card.appendChild(quickActions);

    card.addEventListener('click', () => {
      const current = state.get(device.id);
      if (!current) return;
      setQuantity(device.id, current.quantity === 0 ? 1 : 0);
    });

    grid.appendChild(card);
    cardRegistry.set(device.id, { card, quantityPill: pill, input, meta, addButton });
  });

  section.appendChild(grid);
  return section;
}

function renderCategories() {
  const categories = [...new Set(devices.map((device) => device.category))];
  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    fragment.appendChild(createCategorySection(category));
  });

  deviceCategoriesElement.appendChild(fragment);
}

function createQuantityControls(device) {
  const wrapper = document.createElement('div');
  wrapper.className = 'quantity-controls';

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
  return { wrapper, input };
}

function createHourControls(device) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hour-controls';

  const minus = document.createElement('button');
  minus.type = 'button';
  minus.textContent = '−';
  minus.addEventListener('click', () => setHours(device.id, device.hours - 0.5));

  const input = document.createElement('input');
  input.type = 'number';
  input.step = '0.1';
  input.min = '0';
  input.max = '24';
  input.value = String(device.hours);
  input.addEventListener('input', (event) => {
    const target = event.target;
    setHours(device.id, target.value);
  });

  const plus = document.createElement('button');
  plus.type = 'button';
  plus.textContent = '+';
  plus.addEventListener('click', () => setHours(device.id, device.hours + 0.5));

  wrapper.append(minus, input, plus);
  return { wrapper, input };
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

  select.value = device.variantId || device.variants[0].id;
  select.addEventListener('change', (event) => {
    const target = event.target;
    setVariant(device.id, target.value);
  });

  const currentPower = document.createElement('span');
  currentPower.className = 'variant-power';
  currentPower.textContent = `Поточна потужність: ${formatNumber(device.watts)} Вт`;

  wrapper.append(select, currentPower);
  return { wrapper, select, currentPower };
}

function renderSelectedDevices(selectedDevices) {
  selectedTableBody.innerHTML = '';

  selectedDevices.forEach((device) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = device.name;
    row.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    const quantityControls = createQuantityControls(device);
    quantityCell.appendChild(quantityControls.wrapper);
    row.appendChild(quantityCell);

    const powerCell = document.createElement('td');
    const variantControls = createVariantSelector(device);
    if (variantControls) {
      powerCell.appendChild(variantControls.wrapper);
    } else {
      powerCell.textContent = `${formatNumber(device.watts)} Вт`;
    }
    row.appendChild(powerCell);

    const hoursCell = document.createElement('td');
    const hourControls = createHourControls(device);
    hoursCell.appendChild(hourControls.wrapper);
    row.appendChild(hoursCell);

    const energyCell = document.createElement('td');
    const energy = device.watts * device.quantity * device.hours;
    energyCell.textContent = `${formatNumber(energy, energy % 1 === 0 ? 0 : 1)} Wh`;
    row.appendChild(energyCell);

    const removeCell = document.createElement('td');
    removeCell.style.textAlign = 'right';
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-button';
    removeButton.setAttribute('aria-label', `Видалити ${device.name}`);
    removeButton.innerHTML = '&times;';
    removeButton.addEventListener('click', () => setQuantity(device.id, 0));
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    selectedTableBody.appendChild(row);
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

    const title = document.createElement('h3');
    title.textContent = station.name;
    card.appendChild(title);

    const specs = document.createElement('p');
    specs.className = 'alternative-specs';
    specs.textContent = `Ємність: ${formatNumber(station.capacityWh)} Wh • Потужність: ${formatNumber(station.powerW)} W`;
    card.appendChild(specs);

    const actions = document.createElement('div');
    actions.className = 'alternative-actions';

    const link = document.createElement('a');
    link.href = station.link;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Купити станцію';

    const consult = document.createElement('a');
    consult.href = CONSULTATION_URL;
    consult.target = '_blank';
    consult.rel = 'noopener';
    consult.textContent = 'Потрібна консультація';

    actions.append(link, consult);
    card.appendChild(actions);
    alternativeListEl.appendChild(card);
  });

  alternativesSection.style.display = fallbackList.length > 0 ? 'block' : 'none';
}

function updateInterface() {
  const selectedDevices = [];
  let totalPower = 0;
  let totalEnergy = 0;

  state.forEach((device) => {
    if (device.quantity > 0) {
      selectedDevices.push(device);
      totalPower += device.watts * device.quantity;
      totalEnergy += device.watts * device.quantity * device.hours;
    }

    const cardMeta = cardRegistry.get(device.id);
    if (cardMeta) {
      cardMeta.card.classList.toggle('active', device.quantity > 0);
      cardMeta.quantityPill.textContent = `x${device.quantity}`;
      cardMeta.input.value = String(device.quantity);
      cardMeta.meta.textContent = getDeviceMetaText(device);
      cardMeta.addButton.textContent = device.quantity > 0 ? 'Обрано' : 'Додати';
    }
  });

  selectedSection.classList.toggle('hidden', selectedDevices.length === 0);
  renderSelectedDevices(selectedDevices);

  totalPowerEl.textContent = `${formatNumber(totalPower)} Вт`;
  totalEnergyEl.textContent = `${formatNumber(totalEnergy)} Wh`;

  const recommendation = getRecommendation(totalPower, totalEnergy);
  renderRecommendation(recommendation, totalPower, totalEnergy);
}

renderCategories();
updateInterface();
