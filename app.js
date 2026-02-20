// Authentic Historical Data for sightings
const SIGHTINGS_DATA = [
  {
    id: 'UAP-001', lat: 33.952, lng: -105.331, city: 'Roswell, NM (Foster Ranch)', date: '1947-07-08T00:00:00Z', type: 'saucer', source: 'Roswell Army Air Field (RAAF)',
    desc: 'Metallic and rubber debris recovered. Initially reported as a "flying disc," later retracted as a weather balloon. Still heavily debated as an extraterrestrial crash site.',
    classification: 'declassified', color: '#ffb000', telemetry: { speed_mach: 'UNKNOWN', alt_ft: '0 (CRASH)', rcs_sqm: 'CONFIDENTIAL', threat: 'UNKNOWN', emi: 'NONE' }
  },
  {
    id: 'UAP-002', lat: 52.094, lng: 1.313, city: 'Rendlesham Forest, UK', date: '1980-12-26T03:00:00Z', type: 'triangle', source: 'USAF Personnel (RAF Bentwaters)',
    desc: 'Glowing object with multicolored lights moving through the forest. Scorch marks found. Witness claimed telepathic binary code transmission connecting to ancient sites.',
    classification: 'declassified', color: '#ff003c', telemetry: { speed_mach: 'HOVER', alt_ft: '0-100', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'RADIATION TRACES' }
  },
  {
    id: 'UAP-003', lat: 33.450, lng: -112.074, city: 'Phoenix, AZ', date: '1997-03-13T22:00:00Z', type: 'triangle', source: 'Civilian Mass Sighting',
    desc: 'Massive V-shaped formation of lights traversing the sky silently. Second event involved stationary glowing orbs. Witnessed by thousands, including the Governor.',
    classification: 'civilian', color: '#ff003c', telemetry: { speed_mach: '0.2', alt_ft: '5,000-15,000', rcs_sqm: 'MASSIVE', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-004', lat: 40.184, lng: -79.463, city: 'Kecksburg, PA', date: '1965-12-09T16:47:00Z', type: 'orb', source: 'Civilian & Military Response',
    desc: 'Brilliant fireball crashed in woods. Witnesses described a metallic, acorn-shaped object with hieroglyphics. Area secured by military; officially claimed as meteor/satellite.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: 'HYPERSONIC', alt_ft: '0 (CRASH)', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-005', lat: 32.220, lng: -98.202, city: 'Stephenville, TX', date: '2008-01-08T18:15:00Z', type: 'tic-tac', source: 'Civilian Radar & Witnesses',
    desc: 'Silent object with bright lights flying low and fast, pursued by fighter jets. Estimated half-mile long, 3,000 mph. Radar confirmed unidentified tracks.',
    classification: 'civilian', color: '#00ff41', telemetry: { speed_mach: '3.9', alt_ft: '2,000', rcs_sqm: 'VERY LARGE', threat: 'ELEVATED', emi: 'RADAR ANOMALY' }
  },
  {
    id: 'UAP-006', lat: 31.000, lng: -117.000, city: 'Pacific Ocean (Nimitz)', date: '2004-11-14T14:32:00Z', type: 'tic-tac', source: 'US Navy (USS Nimitz)',
    desc: 'White, smooth 40-foot oblong shape. Descended from 80k feet to sea level in seconds. No visible exhaust or control surfaces. Jammed radar systems heavily.',
    classification: 'declassified', color: '#00ff41', telemetry: { speed_mach: '24.5+', alt_ft: '80,000 > 50', rcs_sqm: '0.01', threat: 'UNKNOWN', emi: 'SEVERE JAMMING' }
  },
  {
    id: 'UAP-007', lat: 41.980, lng: -87.900, city: "O'Hare Airport, IL", date: '2006-11-07T16:15:00Z', type: 'saucer', source: 'Aviation Personnel (FAA)',
    desc: 'Metallic, saucer-shaped craft hovering silently over Gate C17. Shot straight up through cloud cover, leaving a perfectly round hole in the clouds. FAA called it weather.',
    classification: 'civilian', color: '#ffb000', telemetry: { speed_mach: 'UNKNOWN (RAPID ASCENT)', alt_ft: '1,500', rcs_sqm: 'UNKNOWN', threat: 'ELEVATED', emi: 'NONE' }
  },
  {
    id: 'UAP-008', lat: 35.689, lng: 51.389, city: 'Tehran, IRN', date: '1976-09-19T00:30:00Z', type: 'orb', source: 'Iranian Air Force (DIA Report)',
    desc: 'Brilliant object jammed radar and communications of two F-4 jets attempting to intercept. Weapons systems disabled when pilot attempted to fire.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: 'VARIABLE', alt_ft: '15,000+', rcs_sqm: 'FLUCTUATING', threat: 'HOSTILE', emi: 'WEAPONS OFF-LINE' }
  },
  {
    id: 'UAP-009', lat: 50.850, lng: 4.351, city: 'Brussels, BEL', date: '1990-03-30T23:00:00Z', type: 'triangle', source: 'Belgian Air Force',
    desc: 'Multiple black triangles tracked by NATO radar and F-16s. Demonstrated impossible acceleration, pulling 40Gs, breaking lock from jet radars.',
    classification: 'declassified', color: '#ff003c', telemetry: { speed_mach: '0.1 to 1.5 in seconds', alt_ft: '10,000 > 3,000', rcs_sqm: 'SHIFTING', threat: 'ELEVATED', emi: 'RADAR JAMMING' }
  },
  {
    id: 'UAP-010', lat: -37.930, lng: 145.120, city: 'Westall, AUS', date: '1966-04-06T11:00:00Z', type: 'saucer', source: 'Civilian Mass Sighting',
    desc: 'Silvery disc-shaped craft descended, hovered over a school, and landed in a nearby paddock before ascending rapidly. Over 200 witnesses.',
    classification: 'civilian', color: '#ffb000', telemetry: { speed_mach: 'HOVER', alt_ft: '0-200', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-011', lat: 41.300, lng: -73.900, city: 'Hudson Valley, NY', date: '1983-03-24T20:00:00Z', type: 'triangle', source: 'Civilian & Local Police',
    desc: 'Massive, silent boomerang or V-shaped array of lights hovering over highways and nuclear facilities. Reported by thousands over several years.',
    classification: 'civilian', color: '#ff003c', telemetry: { speed_mach: '0.05', alt_ft: '500-1,000', rcs_sqm: 'MASSIVE', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-012', lat: -21.550, lng: -45.430, city: 'Varginha, BRA', date: '1996-01-20T15:30:00Z', type: 'saucer', source: 'Brazilian Military & Civilians',
    desc: 'Claims of a crashed cigar-shaped craft and the capture of biological anomalous entities by military forces. Heavy military quarantine reported.',
    classification: 'civilian', color: '#ffb000', telemetry: { speed_mach: 'UNKNOWN', alt_ft: 'CRASH', rcs_sqm: 'CONFIDENTIAL', threat: 'UNKNOWN', emi: 'BIOLOGICAL HAZARD' }
  },
  {
    id: 'UAP-013', lat: -0.930, lng: -48.280, city: 'Colares, BRA (Operacao Prato)', date: '1977-10-01T00:00:00Z', type: 'orb', source: 'Brazilian Air Force (FAB)',
    desc: 'Luminous objects fired light beams at residents, causing burns. Military investigation confirmed objects on radar and film. Over 80 victims treated.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: 'VARIABLE', alt_ft: '50-1,000', rcs_sqm: 'CONFIDENTIAL', threat: 'CRITICAL', emi: 'RADIATION BURST' }
  },
  {
    id: 'UAP-014', lat: 34.050, lng: -106.890, city: 'Socorro, NM', date: '1964-04-24T17:45:00Z', type: 'tic-tac', source: 'Police Report (Officer Lonnie Zamora)',
    desc: 'Egg-shaped craft encountered on the ground with insignia. Two small figures seen. Craft ascended with a loud roar and blue flame. Burn marks left.',
    classification: 'declassified', color: '#00ff41', telemetry: { speed_mach: 'UNKNOWN', alt_ft: '0', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'THERMAL SCORCHING' }
  },
  {
    id: 'UAP-015', lat: 38.895, lng: -77.036, city: 'Washington, D.C.', date: '1952-07-26T23:30:00Z', type: 'orb', source: 'US Air Force & CAA Radar',
    desc: 'Formation of bright orbs tracked on radar over the White House and Capitol. Outran intercepting F-94 interceptors. Officially blamed on temperature inversions.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: '7.0+', alt_ft: '1,000-7,000', rcs_sqm: 'SOLID', threat: 'CRITICAL', emi: 'NONE' }
  },
  {
    id: 'UAP-016', lat: 43.490, lng: -65.710, city: 'Shag Harbour, CAN', date: '1967-10-04T23:20:00Z', type: 'saucer', source: 'RCMP & Canadian Military',
    desc: 'Four glowing lights crashed into the ocean. Yellow foam found on the surface. Navy divers found nothing, though underwater tracking reported second object linking up.',
    classification: 'declassified', color: '#ffb000', telemetry: { speed_mach: 'SUB-SURFACE', alt_ft: '-50 (UNDERWATER)', rcs_sqm: 'MILITARY CLASSIFIED', threat: 'UNKNOWN', emi: 'SONAR ANOMALY' }
  },
  {
    id: 'UAP-017', lat: -17.850, lng: 31.420, city: 'Ariel School, ZWE', date: '1994-09-16T10:15:00Z', type: 'saucer', source: 'Civilian Mass Sighting (Children)',
    desc: 'Silver craft landed near a schoolyard. Entities emerged and telepathically communicated environmental warnings to over 60 children. Consistent testimonies.',
    classification: 'civilian', color: '#ffb000', telemetry: { speed_mach: 'HOVER', alt_ft: '0', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'UNKNOWN' }
  },
  {
    id: 'UAP-018', lat: 30.500, lng: -78.000, city: 'East Coast US (GIMBAL)', date: '2015-01-22T15:00:00Z', type: 'saucer', source: 'US Navy (USS Roosevelt)',
    desc: 'Top-shaped object flying against 120-knot winds without flight surfaces or exhaust. Captured on ATFLIR. Pilot exclaimed, "There\'s a whole fleet of them!"',
    classification: 'declassified', color: '#ffb000', telemetry: { speed_mach: 'UNKNOWN', alt_ft: '25,000', rcs_sqm: 'CLEAR', threat: 'UNKNOWN', emi: 'NONE' }
  },
  {
    id: 'UAP-019', lat: 46.852, lng: -121.760, city: 'Mount Rainier, WA', date: '1947-06-24T15:00:00Z', type: 'saucer', source: 'Civilian Pilot (Kenneth Arnold)',
    desc: 'Nine metallic, crescent-shaped objects flying in formation. Estimated speed at 1,200 mph. Coined the term "flying saucer" due to skipping motion.',
    classification: 'civilian', color: '#ffb000', telemetry: { speed_mach: '1.7', alt_ft: '10,000', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-020', lat: 43.830, lng: 5.980, city: 'Valensole, FRA', date: '1965-07-01T05:45:00Z', type: 'tic-tac', source: 'Gendarmerie Nationale',
    desc: 'Farmer saw an egg-shaped craft and two entities. He was paralyzed by a beam of light. Craft left impressions in the ground and anomalous moisture levels in soil.',
    classification: 'declassified', color: '#00ff41', telemetry: { speed_mach: 'UNKNOWN', alt_ft: '0', rcs_sqm: 'UNKNOWN', threat: 'ELEVATED', emi: 'PARALYSIS INDUCED' }
  },
  {
    id: 'UAP-021', lat: 38.252, lng: -85.758, city: 'Louisville, KY (Mantell)', date: '1948-01-07T14:45:00Z', type: 'orb', source: 'US Air Force',
    desc: 'Capt. Thomas Mantell died in a crash while pursuing a massive, glowing metallic object. Classified initially as Venus, later a Skyhook balloon, fiercely debated.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: 'VARIABLE', alt_ft: '25,000+', rcs_sqm: 'LARGE', threat: 'CRITICAL', emi: 'NONE' }
  },
  {
    id: 'UAP-022', lat: -27.469, lng: 153.025, city: 'Brisbane, AUS (Tully Saucer)', date: '1966-01-19T09:00:00Z', type: 'saucer', source: 'Civilian & RAAF',
    desc: 'Farmer witnessed a saucer emerge from a lagoon, leaving a massive circular reed bed "nest" flattened clockwise. Highly credible early physical trace case.',
    classification: 'civilian', color: '#ffb000', telemetry: { speed_mach: 'RAPID ASCENT', alt_ft: '0 (WATER ESCAPE)', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'CROP FLATTENING' }
  },
  {
    id: 'UAP-023', lat: 60.128, lng: 18.643, city: 'Ghost Rockets, SWE', date: '1946-08-11T20:00:00Z', type: 'tic-tac', source: 'Swedish Military',
    desc: 'Hundreds of reports of missile-shaped objects crashing into lakes without explosions or debris. Swedish military tracked them on radar performing erratic maneuvers.',
    classification: 'declassified', color: '#00ff41', telemetry: { speed_mach: '0.8', alt_ft: '5,000', rcs_sqm: 'MISSILE-SIZE', threat: 'ELEVATED', emi: 'NONE' }
  },
  {
    id: 'UAP-024', lat: 18.450, lng: -67.150, city: 'Aguadilla, PRI', date: '2013-04-25T21:20:00Z', type: 'orb', source: 'US Customs & Border Protection',
    desc: 'Homeland Security aircraft captured thermal video of an object flying fast, low to the ground, entering the ocean without splashing, and splitting in two.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: '0.1-0.2', alt_ft: '0-500 (TRANS-MEDIUM)', rcs_sqm: 'SMALL', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-025', lat: 31.768, lng: 35.213, city: 'Dome of the Rock, ISR', date: '2011-01-28T01:00:00Z', type: 'orb', source: 'Civilian Mass Sighting',
    desc: 'Glowing orb descended over the Temple Mount, hovered, flashed a brilliant light, and shot straight up into space. Filmed from multiple angles synchronously.',
    classification: 'civilian', color: '#00e5ff', telemetry: { speed_mach: 'HYPERSONIC ASCENT', alt_ft: '500 > SUB-ORBITAL', rcs_sqm: 'UNKNOWN', threat: 'ELEVATED', emi: 'LIGHT BURST' }
  },
  {
    id: 'UAP-026', lat: -33.448, lng: -70.669, city: 'Santiago, CHL (Helicopter)', date: '2014-11-11T13:52:00Z', type: 'orb', source: 'Chilean Navy (CEFAA)',
    desc: 'Navy helicopter tracked a moving object on IR camera for 10 minutes. Object discharged a massive plume of unknown hot substance twice before vanishing.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: '0.1', alt_ft: '4,500', rcs_sqm: 'UNKNOWN', threat: 'ELEVATED', emi: 'THERMAL DISCHARGE' }
  },
  {
    id: 'UAP-027', lat: 21.306, lng: -157.858, city: 'Oahu, HI (GO FAST)', date: '2015-01-01T00:00:00Z', type: 'orb', source: 'US Navy (F/A-18 ATFLIR)',
    desc: 'Object caught skimming the ocean surface at very high speed against the wind without an observable exhaust plume. Categorized by AATIP.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: '0.8', alt_ft: 'LOW', rcs_sqm: 'SMALL', threat: 'UNKNOWN', emi: 'NONE' }
  },
  {
    id: 'UAP-028', lat: 34.900, lng: -117.885, city: 'Edwards AFB, CA', date: '1957-05-03T10:00:00Z', type: 'saucer', source: 'US Military (Gordon Cooper)',
    desc: 'Astronaut Gordon Cooper stated flight test camera crews filmed a metallic saucer extending landing gear and touching down on a dry lake bed before departing.',
    classification: 'declassified', color: '#ffb000', telemetry: { speed_mach: 'HOVER', alt_ft: '0', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-029', lat: 10.395, lng: 107.810, city: 'Vietnam War (Patrol Boats)', date: '1968-06-15T23:00:00Z', type: 'orb', source: 'US Navy & Australian Military',
    desc: 'Glowing circular crafts tracked by US patrol boats in the DMZ. The crafts fired upon the boats, destroying PCF-19. Classified as friendly fire by command.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: 'HOVER/RAPID', alt_ft: 'LOW', rcs_sqm: 'UNKNOWN', threat: 'HOSTILE', emi: 'WEAPONIZED' }
  },
  {
    id: 'UAP-030', lat: 31.968, lng: -99.901, city: 'Texas Mutilations, USA', date: '1970-01-01T00:00:00Z', type: 'triangle', source: 'Civilian & FBI',
    desc: 'Reports of large silent triangular craft associated with highly precise, bloodless cattle mutilations. High radiation observed at sites.',
    classification: 'civilian', color: '#ff003c', telemetry: { speed_mach: 'UNKNOWN', alt_ft: 'LOW', rcs_sqm: 'LARGE', threat: 'ELEVATED', emi: 'RADIATION TRACES' }
  },
  {
    id: 'UAP-031', lat: 62.039, lng: 129.733, city: 'Yakutsk, RUS (Tunguska Event)', date: '1908-06-30T07:14:00Z', type: 'orb', source: 'Historical / Scientific',
    desc: 'Massive atmospheric explosion flattened 2,000 sq km of forest. Some theorists propose it was a destroyed alien craft, though meteor impact is the consensus.',
    classification: 'civilian', color: '#00e5ff', telemetry: { speed_mach: 'HYPERSONIC', alt_ft: '30,000 (AIRBURST)', rcs_sqm: 'MASSIVE', threat: 'CATASTROPHIC', emi: 'SEISMIC EVENT' }
  },
  {
    id: 'UAP-032', lat: -41.300, lng: 174.783, city: 'Kaikoura, NZL', date: '1978-12-21T00:00:00Z', type: 'orb', source: 'Aviation & Media',
    desc: 'A series of sightings by cargo pilots and a TV crew. Brilliant lights matched speeds with the plane, tracked on Wellington radar, and filmed on 16mm.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: 'VARIABLE', alt_ft: '10,000-20,000', rcs_sqm: 'LARGE', threat: 'LOW', emi: 'RADAR CONFIRMATION' }
  },
  {
    id: 'UAP-033', lat: 46.519, lng: 6.632, city: 'Lake Geneva, CHE', date: '1954-09-01T00:00:00Z', type: 'saucer', source: 'Civilian Mass Sighting',
    desc: 'During the 1954 European wave, thousands witnessed glowing discs darting over the lake. Some reports included occupants in diving-suit-like gear.',
    classification: 'civilian', color: '#ffb000', telemetry: { speed_mach: 'HIGH', alt_ft: '1,000', rcs_sqm: 'UNKNOWN', threat: 'LOW', emi: 'NONE' }
  },
  {
    id: 'UAP-034', lat: 51.107, lng: -1.314, city: 'Winchester, UK', date: '1992-12-11T00:00:00Z', type: 'triangle', source: 'Civilian',
    desc: 'A massive black triangular craft hovered silently over a residential area, blocking out the stars. Witnesses reported a low hum and static electricity.',
    classification: 'civilian', color: '#ff003c', telemetry: { speed_mach: 'HOVER', alt_ft: '500', rcs_sqm: 'MASSIVE', threat: 'LOW', emi: 'STATIC FIELD' }
  },
  {
    id: 'UAP-035', lat: -15.793, lng: -47.882, city: 'Night of the UFOs, BRA', date: '1986-05-19T20:00:00Z', type: 'orb', source: 'Brazilian Air Force',
    desc: 'Over 20 UAPs jammed radar and outmaneuvered intercepting F-5 jets across several states. Official press conference declared them intelligently controlled.',
    classification: 'declassified', color: '#00e5ff', telemetry: { speed_mach: 'UP TO MACH 15', alt_ft: '30,000+', rcs_sqm: 'VARIABLE', threat: 'ELEVATED', emi: 'RADAR JAMMING' }
  }
];

// No simulated flight arcs
const ARCS_DATA = [];

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
  .labelText(d => d.city)
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
world.ringsData(SIGHTINGS_DATA)
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

// Advanced Boot Sequence Logic
const bootOverlay = document.getElementById('bootSequence');
const startBtn = document.getElementById('startBtn');
const bootTitle = document.getElementById('bootTitle');
const bootProgressText = document.getElementById('bootProgressText');
const bootProgressBar = document.getElementById('bootProgressBar');
const bootTerminal = document.getElementById('bootTerminal');

const terminalLines = [
  "INITIALIZING QUANTUM UPLINK...",
  "BYPASSING A.A.R.O. FIREWALLS... [SUCCESS]",
  "ESTABLISHING ORACLE V2 CONNECTION... [SUCCESS]",
  "SYNCING JITO BUNDLES... [SUCCESS]",
  "DOWNLOADING GLOBAL SENSOR CACHE...",
  "DECRYPTING SATELLITE IMAGERY...",
  "CALIBRATING RADAR FREQUENCIES...",
  "LOADING HISTORICAL UAP DATASETS...",
  "SYSTEM INTEGRITY CHECK: PASS",
  "AWAITING MANUAL INITIALIZATION"
];

let currentLine = 0;

function addTerminalLine() {
  if (currentLine < terminalLines.length) {
    const p = document.createElement('p');
    p.classList.add('boot-text');

    let text = terminalLines[currentLine];
    if (text.includes("[SUCCESS]") || text.includes("PASS")) {
      text = text.replace("[SUCCESS]", '<span class="text-green">[SUCCESS]</span>').replace("PASS", '<span class="text-green">PASS</span>');
    }

    p.innerHTML = `> ${text}`;
    bootTerminal.appendChild(p);

    // Auto-scroll
    if (bootTerminal.children.length > 6) {
      bootTerminal.removeChild(bootTerminal.firstChild);
    }

    currentLine++;

    // Random delay between lines
    const delay = Math.random() * 300 + 100;
    setTimeout(addTerminalLine, delay);
  } else {
    // Unlock button when done
    startBtn.classList.remove('disabled');
    startBtn.removeAttribute('disabled');
    startBtn.innerHTML = '<i class="fa-solid fa-power-off"></i> INITIALIZE SYSTEM';
  }
}

// Start terminal sequence
setTimeout(addTerminalLine, 500);

// Decryption effect for title
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
let interval = null;

function startDecryption() {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    bootTitle.innerText = bootTitle.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return bootTitle.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= bootTitle.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 40);
}

// Progress Bar Animation
let progress = 0;
const progressInterval = setInterval(() => {
  progress += Math.random() * 5 + 1;
  if (progress > 100) progress = 100;

  bootProgressBar.style.width = `${progress}%`;
  bootProgressText.innerText = `${Math.floor(progress)}%`;

  if (progress === 100) {
    clearInterval(progressInterval);
    setTimeout(startDecryption, 500);
  }
}, 50);

startBtn.addEventListener('click', () => {
  bootOverlay.classList.add('boot-hidden');
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

// Diagnostics Panel Logic
const anomalyIndex = document.getElementById('anomalyIndex');
const anomalyChart = document.getElementById('anomalyChart');

// Initialize 20 bars
for (let i = 0; i < 20; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.height = `${Math.random() * 100}%`;
  anomalyChart.appendChild(bar);
}

setInterval(() => {
  // Fluctuate Index
  const baseAvg = 8.00;
  const variance = Math.random() * 1.5 - 0.5;
  anomalyIndex.innerText = `${(baseAvg + variance).toFixed(2)} μSv/h`;

  if (variance > 0.8) {
    anomalyIndex.style.color = 'var(--danger)';
    anomalyIndex.style.textShadow = '0 0 10px var(--danger)';
  } else if (variance > 0.4) {
    anomalyIndex.style.color = 'var(--warning)';
    anomalyIndex.style.textShadow = '0 0 10px var(--warning)';
  } else {
    anomalyIndex.style.color = 'var(--info)';
    anomalyIndex.style.textShadow = '0 0 10px var(--info-glow)';
  }

  // Update chart
  if (anomalyChart.children.length > 0) {
    anomalyChart.removeChild(anomalyChart.firstChild);
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${Math.random() * 100}%`;
    anomalyChart.appendChild(bar);
  }
}, 800);

// Map Layers Toggle
const layerBtns = document.querySelectorAll('.layer-btn');
layerBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    layerBtns.forEach(b => b.classList.remove('active'));
    e.target.closest('button').classList.add('active');

    // Simulate layer swap effect on globe
    document.getElementById('globeViz').style.filter = 'sepia(1) hue-rotate(180deg) contrast(1.5)';
    setTimeout(() => {
      document.getElementById('globeViz').style.filter = 'none';

      const layer = e.target.closest('button').dataset.layer;
      switch (layer) {
        case 'thermal':
          world.pointColor(() => '#ff003c').atmosphereColor('#ff003c');
          break;
        case 'radar':
          world.pointColor(() => '#00ff41').atmosphereColor('#00ff41');
          break;
        case 'emf':
          world.pointColor(() => '#00e5ff').atmosphereColor('#00e5ff');
          break;
        default:
          world.pointColor(d => d.color).atmosphereColor('lightgreen');
      }
    }, 200);
  });
});
