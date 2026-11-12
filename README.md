# ECHO Portfolio Website

An ultra-modern, motion-driven, dark glassmorphic personal developer and software engineer portfolio template inspired by **Jishnu Mondal's ECHO** design language.

---

## 🌟 Key Features

- **Ambient Interactive Particle Canvas**: Custom GPU-optimized constellation background with particle attraction and cursor spotlight effects.
- **Dynamic Typewriter & Role Rotator**: Cycles smoothly through your primary engineering roles and titles.
- **Categorized Technical Arsenal**: Interactive skill filtering (Frontend, Backend, Database, Cloud & Tools) with animated proficiency indicators.
- **Featured Projects Showcase**:
  - Filter tabs (All, Full Stack, AI/ML, Frontend, Tools)
  - Interactive project preview cards
  - "Quick View" detailed modal with architecture breakdown, features list, and links to live demos and source code
- **Interactive Career Timeline**: Chronological layout for professional experience, academic achievements, and certifications.
- **Services & Capabilities**: Highlighting your core engineering offerings.
- **Interactive Resume Modal**: One-click resume preview with print/save as PDF support.
- **Contact & Conversion Zone**:
  - 1-click clipboard copy for email address
  - Form validation with direct mailto generation
  - Dynamic local time indicator
- **Optional Sci-Fi Audio Feedback**: Web Audio API sound synthesizer with mute/unmute control.
- **Zero Build-Step Required**: Clean vanilla HTML5, CSS3, and JavaScript — works instantly by opening `index.html` in any modern web browser or hosting on GitHub Pages, Vercel, or Netlify.

---

## 🚀 How to Run & Preview

### Option 1: Direct File Open
Simply double-click `index.html` or drag and drop it into Chrome, Edge, Brave, or Firefox.

### Option 2: Local HTTP Server (Recommended)
You can start a lightweight local server:
```bash
# Using Python
python -m http.server 3000

# Or using Node.js / npx
npx serve .
```
Then visit `http://localhost:3000`.

---

## 🛠️ How to Customize Your Details

All profile content is centralized in **[`js/data.js`](js/data.js)**. You don't need to touch messy HTML tags!

Simply update the values inside `PROFILE_DATA`:
1. **`personal`**: Name, roles, tagline, summary, location, email, phone, and social profile links (GitHub, LinkedIn, Twitter/X).
2. **`stats`**: Metrics like years of experience, projects completed, and code commits.
3. **`about`**: Personal story, philosophy, and core engineering pillars.
4. **`skills`**: Add, remove, or adjust proficiency levels and categories.
5. **`projects`**: Add your own real-world projects, screenshots, GitHub links, and live URLs.
6. **`experience`**: Your companies, job titles, achievements, and dates.
7. **`education` & `certifications`**: Degrees, universities, and badges.
8. **`services`**: What you build and offer to clients or employers.

---

## 🚢 One-Click Deployment

- **GitHub Pages**: Push this repo to GitHub, head to **Settings > Pages**, choose the `main` branch root, and your site is live!
- **Vercel / Netlify**: Connect your GitHub repository to Vercel or Netlify for instant global edge deployment.
