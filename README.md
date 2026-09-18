# Shaurya Shah — Personal Portfolio

> Minimal, editorial personal portfolio engineered for **Shaurya Shah** — B.Tech Artificial Intelligence & Machine Learning student at **Dwarkadas J. Sanghvi College of Engineering (DJSCE)** with Honors in **FinTech**.

Inspired by Swiss brutalist typography, high-fashion editorial layouts, and Apple VisionOS-grade **Liquid Glassmorphism**.

---

## 🌟 Highlights & Features

- **Three Dynamic Color Systems**:
  - **Dark Mode**: Strict brutalist monochrome obsidian (`#070709`) with titanium silver typography, smoked liquid glass, and razor-thin borders.
  - **Light Mode**: High-impact True Crimson Scarlet Red (`#d90429`), Royal Cobalt Blue (`#1d4ed8`), Midnight Navy (`#0a1128`), and pure frosted porcelain white.
  - **Aurora Mode**: Cyber-luxury cosmic midnight space canvas with luminous Emerald (`#10b981`), Electric Cyan (`#06b6d4`), and Twilight Indigo (`#6366f1`).
- **Liquid Glass Architecture**: Translucent frosted surfaces (`backdrop-filter: blur(28px) saturate(190%)`), beveled specular edge highlights, and smooth hover sheen reflections (`.liquid-sheen`).
- **Interactive Focal Hover Physics**: Dynamic scaling in Experience and Education milestones where the focused card expands smoothly (`scale: 1.04`, `y: -10px`) while sibling cards contract (`scale: 0.95`, opacity `0.55`).
- **Flagship Project — FinSight**: Full-stack personal financial behavior analysis platform powered by Next.js, FastAPI, Python, and Google Gemini API with simulated real-time telemetry terminal.
- **Curriculum Vitae System**: Embedded dual-mode interactive resume viewer (Structured View + Native PDF) with direct download.
- **Buttery Smooth Scroll**: Hardware-accelerated Lenis smooth scrolling paired with responsive spring physics.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Physics**: [Framer Motion](https://motion.dev/)
- **Smooth Scroll**: [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist & Geist Mono](https://vercel.com/font)

---

## 📂 Project Structure

```text
├── public/
│   ├── shaurya.png               # High-res cutout portrait (Natural Tone)
│   ├── shaurya-bw.png            # High-res cutout portrait (Editorial Monochrome)
│   └── Shaurya_Shah_Resume.pdf   # Verified Curriculum Vitae PDF
├── src/
│   ├── app/
│   │   ├── globals.css           # Liquid glass design tokens & theme overrides
│   │   ├── layout.tsx            # Zero-flash theme bootstrapper & metadata
│   │   └── page.tsx              # Main portfolio composition
│   ├── components/
│   │   ├── Navbar.tsx            # Floating frosted liquid glass navigation
│   │   ├── Hero.tsx              # Editorial typography & portrait pedestal
│   │   ├── Experience.tsx        # Dynamic kinetic jumping experience cards
│   │   ├── Education.tsx         # Academic timeline & DJSCE credentials
│   │   ├── Projects.tsx          # Flagship FinSight platform & telemetry
│   │   ├── Skills.tsx            # Categorized competency matrix
│   │   ├── Contact.tsx           # Direct channels & telemetry
│   │   ├── ResumeModal.tsx       # Dual-mode resume document & native PDF viewer
│   │   ├── ThemeToggle.tsx       # Dark / Light / Aurora switcher
│   │   ├── CustomCursor.tsx      # Inverted spring-lag pointer ring
│   │   └── SmoothScrollProvider.tsx # Lenis smooth scrolling integration
│   ├── context/
│   │   └── ThemeContext.tsx      # Multi-theme state provider
│   └── data/
│       ├── portfolioData.ts      # Profile, projects, education, & skills data
│       └── types.ts              # TypeScript type definitions
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/shauryashah77/PERSONAL_PORTFOLIO.git

# Navigate into directory
cd PERSONAL_PORTFOLIO

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 👤 Author

**Shaurya Shah**
- **Institution**: Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai
- **Degree**: B.Tech in Artificial Intelligence & Machine Learning (Honors in FinTech)
- **LinkedIn**: [linkedin.com/in/shaurya-shah-188b84394](https://www.linkedin.com/in/shaurya-shah-188b84394)
- **Email**: [shauryashah857@gmail.com](mailto:shauryashah857@gmail.com)

---

## 📄 License
MIT © 2026 Shaurya Shah. All rights reserved.
