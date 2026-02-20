// Curated Data for sightings
const CURATED_SIGHTINGS = [
  {
    id: 'UAP-001',
    lat: 32.897,
    lng: -117.224, // Nimitz Incident area (approx)
    city: 'Pacific Ocean (Off San Diego)',
    date: '2004-11-14 14:32:00Z',
    type: 'tic-tac',
    source: 'A.A.R.O. (US Navy USS Nimitz)',
    desc: 'White, smooth, no edges 40-foot oblong shape. Descended from 80k feet to sea level in seconds. No visible exhaust or control surfaces.',
    classification: 'declassified',
    color: '#00ff41', // green
    telemetry: { speed_mach: '24.5', alt_ft: '80,000 > 50', rcs_sqm: '0.01', threat: 'UNKNOWN', emi: 'SEVERE' }
  },
  {
    id: 'UAP-002',
    lat: 28.392,
    lng: -80.607, // Cape Canaveral
    city: 'Cape Canaveral, FL',
    date: '2023-09-12 22:15:00Z',
    type: 'orb',
    source: 'Civilian Radar & Optic',
    desc: 'Metallic sphere hovering near restricted airspace. Unaffected by heavy winds. Accelerated vertically at Mach 3.',
    classification: 'civilian',
    color: '#00e5ff', // cyan
    telemetry: { speed_mach: '3.1', alt_ft: '400', rcs_sqm: '0.5', threat: 'ELEVATED', emi: 'MODERATE' }
  },
  {
    id: 'UAP-003',
    lat: 51.178,
    lng: -1.826, // Stonehenge
    city: 'Wiltshire, UK',
    date: '2024-01-05 03:45:00Z',
    type: 'triangle',
    source: 'M.U.F.O.N. Field Report',
    desc: 'Massive silent black triangle, estimated 300ft across. Three faint lights at corners, red pulsing light in center.',
    classification: 'civilian',
    color: '#ff003c', // red
    telemetry: { speed_mach: '0.0', alt_ft: '150', rcs_sqm: '150+', threat: 'LOW', emi: 'MAGNETIC DEVIATION' }
  },
  {
    id: 'UAP-004',
    lat: -34.603,
    lng: -58.381, // Buenos Aires
    city: 'Buenos Aires, ARG',
    date: '2023-11-20 20:10:00Z',
    type: 'saucer',
    source: 'Local Air Traffic Control',
    desc: 'Classic disc shape pacing commercial airliner. Interfered with transponder signals. Disappeared visually but remained on radar.',
    classification: 'declassified',
    color: '#ffb000', // orange
    telemetry: { speed_mach: '0.85', alt_ft: '35,000', rcs_sqm: '12.0', threat: 'CRITICAL', emi: 'RADIO JAMMING' }
  },
  {
    id: 'UAP-005',
    lat: 37.235,
    lng: -115.811, // Area 51 (Groom Lake)
    city: 'Nevada Test and Training Range',
    date: '2024-02-18 01:12:00Z',
    type: 'orb',
    source: 'Whistleblower Leak (Unconfirmed)',
    desc: 'Cluster of 5 glowing red orbs performing impossible aerodynamic maneuvers above restricted airspace.',
    classification: 'declassified',
    color: '#00e5ff',
    telemetry: { speed_mach: 'UNCALCULATED', alt_ft: '60,000', rcs_sqm: 'FLUCTUATING', threat: 'RESTRICTED', emi: 'NONE' }
  },
  {
    id: 'UAP-006',
    lat: 35.360,
    lng: 138.727, // Mt Fuji
    city: 'Mount Fuji, JPN',
    date: '2023-08-04 19:30:00Z',
    type: 'tic-tac',
    source: 'Civilian Observatory',
    desc: 'Cylindrical craft hovering near the summit. Emitted a low-frequency hum that vibrated the ground. Ascended rapidly into orbit.',
    classification: 'civilian',
    color: '#00ff41',
    telemetry: { speed_mach: '15.0+ (Ascent)', alt_ft: '12,388', rcs_sqm: '0.1', threat: 'LOW', emi: 'SEISMIC ANOMALY' }
  },
  {
    id: 'UAP-007',
    lat: -0.023,
    lng: 37.906, // Kenya
    city: 'Mount Kenya, KEN',
    date: '2024-02-19 23:45:00Z',
    type: 'triangle',
    source: 'M.U.F.O.N.',
    desc: 'Large triangular craft spotted by multiple witnesses. Cast a beam of light into the dense forest before cloaking.',
    classification: 'civilian',
    color: '#ff003c',
    telemetry: { speed_mach: '0.5', alt_ft: '500', rcs_sqm: 'N/A (CLOAKED)', threat: 'UNKNOWN', emi: 'OPTICAL DISTORTION' }
  },
  {
    id: 'UAP-008',
    lat: -22.906,
    lng: -43.172, // Rio
    city: 'Rio de Janeiro, BRA',
    date: '1977-10-15 00:00:00Z',
    type: 'saucer',
    source: 'Operação Prato (Declassified)',
    desc: 'Luminous objects reportedly fired "light beams" at residents. Brazilian military investigation confirmed objects on radar and film.',
    classification: 'declassified',
    color: '#ffb000',
    telemetry: { speed_mach: 'VARIABLE', alt_ft: '0-5,000', rcs_sqm: 'CONFIDENTIAL', threat: 'HOSTILE', emi: 'RADIATION BURST' }
  }
];

// Generate additional random sightings to populate the globe
const generateRandomSightings = (count) => {
  const types = ['orb', 'saucer', 'tic-tac', 'triangle'];
  const sources = [
    'Civilian Radar',
    'M.U.F.O.N. Field Report',
    'Declassified Military Log',
    'Anonymous Whistleblower',
    'Commercial Airline Pilot',
    'A.A.R.O. Database',
    'Naval FLIR Capture'
  ];
  const classifications = ['civilian', 'declassified'];
  const colors = ['#00e5ff', '#ffb000', '#00ff41', '#ff003c']; // Corresponds to orb, saucer, tic-tac, triangle
  const randomSightings = [];

  for (let i = 0; i < count; i++) {
    // Random lat/lng, weighted slightly away from extreme poles for better visibility
    const lat = (Math.random() - 0.5) * 160;
    const lng = (Math.random() - 0.5) * 360;

    const typeIdx = Math.floor(Math.random() * types.length);
    const type = types[typeIdx];

    // Random date within the last 50 years
    const randomTime = Date.now() - (Math.random() * 50 * 365 * 24 * 60 * 60 * 1000);
    const dateObj = new Date(randomTime);
    const date = dateObj.toISOString().replace('T', ' ').substring(0, 19) + 'Z';

    const isWater = Math.random() > 0.7; // Fake heuristic for ocean vs land
    const locationName = `GRID-${Math.floor(Math.abs(lat))}-${Math.floor(Math.abs(lng))}`;

    // Generate random telemetry
    const speed = (Math.random() * 20).toFixed(1);
    const alt = Math.floor(Math.random() * 100) * 1000;
    const rcs = (Math.random() > 0.5) ? (Math.random() * 5).toFixed(2) : 'FLUCTUATING';
    const threats = ['LOW', 'ELEVATED', 'CRITICAL', 'UNKNOWN'];
    const emis = ['NONE', 'MODERATE', 'SEVERE', 'COMMUNICATION BLACKOUT', 'GPS DENIAL'];

    randomSightings.push({
      id: `UAP-${(i + 9).toString().padStart(3, '0')}`,
      lat: parseFloat(lat.toFixed(4)),
      lng: parseFloat(lng.toFixed(4)),
      city: locationName,
      date: date,
      type: type,
      source: sources[Math.floor(Math.random() * sources.length)],
      desc: `Anomalous ${type} contact detected. Transponder inactive. Speed and trajectory inconsistent with known aircraft. Radar cross-section intermittent. Visual confirmation pending.`,
      classification: classifications[Math.floor(Math.random() * classifications.length)],
      color: colors[typeIdx],
      telemetry: {
        speed_mach: speed > 15 ? 'UNKNOWN' : speed,
        alt_ft: alt > 80000 ? 'ORBITAL' : alt.toLocaleString(),
        rcs_sqm: rcs,
        threat: threats[Math.floor(Math.random() * threats.length)],
        emi: emis[Math.floor(Math.random() * emis.length)]
      }
    });
  }

  // Sort by date descending
  return randomSightings.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Combine curated and 200 procedural sightings
const SIGHTINGS_DATA = [...CURATED_SIGHTINGS, ...generateRandomSightings(200)];

// Generate some random flight paths to simulate movement
const generateArcs = () => {
  const arcs = [];
  // Connect some consecutive procedural sightings to pretend they are the same tracked object
  for (let i = CURATED_SIGHTINGS.length; i < SIGHTINGS_DATA.length - 1; i += 5) {
    arcs.push({
      startLat: SIGHTINGS_DATA[i].lat,
      startLng: SIGHTINGS_DATA[i].lng,
      endLat: SIGHTINGS_DATA[i + 1].lat,
      endLng: SIGHTINGS_DATA[i + 1].lng,
      color: ['rgba(0, 255, 65, 0.1)', 'rgba(0, 255, 65, 0.8)']
    });
  }
  return arcs;
};

const ARCS_DATA = generateArcs();

// Initialize Globe.gl
const globeContainer = document.getElementById('globeViz');
const world = Globe()(globeContainer)
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundColor('rgba(0,0,0,0)')
  .showAtmosphere(true)
  .atmosphereColor('lightgreen')
  .atmosphereAltitude(0.15)
  .labelsData(SIGHTINGS_DATA)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelText(d => d.id.startsWith('UAP-00') ? d.city : '')
  .labelSize(1)
  .labelDotRadius(0.3)
  .labelColor(d => d.color)
  .labelResolution(2)
  .pointsData(SIGHTINGS_DATA)
  .pointColor(d => d.color)
  .pointAltitude(0.01)
  .pointRadius(0.2)
  .pointsMerge(false)
  .onPointClick(point => openModal(point))
  .onLabelClick(label => openModal(label))
  .arcsData(ARCS_DATA)
  .arcColor('color')
  .arcDashLength(0.2)
  .arcDashGap(0.1)
  .arcDashAnimateTime(2500)
  .arcStroke(0.2);

// Add rings around points to simulate radar pings (only for curated data to reduce clutter)
world.ringsData(CURATED_SIGHTINGS)
  .ringColor(d => d.color)
  .ringMaxRadius(3)
  .ringPropagationSpeed(1)
  .ringRepeatPeriod(2000);

// Auto-rotate setup
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;

// Initial camera position
world.pointOfView({ lat: 30, lng: -90, altitude: 2 });

// Handle window resize
window.addEventListener('resize', () => {
  world.width(globeContainer.clientWidth);
  world.height(globeContainer.clientHeight);
});

// Update coordinate display on mouse move over globe
const coordDisplay = document.getElementById('coordDisplay');
world.onGlobeClick(({ lat, lng }) => {
  flyTo(lat, lng);
});

// Rotate to specific coordinates
function flyTo(lat, lng) {
  world.controls().autoRotate = false;
  world.pointOfView({ lat, lng, altitude: 1 }, 1500);

  // Resume auto-rotation after flying
  setTimeout(() => {
    world.controls().autoRotate = true;
  }, 10000);

  // Update coord display
  coordDisplay.innerHTML = `LAT: ${lat.toFixed(4)} LON: ${lng.toFixed(4)} | ALT: 25km (LOCKED)`;
  coordDisplay.style.color = 'var(--neon-green)';
  coordDisplay.style.textShadow = '0 0 10px var(--neon-green)';

  // Reset style after a while
  setTimeout(() => {
    coordDisplay.style.color = '';
    coordDisplay.style.textShadow = '';
    coordDisplay.innerHTML = `LAT: --.---- LON: --.---- | ALT: 0km`;
  }, 10000);
}

// Modal Logic
const modal = document.getElementById('detailsModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const flyToBtn = document.getElementById('flyToBtn');
let currentActivePoint = null;

function openModal(data) {
  currentActivePoint = data;

  // Format date
  const dateObj = new Date(data.date);
  const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Populate Data
  document.getElementById('modalId').innerText = data.id + ' // ' + data.classification.toUpperCase();
  document.getElementById('modalDate').innerText = dateStr;
  document.getElementById('modalLocation').innerText = data.city;
  document.getElementById('modalCoords').innerText = `LAT: ${data.lat.toFixed(4)} | LON: ${data.lng.toFixed(4)}`;
  document.getElementById('modalType').innerText = data.type.toUpperCase();
  document.getElementById('modalType').className = `info-value type-${data.type}`;
  document.getElementById('modalSource').innerText = data.source;

  // Telemetry
  document.getElementById('modalSpeed').innerText = data.telemetry.speed_mach !== 'UNKNOWN' && data.telemetry.speed_mach !== 'UNCALCULATED' && data.telemetry.speed_mach !== 'VARIABLE' && !data.telemetry.speed_mach.includes('+') ? `MACH ${data.telemetry.speed_mach}` : data.telemetry.speed_mach;
  document.getElementById('modalAlt').innerText = data.telemetry.alt_ft.includes('ORBITAL') ? data.telemetry.alt_ft : `${data.telemetry.alt_ft} FT`;
  document.getElementById('modalRcs').innerText = data.telemetry.rcs_sqm.includes('FLUCTUATING') || data.telemetry.rcs_sqm.includes('CONFIDENTIAL') || data.telemetry.rcs_sqm.includes('N/A') ? data.telemetry.rcs_sqm : `${data.telemetry.rcs_sqm} m²`;
  document.getElementById('modalEmi').innerText = data.telemetry.emi;

  const threatEl = document.getElementById('modalThreat');
  threatEl.innerText = data.telemetry.threat;
  threatEl.className = `info-value threat-text threat-${data.telemetry.threat.toLowerCase()}`;

  // Custom styling based on type
  document.getElementById('modalType').style.color = data.color;

  // Show Modal
  modal.classList.remove('hidden');

  // Decryption Animation for Description
  const targetText = data.desc;
  const descEl = document.getElementById('modalDesc');
  descEl.innerText = '';

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let iteration = 0;

  clearInterval(descEl.interval);

  descEl.interval = setInterval(() => {
    descEl.innerText = targetText.split('')
      .map((letter, index) => {
        if (index < iteration) {
          return targetText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('');

    if (iteration >= targetText.length) {
      clearInterval(descEl.interval);
    }

    iteration += 1;
  }, 10);
}

function closeModal() {
  modal.classList.add('hidden');
  currentActivePoint = null;
}

closeModalBtn.addEventListener('click', closeModal);

flyToBtn.addEventListener('click', () => {
  if (currentActivePoint) {
    flyTo(currentActivePoint.lat, currentActivePoint.lng);
    closeModal();
  }
});

// Render Feed
const feedContainer = document.getElementById('sightingsFeed');

function renderFeed(data) {
  feedContainer.innerHTML = '';
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('sighting-card');

    // Format date
    const dateObj = new Date(item.date);
    const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    card.innerHTML = `
      <div class="card-header">
        <span>ID: ${item.id} // ${item.classification.toUpperCase()}</span>
        <span class="sighting-date">${dateStr}</span>
      </div>
      <h3 class="card-title">${item.city}</h3>
      <p class="card-desc">${item.desc}</p>
      <div class="card-footer">
        <span class="sighting-type type-${item.type}"><i class="fa-solid fa-satellite-dish"></i> ${item.type.toUpperCase()}</span>
        <span class="sighting-source"><i class="fa-solid fa-database"></i> ${item.source}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      flyTo(item.lat, item.lng);
      // Highlight card visually
      document.querySelectorAll('.sighting-card').forEach(c => c.style.borderColor = 'var(--hud-border)');
      card.style.borderColor = 'var(--neon-green)';
    });

    feedContainer.appendChild(card);
  });
}

// Initial render
renderFeed(SIGHTINGS_DATA);

// Filter logic
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const filterValue = e.target.getAttribute('data-filter');
    if (filterValue === 'all') {
      renderFeed(SIGHTINGS_DATA);
    } else {
      const filtered = SIGHTINGS_DATA.filter(item => item.classification === filterValue);
      renderFeed(filtered);
    }
  });
});

// Boot Sequence Logic
const bootOverlay = document.getElementById('bootSequence');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
  bootOverlay.classList.add('boot-hidden');
  // We can play an initialization sound here if the user provides audio files
});

// Simulated On-Chain Solana Data Stream
const onchainStream = document.getElementById('onchainStream');

const generateHash = () => {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let hash = '';
  for (let i = 0; i < 44; i++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return hash;
}

const addOnchainItem = () => {
  if (onchainStream.children.length > 8) {
    onchainStream.removeChild(onchainStream.firstChild);
  }

  const div = document.createElement('div');
  div.classList.add('onchain-item');

  const hash = generateHash();
  const shortHash = `${hash.substring(0, 4)}...${hash.substring(40)}`;

  const events = ['MINT', 'BURN', 'ENCRYPT', 'RELAY'];
  const event = events[Math.floor(Math.random() * events.length)];

  div.innerHTML = `[${event}] <span class="onchain-hash">${shortHash}</span> -> <span class="onchain-status">VERIFIED</span>`;
  onchainStream.appendChild(div);
}

// Stream new fake on-chain data every 400-1200ms
setInterval(addOnchainItem, Math.random() * 800 + 400);
