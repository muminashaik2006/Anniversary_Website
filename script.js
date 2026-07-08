/* =========================================================
   EVERMORE — PREMIUM ROMANTIC WEBSITE SCRIPT
   Table of contents:
   1.  Hardcoded Constants (names, dates, letter, photos, songs, quotes)
   2.  Utility Helpers
   3.  Loader
   4.  Theme Toggle (Dark / Light)
   5.  Navbar (scroll state, mobile burger)
   6.  Cursor Effects (glow, sparkle, heart trail)
   7.  Background Ambience (stars, shooting stars, petals, hearts, particles)
   8.  Scroll Reveal Animations
   9.  Dynamic Greeting
   10. Countdown Timer
   11. Animated Love Quotes
   12. Memory Timeline
   13. Love Letter / Envelope + Typewriter
   14. Premium Gallery + Lightbox + Slideshow
   15. Music Player
   16. Proposal Section
   17. Surprise & Memory Modals
   18. Toast Notifications
   19. Fireworks Engine
   20. Confetti Engine
   21. Back To Top
   22. Keyboard Shortcuts
   23. Init
   ========================================================= */

/* =========================================================
   1. HARDCODED CONSTANTS — edit these to personalize
   ========================================================= */
const YOUR_NAME = "MEENA";
const THEIR_NAME = "NANI";

// Anniversary / countdown target — set to the next occurrence you want to count down to
const ANNIVERSARY_DATE = new Date("2026-07-08T11:59:00");
const COUNTDOWN_LABEL = "Counting down to our 14th LOVE ANNIVERSARY 💖";

// The love letter body. Use \n\n for paragraph breaks — typed out on envelope open.
const LETTER = `My Dearest Husband, 💖

Happy 14th Month Anniversary, my love.❤️💞

It's amazing how fourteen months have passed, yet every day with you still feels like a beautiful beginning. Loving you has become the most natural and meaningful part of my life. Every moment we've shared, the laughter, the quiet conversations, the little adventures, and even the challenges, has only made my love for you grow deeper. 💗✨

You are more than just my husband. You are my safest place, my biggest supporter, my best friend, and the person who makes every ordinary day feel extraordinary. Your smile brings peace to my heart, your voice comforts my soul, and your love reminds me every day how blessed I am. 🤍💝

Thank you for believing in me, for standing beside me through every high and low, and for loving me in ways that words can never fully describe. You have taught me that love isn't just about grand gestures. It's found in the little things, the way you hold my hand, the way you look at me, the way you make me laugh when I need it most, and the way you always make me feel like I'm home. 💕🫶

If I had the chance to live a thousand different lives, I would still search for you in every single one of them. I would still choose your heart, your smile, your kindness, and the beautiful life we're building together. 💓🌹

Fourteen months may seem like just a number to the world, but to me, they represent countless memories, endless laughter, unconditional love, and a million reasons to be grateful for us. Every day, I fall in love with you a little more, and every tomorrow gives me another reason to keep choosing you. 💘💗

I don't know what the future holds, but I know one thing with absolute certainty. I want every sunrise, every dream, every success, every challenge, and every chapter of my life to be shared with you. ❤️‍🩹💖

Thank you for being my answered prayer, my greatest blessing, and the love of my life. 💞🤍

Here's to fourteen beautiful months, countless unforgettable memories, and a forever that is only just beginning. 💍❤️

I love you more than words can ever express, more than time can ever measure, and more than this world could ever understand. 💝💖💗❤️🤍

Forever yours 💌

❤️🩷 Your Wife
VUKOTI MEENA
`;

// Gallery photos — replace the URLs with your own images
const PHOTOS = [
  { src: "IMG1.jpeg", title: "In a world full of temporary things, I'm grateful we chose forever. ❤️" },
  { src: "IMG2.jpeg", title: "You're my today, tomorrow, and every forever after. ✨ "},
  { src: "IMG3.jpeg", title: "365+ days weren't enough… here's to our beautiful forever. 🤍" },
  { src: "IMG4.jpeg", title: "You are my once-in-a-lifetime kind of love. 🌸" },
  { src: "IMG5.jpeg", title: "Some people search for a lifetime to find what I found in you. ❤️" },
  { src: "IMG6.jpeg", title: "The universe was kind when it wrote our story. ✨ "},
]

// Timeline entries — memories with dates
const TIMELINE = [
  { date: "November 13, 2022", title: "How We Met", desc: "It all started with our English Group Discussion record.", img: PHOTOS[0].src },
  { date: "December 08, 2022", title: "First proposal", desc: "The day I first asked you to be mine. ❤️", img: PHOTOS[1].src },
  { date: "May 08, 2025", title: "The Day You Said Yes", desc: "The beginning of everything I ever dreamed of❤️✨", img: PHOTOS[2].src },
  { date: "May 14, 2025", title: "The Day We Became One", desc: "The day a simple hug became an unforgettable memory❤️", img: PHOTOS[3].src },
  { date: "May 08, 2026", title: "First Year Together of Our Marriage Life", desc: "A year ago, we promised forever. Today, I'd make that promise all over again. ❤️, Marriage with you has been the most beautiful journey of my life", img: PHOTOS[4].src },
  { date: "July 08, 2026", title: "14th Month Marriage Anniversary", desc: "Still choosing you. Still easy. Still the best decision I've made , Our journey keeps getting more beautiful with every passing month. ❤️", img: PHOTOS[5].src },
];

// Music playlist — replace src with paths to your own audio files
const SONGS = [
  {
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    src: "I_Wanna_Be_Yours.mp3",
    cover: "🎵"
  },
  {
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    src: "Tujh Mein Rab Dikhta Hai.mp3",
    cover: "🎧"
  },
  {
    title: "Yedemaina Sakha",
    artist: "A.R. Rahman",
    src: "Yedemaina-Sakha.mp3",
    cover: "🎶"
  },
  {
    title: "Zaalima",
    artist: "Arijit Singh",
    src: "Zaalima.mp3",
    cover: "🎼"
  }
];

// Rotating love quotes
const QUOTES = [
  "In all the world, there is no heart for me like yours.",
  "You are my today and all of my tomorrows.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are my sun, my moon, and all of my stars.",
  "Being deeply loved by someone gives you strength; loving someone deeply gives you courage.",
];

// Surprise popup message
const SURPRISE_MESSAGE = `Here's a little secret: every time my phone buzzes, some small hopeful part of me still wishes it's you. Happy almost-everything, ${THEIR_NAME}.`;

/* =========================================================
   2. UTILITY HELPERS
   ========================================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const rand = (min, max) => Math.random() * (max - min) + min;
const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
const formatTime = (secs) => {
  if (!isFinite(secs) || secs < 0) secs = 0;
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

/* =========================================================
   3. LOADER
   ========================================================= */
function initLoader() {
  const loader = $("#loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("loaded"), 900);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => loader.classList.add("loaded"), 3000);
}

/* =========================================================
   4. THEME TOGGLE
   ========================================================= */
function initTheme() {
  const toggle = $("#themeToggle");
  const stored = null; // no localStorage per no-persistence-needed spec; session-only toggle
  const apply = (isLight) => {
    document.body.classList.toggle("light-theme", isLight);
  };
  // Default to dark (galaxy) theme
  apply(false);

  toggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    showToast(isLight ? "☀ Light mode on" : "☾ Dark mode on");
  });

  return { toggleTheme: () => toggle.click() };
}

/* =========================================================
   5. NAVBAR
   ========================================================= */
function initNavbar() {
  const navbar = $("#navbar");
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    navbar.style.top = current > lastScroll && current > 120 ? "-90px" : "16px";
    lastScroll = current;
  }, { passive: true });

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  $$(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });

  $("#scrollHint").addEventListener("click", () => {
    $("#timeline").scrollIntoView({ behavior: "smooth" });
  });
}

/* =========================================================
   6. CURSOR EFFECTS
   ========================================================= */
function initCursorEffects() {
  const glow = $("#cursorGlow");
  if (!glow) return;
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isFinePointer) return;

  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.left = `${mouseX}px`;
    glow.style.top = `${mouseY}px`;

    // Occasionally spawn a sparkle
    if (Math.random() < 0.12) spawnCursorFX(mouseX, mouseY, "sparkle");
  });

  // Grow glow on interactive elements
  $$("a, button, .gallery-item, .timeline-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
      glow.style.width = "50px";
      glow.style.height = "50px";
      glow.style.borderColor = "var(--accent-gold)";
    });
    el.addEventListener("mouseleave", () => {
      glow.style.width = "26px";
      glow.style.height = "26px";
      glow.style.borderColor = "var(--accent-rose)";
    });
  });

  // Click spawns a heart burst
  window.addEventListener("click", (e) => spawnCursorFX(e.clientX, e.clientY, "heart"));
}

function spawnCursorFX(x, y, type) {
  const el = document.createElement("div");
  if (type === "sparkle") {
    el.className = "cursor-sparkle";
    el.textContent = ["✦", "✧", "⋆", "✩"][Math.floor(rand(0, 4))];
    el.style.color = ["var(--accent-gold)", "var(--accent-rose)", "var(--accent-teal)"][Math.floor(rand(0, 3))];
    el.style.fontSize = `${rand(10, 16)}px`;
  } else {
    el.className = "cursor-heart-trail";
    el.innerHTML = `<svg viewBox="0 0 32 29" width="14" height="13"><path d="M16 28.5C16 28.5 1 19.5 1 9.5C1 4.5 5 1 9.5 1C12.5 1 15 2.5 16 5C17 2.5 19.5 1 22.5 1C27 1 31 4.5 31 9.5C31 19.5 16 28.5 16 28.5Z" fill="#ff8fb1"/></svg>`;
  }
  el.style.left = `${x + rand(-10, 10)}px`;
  el.style.top = `${y + rand(-10, 10)}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

/* =========================================================
   7. BACKGROUND AMBIENCE
   ========================================================= */

// --- 7a. Twinkling stars + shooting stars (canvas) ---
function initStars() {
  const canvas = $("#starsCanvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.floor((width * height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: rand(0.4, 1.8),
      baseAlpha: rand(0.3, 1),
      twinkleSpeed: rand(0.4, 1.6),
      offset: rand(0, Math.PI * 2),
    }));
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    t += 0.016;
    for (const s of stars) {
      const alpha = s.baseAlpha * (0.55 + 0.45 * Math.sin(t * s.twinkleSpeed + s.offset));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${clamp(alpha, 0, 1)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

function initShootingStars() {
  const container = $("#shootingStars");
  function spawn() {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.top = `${rand(0, 40)}%`;
    star.style.left = `${rand(0, 70)}%`;
    const duration = rand(1.1, 2.2);
    star.style.animationDuration = `${duration}s`;
    container.appendChild(star);
    setTimeout(() => star.remove(), duration * 1000 + 100);
  }
  // Spawn at randomized intervals for a natural feel
  function loop() {
    spawn();
    setTimeout(loop, rand(2500, 7000));
  }
  loop();
}

// --- 7b. Falling rose petals ---
function initPetals() {
  const container = $("#petalsContainer");
  const total = window.innerWidth < 700 ? 10 : 18;
  for (let i = 0; i < total; i++) spawnPetal(container, true);
}
function spawnPetal(container, initial) {
  const petal = document.createElement("div");
  petal.className = "petal";
  const duration = rand(9, 18);
  const size = rand(9, 16);
  petal.style.left = `${rand(0, 100)}%`;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.setProperty("--drift", `${rand(-80, 80)}px`);
  petal.style.animationDuration = `${duration}s`;
  petal.style.animationDelay = initial ? `${rand(0, duration)}s` : "0s";
  petal.style.opacity = rand(0.5, 0.9);
  container.appendChild(petal);
}

// --- 7c. Floating hearts ---
function initFloatingHearts() {
  const container = $("#heartsContainer");
  const total = window.innerWidth < 700 ? 8 : 14;
  for (let i = 0; i < total; i++) spawnHeart(container, true);
}
function spawnHeart(container, initial) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  const size = rand(10, 22);
  heart.innerHTML = `<svg viewBox="0 0 32 29" width="${size}" height="${size * 0.9}"><path d="M16 28.5C16 28.5 1 19.5 1 9.5C1 4.5 5 1 9.5 1C12.5 1 15 2.5 16 5C17 2.5 19.5 1 22.5 1C27 1 31 4.5 31 9.5C31 19.5 16 28.5 16 28.5Z"/></svg>`;
  const duration = rand(10, 20);
  heart.style.left = `${rand(0, 100)}%`;
  heart.style.setProperty("--drift", `${rand(-60, 60)}px`);
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = initial ? `${rand(0, duration)}s` : "0s";
  container.appendChild(heart);
}

// --- 7d. Ambient particles ---
function initParticles() {
  const container = $("#particlesContainer");
  const total = window.innerWidth < 700 ? 16 : 30;
  for (let i = 0; i < total; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = `${rand(0, 100)}%`;
    p.style.top = `${rand(0, 100)}%`;
    p.style.setProperty("--px", `${rand(-40, 40)}px`);
    p.style.setProperty("--py", `${rand(-100, -40)}px`);
    p.style.animationDuration = `${rand(6, 14)}s`;
    p.style.animationDelay = `${rand(0, 8)}s`;
    container.appendChild(p);
  }
}

/* =========================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================= */
function initScrollReveal() {
  const targets = $$(".reveal, .timeline-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  targets.forEach(t => observer.observe(t));
}

/* =========================================================
   9. DYNAMIC GREETING
   ========================================================= */
function initDynamicGreeting() {
  const el = $("#dynamicGreeting");
  const hour = new Date().getHours();
  let greeting;
  if (hour < 5) greeting = `Still awake thinking of you, ${THEIR_NAME}?`;
  else if (hour < 12) greeting = `Good morning, ${THEIR_NAME}`;
  else if (hour < 17) greeting = `Good afternoon, my love`;
  else if (hour < 21) greeting = `Good evening, ${THEIR_NAME}`;
  else greeting = `Sweet dreams soon, ${THEIR_NAME}`;
  el.textContent = greeting;

  // Populate name placeholders across the page
  $$("#theirNameHero, #theirNameLetter").forEach(n => n.textContent = THEIR_NAME);
  $("#myNameLetter").textContent = YOUR_NAME;
  $("#footerName1").textContent = YOUR_NAME;
  $("#footerName2").textContent = THEIR_NAME;
}

/* =========================================================
   10. COUNTDOWN TIMER
   ========================================================= */
function initCountdown() {
  $("#countdownLabel").textContent = COUNTDOWN_LABEL;

  function getNextTarget() {
    const now = new Date();
    let target = new Date(ANNIVERSARY_DATE);
    // If the date has passed this year, roll to next year (keeps countdown "live")
    if (target < now) {
      target.setFullYear(now.getFullYear() + (target.getMonth() < now.getMonth() || (target.getMonth() === now.getMonth() && target.getDate() < now.getDate()) ? 1 : 0));
    }
    return target;
  }

  function tick() {
    const now = new Date();
    let target = getNextTarget();
    let diff = target - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    $("#cdDays").textContent = String(days).padStart(2, "0");
    $("#cdHours").textContent = String(hours).padStart(2, "0");
    $("#cdMinutes").textContent = String(minutes).padStart(2, "0");
    $("#cdSeconds").textContent = String(seconds).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

/* =========================================================
   11. ANIMATED LOVE QUOTES
   ========================================================= */
function initQuotes() {
  const el = $("#quoteText");
  let index = 0;
  el.textContent = QUOTES[0];

  setInterval(() => {
    el.classList.add("fade");
    setTimeout(() => {
      index = (index + 1) % QUOTES.length;
      el.textContent = QUOTES[index];
      el.classList.remove("fade");
    }, 600);
  }, 5000);
}

/* =========================================================
   12. MEMORY TIMELINE
   ========================================================= */
function initTimeline() {
  const list = $("#timelineList");
  TIMELINE.forEach((entry, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card glass" data-index="${i}">
        <span class="timeline-date">${entry.date}</span>
        <h3>${entry.title}</h3>
        <p>${entry.desc}</p>
      </div>
    `;
    list.appendChild(item);
  });

  // Re-run reveal observer for newly created nodes
  initScrollReveal();

  // Open memory modal on card click
  $$(".timeline-card").forEach(card => {
    card.addEventListener("click", () => {
      const entry = TIMELINE[Number(card.dataset.index)];
      openMemoryModal(entry);
    });
  });
}

function openMemoryModal(entry) {
  $("#memoryModalImg").src = entry.img;
  $("#memoryModalImg").alt = entry.title;
  $("#memoryModalTitle").textContent = entry.title;
  $("#memoryModalDate").textContent = entry.date;
  $("#memoryModalDesc").textContent = entry.desc;
  openModal("#memoryModal");
}

/* =========================================================
   13. LOVE LETTER / ENVELOPE + TYPEWRITER
   ========================================================= */
function initEnvelope() {
  const envelope = $("#envelope");
  const typewriterEl = $("#typewriterText");
  const hint = $("#envelopeHint");
  let opened = false;
  let typed = false;

  envelope.addEventListener("click", () => {
    if (opened) return;
    opened = true;
    envelope.classList.add("open");
    hint.textContent = "reading...";
    setTimeout(() => {
      if (!typed) {
        typed = true;
        typeWriter(typewriterEl, LETTER, 22, () => {
          hint.textContent = "with all my heart";
        });
      }
    }, 700);
  });
}

function typeWriter(el, text, speed, onDone) {
  el.textContent = "";
  let i = 0;
  function step() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      // Vary speed slightly for a natural typed feel, pause longer on punctuation
      const char = text.charAt(i - 1);
      const delay = char === "." || char === "," ? speed * 5 : speed;
      setTimeout(step, delay);
    } else if (onDone) {
      onDone();
    }
  }
  step();
}

/* =========================================================
   14. PREMIUM GALLERY + LIGHTBOX + SLIDESHOW
   ========================================================= */
let currentLightboxIndex = 0;
let slideshowInterval = null;

function initGallery() {
  const grid = $("#galleryGrid");
  PHOTOS.forEach((photo, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item reveal";
    item.dataset.index = i;
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
      <div class="gallery-overlay">
        <h4>${photo.title}</h4>
        <span>${photo.date}</span>
      </div>
    `;
    grid.appendChild(item);
  });

  initScrollReveal();

  $$(".gallery-item").forEach(item => {
    item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
  });

  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => navigateLightbox(-1));
  $("#lightboxNext").addEventListener("click", () => navigateLightbox(1));
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  $("#slideshowToggle").addEventListener("click", toggleSlideshow);
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxImage();
  $("#lightbox").classList.add("active");
  $("#lightbox").setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  $("#lightbox").classList.remove("active");
  $("#lightbox").setAttribute("aria-hidden", "true");
  stopSlideshow();
}
function navigateLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + PHOTOS.length) % PHOTOS.length;
  updateLightboxImage();
}
function updateLightboxImage() {
  const photo = PHOTOS[currentLightboxIndex];
  $("#lightboxImg").src = photo.src;
  $("#lightboxImg").alt = photo.title;
  $("#lightboxCaption").textContent = `${photo.title} — ${photo.date}`;
}

function toggleSlideshow() {
  const btn = $("#slideshowToggle");
  if (slideshowInterval) {
    stopSlideshow();
    btn.textContent = "▶ Auto Slideshow";
  } else {
    if (!$("#lightbox").classList.contains("active")) openLightbox(0);
    slideshowInterval = setInterval(() => navigateLightbox(1), 2800);
    btn.textContent = "⏸ Stop Slideshow";
    showToast("Auto slideshow started ✨");
  }
}
function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    const btn = $("#slideshowToggle");
    if (btn) btn.textContent = "▶ Auto Slideshow";
  }
}

/* =========================================================
   15. MUSIC PLAYER
   ========================================================= */
const AUTOPLAY_ENABLED = false; // set to true to autoplay first song on load (subject to browser policy)
let currentSongIndex = 0;

function initMusicPlayer() {
  const audio = $("#audioPlayer");
  const playPauseBtn = $("#playPause");
  const progressBar = $("#progressBar");
  const volumeSlider = $("#volumeSlider");
  const player = $(".music-player");
  const playlistEl = $("#playlist");

  // Build playlist UI
  SONGS.forEach((song, i) => {
    const li = document.createElement("li");
    li.className = "playlist-item";
    li.dataset.index = i;
    li.innerHTML = `
      <div>
        <div class="pl-title">${song.cover} ${song.title}</div>
        <div class="pl-artist">${song.artist}</div>
      </div>
      <div class="pl-duration">--:--</div>
    `;
    li.addEventListener("click", () => loadSong(i, true));
    playlistEl.appendChild(li);
  });

  function loadSong(index, autoplay) {
    currentSongIndex = index;
    const song = SONGS[index];
    audio.src = song.src;
    $("#songTitle").textContent = song.title;
    $("#songArtist").textContent = song.artist;
    $$(".playlist-item").forEach(el => el.classList.toggle("active", Number(el.dataset.index) === index));
    if (autoplay) {
      audio.play().then(() => setPlayingState(true)).catch(() => setPlayingState(false));
    }
  }

  function setPlayingState(isPlaying) {
    playPauseBtn.textContent = isPlaying ? "⏸" : "▶";
    player.classList.toggle("playing", isPlaying);
  }

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => setPlayingState(true)).catch(() => {
        showToast("Add your audio files to enable playback 🎵");
      });
    } else {
      audio.pause();
      setPlayingState(false);
    }
  });

  $("#nextSong").addEventListener("click", () => {
    loadSong((currentSongIndex + 1) % SONGS.length, !audio.paused || player.classList.contains("playing"));
  });
  $("#prevSong").addEventListener("click", () => {
    loadSong((currentSongIndex - 1 + SONGS.length) % SONGS.length, !audio.paused || player.classList.contains("playing"));
  });

  audio.addEventListener("timeupdate", () => {
    if (!isFinite(audio.duration)) return;
    progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
    $("#currentTime").textContent = formatTime(audio.currentTime);
    $("#durationTime").textContent = formatTime(audio.duration);
  });
  audio.addEventListener("loadedmetadata", () => {
    $("#durationTime").textContent = formatTime(audio.duration);
    const li = $(`.playlist-item[data-index="${currentSongIndex}"] .pl-duration`);
    if (li) li.textContent = formatTime(audio.duration);
  });
  audio.addEventListener("ended", () => {
    loadSong((currentSongIndex + 1) % SONGS.length, true);
  });
  audio.addEventListener("error", () => {
    // Missing audio file placeholder — fails silently with a helpful toast, shown once
  });

  progressBar.addEventListener("input", () => {
    if (isFinite(audio.duration)) {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
  });
  audio.volume = volumeSlider.value / 100;

  // Initial load (no autoplay unless enabled + user gesture policies allow it)
  loadSong(0, false);
  if (AUTOPLAY_ENABLED) {
    document.addEventListener("click", function firstClickPlay() {
      audio.play().then(() => setPlayingState(true)).catch(() => {});
      document.removeEventListener("click", firstClickPlay);
    }, { once: true });
  }

  // Expose controls for keyboard shortcuts
  window.__musicControls = {
    togglePlay: () => playPauseBtn.click(),
    next: () => $("#nextSong").click(),
    prev: () => $("#prevSong").click(),
  };
}

/* =========================================================
   16. PROPOSAL SECTION
   ========================================================= */
function initProposal() {
  const btn = $("#proposalBtn");
  const answer = $("#proposalAnswer");
  btn.addEventListener("click", () => {
    btn.style.display = "none";
    answer.hidden = false;
    launchFireworks(3200);
    launchConfetti(2600);
    showToast(`${THEIR_NAME} said yes! 💍✨`);
  });
}

/* =========================================================
   17. SURPRISE & MEMORY MODALS
   ========================================================= */
function initModals() {
  $("#surpriseMessage").textContent = SURPRISE_MESSAGE;

  $("#surpriseBtn").addEventListener("click", () => openModal("#surpriseModal"));
  $("#surpriseFireworks").addEventListener("click", () => {
    launchFireworks(2200);
    launchConfetti(1600);
  });

  $$("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      closeModal(btn.closest(".modal-overlay"));
    });
  });

  $$(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });
}

function openModal(selector) {
  const modal = typeof selector === "string" ? $(selector) : selector;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}
function closeAllModals() {
  $$(".modal-overlay.active").forEach(closeModal);
  closeLightbox();
  $("#shortcutsPanel").classList.remove("active");
}

/* =========================================================
   18. TOAST NOTIFICATIONS
   ========================================================= */
function showToast(message) {
  const container = $("#toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast glass";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3700);
}

/* =========================================================
   19. FIREWORKS ENGINE
   ========================================================= */
function launchFireworks(duration = 2500) {
  const canvas = $("#fireworksCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ff8fb1", "#f3cf8a", "#a78bfa", "#6ee7d8", "#e85d8a"];

  function createBurst(x, y) {
    const count = 46;
    const color = colors[Math.floor(rand(0, colors.length))];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = rand(2, 6);
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: rand(0.012, 0.022),
        color,
        size: rand(2, 3.5),
      });
    }
  }

  let running = true;
  let launchTimer = setInterval(() => {
    createBurst(rand(window.innerWidth * 0.2, window.innerWidth * 0.8), rand(window.innerHeight * 0.15, window.innerHeight * 0.55));
  }, 420);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vy += 0.045; // gravity
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.globalAlpha = clamp(p.life, 0, 1);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (running || particles.length) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();

  setTimeout(() => {
    running = false;
    clearInterval(launchTimer);
  }, duration);
}

/* =========================================================
   20. CONFETTI ENGINE
   ========================================================= */
function launchConfetti(duration = 2200) {
  const canvas = $("#confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#ff8fb1", "#f3cf8a", "#a78bfa", "#6ee7d8", "#e85d8a", "#ffffff"];
  const pieces = Array.from({ length: 140 }, () => ({
    x: rand(0, canvas.width),
    y: rand(-canvas.height, 0),
    w: rand(6, 11),
    h: rand(8, 14),
    color: colors[Math.floor(rand(0, colors.length))],
    rotation: rand(0, 360),
    rotationSpeed: rand(-6, 6),
    speedY: rand(2, 5),
    speedX: rand(-1.5, 1.5),
  }));

  let elapsed = 0;
  const start = performance.now();

  function animate(now) {
    elapsed = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      if (p.y > canvas.height + 20) p.y = -20;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(animate);
}

/* =========================================================
   21. BACK TO TOP
   ========================================================= */
function initBackToTop() {
  const btn = $("#backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 480);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   22. KEYBOARD SHORTCUTS
   ========================================================= */
function initKeyboardShortcuts(theme) {
  const shortcutsToggle = $("#shortcutsToggle");
  const shortcutsPanel = $("#shortcutsPanel");

  shortcutsToggle.addEventListener("click", () => shortcutsPanel.classList.toggle("active"));
  document.addEventListener("click", (e) => {
    if (!$("#shortcutsHint").contains(e.target)) shortcutsPanel.classList.remove("active");
  });

  window.addEventListener("keydown", (e) => {
    // Ignore shortcuts when typing in a form field (defensive, though this site has no inputs besides sliders)
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    switch (e.code) {
      case "Space":
        e.preventDefault();
        window.__musicControls?.togglePlay();
        break;
      case "ArrowRight":
        window.__musicControls?.next();
        break;
      case "ArrowLeft":
        window.__musicControls?.prev();
        break;
      case "KeyT":
        theme.toggleTheme();
        break;
      case "Escape":
        closeAllModals();
        break;
    }
  });
}

/* =========================================================
   23. INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  const theme = initTheme();
  initNavbar();
  initCursorEffects();

  initStars();
  initShootingStars();
  initPetals();
  initFloatingHearts();
  initParticles();

  initDynamicGreeting();
  initCountdown();
  initQuotes();
  initTimeline();
  initEnvelope();
  initGallery();
  initMusicPlayer();
  initProposal();
  initModals();
  initBackToTop();
  initKeyboardShortcuts(theme);

  initScrollReveal();

  // Welcome toast
  setTimeout(() => showToast(`Welcome back, ${THEIR_NAME} 💕`), 1600);
});

// Recalculate particle-heavy layers on resize (debounced) to keep density sensible
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    $("#fireworksCanvas").width = window.innerWidth;
    $("#fireworksCanvas").height = window.innerHeight;
    $("#confettiCanvas").width = window.innerWidth;
    $("#confettiCanvas").height = window.innerHeight;
  }, 200);
});
