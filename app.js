const INVITE_DATA = {
  name1: "Wei Li",
  name2: "Deborah",
  dateISO: "2026-10-03T09:30:00",
  date: "Saturday, 3rd Oct 2026",
  venue: "The Petals",
  rsvpDeadline: "15 Jun 2026"
};

const LANG_KEY = "inviteLang";
const MUSIC_WANTED_KEY = "inviteMusicWanted";
const MUSIC_TIME_KEY = "inviteMusicTime";
let currentLang = localStorage.getItem(LANG_KEY) || "en";

const TRANSLATIONS = {
  en: {
    welcomeLine: "Welcome to our Beginning",
    welcomeLinePunctuated: "Welcome to our Beginning.",
    introEyebrow: "A Love Story Invitation",
    introSubtitle: "A heartfelt celebration for Wei Li and Deborah.",
    enterInvitation: "Enter Invitation",
    navHome: "Home",
    navStory: "Details",
    navMap: "Map",
    navPlay: "Play & RSVP",
    homeTogether: "Together with love and joy",
    dateLabel: "Date",
    venueLabel: "Venue",
    rsvp: "RSVP",
    watchJourney: "Watch Our Journey",
    sloganTitle: "Layer by layer, loop by loop, we build one beautiful future together.",
    sloganBody: "Crafted by precision and stitched with love.",
    countdownEyebrow: "Countdown to \"I do\"",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    eveningFlow: "Evening Flow",
    scheduleReception: "Reception",
    scheduleReceptionDetail: "9:30 AM | Guests arrival and welcome.",
    scheduleCeremony: "Ceremony",
    scheduleCeremonyDetail: "10:00 AM | Wedding ceremony begins.",
    scheduleLunch: "Lunch",
    scheduleLunchDetail: "11:30 AM | Lunch and celebration.",
    storyEyebrow: "Wedding Celebration",
    storyTitle: "Celebration Details",
    storyLede: "Join Wei Li and Deborah for a warm celebration at The Petals. Layer by layer, loop by loop, we build one beautiful future together.",
    scheduleSnapshot: "Schedule Timeline",
    timeReception: "9:30 AM",
    timelineReception: "Reception and guest welcome.",
    timeCeremony: "10:00 AM",
    timelineCeremony: "Wedding ceremony begins.",
    timeLunch: "11:30 AM",
    timelineLunch: "Lunch and celebration at The Petals.",
    dressCode: "Dress Code Palette",
    dressCodeFormal: "Dress Code: Formal",
    weddingWord: "Wedding",
    attireWord: "Attire",
    attireNote: "We kindly encourage our guests to wear these colors for our special day.",
    attireThanks: "Thank you!",
    pastelPink: "Pastel Pink",
    pastelBlue: "Pastel Blue",
    pastelPurple: "Pastel Purple",
    paleSlate: "Pale Slate",
    softLinen: "Soft Linen",
    petalFrost: "Petal Frost",
    paleSky: "Pale Sky",
    softBlush: "Soft Blush",
    dressColorsAria: "Dress code colors",
    mapEyebrow: "Find Your Way",
    mapTitle: "Wedding Location",
    mapFrameTitle: "Wedding location map",
    openGoogleMaps: "Open Google Maps",
    gameEyebrow: "Mini Game Lounge",
    gameTitle: "Play Before You RSVP",
    gameLede: "Match our photos, then send your RSVP for 3rd October 2026.",
    memoryTitle: "Photo Pair Memory",
    memoryDesc: "Match all photo cards to unlock RSVP access.",
    movesLabel: "Moves:",
    gateLocked: "Win the game to unlock RSVP.",
    shuffle: "Shuffle",
    skipRsvp: "I don't have time for this...",
    celebrateWithUs: "Celebrate With Us",
    rsvpBy: "Please RSVP by",
    openRsvpForm: "Open RSVP Form",
    musicOn: "Music On",
    musicOff: "Music Off",
    gameWonTitle: "You did it!",
    gameWonBody: "You finished in {{moves}} moves. See you at The Petals!",
    openRsvpNow: "Open RSVP Now",
    close: "Close",
    langToggle: "中文"
  },
  zh: {
    welcomeLine: "欢迎来到我们的起点",
    welcomeLinePunctuated: "欢迎来到我们的起点。",
    introEyebrow: "爱的邀请函",
    introSubtitle: "诚邀您一同见证 Wei Li 和 Deborah 的幸福时刻。",
    enterInvitation: "进入邀请函",
    navHome: "首页",
    navStory: "庆典详情",
    navMap: "地图",
    navPlay: "游戏与回函",
    homeTogether: "携手同心，满怀喜悦",
    dateLabel: "日期",
    venueLabel: "地点",
    rsvp: "回函",
    watchJourney: "观看我们的旅程",
    sloganTitle: "一层层构筑，一针针编织，我们共同创造美好未来。",
    sloganBody: "以精密雕刻，用爱意缝合。",
    countdownEyebrow: "距离婚礼倒数",
    days: "天",
    hours: "小时",
    minutes: "分钟",
    seconds: "秒",
    eveningFlow: "婚礼流程",
    scheduleReception: "迎宾",
    scheduleReceptionDetail: "上午 9:30 | 来宾签到与欢迎。",
    scheduleCeremony: "仪式",
    scheduleCeremonyDetail: "上午 10:00 | 婚礼仪式开始。",
    scheduleLunch: "午宴",
    scheduleLunchDetail: "上午 11:30 | 午宴与庆祝。",
    storyEyebrow: "婚礼庆典",
    storyTitle: "庆典详情",
    storyLede: "诚邀您在 The Petals 见证 Wei Li 与 Deborah 的幸福时刻。一层层构筑，一针针编织，我们共同创造美好未来。",
    scheduleSnapshot: "时间轴流程",
    timeReception: "上午 9:30",
    timelineReception: "迎宾与来宾签到。",
    timeCeremony: "上午 10:00",
    timelineCeremony: "婚礼仪式正式开始。",
    timeLunch: "上午 11:30",
    timelineLunch: "在 The Petals 享用午宴与庆祝。",
    dressCode: "着装色系",
    dressCodeFormal: "着装要求：正式",
    weddingWord: "婚礼",
    attireWord: "着装",
    attireNote: "诚挚邀请各位来宾穿着以下色系出席，与我们一同庆祝这特别的一天。",
    attireThanks: "感谢配合！",
    pastelPink: "粉色系",
    pastelBlue: "蓝色系",
    pastelPurple: "紫色系",
    paleSlate: "雾灰藕色",
    softLinen: "柔和亚麻色",
    petalFrost: "花瓣霜粉",
    paleSky: "浅天空蓝",
    softBlush: "柔雾腮红色",
    dressColorsAria: "着装配色",
    mapEyebrow: "前往会场",
    mapTitle: "婚礼地点",
    mapFrameTitle: "婚礼地点地图",
    openGoogleMaps: "打开 Google 地图",
    gameEyebrow: "婚礼小游戏",
    gameTitle: "先玩游戏再回函",
    gameLede: "完成照片配对后即可前往回函页面。",
    memoryTitle: "照片配对记忆",
    memoryDesc: "配对所有照片卡片即可解锁回函。",
    movesLabel: "步数：",
    gateLocked: "完成游戏后可解锁回函。",
    shuffle: "重新洗牌",
    skipRsvp: "跳过",
    celebrateWithUs: "与我们一同庆祝",
    rsvpBy: "请于以下日期前回函",
    openRsvpForm: "打开回函表单",
    musicOn: "开启音乐",
    musicOff: "关闭音乐",
    gameWonTitle: "完成啦！",
    gameWonBody: "你用了 {{moves}} 步完成游戏，婚礼见！",
    openRsvpNow: "立即回函",
    close: "关闭",
    langToggle: "EN"
  }
};

const audio = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicLabel = document.querySelector(".music-toggle");
let audioContext = null;
let droneNodes = [];
let droneActive = false;

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.en[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "zh" ? "zh-Hans" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      el.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mappings = (el.getAttribute("data-i18n-attr") || "")
      .split(";")
      .map((item) => item.trim())
      .filter(Boolean);

    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(":").map((part) => part.trim());
      if (attr && key) {
        el.setAttribute(attr, t(key));
      }
    });
  });

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = t("langToggle");
  }
  updateMusicButtonText();
  window.dispatchEvent(new CustomEvent("inviteLanguageChanged", { detail: { lang: currentLang } }));
}

function setupLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  if (!langToggle) return;

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "zh" : "en";
    localStorage.setItem(LANG_KEY, currentLang);
    applyTranslations();
  });

  applyTranslations();
}

function updateMusicButtonText() {
  if (!musicToggle) return;
  const isOn = musicToggle.checked;
  if (musicLabel) {
    musicLabel.setAttribute("title", isOn ? t("musicOff") : t("musicOn"));
    musicLabel.setAttribute("aria-label", isOn ? t("musicOff") : t("musicOn"));
  }
}

function bindInviteData() {
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.getAttribute("data-bind");
    if (key && INVITE_DATA[key]) {
      el.textContent = INVITE_DATA[key];
    }
  });
}

function setupIntro() {
  const overlay = document.getElementById("intro-overlay");
  const enterButton = document.getElementById("enter-site");
  if (!overlay || !enterButton) return;

  enterButton.addEventListener("click", async () => {
    overlay.classList.add("hidden");
    await toggleMusic(true);
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupTiltCards() {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * 10;
      const ry = (x - 0.5) * 10;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function setupCountdown() {
  const ids = ["days", "hours", "minutes", "seconds"];
  if (!ids.every((id) => document.getElementById(id))) return;

  function tick() {
    const target = new Date(INVITE_DATA.dateISO).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 60000) % 60;
    const hours = Math.floor(diff / 3600000) % 24;
    const days = Math.floor(diff / 86400000);

    document.getElementById("days").textContent = String(days);
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

function setupBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const particles = Array.from({ length: 50 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 2 + 0.6,
    vx: (Math.random() - 0.5) * 0.0005,
    vy: (Math.random() - 0.5) * 0.0005
  }));

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

async function startDroneFallback() {
  if (droneActive) return;

  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  await audioContext.resume();

  const notes = [196, 247, 294];
  droneNodes = notes.map((freq) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.value = 0.02;
    osc.connect(gain).connect(audioContext.destination);
    osc.start();
    return { osc, gain };
  });

  droneActive = true;
}

function stopDroneFallback() {
  droneNodes.forEach(({ osc }) => osc.stop());
  droneNodes = [];
  droneActive = false;
}

function persistMusicState() {
  if (!musicToggle) return;
  localStorage.setItem(MUSIC_WANTED_KEY, musicToggle.checked ? "1" : "0");
  if (audio && Number.isFinite(audio.currentTime)) {
    localStorage.setItem(MUSIC_TIME_KEY, String(audio.currentTime));
  }
}

async function toggleMusic(forceOn = null) {
  const shouldPlay = forceOn !== null ? forceOn : !musicToggle?.checked;

  if (!musicToggle) return;

  if (shouldPlay) {
    let played = false;
    if (audio) {
      try {
        await audio.play();
        played = true;
      } catch {
        played = false;
      }
    }

    if (!played) {
      try {
        await startDroneFallback();
      } catch {
        musicToggle.checked = false;
        persistMusicState();
        updateMusicButtonText();
        return;
      }
    }

    musicToggle.checked = true;
    persistMusicState();
    updateMusicButtonText();
  } else {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (droneActive) stopDroneFallback();
    musicToggle.checked = false;
    persistMusicState();
    updateMusicButtonText();
  }
}

async function restoreMusicState() {
  if (!musicToggle) return;

  const wanted = localStorage.getItem(MUSIC_WANTED_KEY) === "1";
  const savedTime = Number(localStorage.getItem(MUSIC_TIME_KEY) || "0");

  if (audio && Number.isFinite(savedTime) && savedTime > 0) {
    audio.currentTime = savedTime;
  }

  if (wanted) {
    await toggleMusic(true);
  } else {
    musicToggle.checked = false;
    updateMusicButtonText();
  }
}

function setupMusicControl() {
  if (!musicToggle) return;
  musicToggle.addEventListener("change", () => {
    toggleMusic(musicToggle.checked);
  });

  if (audio) {
    audio.addEventListener("timeupdate", () => {
      if (musicToggle.checked) persistMusicState();
    });
  }

  window.addEventListener("beforeunload", persistMusicState);
  restoreMusicState();
}

bindInviteData();
setupLanguageToggle();
setupIntro();
setupRevealAnimations();
setupTiltCards();
setupCountdown();
setupBackgroundCanvas();
setupMusicControl();
