# Personal Portfolio Template

A cinematic, dark-minimal portfolio built with **React + Vite + Three.js + Framer Motion + Tailwind CSS**.

Live demo: [buildwithayush.com](https://buildwithayush.com) 

![Portfolio Preview](https://raw.githubusercontent.com/ayushjain0419/ayush-personal-portfolio/main/public/ayush.jpg)

---

## ✨ Features

- **Curtain wipe loader** — cinematic entry animation with brand text
- **3D Three.js hero** — interactive particle/mesh scene
- **Framer Motion animations** — smooth page transitions and scroll reveals
- **Custom cursor** — replaces default cursor with a styled follower
- **Scroll-to-top button** — appears after scrolling down
- **Sections:** Hero · About · Services · Process · Projects · Testimonials · Contact
- **Dark minimal design** — `#0a0a0a` base, warm beige accents (`#c8b8a2`)
- **Fully responsive**

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Three.js | 3D hero scene |
| Framer Motion | Animations |
| Tailwind CSS | Styling |
| react-scroll | Smooth section scrolling |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ayushjain0419/personal-portfolio-template.git
cd personal-portfolio-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```bash
npm run build
```

Upload the `dist/` folder to any static host (Hostinger, Vercel, Netlify, GitHub Pages).

---

## 🎨 Customisation

| What to change | Where |
|----------------|-------|
| Your name / tagline | `src/components/Hero.jsx` |
| About text | `src/components/About.jsx` |
| Services | `src/components/Services.jsx` |
| Projects | `src/components/Projects.jsx` |
| Testimonials | `src/components/Testimonials.jsx` |
| Contact details | `src/components/Contact.jsx` |
| Loader brand text | `src/components/Loader.jsx` |
| Profile photo | `public/ayush.jpg` (replace with your own) |
| Favicon | `public/favicon.svg` |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Loader.jsx        # Curtain wipe preloader
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Process.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── ScrollToTop.jsx
│   └── ThreeScene.jsx    # 3D Three.js scene
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🌐 Deployment

**Hostinger / any static host:**
1. Run `npm run build`
2. Upload contents of `dist/` to your public HTML folder

**Vercel (recommended — free):**
```bash
npx vercel
```

---

## 📄 License

MIT — free to use, modify and share. A credit back is appreciated but not required.

---

Built by [Ayush Jain](https://github.com/ayushjain0419) · Feel free to fork and make it yours.
