'use strict';

/* =========================================================
   CONFIGURACIÓN — edita aquí tu contenido
   ========================================================= */
const CONFIG = {
  // Deja vacío ('') lo que aún no tengas; el botón saldrá desactivado.
  email: 'banibarza19@gmail.com',
  github: 'https://github.com/Banibarza',
  linkedin: 'https://www.linkedin.com/in/bani-rafael-juarez-barza-67711b2b2/'
};

const SPLASHES = [
  '¡Portafolio de desarrollador!',
  '¡Ahora con Laravel!',
  '¡Sin creepers!',
  '¡Compila a la primera!',
  '¡Backend de calidad!',
  '¡Pásate por el inventario!'
];

const PROJECTS = [
  {
    name: 'SIETEC28',
    sub: 'Sistema de control escolar · Secundaria Técnica Núm. 28',
    desc: 'Sistema integral de control escolar para la Escuela Secundaria Técnica Núm. 28 de Salina Cruz, Oaxaca. ' +
          'Mi parte es el backend del módulo de Gestión Académica: grupos, horarios, aspirantes y preinscripción, ' +
          'y calificaciones, con autenticación JWT y control de acceso por roles. Las pruebas corren contra PostgreSQL real.',
    stack: ['Laravel 12', 'PHP 8.4', 'PostgreSQL 16', 'Docker', 'JWT', 'Spatie Permission', 'Pest', 'Git Flow'],
    icon: 'pasto',
    preview: 'img/proyectos/sietec28.webp', // captura que se muestra en el detalle (opcional)
    tag: 'Residencia profesional'
  },
  {
    name: 'Recolección de Basura',
    sub: 'Gestión del servicio de recolección · Salina Cruz',
    desc: 'Proyecto desarrollado en el hackatón del Tecnológico de Salina Cruz (ITSAL), donde obtuvimos el tercer lugar. ' +
          'Es un sistema web para administrar el servicio de recolección de basura en Salina Cruz, Oaxaca, ' +
          'con módulos de rutas, camiones, colonias, incidencias, avisos, bitácora y usuarios, ' +
          'y una base de datos MySQL diseñada para el proyecto.',
    stack: ['PHP', 'MySQL', 'HTML', 'JavaScript'],
    icon: 'pasto',
    tag: '3er lugar en hackatón · ITSAL'
  },
  {
    name: 'Chatbot IA',
    sub: 'Chatbot con respuestas en tiempo real',
    desc: 'Chatbot que se conecta a un modelo de lenguaje local con Ollama mediante Spring AI. ' +
          'Las respuestas se envían en streaming, así que el texto aparece mientras el modelo lo genera, ' +
          'en una interfaz web sencilla.',
    stack: ['Java 17', 'Spring Boot', 'Spring AI', 'Ollama', 'HTML', 'JavaScript'],
    icon: 'pasto',
    tag: 'Inteligencia artificial'
  },
  {
    name: 'Bot de Telegram',
    sub: 'Bot con Spring Boot y la API de Telegram',
    desc: 'Aplicación en Java con Spring Boot que integra la API de Telegram: recibe los mensajes enviados al bot, ' +
          'los procesa y responde automáticamente a cada usuario.',
    stack: ['Java', 'Spring Boot', 'Telegram API', 'Maven'],
    icon: 'pasto',
    tag: 'Integración de APIs'
  },
  {
    name: 'Chat en tiempo real',
    sub: 'Chat con WebSocket',
    desc: 'Aplicación de chat en tiempo real con Spring WebSocket. El servidor gestiona las conexiones ' +
          'y reenvía cada mensaje a los usuarios conectados, con un cliente web en Thymeleaf y JavaScript.',
    stack: ['Java', 'Spring Boot', 'WebSocket', 'Thymeleaf', 'JavaScript'],
    icon: 'pasto',
    tag: 'Tiempo real'
  }
];

const CATS = {
  backend:       { label: 'Backend',             icon: 'espada' },
  datos:         { label: 'Bases de datos',      icon: 'botella' },
  frontend:      { label: 'Frontend',            icon: 'brujula' },
  integraciones: { label: 'IA e integraciones',  icon: 'libro' },
  herramientas:  { label: 'Herramientas',        icon: 'pico-hierro' },
  otras:         { label: 'Otras',               icon: 'libro' }
};

// Agrega, quita o edita habilidades aquí.
// "cat" puede ser: backend, datos, frontend, integraciones, herramientas u otras.
// "badge" es opcional (la versión que se muestra junto al nombre).
// "icon" es opcional: espada, hacha, pico, pico-hierro, brujula, casco, totem, libro, botella,
// manzana, cofre, mesa, diamante, oro, tnt, esmeralda, reloj, creeper, horno, estrella,
// cabeza, cama, pasto (las imágenes están en ICON_FILES).
const SKILLS = [
  { name: 'Laravel',          cat: 'backend',       badge: '12',  icon: 'espada' },
  { name: 'PHP',              cat: 'backend',       badge: '8.4', icon: 'hacha' },
  { name: 'Java',             cat: 'backend',       badge: '17',  icon: 'pico' },
  { name: 'Spring Boot',      cat: 'backend',                     icon: 'totem' },
  { name: 'JWT + Spatie',     cat: 'backend',                     icon: 'cabeza' },
  { name: 'Pest',             cat: 'backend',                     icon: 'creeper' },
  { name: 'PostgreSQL',       cat: 'datos',         badge: '16',  icon: 'diamante' },
  { name: 'MySQL',            cat: 'datos',                       icon: 'botella' },
  { name: 'Angular',          cat: 'frontend',                    icon: 'manzana' },
  { name: 'HTML, CSS y JS',   cat: 'frontend',                    icon: 'pico-hierro' },
  { name: 'Spring AI + Ollama', cat: 'integraciones',             icon: 'estrella' },
  { name: 'WebSocket',        cat: 'integraciones',               icon: 'reloj' },
  { name: 'Telegram API',     cat: 'integraciones',               icon: 'oro' },
  { name: 'Docker',           cat: 'herramientas',                icon: 'horno' },
  { name: 'Git Flow',         cat: 'herramientas',                icon: 'cama' },
  { name: 'Maven',            cat: 'herramientas',                icon: 'mesa' }
];

// Experiencias: la más reciente primero.
const EXPERIENCES = [
  {
    title: 'Residencia profesional · SIETEC28',
    place: 'Escuela Secundaria Técnica Núm. 28, Salina Cruz',
    period: '2026',
    desc: 'Backend del módulo de Gestión Académica: grupos, horarios, aspirantes y preinscripción, y calificaciones, con autenticación JWT, control de acceso por roles y pruebas automatizadas con Pest.',
    icon: 'casco'
  },
  {
    title: 'Proyectos con Java y Spring Boot',
    place: 'Proyectos personales',
    period: '2026',
    desc: 'Chatbot con IA local (Spring AI y Ollama) con respuestas en streaming, bot de Telegram y chat en tiempo real con WebSocket.',
    icon: 'brujula'
  },
  {
    title: '3er lugar en hackatón · Recolección de basura',
    place: 'Hackatón del Tecnológico de Salina Cruz (ITSAL)',
    period: '2025',
    desc: 'Desarrollamos en equipo un sistema web en PHP y MySQL para gestionar rutas, camiones, colonias, incidencias, avisos y usuarios del servicio de recolección de basura. El proyecto obtuvo el tercer lugar.',
    icon: 'tnt'
  },
  {
    title: 'Certificación · Artificial Intelligence Technology and Applications',
    place: 'Huawei ICT Academy · Verificada en Credly',
    period: '2026',
    desc: 'Fundamentos de inteligencia artificial y sus aplicaciones.',
    icon: 'huawei-ia',
    wide: true
  },
  {
    title: 'Certificación · 5G Network Architecture and Key Technologies',
    place: 'Huawei ICT Academy · Verificada en Credly',
    period: '2025',
    desc: 'Arquitectura de redes 5G y sus tecnologías principales.',
    icon: 'huawei-5g',
    wide: true
  },
  {
    title: 'Formación en programación',
    place: 'Alura Latam',
    period: '2024',
    desc: 'Cursos y retos prácticos de lógica de programación y JavaScript.',
    icon: 'libro'
  }
];

const ACHIEVEMENTS = {
  'proyectos':   'Explorador de mundos',
  'detalle':     'Cargando mundo...',
  'sobre-mi':    'Conociendo al jugador',
  'habilidades': 'Libro de habilidades',
  'contacto':    'Mensaje en una botella',
  'opciones':    'Ajustes finos'
};

/* =========================================================
   Iconos
   Si existe assets/iconos/<nombre>.png se usa ese archivo;
   si no, se dibuja el icono pixelado de ICONS.
   ========================================================= */
const ICON_DIR = 'assets/iconos/';

const PALETTE = {
  k: '#1c1c1c', w: '#ececec', g: '#9a9a9a', b: '#6b4a2b', B: '#a4743f',
  c: '#43d6d6', C: '#1b8f9a', r: '#d63a3a', y: '#f2d13b', Y: '#fff3a0',
  G: '#5aa02c', D: '#3f7d2a', p: '#8a4fd6', P: '#4b2a8a',
  e: '#41d37a', E: '#1d8a46'
};

const ICONS = {
  espada: [
    '......kk', '.....kwk', '....kwk.', '.k.kwk..',
    '.kkwk...', '..kBk...', '.kbBk...', 'kbk.k...'
  ],
  pocion: [
    '...kk...', '...kw...', '..kwwk..', '.kppppk.',
    'kppPpppk', 'kpppPppk', '.kppppk.', '..kkkk..'
  ],
  diamante: [
    '..kkkk..', '.kcwcck.', 'kcwcccCk', 'kcccccCk',
    '.kcccCk.', '..kcCk..', '...kk...', '........'
  ],
  cofre: [
    '.kkkkkk.', 'kBBBBBBk', 'kbbbbbbk', 'kbbkkbbk',
    'kbbyybbk', 'kbbbbbbk', 'kbbbbbbk', '.kkkkkk.'
  ],
  pasto: [
    'GGGGGGGG', 'GDGGGDGG', 'bGbbGbbG', 'bBbbbBbb',
    'bbbbbBbb', 'bBbbbbbb', 'bbbBbbbb', 'bbbbbbbb'
  ],
  libro: [
    '.kkkkkk.', 'kBBBBBBk', 'kBrrrrBk', 'kBrwwrBk',
    'kBrrrrBk', 'kBBBBBBk', '.kkkkkk.', '........'
  ],
  esmeralda: [
    '...kk...', '..kewk..', '.keweEk.', 'keweeeEk',
    'keeeeeEk', '.keeeEk.', '..keEk..', '...kk...'
  ],
  sonido: [
    '...k....', '..kgk.w.', 'kkggk..w', 'kgggk..w',
    'kgggk..w', 'kkggk..w', '..kgk.w.', '...k....'
  ],
  silencio: [
    '...k....', '..kgk...', 'kkggkr.r', 'kgggk.r.',
    'kgggkr.r', 'kkggk...', '..kgk...', '...k....'
  ],
  sol: [
    '.yyyyyy.', 'yYYYYYYy', 'yYwwwwYy', 'yYwwwwYy',
    'yYwwwwYy', 'yYwwwwYy', 'yYYYYYYy', '.yyyyyy.'
  ],
  luna: [
    '.gggggg.', 'gwwwwwwg', 'gwwgwwwg', 'gwwwwgwg',
    'gwgwwwwg', 'gwwwwwwg', 'gwwwgwwg', '.gggggg.'
  ]
};

// Nombres de icono que se encontraron como PNG en assets/iconos/
// Los GIF animados de img/ se usan tal cual (siguen moviéndose).
const ICON_FILES = {
  espada:  'img/Enchanted_Diamond_Sword.gif',
  libro:   'img/Enchanted_Book.gif',
  botella: "img/Bottle_o'_Enchanting.gif",
  pasto:   'img/4k-2_Grass_Block.png',
  hacha:   'img/Enchanted_Diamond_Axe.gif',
  pico:    'img/Enchanted_Diamond_Pickaxe.gif',
  brujula: 'img/Recovery_Compass_JE1_BE1.gif',
  'pico-hierro': 'img/Iron_Pickaxe_JE3_BE2.png',
  casco:   'img/Golden_Helmet_(item)_JE3_BE3.png',
  totem:   'img/Totem_of_Undying_JE2_BE2.png',
  manzana: 'img/Apple_JE3_BE3.png',
  cofre:   'img/Chest.gif',
  mesa:    'img/Crafting_Table_JE4_BE3.png',
  diamante:'img/Diamond_JE3_BE3.png',
  oro:     'img/Gold_Ingot_JE4_BE2.png',
  tnt:     'img/TNT_JE3_BE2.png',
  esmeralda: 'img/Emerald_JE3_BE3.png',
  reloj:   'img/Clock_JE3_BE3.gif',
  creeper: 'img/Creeper_Head_(S)_JE1.png',
  horno:   'img/Lit_Furnace_(S).gif',
  estrella:'img/Nether_Star.gif',
  cabeza:  'img/Player_Head_(S)_JE2.png',
  cama:    'img/Red_Bed_(item)_BE2.png',
  // Insignias de certificaciones
  'huawei-ia': 'img/huawei-ia.png',
  'huawei-5g': 'img/huawei-5g.png'
};

function icon(name) {
  if (ICON_FILES[name]) return `<img src="${ICON_FILES[name]}" alt="" aria-hidden="true">`;
  const rows = ICONS[name] || ICONS.libro;
  let rects = '';
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch !== '.') rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${PALETTE[ch]}"/>`;
    });
  });
  return `<svg viewBox="0 0 8 8" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}

/* =========================================================
   Estado y utilidades
   ========================================================= */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const STORE_KEY = 'portafolio-bani-v1';

const state = {
  screen: 'inicio',
  history: [],
  sound: true,
  achievements: true,
  unlocked: [],
  selected: 0,
  filter: 'todo'
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    ['sound', 'achievements'].forEach(k => { if (k in saved) state[k] = saved[k]; });
    if (Array.isArray(saved.unlocked)) state.unlocked = saved.unlocked.filter(id => id in ACHIEVEMENTS);
  } catch (e) { /* sin almacenamiento: se usa el estado por defecto */ }
}
function saveState() {
  try {
    const { sound, achievements, unlocked } = state;
    localStorage.setItem(STORE_KEY, JSON.stringify({ sound, achievements, unlocked }));
  } catch (e) { /* ignorar */ }
}

/* =========================================================
   Sonido
   Si existe assets/sonidos/<nombre>.ogg|.mp3|.wav se reproduce ese
   archivo; si no, se usa el sonido sintetizado.
   ========================================================= */
const SOUND_DIR = 'assets/sonidos/';
const SOUND_EXTS = ['ogg', 'mp3', 'wav'];
const SOUNDS = {
  tocar:  { vol: 0.6 },
  logro:  { vol: 0.7 },
  musica: { vol: 0.25, loop: true }
};
const soundFiles = {}; // nombre -> HTMLAudioElement que sí cargó
const soundUrls = {};  // nombre -> URL que funcionó, o null si no hay archivo

// Prueba las extensiones en orden. Se da por buena con 'loadedmetadata'
// (no 'canplaythrough', que en móviles a veces nunca llega).
function probeSound(name) {
  return new Promise(resolve => {
    const tryExt = i => {
      if (i >= SOUND_EXTS.length) return resolve(null);
      const a = new Audio();
      a.preload = 'auto';
      a.addEventListener('loadedmetadata', () => resolve(a), { once: true });
      a.addEventListener('error', () => tryExt(i + 1), { once: true });
      a.src = `${SOUND_DIR}${name}.${SOUND_EXTS[i]}`;
      a.load();
    };
    tryExt(0);
  });
}

// Efectos cortos: se descargan y decodifican en memoria (Web Audio) para que
// suenen al instante, y se salta el silencio que traiga el archivo al inicio.
const soundBuffers = {}; // nombre -> { buf, offset }
const soundReady = {};   // nombre -> promesa de carga

function getAudioCtx() {
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function leadingSilence(buf) {
  const d = buf.getChannelData(0);
  let i = 0;
  while (i < d.length && Math.abs(d[i]) < 0.01) i++;
  return Math.max(0, i / buf.sampleRate - 0.005);
}

async function loadBuffer(name) {
  for (const ext of SOUND_EXTS) {
    const res = await fetch(`${SOUND_DIR}${name}.${ext}`);
    if (!res.ok) continue;
    const buf = await getAudioCtx().decodeAudioData(await res.arrayBuffer());
    soundBuffers[name] = { buf, offset: leadingSilence(buf) };
    soundUrls[name] = res.url;
    return;
  }
  soundUrls[name] = null;
}

function loadHtmlAudio(name) {
  return probeSound(name).then(a => {
    soundUrls[name] = a ? a.src : null;
    if (!a) return;
    a.volume = SOUNDS[name].vol;
    a.loop = !!SOUNDS[name].loop;
    soundFiles[name] = a;
    if (name === 'musica' && musicWanted) syncMusic();
  });
}

function loadSounds() {
  Object.keys(SOUNDS).forEach(name => {
    soundReady[name] = SOUNDS[name].loop
      ? loadHtmlAudio(name)
      // Si fetch no se puede usar (p. ej. abriendo el HTML con file://), se usa <audio>.
      : loadBuffer(name).catch(() => loadHtmlAudio(name));
  });
}

function playBuffer(name) {
  const { buf, offset } = soundBuffers[name];
  const ctx = getAudioCtx();
  if (ctx.state === 'suspended') ctx.resume();
  const src = ctx.createBufferSource();
  const gain = ctx.createGain();
  gain.gain.value = SOUNDS[name].vol;
  src.buffer = buf;
  src.connect(gain).connect(ctx.destination);
  src.start(0, offset);
}

// Reproduce el archivo si existe; solo usa el sintetizado si el archivo
// definitivamente no está (o falla al reproducirse).
function play(name, fallback) {
  if (!state.sound) return;
  if (soundBuffers[name]) return playBuffer(name);
  if (soundUrls[name] === undefined && soundReady[name]) {
    // Aún cargando: se reproduce en cuanto esté listo.
    soundReady[name].then(() => play(name, fallback));
    return;
  }
  const known = soundUrls[name];
  if (known === null) { if (fallback) fallback(); return; }
  const urls = known ? [known] : SOUND_EXTS.map(ext => `${SOUND_DIR}${name}.${ext}`);
  const tryUrl = i => {
    if (i >= urls.length) { if (fallback) fallback(); return; }
    const s = new Audio(urls[i]);
    s.volume = SOUNDS[name] ? SOUNDS[name].vol : 1;
    let failed = false;
    const fail = () => { if (failed) return; failed = true; tryUrl(i + 1); };
    s.addEventListener('error', fail, { once: true });
    s.play().catch(err => { if (err && err.name === 'NotSupportedError') fail(); });
  };
  tryUrl(0);
}

// La música solo puede empezar tras una interacción del usuario.
let musicWanted = false;
function syncMusic() {
  const m = soundFiles.musica;
  if (!m) return;
  if (state.sound && musicWanted) m.play().catch(() => {});
  else m.pause();
}
document.addEventListener('pointerdown', () => { musicWanted = true; syncMusic(); }, { once: true });
document.addEventListener('keydown', () => { musicWanted = true; syncMusic(); }, { once: true });

let audioCtx = null;
function tone(freq, dur, { type = 'square', vol = 0.05, delay = 0 } = {}) {
  if (!state.sound) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + dur);
  } catch (e) { /* audio no disponible */ }
}
const clickSound = () => play('tocar');
const levelSound = () => play('logro', () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.14, { type: 'triangle', vol: 0.07, delay: i * 0.09 })));

/* =========================================================
   Navegación entre pantallas
   ========================================================= */
function go(name, { push = true } = {}) {
  const target = document.getElementById(name);
  if (!target) return;
  $$('.screen').forEach(s => { s.hidden = s !== target; });
  if (push && state.screen !== name) state.history.push(state.screen);
  state.screen = name;
  document.body.dataset.screen = name;
  if (name === 'inicio') { state.history = []; pickSplash(); runGolem(); }
  updateHash();
  window.scrollTo({ top: 0 });
  unlock(name);
  const first = $('[data-autofocus]', target) || $('button:not([disabled])', target);
  if (first) first.focus({ preventScroll: true });
}

function back() {
  const prev = state.history.pop() || 'inicio';
  go(prev, { push: false });
}

/* La pantalla actual se guarda en la URL (#sobre-mi, #proyecto-2, #experiencias...)
   para que al recargar la página se quede donde estabas. */
function updateHash() {
  let h = state.screen;
  if (h === 'inicio') h = '';
  else if (h === 'detalle') h = `proyecto-${state.selected + 1}`;
  else if (h === 'habilidades' && bookTab === 'exp') h = 'experiencias';
  const url = location.pathname + location.search + (h ? '#' + h : '');
  try { history.replaceState(null, '', url); } catch (e) { /* p. ej. file:// en algunos navegadores */ }
}

function restoreFromHash() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (!h || h === 'inicio') return;
  const proj = /^proyecto-(\d+)$/.exec(h);
  if (proj) {
    const i = Number(proj[1]) - 1;
    if (!PROJECTS[i]) return;
    state.selected = i;
    renderWorlds();
    fillProject();
    state.history = ['inicio', 'proyectos'];
    go('detalle', { push: false });
    return;
  }
  if (h === 'experiencias') { bookTab = 'exp'; renderBook(); state.history = ['inicio']; go('habilidades', { push: false }); return; }
  if (h === 'detalle' || !document.getElementById(h) || !$('#' + CSS.escape(h)).classList.contains('screen')) return;
  state.history = ['inicio'];
  go(h, { push: false });
}

/* =========================================================
   Gólem de cobre: entra caminando, se detiene un momento y se va.
   Sale una vez por carga de página, la primera vez que se ve el inicio.
   ========================================================= */
const GOLEM = {
  walk: 'img/inicio/minecraft-copper-golem (1).gif', // caminando
  idle: 'img/inicio/minecraft-copper-golem.gif',     // parado
  speed: 110,       // píxeles por segundo
  pause: 3000,      // ms parado (una vuelta completa del GIF)
  stopAt: 0.74      // dónde se detiene (fracción del ancho de pantalla)
};
let golemDone = false;

function loadImg(src) {
  return new Promise((ok, fail) => { const i = new Image(); i.onload = ok; i.onerror = fail; i.src = encodeURI(src); });
}

async function runGolem() {
  if (golemDone || state.screen !== 'inicio') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  golemDone = true;
  try { await Promise.all([loadImg(GOLEM.walk), loadImg(GOLEM.idle)]); } catch (e) { return; }

  const el = $('#golem');
  const img = $('img', el);
  img.src = encodeURI(GOLEM.walk);
  el.hidden = false;
  const W = window.innerWidth;
  const size = el.offsetWidth;
  const stopX = Math.min(W * GOLEM.stopAt, W - size) - size / 2;
  const walk = (from, to) => el.animate(
    [{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
    { duration: Math.abs(from - to) / GOLEM.speed * 1000, easing: 'linear', fill: 'forwards' }
  ).finished;

  await walk(W, stopX);                       // entra desde la derecha
  img.src = encodeURI(GOLEM.idle);            // se queda parado
  await new Promise(r => setTimeout(r, GOLEM.pause));
  img.src = encodeURI(GOLEM.walk);
  await walk(stopX, -size);                   // se va por la izquierda
  el.hidden = true;

  await runAllay();                           // después del gólem llega el allay
}

/* =========================================================
   Allay: después del gólem cruza volando de izquierda a derecha
   por encima del nombre (el logo de arriba), subiendo y bajando.
   ========================================================= */
const ALLAY = {
  src:   'img/inicio/Allay_Fly_Different_Angle.webp',
  speed: 170,      // píxeles por segundo
  minTime: 7000,   // ms mínimos para cruzar (en teléfono la pantalla es angosta)
  wave:  0.32,     // qué tanto sube y baja (fracción del alto del logo)
  waves: 3,        // cuántas veces sube y baja en todo el camino
  wavesPhone: 2,   // en pantallas angostas sube y baja menos veces
  delay: 600       // ms de espera después de que se va el gólem
};

async function runAllay() {
  try { await loadImg(ALLAY.src); } catch (e) { return; }
  await new Promise(r => setTimeout(r, ALLAY.delay));

  const el = $('#allay');
  $('img', el).src = encodeURI(ALLAY.src);
  el.hidden = false;
  const W = window.innerWidth, H = window.innerHeight;
  const w = el.offsetWidth, h = el.offsetHeight;
  const from = -w, to = W;
  const waves = W < 680 ? ALLAY.wavesPhone : ALLAY.waves;

  // La ruta va a la altura del nombre (centro del logo).
  const logo = $('#inicio .logo');
  const box = logo ? logo.getBoundingClientRect() : null;
  const midY = box && box.height ? box.top + box.height / 2 : H * 0.25;
  const amp = (box && box.height ? box.height : H * 0.2) * ALLAY.wave;

  // Puntos de la ruta: avanza a la derecha subiendo y bajando sobre el nombre.
  const steps = 60;
  const frames = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = from + (to - from) * t;
    // Nunca se sale por arriba de la pantalla
    const y = Math.max(6, midY - amp * Math.sin(2 * Math.PI * waves * t) - h / 2);
    // Se inclina un poco según suba o baje
    const tilt = -10 * Math.cos(2 * Math.PI * waves * t);
    frames.push({ transform: `translate(${x}px, ${y}px) rotate(${tilt}deg)` });
  }

  await el.animate(frames, {
    duration: Math.max((to - from) / ALLAY.speed * 1000, ALLAY.minTime),
    easing: 'linear',
    fill: 'forwards'
  }).finished;
  el.hidden = true;
}

function pickSplash() {
  $('#splash').textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
}

/* =========================================================
   Logros
   ========================================================= */
function updateAchCount() {
  $('#ach-count').textContent = `Logros: ${state.unlocked.length}/${Object.keys(ACHIEVEMENTS).length}`;
}

function unlock(id) {
  if (!(id in ACHIEVEMENTS) || state.unlocked.includes(id)) return;
  state.unlocked.push(id);
  saveState();
  updateAchCount();
  if (state.achievements) showToast(ACHIEVEMENTS[id]);
}

// Los avisos salen de uno en uno: el siguiente aparece cuando el anterior ya se fue.
const toastQueue = [];
let toastBusy = false;

function showToast(name) {
  toastQueue.push(name);
  if (!toastBusy) nextToast();
}

function nextToast() {
  const name = toastQueue.shift();
  if (name === undefined) { toastBusy = false; return; }
  toastBusy = true;
  const box = document.createElement('div');
  box.className = 'toast';
  box.innerHTML = `<span class="toast-icon">${icon('libro')}</span>
    <div><div class="toast-title">¡Logro conseguido!</div><div class="toast-name"></div></div>`;
  $('.toast-name', box).textContent = name;
  $('#toasts').appendChild(box);
  levelSound();
  setTimeout(() => {
    box.classList.add('out');
    let done = false;
    const finish = () => { if (done) return; done = true; box.remove(); nextToast(); };
    box.addEventListener('animationend', finish, { once: true });
    setTimeout(finish, 600); // por si la animación no dispara el evento
  }, 2200);
}

/* =========================================================
   Proyectos
   ========================================================= */
function renderWorlds() {
  const list = $('#world-list');
  list.innerHTML = '';
  PROJECTS.forEach((p, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'world';
    b.setAttribute('aria-pressed', String(i === state.selected));
    b.innerHTML = `<span class="world-icon">${icon(p.icon)}</span>
      <span><span class="world-name"></span><span class="world-sub"></span><span class="world-tag"></span></span>`;
    // Si el proyecto tiene captura, se ve difuminada al fondo, a la derecha
    if (p.preview) {
      const bg = document.createElement('span');
      bg.className = 'world-bg';
      bg.style.backgroundImage = `url("${p.preview}")`;
      b.prepend(bg);
      b.classList.add('has-bg');
    }
    $('.world-name', b).textContent = p.name;
    $('.world-sub', b).textContent = p.sub;
    $('.world-tag', b).textContent = p.tag;
    b.addEventListener('click', () => { state.selected = i; renderWorlds(); $$('.world')[i].focus(); });
    b.addEventListener('dblclick', openProject);
    list.appendChild(b);
  });
}

function makeLink(link) {
  if (link.href) {
    const a = document.createElement('a');
    a.className = 'mc-btn';
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.label;
    a.style.textDecoration = 'none';
    a.style.display = 'block';
    return a;
  }
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'mc-btn';
  b.disabled = true;
  b.textContent = `${link.label} (pendiente)`;
  return b;
}

function fillProject() {
  const p = PROJECTS[state.selected];
  $('#t-detalle').textContent = p.name;
  $('#d-sub').textContent = p.sub;
  $('#d-desc').textContent = p.desc;
  const stack = $('#d-stack');
  stack.innerHTML = '';
  p.stack.forEach(t => { const li = document.createElement('li'); li.textContent = t; stack.appendChild(li); });

  // Muestra del proyecto: captura con su nombre encima
  const prev = $('#d-preview');
  prev.hidden = !p.preview;
  if (p.preview) {
    $('#d-preview-img').src = p.preview;
    $('#d-preview-img').alt = `Captura de ${p.name}`;
    $('#d-preview-link').href = p.preview;
    $('#d-preview-tag').textContent = p.tag;
    $('#d-preview-name').textContent = p.name;
    $('#d-preview-stack').textContent = p.stack.slice(0, 3).join(' · ');
  }
}

function openProject() {
  fillProject();
  go('detalle');
}

/* =========================================================
   Habilidades y experiencias
   ========================================================= */
let bookTab = 'skills';

function entryEl({ ic, name, meta, desc, example, wide }) {
  const el = document.createElement('div');
  el.className = 'entry' + (example ? ' example' : '') + (wide ? ' entry-wide' : '');
  el.innerHTML = `<span class="entry-icon">${icon(ic)}</span>
    <div><span class="entry-name"></span><span class="entry-meta"></span><span class="entry-desc"></span></div>`;
  $('.entry-name', el).textContent = name;
  $('.entry-meta', el).textContent = meta || '';
  $('.entry-desc', el).textContent = desc || '';
  return el;
}

function renderBook() {
  const body = $('#book-body');
  body.innerHTML = '';
  body.classList.toggle('is-timeline', bookTab === 'exp');
  $('#tab-skills').setAttribute('aria-selected', String(bookTab === 'skills'));
  $('#tab-exp').setAttribute('aria-selected', String(bookTab === 'exp'));

  if (bookTab === 'skills') {
    Object.entries(CATS).forEach(([key, cat]) => {
      const items = SKILLS.filter(s => s.cat === key);
      if (!items.length) return;
      const h = document.createElement('div');
      h.className = 'book-group';
      h.innerHTML = `<span class="group-label"></span><span class="group-count"></span>`;
      $('.group-label', h).textContent = cat.label;
      $('.group-count', h).textContent = `${items.length}`;
      body.appendChild(h);
      items.forEach(s => body.appendChild(entryEl({
        ic: s.icon || cat.icon,
        name: s.name + (s.badge ? ' ' + s.badge : ''),
        desc: s.desc,
        example: s.example
      })));
    });
  } else {
    EXPERIENCES.forEach(x => body.appendChild(entryEl({
      ic: x.icon,
      name: x.title,
      meta: `${x.place} · ${x.period}`,
      desc: x.desc,
      example: x.example,
      wide: x.wide
    })));
  }
}

function renderTabIcons() {
  $('#tab-skills').textContent = 'Habilidades';
  $('#tab-exp').textContent = 'Experiencias';
}

function initBook() {
  renderTabIcons();
  $('#tab-skills').addEventListener('click', () => { bookTab = 'skills'; renderBook(); updateHash(); });
  $('#tab-exp').addEventListener('click', () => { bookTab = 'exp'; renderBook(); updateHash(); });
  renderBook();
}

/* =========================================================
   Contacto
   ========================================================= */
function renderContact() {
  const wrap = $('#contact-links');
  wrap.innerHTML = '';
  const links = [
    { label: 'Correo', href: CONFIG.email ? 'mailto:' + CONFIG.email : '' },
    { label: 'GitHub', href: CONFIG.github },
    { label: 'LinkedIn', href: CONFIG.linkedin }
  ];
  links.forEach(l => wrap.appendChild(makeLink(l)));
}

function onSubmit(e) {
  e.preventDefault();
  const name = $('#f-name').value.trim();
  const msg = $('#f-msg').value.trim();
  const out = $('#form-msg');
  out.classList.remove('ok');
  if (!name) { out.textContent = 'Escribe tu nombre.'; $('#f-name').focus(); return; }
  if (msg.length < 10) { out.textContent = 'El mensaje debe tener al menos 10 caracteres.'; $('#f-msg').focus(); return; }
  if (!CONFIG.email) { out.textContent = 'Falta configurar el correo en CONFIG, dentro de js/main.js.'; return; }
  out.classList.add('ok');
  out.textContent = 'Abriendo tu app de correo...';
  const subject = encodeURIComponent('Mensaje desde tu portafolio');
  const body = encodeURIComponent(`Hola, soy ${name}.\n\n${msg}`);
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
}

/* =========================================================
   Opciones
   ========================================================= */
function renderOptions() {
  $('#opt-sound').textContent = `Sonido: ${state.sound ? 'Sí' : 'No'}`;
  $('#opt-ach').textContent = `Avisos de logros: ${state.achievements ? 'Sí' : 'No'}`;

  const snd = $('#btn-sound');
  snd.innerHTML = icon(state.sound ? 'sonido' : 'silencio');
  snd.title = state.sound ? 'Silenciar' : 'Activar sonido'; snd.setAttribute('aria-label', snd.title);
  syncMusic();
}

/* Iconos fijos de la interfaz (se repintan si aparece un PNG propio) */
function renderStaticIcons() {
  $('#badge-contact').innerHTML = icon('esmeralda');
}

function renderAll() {
  renderOptions();
  renderWorlds();
  renderTabIcons();
  renderBook();
  renderStaticIcons();
}

// Busca un PNG por cada icono usado; si existe, lo usa en lugar del pixelado.
// Los que ya tienen GIF asignado en ICON_FILES no se buscan.
function loadIconFiles() {
  const names = new Set(Object.keys(ICONS));
  [...PROJECTS, ...SKILLS, ...EXPERIENCES].forEach(x => { if (x.icon) names.add(x.icon); });
  Object.keys(ICON_FILES).forEach(n => names.delete(n));
  let pending = names.size;
  let found = false;
  const done = () => { if (--pending === 0 && found) renderAll(); };
  names.forEach(name => {
    const img = new Image();
    img.onload = () => { ICON_FILES[name] = img.src; found = true; done(); };
    img.onerror = done;
    img.src = `${ICON_DIR}${name}.png`;
  });
}

function onOption(kind) {
  if (kind === 'sound') state.sound = !state.sound;
  if (kind === 'ach') state.achievements = !state.achievements;
  if (kind === 'reset') { state.unlocked = []; updateAchCount(); }
  saveState();
  renderOptions();
}

/* =========================================================
   Eventos globales
   ========================================================= */
document.addEventListener('click', e => {
  const el = e.target.closest('button, a');
  if (!el) return;
  if (el.matches('.mc-btn, .world') && !el.disabled) clickSound();

  if (el.dataset.go) go(el.dataset.go);
  else if (el.hasAttribute('data-back')) back();
  else if (el.dataset.opt) onOption(el.dataset.opt);
  else if (el.id === 'btn-play-world') openProject();
  else if (el.id === 'btn-exit') exitSite();
});

// Cierra la pestaña. Los navegadores solo dejan cerrar con window.close()
// las pestañas abiertas por un script; si no se puede, se deja en blanco.
function exitSite() {
  // Pequeña espera para que se oiga el sonido del botón.
  setTimeout(() => {
    window.close();
    setTimeout(() => { if (!window.closed) location.replace('about:blank'); }, 150);
  }, 250);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && state.screen !== 'inicio') { clickSound(); back(); }
});

/* =========================================================
   Inicio
   ========================================================= */
loadState();
renderOptions();
renderWorlds();
initBook();
renderContact();
$('#chat-form').addEventListener('submit', onSubmit);
renderStaticIcons();
$('#version-text').textContent = `Portafolio 1.0/Laravel (${SKILLS.length} habilidades)`;
document.body.dataset.screen = 'inicio';
updateAchCount();
pickSplash();
restoreFromHash();
runGolem();
loadIconFiles();
loadSounds();
