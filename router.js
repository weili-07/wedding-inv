// Single Page App Router
// Handles navigation and dynamic content loading without page reloads

const APP_PAGES = {
  home: { path: 'pages/home.html', title: 'Wei Li & Deborah | Wedding Invitation' },
  story: { path: 'pages/story.html', title: 'Celebration Details | Wei Li & Deborah' },
  map: { path: 'pages/map.html', title: 'Map | Wei Li & Deborah' },
  play: { path: 'pages/play.html', title: 'Play & RSVP | Wei Li & Deborah' }
};

let currentPage = null;
let isLoading = false;

async function loadPage(pageName) {
  if (isLoading || !APP_PAGES[pageName]) return;
  const mainEl = document.querySelector('#app-main');
  const hasRenderedContent = Boolean(mainEl && mainEl.children.length > 0);
  if (currentPage === pageName && hasRenderedContent) return;

  isLoading = true;

  try {
    const pageConfig = APP_PAGES[pageName];
    const response = await fetch(pageConfig.path);
    if (!response.ok) {
      console.error(`Failed to load ${pageName}: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to load ${pageName}`);
    }

    const html = await response.text();
    if (!mainEl) {
      console.error('Main content container not found');
      throw new Error('Main content container not found');
    }

    mainEl.innerHTML = html;
    document.title = pageConfig.title;
    document.body.setAttribute('data-page', pageName);

    // Update nav active state
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });
    document.querySelector(`nav a[href="#${pageName}"]`)?.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);

    // Trigger page-specific setup in app.js
    if (window.initializeApp) {
      window.initializeApp();
    }

    // Setup game if on play page
    if (pageName === 'play' && window.setupMemoryGame) {
      setupMemoryGame();
    }

    // Trigger custom event for any other listeners
    window.dispatchEvent(new CustomEvent('pageLoaded', { detail: { page: pageName } }));

    currentPage = pageName;
    console.log(`✅ Page loaded: ${pageName}`);
  } catch (error) {
    console.error('Router error:', error);
    const mainEl = document.querySelector('#app-main');
    if (mainEl) {
      mainEl.innerHTML = `<div style="padding: 2rem; text-align: center; color: red;"><h2>Error loading page</h2><p>${error.message}</p></div>`;
    }
  } finally {
    isLoading = false;
  }
}

// Make loadPage globally available
window.loadPage = loadPage;

function initRouter() {
  console.log('🚀 Router initializing...');

  // Handle nav link clicks
  document.addEventListener('click', (event) => {
    const link = event.target.closest('nav a, a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href.startsWith('#')) return;

    event.preventDefault();
    const pageName = href.slice(1);
    console.log(`📍 Navigating to: ${pageName}`);
    loadPage(pageName);
  });

  // Intro screen controls first entry; wait for Enter Invitation click.
  console.log("⏳ Waiting for intro to be dismissed...");
}

// Start router when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRouter);
} else {
  initRouter();
}
