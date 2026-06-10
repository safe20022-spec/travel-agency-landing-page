# Jadoo - Modern Travel Agency Landing Page

Jadoo is a visually stunning, high-performance, and pixel-perfect modern travel agency landing page built using **React**, **TypeScript**, and **Tailwind CSS**. The project features advanced, non-blocking smooth animations implemented with **Framer Motion** to deliver an exceptional, premium user experience.

---

## ✨ Features
* **Fully Responsive Design:** Optimized from scratch for fluid display on ultra-small mobile screens up to large 4K desktop screens.
* **Modern UI Components:** Includes a fully custom Hero section, category-based services, top-selling destination grids, and dynamic, interactive booking workflows.
* **Cinema-Grade Animations:** Fluid scroll-triggered component entries, text reveals, and interactive hover mechanics powered by Framer Motion.
* **Component-Driven Architecture:** Modular folder structures built with TypeScript interfaces for clean separation of concerns and robust data typing.
* **Performance Optimized:** Direct custom SVG injection and React Icons implementations to achieve high scores in Core Web Vitals (LCP/FID).
* **Advanced Layout Stability:** Rigorous layout boundary protections (`overflow-x-clip`, `overflow-y-auto`) ensuring zero layout shifts during complex spring-physics web rendering.

## 🛠️ Tech Stack
* **Frontend Library:** React (Vite-backed setup)
* **Type System:** TypeScript (Strict Mode)
* **Styling Framework:** Tailwind CSS
* **Animation Engine:** Framer Motion
* **Icon Packs:** React Icons (`react-icons/io5`, `react-icons/ri`, `react-icons/fi`, `react-icons/md`, `react-icons/hi`)
* **Build Tool:** Vite

---

## 🗂️ Core Sections Built

### 1. 🌟 Hero Section
Features a clean, modern navigation layout paired with high-converting typography, layered vector graphics (`Decore.png`), and animated CTA buttons that establish the brand identity instantly.

### 2. ⚡ Services Section (`Category`)
Displays high-fidelity service cards (*Calculated Weather, Best Flights, Local Events, Customization*) with smooth, complex container interaction and responsive grid alignment. Features dynamic backdrop offsets on interactive `hover` states.

### 3. 🗺️ Top Destinations
A semantic grid displaying featured global packages. Implements high-end cinematic image micro-zooms (`group-hover:scale-110`) and bounce animation triggers (`whileHover: { y: -10 }`) utilizing spring physics.

### 4. 🛄 Booking Steps Workflow
A conversion-focused split section. The left column outlines a 3-step journey leveraging highly customized embedded SVG vectors. The right column renders complex layered, staggered interactive flight cards (*Trip to Greece* & *Trip to Rome*) with interactive progress metrics.

### 5. 💬 Testimonials & Sponsors (New)
A highly advanced, interactive vertical card stack (Stacked Cards Carousel) built with `AnimatePresence` for seamless, spring-backed vertical transitions. Paired with a fluid brand sponsorship ribbon utilizing grayscale filters and hover-revealed original opacity.

### 6. ✉️ Newsletter Subscription Section (New)
A beautifully customized asymmetric subscription card featuring non-standard corner radiuses matching the exact Figma design specification. Implements strict client-side validation, embedded input icons, and floating 3D paper plane micro-animations powered by `whileTap` gesture controls.

### 7. 🏁 Footer Structure (New)
A robust multi-column legal and sitemap matrix utilizing semantic HTML5 tags. Integrates high-fidelity brand interaction via custom responsive CSS social media gradients and interactive App Store/Google Play store downloading node wrappers.

---

## 📂 Project Structure

```plaintext
src/
├── assets/          # Compressed images, backgrounds, and brand assets
├── components/      # Global reusable layout elements (Navbar, Buttons, Footer)
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/        # Main landing page layout architecture
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Destinations.tsx
│   ├── BookingSteps.tsx
│   ├── Testimonials.tsx
│   └── Newsletter.tsx
├── App.tsx          # Application root wrapper with base overflow protection
└── main.tsx         # Application bundle entry point
🚀 Getting Started
To get a local copy up and running, follow these simple steps:

Prerequisites
Make sure you have Node.js (v18.x or higher) and npm installed on your machine.

Installation & Local Setup
Clone the repository:

Bash
git clone [https://github.com/safe20022-spec/travel-agency-landing-page.git](https://github.com/safe20022-spec/travel-agency-landing-page.git)
Navigate into the project directory:

Bash
cd travel-agency-landing-page
Install dependencies:

Bash
npm install
Start the local development server:

Bash
npm run dev
Build for production:

Bash
npm run build
🧑‍💻 Production & Code Quality Standards
Zero Layout Shifts (CLS): Layout and viewport boundaries are strictly secured using advanced modern overflow properties (overflow-x-clip), guaranteeing zero unexpected visual movements or nested double scrollbars during initialization.

Strict Code Quality & Typing: Core application logic strictly implements custom TypeScript interfaces (TestimonialItem, StepItem, DestinationCardProps) ensuring comprehensive type-safety across component states.

Asset Optimization: Image nodes incorporate explicit standard HTML lazy loading attributes alongside vector SVG rendering paths to maximize overall Lighthouse rendering scores.