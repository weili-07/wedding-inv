# Wei Li & Deborah | Wedding Invitation

A beautiful, interactive single-page wedding invitation website with persistent background music, bilingual support (English/Chinese), and a memory game gate.

## 🎨 Features

- **Single Page App (SPA)**: No page reloads—music persists across all pages
- **Bilingual Support**: Full English/Chinese translations
- **Memory Game**: Photo matching game before RSVP
- **Responsive Design**: Mobile-friendly layout
- **Background Music**: Persists across navigation with local save/restore
- **Dynamic Content Loading**: 4 modular page files load dynamically

## 📁 Project Structure

```
.
├── index.html          # Main entry point (persistent shell)
├── app.js              # Core app logic, translations, music control
├── game.js             # Memory game logic
├── router.js           # SPA router for dynamic page loading
├── styles.css          # All styles (responsive)
├── server.py           # Local development server
├── pages/              # Dynamic page content
│   ├── home.html       # Home page
│   ├── story.html      # Details/timeline page
│   ├── map.html        # Map/location page
│   └── play.html       # Game & RSVP page
└── assets/
    ├── music/
    │   └── song.mp3    # Background music
    └── photos/
        ├── 1.jpg       # Game photos
        ├── 2.jpg
        ├── 3.jpg
        └── 4.jpg
```

## 🚀 Development Setup

### Prerequisites
- Python 3.6+ (for local server)
- A text editor (VS Code recommended)

### Local Development

1. **Start the local server:**
   ```bash
   python server.py
   ```

2. **Open in browser:**
   ```
   http://localhost:3000
   ```

3. **Server features:**
   - Serves files over HTTP (required for fetch() calls)
   - Hot reload: Just refresh browser to see changes
   - CORS enabled for development

### Making Changes

- **Page content**: Edit files in `pages/` folder
- **Styling**: Update `styles.css`
- **Logic**: Modify `app.js`, `game.js`, or `router.js`
- **Translations**: Add keys to `TRANSLATIONS` object in `app.js`

**No build step required!** Changes are instant.

## 🌐 Deployment to GitHub Pages

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Wedding invitation site"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Branch: `main`, Folder: `root`
   - Save

3. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/wedding-invitation
   ```

(Or use custom domain if configured)

## 📝 Key Files Explained

### index.html
- Single persistent shell containing header, nav, audio player, controls
- Has `<main id="app-main"></main>` where page content loads
- Loads app.js → game.js → router.js

### router.js
- Intercepts nav clicks and fetches page content
- Updates browser title and data attributes
- Calls `initializeApp()` on each page load

### app.js
- **Translations**: Full EN/ZH support
- **Music Control**: Persistent toggle slider with localStorage
- **Initialization**: Runs setup functions on every page load
- **Canvas Animation**: Floating particles background

### game.js
- Memory card game logic
- Win modal with direct RSVP button
- Language-aware game text

## 🎮 Game Flow

1. User navigates to Play page
2. Matches all 8 photo cards (4 pairs)
3. Wins modal appears
4. Click "Open RSVP Now" → opens Google Form in new tab
5. Countdown timer persists throughout

## 🌍 Bilingual System

All text uses translation keys:
```html
<p data-i18n="welcomeLine">Welcome to our Beginning</p>
```

Edit translations in `app.js`:
```javascript
const TRANSLATIONS = {
  en: { welcomeLine: "Welcome to our Beginning" },
  zh: { welcomeLine: "欢迎来到我们的起点" }
};
```

## 🎵 Music Persistence

- Saves state to `localStorage`
- Restores on page refresh
- Continues playing when navigating pages
- Fallback: generates drone tones if MP3 fails

## 📱 Mobile Responsive

Breakpoint at 860px handles:
- Stacked navigation
- Larger touch targets
- Adjusted spacing
- Mobile-optimized game grid

## 🔧 Troubleshooting

**Pages not loading?**
- Check browser console (F12) for fetch errors
- Ensure `pages/` folder exists and has HTML files
- Verify server is running: `python server.py`

**Music not playing?**
- Check if `assets/music/song.mp3` exists
- Try clicking music toggle in browser
- Check browser console for audio errors

**Styles not updating?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Ensure `styles.css` is in root directory

## 📚 Useful Links

- [Google Fonts](https://fonts.google.com/) - For font changes
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [GitHub Pages Docs](https://pages.github.com/)

---

**Happy collaborating! 🎉**
