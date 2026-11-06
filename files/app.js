/* ================= RENDERERS ================= */
function renderAll() {
  // Work grids
  ['fineart', 'design', 'ceramics'].forEach(sec => {
    document.getElementById('grid-' + sec).innerHTML = works.filter(w => w.sec === sec).map(w => `
      <div class="space-y-3 cursor-pointer group" onclick="${w.sec === 'ceramics' ? `openModal(${w.id})` : `location.hash='#work-${w.id}'`}">
        <div class="h-80 overflow-hidden bg-zinc-200"><img src="${w.img}" alt="${w.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></div>
        <h3 class="text-2xl text-zinc-900 uppercase">${w.title}</h3>
        <p class="text-xs text-studio-muted uppercase">${w.sub}</p>
      </div>`).join('');
  });

  // Large photo-series scroller (cover images)
  document.getElementById('photo-scroller').innerHTML = albums.map((a, i) => `
    <div class="w-[88vw] md:w-[640px] flex-shrink-0 space-y-3 cursor-pointer group" onclick="openAlbum(${i})">
      <div class="h-[420px] md:h-[520px] overflow-hidden bg-zinc-200 relative">
        <img src="${U(a.photos[0][0], 1400)}" alt="${a.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute bottom-4 left-4 bg-[#D5EE10] text-zinc-900 text-[10px] px-3 py-1 uppercase">${a.photos.length} PHOTOS — OPEN SERIES</span>
      </div>
      <div class="flex items-center justify-between gap-4"><h3 class="text-xl md:text-2xl text-zinc-900 uppercase">0${i + 1}. ${a.title}</h3>
      <span class="text-xs text-studio-muted uppercase text-right">${a.meta}</span></div>
    </div>`).join('');

  // Large video scroller
  document.getElementById('video-scroller').innerHTML = videos.map((v, i) => `
    <div class="w-[88vw] md:w-[760px] flex-shrink-0 space-y-3 cursor-pointer group" onclick="openVideo(${i})">
      <div class="h-[300px] md:h-[430px] overflow-hidden bg-zinc-900 relative flex items-center justify-center">
        <img src="${v.img}" alt="${v.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
        <div class="absolute w-20 h-20 bg-[#D5EE10] text-zinc-900 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform"><i class="fa-solid fa-play ml-1"></i></div>
      </div>
      <span class="bg-[#D5EE10] text-zinc-900 text-[10px] px-2.5 py-0.5 uppercase">${v.badge}</span>
      <h3 class="text-2xl md:text-3xl text-zinc-900 uppercase">${v.title}</h3>
      <p class="text-xs text-studio-muted uppercase">${v.desc}</p>
    </div>`).join('');

  document.getElementById('dance-scroller').innerHTML = danceVideos.map((v, i) => `
    <div class="w-[88vw] md:w-[640px] flex-shrink-0 space-y-3 cursor-pointer group" onclick="openVideo(${i}, 'dance')">
      <div class="h-[280px] md:h-[360px] overflow-hidden bg-zinc-900 relative flex items-center justify-center">
        <img src="${v.img}" alt="${v.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
        <div class="absolute w-16 h-16 bg-[#D5EE10] text-zinc-900 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform"><i class="fa-solid fa-play ml-1"></i></div>
      </div>
      <span class="bg-[#D5EE10] text-zinc-900 text-[10px] px-2.5 py-0.5 uppercase">${v.badge}</span>
      <h3 class="text-2xl text-zinc-900 uppercase">${v.title}</h3><p class="text-xs text-studio-muted uppercase">${v.desc}</p>
    </div>`).join('');

  // Writing accordion
  document.getElementById('writing-list').innerHTML = writing.map(w => `
    <div class="journal-accordion-item border border-zinc-200 bg-white overflow-hidden">
      <button onclick="toggleJournalAccordion(this)" class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors">
        <div class="flex items-center gap-4 flex-wrap"><span class="relative w-11 h-11 bg-[#D5EE10] flex items-center justify-center flex-shrink-0 overflow-hidden">✦<img src="${w.icon}" alt="" class="absolute inset-0 w-full h-full object-cover" onerror="this.remove()"></span><span class="bg-[#D5EE10] text-zinc-900 text-[10px] px-2.5 py-1 uppercase">${w.tag}</span>
        <span class="text-xl md:text-2xl text-zinc-900 uppercase">${w.title}</span></div>
        <div class="flex items-center gap-4"><span class="text-xs text-studio-muted uppercase hidden sm:inline">${w.date}</span>
        <i class="fa-solid fa-chevron-down text-zinc-600 transition-transform duration-300"></i></div>
      </button>
      <div class="accordion-content hidden px-6 pb-6 pt-2 border-t border-zinc-100 text-xs text-studio-muted uppercase leading-relaxed space-y-3">
        <p>${w.body}</p>${w.img ? `<div class="h-48 bg-zinc-100 overflow-hidden max-w-md"><img src="${w.img}" alt="" class="w-full h-full object-cover"></div>` : ''}
      </div>
    </div>`).join('');

  // Timeline
  document.getElementById('timeline-items').insertAdjacentHTML('beforeend', timeline.map((t, i) => `
    <div class="w-80 bg-white p-6 space-y-3 relative z-10 border border-zinc-100/80 flex-shrink-0 hover:-translate-y-1 transition-transform">
      <div class="flex items-center justify-between"><span class="${i % 2 ? 'bg-zinc-200' : 'bg-[#D5EE10]'} text-zinc-900 text-[10px] px-2.5 py-0.5 uppercase">${t[0]}</span>
      <span class="text-xs text-studio-muted">${t[1]}</span></div>
      <h3 class="text-xl text-zinc-900 uppercase">${t[2]}</h3>
      <p class="text-xs text-studio-muted uppercase leading-relaxed">${t[3]}</p>
    </div>`).join(''));

  // Floating shapes
  const star4 = 'M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z';
  const heart = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
  const star5 = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
  const burst = 'M50 5 L58 28 L82 18 L72 40 L95 50 L72 60 L82 82 L58 72 L50 95 L42 72 L18 82 L28 60 L5 50 L28 40 L18 18 L42 28 Z';
  const clover = 'M50 50 C35 25 15 35 30 50 C15 65 35 75 50 50 C65 75 85 65 70 50 C85 35 65 25 50 50 Z';
  const shapes = [
    ['top-10 right-12', 1, 24, star4, '#F472B6', 10, ''], ['top-1/3 left-6 md:left-10', 3, 24, star4, '#FDE047', 8, ''],
    ['top-20 left-1/4', 2, 24, heart, '#FCA5A5', 9, 'hidden md:block'], ['bottom-28 left-8 md:left-14', 1, 100, clover, '#D5EE10', 11, ''],
    ['top-24 right-1/4', 2, 100, clover, '#D5EE10', 10, 'hidden sm:block'], ['top-2/3 right-8 md:right-16', 3, 100, clover, '#D5EE10', 12, ''],
    ['bottom-12 right-1/3', 3, 24, star5, '#C4B5FD', 10, 'hidden sm:block'], ['bottom-16 right-12 md:right-16', 2, 100, burst, '#7DD3FC', 12, '']
  ];
  document.getElementById('playful-shapes').innerHTML = shapes.map(s => `
    <div class="absolute ${s[0]} orbit-bubble-${s[1]} pointer-events-auto cursor-pointer ${s[6]}" onclick="popShape(this)">
      <svg viewBox="0 0 ${s[2]} ${s[2]}" class="fill-[${s[4]}] opacity-85 transition-transform duration-300 hover:scale-125 drop-shadow-sm" style="width:${s[5] * 4}px;height:${s[5] * 4}px;fill:${s[4]}"><path d="${s[3]}"/></svg>
    </div>`).join('');
}

/* ================= PHOTO / VIDEO VIEWS ================= */
function openAlbum(i) {
  const a = albums[i];
  document.getElementById('album-title').innerText = a.title;
  document.getElementById('album-meta').innerText = a.meta;
  document.getElementById('album-photos').innerHTML = a.photos.map(p => `
    <figure class="space-y-2"><div class="bg-zinc-200 overflow-hidden"><img loading="lazy" src="${U(p[0], 1600)}" alt="${p[1]}" class="w-full h-auto object-cover"></div>
    <figcaption class="text-xs text-studio-muted uppercase">${p[1]}</figcaption></figure>`).join('');
  const v = document.getElementById('album-view');
  v.classList.remove('hidden'); v.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeAlbum() { document.getElementById('album-view').classList.add('hidden'); document.body.style.overflow = 'auto'; }
function openVideo(i, set) {
  const v = (set === 'dance' ? danceVideos : videos)[i], el = document.getElementById('video-el');
  el.poster = v.img; el.src = v.src;
  document.getElementById('video-title').innerText = v.title;
  document.getElementById('video-desc').innerText = v.desc;
  document.getElementById('video-view').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeVideo() {
  const el = document.getElementById('video-el');
  el.pause(); el.removeAttribute('src'); el.load();
  document.getElementById('video-view').classList.add('hidden');
  document.body.style.overflow = 'auto';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeAlbum(); closeVideo(); closeModal(); } });

/* ================= HOME: FLOATING LETTERS ================= */
let qScene, qCamera, qRenderer, letterObjects = [], bubbleObjects = [], cloverObjects = [];
let mouseWorldPos = new THREE.Vector3(999, 999, 0), orderFactor = 0;

const fontPool = ['900 165px "Cormorant Garamond", serif', '900 165px "Syne", sans-serif', '900 165px "Instrument Serif", serif', '900 165px "Archivo Black", sans-serif',
  '900 165px "Bodoni Moda", serif', '900 165px "Space Grotesk", sans-serif', '900 165px "Playfair Display", serif', '900 165px "Cinzel", serif'];
const getRandomFont = big => { const f = fontPool[Math.floor(Math.random() * fontPool.length)]; return big ? f.replace('165px', '220px') : f; };

const lettersData = [
  { char: 'Q', homeX: -48, homeY: 14, isBig: true, scale: 1.25, radius: 13.5 }, { char: 'U', homeX: -24, homeY: 14, radius: 9.5 },
  { char: 'A', homeX: -3, homeY: 14, radius: 9.5 }, { char: 'N', homeX: 18, homeY: 14, radius: 9.5 }, { char: 'A', homeX: 39, homeY: 14, radius: 9.5 },
  { char: 'C', homeX: -58, homeY: -14, isBig: true, scale: 1.25, radius: 13.5 }, { char: 'A', homeX: -36, homeY: -14, radius: 9.5 },
  { char: 'N', homeX: -15, homeY: -14, radius: 9.5 }, { char: 'N', homeX: 6, homeY: -14, radius: 9.5 }, { char: 'O', homeX: 27, homeY: -14, radius: 9.5 },
  { char: 'N', homeX: 48, homeY: -14, radius: 9.5 }
];
const workBubblesData = [
  { id: 1, homeX: -72, homeY: 38 }, { id: 4, homeX: 72, homeY: 42 }, { id: 5, homeX: -78, homeY: -38 }, { id: 2, homeX: 78, homeY: -35 }, { id: 3, homeX: 0, homeY: 46 }
];
const cloversData = [{ homeX: -70, homeY: -8, radius: 12 }, { homeX: 70, homeY: 10, radius: 12 }];

function makeCanvas() { const c = document.createElement('canvas'); c.width = c.height = 256; return [c, c.getContext('2d')]; }
function fallbackBubbleTexture(id) {
  const [c, ctx] = makeCanvas(), g = ctx.createLinearGradient(0, 0, 256, 256), cols = ['#38BDF8', '#F472B6', '#FBBF24', '#34D399', '#A78BFA'];
  g.addColorStop(0, cols[(id - 1) % cols.length]); g.addColorStop(1, '#1E293B');
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(128, 128, 128, 0, Math.PI * 2); ctx.fill();
  return new THREE.CanvasTexture(c);
}
function createLetterTexture(item) {
  const [c, ctx] = makeCanvas();
  ctx.shadowColor = '#D5EE10'; ctx.shadowBlur = 22; ctx.fillStyle = '#D5EE10';
  ctx.font = item.font || '900 165px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(item.char, 128, 134); ctx.shadowBlur = 0; ctx.fillText(item.char, 128, 134);
  return new THREE.CanvasTexture(c);
}
function createCloverTexture() {
  const [c, ctx] = makeCanvas();
  ctx.shadowColor = '#D5EE10'; ctx.shadowBlur = 18; ctx.fillStyle = '#D5EE10'; ctx.translate(128, 128);
  for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(0, -32, 28, 0, Math.PI * 2); ctx.fill(); ctx.rotate(Math.PI / 2); }
  ctx.shadowBlur = 0; ctx.strokeStyle = '#D5EE10'; ctx.lineWidth = 10; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(0, 10); ctx.quadraticCurveTo(-15, 55, -25, 75); ctx.stroke();
  return new THREE.CanvasTexture(c);
}
function updateAllLetterTextures() {
  letterObjects.forEach(o => { const old = o.mesh.material.map; o.mesh.material.map = createLetterTexture(o.itemData); o.mesh.material.needsUpdate = true; if (old) old.dispose(); });
}

function init3DLetters() {
  const container = document.getElementById('q-canvas-container');
  if (!container || container.querySelector('canvas')) return;
  const width = container.clientWidth || 800, height = container.clientHeight || 600;
  qScene = new THREE.Scene();
  qCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000); qCamera.position.z = 170;
  qRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  qRenderer.setSize(width, height); qRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(qRenderer.domElement);

  const baseGeo = new THREE.PlaneGeometry(26, 26);
  letterObjects = lettersData.map(item => {
    item.font = getRandomFont(item.isBig);
    const mat = new THREE.MeshBasicMaterial({ map: createLetterTexture(item), transparent: true, alphaTest: 0.05, side: THREE.DoubleSide });
    const s = item.scale || 1, mesh = new THREE.Mesh(item.isBig ? new THREE.PlaneGeometry(26 * s, 26 * s) : baseGeo, mat);
    qScene.add(mesh);
    const sx = (Math.random() - 0.5) * 340, sy = (Math.random() - 0.5) * 230;
    mesh.position.set(sx, sy, 0);
    return { mesh, itemData: item, homePos: new THREE.Vector3(item.homeX, item.homeY, 0), scramblePos: new THREE.Vector3(sx, sy, 0),
      currPos: new THREE.Vector3(sx, sy, 0), velocity: new THREE.Vector3(), rotVelocity: (Math.random() - 0.5) * 0.04, radius: item.radius || 11 };
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => setTimeout(updateAllLetterTextures, 150)).catch(() => {});

  const loader = new THREE.TextureLoader(); loader.crossOrigin = 'anonymous';
  const circleGeo = new THREE.CircleGeometry(15, 64);
  bubbleObjects = workBubblesData.map(item => {
    const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), mesh = new THREE.Mesh(circleGeo, mat);
    mesh.userData = { id: item.id }; qScene.add(mesh);
    const w = works.find(x => x.id === item.id);
    loader.load(U(w.img.split('/').pop().split('?')[0], 600), t => { mat.map = t; mat.needsUpdate = true; }, undefined,
      () => { mat.map = fallbackBubbleTexture(item.id); mat.needsUpdate = true; });
    const homePos = new THREE.Vector3(item.homeX, item.homeY, 0);
    const scramblePos = homePos.clone().multiplyScalar(1.85).add(new THREE.Vector3((Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, 0));
    mesh.position.copy(scramblePos);
    return { mesh, homePos, scramblePos, currPos: scramblePos.clone(), velocity: new THREE.Vector3() };
  });

  const cloverTex = createCloverTexture(), cloverGeo = new THREE.PlaneGeometry(28, 28);
  cloverObjects = cloversData.map(item => {
    const mesh = new THREE.Mesh(cloverGeo, new THREE.MeshBasicMaterial({ map: cloverTex, transparent: true, alphaTest: 0.05, side: THREE.DoubleSide }));
    qScene.add(mesh);
    const p = new THREE.Vector3(item.homeX, item.homeY, 0); mesh.position.copy(p);
    return { mesh, homePos: p.clone(), currPos: p.clone(), velocity: new THREE.Vector3() };
  });

  const raycaster = new THREE.Raycaster();
  const ndc = e => { const r = container.getBoundingClientRect(); return r.width ? new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1) : null; };
  container.addEventListener('mousemove', e => {
    const m = ndc(e); if (!m) return;
    const v = new THREE.Vector3(m.x, m.y, 0.5).unproject(qCamera), dir = v.sub(qCamera.position).normalize();
    mouseWorldPos.copy(qCamera.position).add(dir.multiplyScalar(-qCamera.position.z / dir.z));
    orderFactor = Math.min(1, orderFactor + 0.008);
    raycaster.setFromCamera(m, qCamera);
    container.style.cursor = raycaster.intersectObjects(bubbleObjects.map(b => b.mesh)).length ? 'pointer' : 'grab';
  });
  container.addEventListener('click', e => {
    const m = ndc(e); if (!m) return;
    raycaster.setFromCamera(m, qCamera);
    const hit = raycaster.intersectObjects(bubbleObjects.map(b => b.mesh));
    if (hit.length) openModal(hit[0].object.userData.id);
  });

  (function animate() {
    requestAnimationFrame(animate);
    if (document.hidden || document.getElementById('page-home').classList.contains('hidden')) return;
    orderFactor = Math.min(1, orderFactor + 0.0002);
    const now = Date.now();
    letterObjects.forEach((o, i) => {
      const t = new THREE.Vector3().lerpVectors(o.scramblePos, o.homePos, orderFactor), ph = now * 0.002 + i;
      t.y += Math.sin(ph) * 3; t.x += Math.cos(ph * 0.7) * 2;
      o.velocity.add(t.sub(o.currPos).multiplyScalar(0.025)).multiplyScalar(0.88);
      const d = o.currPos.distanceTo(mouseWorldPos);
      if (d < 30 && d > 0.1) o.velocity.add(o.currPos.clone().sub(mouseWorldPos).normalize().multiplyScalar((30 - d) * 0.25));
      o.currPos.add(o.velocity); o.mesh.position.copy(o.currPos);
      o.mesh.rotation.z += (0 - o.mesh.rotation.z) * (0.03 * orderFactor) + o.rotVelocity * (1 - orderFactor);
    });
    bubbleObjects.forEach((b, i) => {
      const t = new THREE.Vector3().lerpVectors(b.scramblePos, b.homePos, orderFactor), ph = now * 0.002 + i * 1.5;
      t.y += Math.sin(ph) * 3.5; t.x += Math.cos(ph * 0.7) * 2.5;
      b.velocity.add(t.sub(b.currPos).multiplyScalar(0.03)).multiplyScalar(0.88);
      const d = b.currPos.distanceTo(mouseWorldPos);
      if (d < 35 && d > 0.1) b.velocity.add(b.currPos.clone().sub(mouseWorldPos).normalize().multiplyScalar((35 - d) * 0.3));
      b.currPos.add(b.velocity); b.mesh.position.copy(b.currPos);
    });
    cloverObjects.forEach((c, i) => {
      const t = c.homePos.clone(), ph = now * 0.0022 + i * 2;
      t.y += Math.sin(ph) * 4; t.x += Math.cos(ph * 0.6) * 3;
      c.velocity.add(t.sub(c.currPos).multiplyScalar(0.03)).multiplyScalar(0.88);
      c.currPos.add(c.velocity); c.mesh.position.copy(c.currPos); c.mesh.rotation.z += 0.005;
    });
    for (let i = 0; i < letterObjects.length; i++) for (let j = i + 1; j < letterObjects.length; j++) {
      const a = letterObjects[i], b = letterObjects[j], d = a.currPos.distanceTo(b.currPos), min = a.radius + b.radius;
      if (d < min && d > 0.1) {
        const push = a.currPos.clone().sub(b.currPos).normalize().multiplyScalar((min - d) * 0.5);
        a.currPos.add(push); b.currPos.sub(push);
      }
    }
    qRenderer.render(qScene, qCamera);
  })();

  window.addEventListener('resize', () => {
    const w = container.clientWidth, h = container.clientHeight;
    if (w > 0 && h > 0) { qCamera.aspect = w / h; qCamera.updateProjectionMatrix(); qRenderer.setSize(w, h); }
  });
}

/* ================= ABOUT: 3D GLOBE (real Natural Earth coastlines) ================= */
// Lat/lon are real GPS coordinates; pins use the same projection as the texture.
const globeLocations = [
  { name: 'LUBBOCK, TX', lat: 33.5779, lon: -101.8552, tag: 'RESIDENCY', desc: 'COTTON BELT CLAY FIELDWORK.', img: U('photo-1578749556568-bc2c40e68b61', 300) },
  { name: 'XISHUANGBANNA TROPICAL BOTANICAL GARDEN, CHINA', lat: 21.9167, lon: 101.2500, tag: 'BIO-ART', desc: 'TROPICAL BOTANICAL GARDEN ACOUSTICS.', img: U('photo-1618005182384-a83a8bd57fbe', 300) },
  { name: 'CHICAGOLAND, IL', lat: 41.8781, lon: -87.6298, tag: 'EXHIBITION', desc: 'KINETIC CANOPY INSTALLATION.', img: U('photo-1550684848-fac1c5b4e853', 300) },
  { name: 'WELLESLEY / BOSTON, MA', lat: 42.2968, lon: -71.2924, tag: 'RESEARCH', desc: 'PORCELAIN GLAZE ACOUSTICS.', img: U('photo-1565193566173-7a0ee3dbe261', 300) },
  { name: 'TAIPEI, TAIWAN', lat: 25.0330, lon: 121.5654, tag: 'RESIDENCY', desc: 'HIGH-FIRE CERAMICS STUDIO.', img: U('photo-1635070041078-e363dbe005cb', 300) },
  { name: 'KUALA LUMPUR, MALAYSIA', lat: 3.1390, lon: 101.6869, tag: 'ACOUSTICS', desc: 'TROPICAL RESONANCE & TEXTILE WEAVING.', img: U('photo-1596422846543-75c6fc197f07', 300) },
  { name: 'JINGDEZHEN, CHINA', lat: 29.2686, lon: 117.1786, tag: 'CERAMICS', desc: 'PORCELAIN WHEEL THROWING STUDY.', img: U('photo-1579783902614-a3fb3927b675', 300) },
  { name: 'SUKADANA, INDONESIA', lat: -1.2500, lon: 110.0000, tag: 'FIELDWORK', desc: 'WEST KALIMANTAN CLAY & RAINFOREST SOUNDSCAPES.', img: U('photo-1537996194471-e657df975ab4', 300) },
  { name: 'SHANGHAI, CHINA', lat: 31.2304, lon: 121.4737, tag: 'EXHIBITION', desc: 'MEDIA ART BIENNALE INSTALLATION.', img: U('photo-1508700115892-45ecd05ae2ad', 300) }
];
const LAND_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.0/land-50m.json';
let gScene, gCamera, gRenderer, gGroup, gPins, globeReady = false;

function drawEarth(ctx, W, H, land) {
  ctx.fillStyle = '#BFD9E2'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 1;
  for (let lon = -180; lon <= 180; lon += 30) { const x = (lon + 180) / 360 * W; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let lat = -90; lat <= 90; lat += 30) { const y = (90 - lat) / 180 * H; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  if (!land) return;
  const feats = land.type === 'FeatureCollection' ? land.features : [land];
  ctx.fillStyle = '#D9E2C3'; ctx.strokeStyle = '#A9BA8C'; ctx.lineWidth = 0.9; ctx.lineJoin = 'round';
  feats.forEach(f => {
    const g = f.geometry, polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
    polys.forEach(rings => {
      ctx.beginPath();
      rings.forEach(ring => ring.forEach((p, i) => { const x = (p[0] + 180) / 360 * W, y = (90 - p[1]) / 180 * H; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }));
      ctx.fill('evenodd'); ctx.stroke();
    });
  });
}

function init3DGlobe() {
  const container = document.getElementById('globe-container');
  if (!container || globeReady) return;
  globeReady = true;
  const width = container.clientWidth || 800, height = container.clientHeight || 450;
  gScene = new THREE.Scene();
  gCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000); gCamera.position.z = 210;
  gRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  gRenderer.setSize(width, height); gRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.insertBefore(gRenderer.domElement, container.firstChild);

  gGroup = new THREE.Group(); gScene.add(gGroup);
  const R = 65, cv = document.createElement('canvas'); cv.width = 2048; cv.height = 1024;
  const cctx = cv.getContext('2d'); drawEarth(cctx, 2048, 1024, null);
  const tex = new THREE.CanvasTexture(cv); tex.anisotropy = 8;
  const globe = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 96), new THREE.MeshLambertMaterial({ map: tex }));
  gGroup.add(globe);
  fetch(LAND_URL).then(r => r.json()).then(topo => {
    drawEarth(cctx, 2048, 1024, topojson.feature(topo, topo.objects.land)); tex.needsUpdate = true;
  }).catch(() => console.warn('Could not load coastline data'));

  gScene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const sun = new THREE.DirectionalLight(0xfff4e0, 0.5); sun.position.set(-120, 90, 160); gScene.add(sun);
  // soft atmosphere halo
  gScene.add(new THREE.Mesh(new THREE.SphereGeometry(R + 2.5, 48, 48), new THREE.MeshBasicMaterial({ color: 0xDDEBF0, transparent: true, opacity: 0.35, side: THREE.BackSide })));

  // Same convention as three.js SphereGeometry UVs: u = (lon + 180) / 360 starting at -180 lon.
  const toVec = (lat, lon, r) => {
    const phi = (90 - lat) * Math.PI / 180, th = (lon + 180) * Math.PI / 180;
    return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th));
  };
  gPins = new THREE.Group();
  globeLocations.forEach(loc => {
    const pos = toVec(loc.lat, loc.lon, R + 0.6);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(2.6, 16, 16), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
    dot.position.copy(pos); dot.userData = loc;
    const core = new THREE.Mesh(new THREE.SphereGeometry(1.1, 12, 12), new THREE.MeshBasicMaterial({ color: 0xE8765F }));
    core.position.copy(pos);
    gPins.add(dot, core);
  });
  gGroup.add(gPins);
  gGroup.rotation.y = 0.2; gGroup.rotation.x = 0.35;

  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
  let dragging = false, prev = { x: 0, y: 0 }, vel = { x: 0, y: 0.003 }, hoverUntil = 0;
  const pt = e => (e.touches && e.touches[0]) || e;

  function hover(e) {
    const r = gRenderer.domElement.getBoundingClientRect(), p = pt(e);
    mouse.set(((p.clientX - r.left) / r.width) * 2 - 1, -((p.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(mouse, gCamera);
    // include the globe so dots on the far side can't be hit through it
    const hit = ray.intersectObjects([globe, ...gPins.children])[0];
    if (hit && hit.object.userData.name) {
      const d = hit.object.userData;
      document.getElementById('globe-title').innerText = d.name;
      document.getElementById('globe-tag').innerText = d.tag;
      document.getElementById('globe-desc').innerText = d.desc;
      document.getElementById('globe-img').src = d.img;
      container.style.cursor = 'pointer'; hoverUntil = Date.now() + 400;
    } else container.style.cursor = dragging ? 'grabbing' : 'grab';
  }
  container.addEventListener('mousedown', e => { dragging = true; prev = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('mouseup', () => dragging = false);
  container.addEventListener('mousemove', e => {
    hover(e);
    if (!dragging) return;
    vel.y = (e.clientX - prev.x) * 0.005; vel.x = (e.clientY - prev.y) * 0.005;
    gGroup.rotation.y += vel.y; gGroup.rotation.x = Math.max(-1.2, Math.min(1.2, gGroup.rotation.x + vel.x));
    prev = { x: e.clientX, y: e.clientY };
  });
  container.addEventListener('click', hover);
  container.addEventListener('touchstart', e => { dragging = true; prev = { x: pt(e).clientX, y: pt(e).clientY }; hover(e); }, { passive: true });
  container.addEventListener('touchmove', e => {
    const p = pt(e); vel.y = (p.clientX - prev.x) * 0.005; vel.x = (p.clientY - prev.y) * 0.005;
    gGroup.rotation.y += vel.y; gGroup.rotation.x = Math.max(-1.2, Math.min(1.2, gGroup.rotation.x + vel.x)); prev = { x: p.clientX, y: p.clientY };
  }, { passive: true });
  window.addEventListener('touchend', () => dragging = false);

  (function animate() {
    requestAnimationFrame(animate);
    if (document.hidden || document.getElementById('page-about').classList.contains('hidden')) return;
    if (!dragging) {
      // pause the spin briefly while a dot is hovered so the blurb stays readable
      if (Date.now() > hoverUntil) { gGroup.rotation.y += vel.y; vel.y *= 0.95; if (Math.abs(vel.y) < 0.002) vel.y = 0.0025; }
    }
    gRenderer.render(gScene, gCamera);
  })();
}

/* ================= ROUTER & UI ================= */
function toggleWorksMenu() {
  const m = document.getElementById('works-menu'), a = document.getElementById('works-arrow'), hidden = m.classList.contains('hidden');
  m.classList.toggle('hidden', !hidden); m.classList.toggle('flex', hidden); a.style.transform = hidden ? 'rotate(180deg)' : 'rotate(0)';
}
function scrollTimeline(d) { document.getElementById('timeline-container').scrollBy({ left: d * 320, behavior: 'smooth' }); }
function toggleJournalAccordion(btn) {
  const p = btn.closest('.journal-accordion-item'), c = p.querySelector('.accordion-content'), i = p.querySelector('.fa-chevron-down');
  const open = c.classList.toggle('hidden') === false; i.style.transform = open ? 'rotate(180deg)' : 'rotate(0)';
}
function togglePodcastPlay() {
  const a = document.getElementById('podcast-audio'), i = document.getElementById('podcast-play-icon');
  if (a.paused) { a.play().catch(() => {}); i.className = 'fa-solid fa-pause'; } else { a.pause(); i.className = 'fa-solid fa-play ml-0.5'; }
}
function seekPodcast(v) { document.getElementById('podcast-audio').currentTime = v; }
const fmt = s => isNaN(s) ? '0:00' : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const audioEl = document.getElementById('podcast-audio');
audioEl.addEventListener('timeupdate', () => {
  const seek = document.getElementById('podcast-seek');
  seek.max = audioEl.duration || 100; seek.value = audioEl.currentTime;
  document.getElementById('podcast-time-curr').innerText = fmt(audioEl.currentTime);
  if (audioEl.duration) document.getElementById('podcast-time-dur').innerText = fmt(audioEl.duration);
});
audioEl.addEventListener('ended', () => document.getElementById('podcast-play-icon').className = 'fa-solid fa-play ml-0.5');

function renderWork(w) {
  const sib = works.filter(x => x.sec === w.sec), i = sib.indexOf(w);
  const nx = sib[(i + 1) % sib.length], pv = sib[(i - 1 + sib.length) % sib.length];
  const gallery = w.gallery || sib.filter(x => x !== w).slice(0, 3).map(x => x.img);
  const meta = [['YEAR', w.year || '2025'], ['MEDIUM', w.medium || w.badge], ['VENUE / CONTEXT', w.place || w.sub]];
  document.getElementById('work-detail').innerHTML = `
    <a href="#${w.sec}" class="inline-block text-xs uppercase text-zinc-900 hover:text-studio-muted">← BACK TO ${w.sec === 'design' ? 'DESIGN' : 'FINE ART'}</a>
    <div class="space-y-3"><span class="bg-[#D5EE10] text-zinc-900 text-xs px-3 py-1 uppercase">${w.badge}</span>
    <h1 class="text-4xl md:text-6xl text-zinc-900 uppercase">${w.title}</h1></div>
    <div class="h-[60vh] min-h-[320px] overflow-hidden bg-zinc-200"><img src="${w.img}" alt="${w.title}" class="w-full h-full object-cover"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="space-y-5">${meta.map(m => `<div><span class="text-[10px] text-studio-muted uppercase tracking-widest block">${m[0]}</span><span class="text-sm text-zinc-900 uppercase">${m[1]}</span></div>`).join('')}</div>
      <div class="md:col-span-2 space-y-4 text-sm text-zinc-800 uppercase leading-relaxed">
        <p>${w.text || w.story}</p>
        <p class="text-studio-muted">ADD A LONGER DESCRIPTION HERE: CONCEPT, PROCESS, MATERIALS, COLLABORATORS AND CREDITS.</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${gallery.map(g => `<div class="h-72 overflow-hidden bg-zinc-200"><img src="${g}" alt="" class="w-full h-full object-cover"></div>`).join('')}</div>
    <div class="flex justify-between border-t border-zinc-200 pt-6 text-xs uppercase">
      <a href="#work-${pv.id}" class="hover:text-studio-muted">← ${pv.title}</a><a href="#work-${nx.id}" class="hover:text-studio-muted">${nx.title} →</a>
    </div>`;
}

function navigateTo(pageId) {
  const valid = ['home', 'fineart', 'design', 'ceramics', 'media', 'writing', 'dance', 'about', 'cv', 'contact'];
  const worksPages = ['fineart', 'design', 'ceramics', 'media', 'writing', 'dance'];
  let t = pageId.replace('#', ''), nav = t;
  if (t.startsWith('work-')) {
    const w = works.find(x => x.id === +t.slice(5));
    if (w && w.sec !== 'ceramics') { renderWork(w); t = 'work'; nav = w.sec; } else t = nav = 'home';
  } else if (!valid.includes(t)) t = nav = 'home';
  document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
  if (worksPages.includes(nav)) {
    const m = document.getElementById('works-menu'); m.classList.remove('hidden'); m.classList.add('flex');
    document.getElementById('works-arrow').style.transform = 'rotate(180deg)';
  }
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('text-[#D5EE10]', l.getAttribute('href') === '#' + nav));
  document.getElementById('page-' + t).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'instant' });
  closeAlbum(); closeVideo(); toggleMenu(false);
  const names = { home: '', fineart: 'Fine Art', design: 'Design', ceramics: 'Ceramics', media: 'Photo/Video/Audio', writing: 'Writing', dance: 'Dance', about: 'About', cv: 'CV', contact: 'Contact' };
  const label = t === 'work' ? works.find(x => x.id === +pageId.replace('#work-', '')).title : names[t];
  document.title = (label ? label + ' — ' : '') + 'Quana Cannon';
  if (t === 'home') setTimeout(init3DLetters, 50);
  if (t === 'about') setTimeout(init3DGlobe, 100);
}
window.addEventListener('hashchange', () => navigateTo(location.hash || 'home'));

function openModal(id) {
  const p = works.find(x => x.id === id); if (!p) return;
  document.getElementById('modal-content').innerHTML = `
    <div class="h-72 bg-zinc-900 rounded-2xl overflow-hidden"><img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover"></div>
    <div class="space-y-2"><span class="bg-[#D5EE10] px-3 py-1 rounded-full text-xs text-zinc-900 uppercase">${p.badge}</span>
    <h2 class="text-3xl text-zinc-900 uppercase">${p.title}</h2><p class="text-xs text-studio-muted uppercase">${p.story}</p></div>`;
  document.getElementById('project-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('project-modal').classList.add('hidden'); document.body.style.overflow = 'auto'; }

let sharedAudioCtx = null;
function getAudioCtx() {
  try {
    if (!sharedAudioCtx) { const C = window.AudioContext || window.webkitAudioContext; if (C) sharedAudioCtx = new C(); }
    if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') sharedAudioCtx.resume().catch(() => {});
  } catch (e) {}
  return sharedAudioCtx;
}
function popShape(el) {
  el.classList.add('animate-bounce'); setTimeout(() => el.classList.remove('animate-bounce'), 600);
  try {
    const ctx = getAudioCtx(); if (!ctx || ctx.state !== 'running') return;
    const o = ctx.createOscillator(), g = ctx.createGain(), f = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    o.type = 'sine'; o.frequency.value = f[Math.floor(Math.random() * f.length)];
    g.gain.setValueAtTime(0.08, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
    o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}
let synth = null;
function toggleSynth() {
  try {
    const ctx = getAudioCtx(); if (!ctx) return;
    if (!synth) { // soft evolving drone: four sine tones with slow volume drift
      const master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
      [130.81, 196, 261.63, 329.63].forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain(), l = ctx.createOscillator(), lg = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f; g.gain.value = 0.05 / (1 + i * 0.3);
        l.frequency.value = 0.05 + i * 0.03; lg.gain.value = 0.02; l.connect(lg); lg.connect(g.gain);
        o.connect(g); g.connect(master); o.start(); l.start();
      });
      synth = { master, on: false };
    }
    synth.on = !synth.on;
    synth.master.gain.setTargetAtTime(synth.on ? 1 : 0, ctx.currentTime, 0.8);
    document.getElementById('synth-icon').className = synth.on ? 'fa-solid fa-volume-high text-zinc-900' : 'fa-solid fa-volume-xmark text-studio-muted';
    const wave = document.getElementById('sound-wave'); wave.classList.toggle('hidden', !synth.on); wave.classList.toggle('flex', synth.on);
  } catch (e) {}
}
function handleFormSubmit(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Inquiry from ' + f.get('name'))}&body=${encodeURIComponent(f.get('message') + '\n\n' + f.get('name') + ' <' + f.get('email') + '>')}`;
  const t = document.getElementById('toast'); t.classList.remove('hidden'); t.classList.add('flex');
  setTimeout(() => { t.classList.add('hidden'); t.classList.remove('flex'); }, 3500);
  e.target.reset();
}
function toggleMenu(force) {
  const sb = document.getElementById('sidebar'), open = force === undefined ? sb.classList.contains('hidden') : force;
  sb.classList.toggle('hidden', !open); sb.classList.toggle('flex', open);
  const btn = document.getElementById('menu-btn');
  btn.setAttribute('aria-expanded', open); btn.innerHTML = `<i class="fa-solid ${open ? 'fa-xmark' : 'fa-bars'}"></i>`;
}
function makeKeyboardFriendly() {
  document.querySelectorAll('[onclick].cursor-pointer').forEach(el => {
    el.tabIndex = 0; el.setAttribute('role', 'button');
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
  });
  document.querySelectorAll('img').forEach(i => { if (!i.closest('#globe-container')) i.loading = 'lazy'; });
}
function renderCV() {
  document.getElementById('cv-list').innerHTML = cv.map(sec => `
    <div class="space-y-3"><h2 class="text-xl text-zinc-900 uppercase border-b border-zinc-200 pb-2">${sec[0]}</h2>
    ${sec[1].map(r => `<div class="grid grid-cols-[110px_1fr] gap-4 text-sm"><span class="text-studio-muted">${r[0]}</span><p>${r[1]}</p></div>`).join('')}</div>`).join('');
  const m = document.getElementById('contact-mail'); m.href = 'mailto:' + CONTACT_EMAIL; m.textContent = CONTACT_EMAIL;
}

document.addEventListener('DOMContentLoaded', () => { renderAll(); renderCV(); makeKeyboardFriendly(); navigateTo(location.hash || 'home'); });
