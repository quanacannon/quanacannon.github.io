/* ================= CONTENT: edit this file to update the site ================= */
const CONTACT_EMAIL = 'hello@example.com'; // replace with your email

// CV rows: [label/year, text]
const cv = [
  ['EDUCATION', [['', 'MFA, UDK BERLIN'], ['', 'B.S., RISD']]],
  ['SELECTED EXHIBITIONS', [['2023', 'Venice Biennale, Arsenale'], ['', 'Tate Modern'], ['', 'Mori Art Museum, Tokyo']]],
  ['AWARDS & RESIDENCIES', [['2026', 'NEA Emerging Artist grant'], ['2025', 'Studio fellowship, Berlin'], ['2024', 'Shigaraki Ceramic Cultural Park, Japan']]]
];

const U = (id, w = 1200) => `https://images.unsplash.com/${id}?q=80&w=${w}`;

// Works used by the grids and the home-page bubbles
const works = [
  { id: 1, sec: 'fineart', title: 'NEURAL AURA FIELD', badge: 'LIGHT', sub: 'VENICE BIENNALE / LIGHT', img: U('photo-1618005182384-a83a8bd57fbe'), story: 'EXHIBITED AT VENICE BIENNALE / ARSENALE. SPECTRAL LIGHT REFRACTION FIELD.' },
  { id: 2, sec: 'fineart', title: 'QUATERNION MESH', badge: 'FIBER', sub: 'TATE MODERN / FIBER', img: U('photo-1635070041078-e363dbe005cb'), story: 'TATE MODERN INSTALLATION FEATURING CONDUCTIVE WOVEN FIBER NETWORKS.' },
  { id: 3, sec: 'fineart', title: 'LUMEN CANOPY', badge: 'SENSORS', sub: 'MORI ART MUSEUM / SENSORS', img: U('photo-1550684848-fac1c5b4e853'), story: 'MORI ART MUSEUM TOKYO. KINETIC LIGHT CEILING SENSITIVE TO AUDIENCE MOVEMENT.' },
  { id: 10, sec: 'fineart', title: 'SPECTRAL REFRACTION', badge: 'PRISMS', sub: 'BERLIN KRAFTWERK / PRISMS', img: U('photo-1579783900882-c0d3dad7b119'), story: 'PRISM ARRAY SPLITTING DAYLIGHT ACROSS A DISUSED POWER STATION HALL.' },
  { id: 11, sec: 'fineart', title: 'CHROMATIC RESONANCE', badge: 'SOUND', sub: 'HAUS DER KULTUREN / SOUND', img: U('photo-1541701494587-cb58502866ab'), story: 'COLOR FIELDS THAT SHIFT WITH LIVE ACOUSTIC INPUT.' },
  { id: 12, sec: 'fineart', title: 'TENSION FIELD #09', badge: 'BRASS + LEDS', sub: 'HYBRID BRASS & LEDS', img: U('photo-1507676184212-d03ab07a01bf'), story: 'TENSIONED BRASS WIRE AND LED HYBRID SCULPTURE.' },
  /* DESIGN: placeholder entries, replace with your own */
  { id: 7, sec: 'design', title: 'STUDIO IDENTITY SYSTEM', badge: 'BRANDING', sub: 'VISUAL IDENTITY', img: U('photo-1561070791-2526d30994b8'), story: 'LOGOTYPE, COLOR AND PRINT SYSTEM FOR THE MULTIMEDIA STUDIO.' },
  { id: 8, sec: 'design', title: 'ACOUSTIC LAMP SERIES', badge: 'OBJECT', sub: 'PRODUCT DESIGN', img: U('photo-1507473885765-e6ed057f782c'), story: 'LIGHTING OBJECTS WITH INTEGRATED CERAMIC RESONATORS.' },
  { id: 9, sec: 'design', title: 'EXHIBITION ARCHITECTURE', badge: 'SPACE', sub: 'SPATIAL DESIGN', img: U('photo-1545987796-200677ee1011'), story: 'MODULAR DISPLAY SYSTEM FOR TRAVELING INSTALLATIONS.' },
  { id: 4, sec: 'ceramics', title: 'CRYSTALLINE URN', badge: 'PORCELAIN', sub: 'PORCELAIN / ZINC GLAZE', img: U('photo-1578749556568-bc2c40e68b61'), story: 'HIGH-ALUMINA PORCELAIN WITH ZINC SILICATE CRYSTALLINE GLAZE.' },
  { id: 5, sec: 'ceramics', title: 'SHIGARAKI ASH VESSEL', badge: 'ANAGAMA', sub: 'ANAGAMA WOOD FIRE', img: U('photo-1565193566173-7a0ee3dbe261'), story: 'WOOD-FIRED FOR 7 DAYS AT SHIGARAKI CERAMIC CULTURAL PARK JAPAN.' },
  { id: 6, sec: 'ceramics', title: 'RESONANT SPEAKER', badge: 'ACOUSTIC CLAY', sub: 'ACOUSTIC CLAY CHAMBER', img: U('photo-1579783902614-a3fb3927b675'), story: 'PORCELAIN ACOUSTIC RESONANCE CHAMBER FOR ANALOG SYNTHESIZER OSCILLATIONS.' }
];

// Photo series: the first image is the cover shown in the scroller. Add or swap photos freely.
const albums = [
  { title: 'BERLIN & URBAN MONOCHROME', meta: 'HASSELBLAD 500C / 35MM', photos: [
    ['photo-1511671782779-c97d3d27a1d4', 'KRAFTWERK SHADOWS'], ['photo-1492691527719-9d1e07e534b4', 'SILVER GELATIN GRAIN'],
    ['photo-1508700115892-45ecd05ae2ad', 'SPREE CANAL REFLECTION'], ['photo-1541701494587-cb58502866ab', 'BRUTALIST STRUCTURE #04'] ] },
  { title: 'SHIGARAKI & KILN FOG STUDY', meta: 'MEDIUM FORMAT DIGITAL', photos: [
    ['photo-1565193566173-7a0ee3dbe261', 'ANAGAMA ASH DUST'], ['photo-1578749556568-bc2c40e68b61', 'CERAMIC PARK MOUNTAIN'],
    ['photo-1579783902614-a3fb3927b675', 'FLAME EMBEDDED CLAY'], ['photo-1500462918059-b1a0cb512f1d', 'MORNING MIST IN SHIGARAKI'] ] },
  { title: 'JAVA & SOUTHEAST ASIA LOGS', meta: 'YOGYAKARTA & KUALA LUMPUR', photos: [
    ['photo-1537996194471-e657df975ab4', 'YOGYAKARTA VOLCANIC CLAY'], ['photo-1596422846543-75c6fc197f07', 'KL TEXTILE ACOUSTICS'],
    ['photo-1518770660439-4636190af475', 'BATIK WAX RESONANCE'], ['photo-1618005182384-a83a8bd57fbe', 'TROPICAL CANOPY LIGHT'] ] },
  { title: 'MOTION & CHOREOGRAPHY STILLS', meta: '16MM HIGH-SPEED REHEARSALS', photos: [
    ['photo-1508700115892-45ecd05ae2ad', 'KINESPHERE TRACE #01'], ['photo-1550684848-fac1c5b4e853', 'BODY ACCELEROMETER'],
    ['photo-1635070041078-e363dbe005cb', 'CLAY DUST IMPACT'], ['photo-1507676184212-d03ab07a01bf', 'TENSION REHEARSAL'] ] }
];

// Videos: swap `src` for your own files or hosted links.
const SAMPLE_VIDEO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const videos = [
  { title: 'DIFFRACTION LOOP', badge: '4K PROJECTION', img: U('photo-1634017839464-5c339ebe3cb4'), src: SAMPLE_VIDEO, desc: '12-CHANNEL GENERATIVE VIDEO INSTALLATION AT VENICE BIENNALE' },
  { title: 'KINESPHERE CHOREOGRAPHY', badge: 'PERFORMANCE FILM', img: U('photo-1508700115892-45ecd05ae2ad'), src: SAMPLE_VIDEO, desc: 'EXPERIMENTAL SHORT FILM / DANCE IN CLAY IN KRAFTWERK BERLIN' },
  { title: 'RESONANT ECHOES JAVA', badge: 'ACOUSTIC DANCE', img: U('photo-1550684848-fac1c5b4e853'), src: SAMPLE_VIDEO, desc: 'BATIK SYNTHESIZER & VOLCANIC ASH SOUNDSCAPE FILM' }
];

const danceVideos = [
  { title: 'BODY SIGNAL RESONANCE', badge: 'FULL PERFORMANCE', img: U('photo-1508700115892-45ecd05ae2ad'), src: SAMPLE_VIDEO, desc: 'SOLO WORK WITH ACCELEROMETER SYNTHESIS, KRAFTWERK LEIPZIG' },
  { title: 'KINESPHERE TRACE', badge: 'REHEARSAL', img: U('photo-1550684848-fac1c5b4e853'), src: SAMPLE_VIDEO, desc: 'HIGH-SPEED STUDIO REHEARSAL FOOTAGE' },
  { title: 'DANCE IN CLAY', badge: 'SHORT FILM', img: U('photo-1507676184212-d03ab07a01bf'), src: SAMPLE_VIDEO, desc: 'MOVEMENT STUDY WITH WET PORCELAIN' }
];

// icon: drop a small square image at that path to replace the placeholder
const writing = [
  { icon: 'icons/glaze-log.png', tag: 'GLAZE LOG', title: 'ZINC SILICATE CRYSTAL FORMATIONS', date: 'OCT 2026', body: 'COOLING SCHEDULE: RAPID DROP FROM 1260°C TO 1080°C, HELD FOR 4 HOURS. LARGE ZINC CRYSTAL ROSETTES DEVELOPED ON HIGH-ALUMINA PORCELAIN BODIES.', img: U('photo-1578749556568-bc2c40e68b61', 600) },
  { icon: 'icons/essay.png', tag: 'ESSAY', title: 'TACTILE INERTIA & KINESPHERE', date: 'AUG 2026', body: 'EXPLORING HOW RESISTANCE IN DENSE STONEWARE CLAY DIRECTLY MIRRORS MUSCULAR INERTIA DURING CHOREOGRAPHIC IMPROVISATION.' },
  { icon: 'icons/acoustics.png', tag: 'ACOUSTICS', title: 'RESONANT FREQUENCY OF UNFIRED CLAY', date: 'MAY 2026', body: 'MEASURING ACOUSTIC ABSORPTION SPECTRA ACROSS LEATHER-HARD VS BONE-DRY CLAY CHAMBERS FOR AUDIO SYNTH RESONATORS.' }
];

const timeline = [
  ['2026 GRANT', 'OCT 2026', 'NEA EMERGING ARTIST', 'AWARDED FOR ADVANCING RESEARCH IN ACOUSTIC CLAY INSTRUMENTATION & SONIC SCULPTURE.'],
  ['2025 FELLOW', 'JUN 2025', 'STUDIO OLAFUR ELIASSON', 'BERLIN RESIDENCY FOCUSING ON IMMERSIVE LIGHT DYNAMICS & KINETIC CANOPY INSTALLATIONS.'],
  ['2024 RESIDENCY', 'NOV 2024', 'SHIGARAKI PARK JAPAN', 'WOOD-FIRED ANAGAMA KILN FELLOWSHIP EXPLORING NATURAL ASH GLAZES ON PORCELAIN.'],
  ['2023 EXHIBITION', 'MAY 2023', 'VENICE BIENNALE', 'DEBUTED "NEURAL AURA FIELD" SPECTRAL INSTALLATION IN ARSENALE PAVILION.']
];

