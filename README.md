# Jadoo - Modern Travel Agency Landing Page

Jadoo is a visually stunning, high-performance, and pixel-perfect modern travel agency landing page built using **React**, **TypeScript**, and **Tailwind CSS**. The project features advanced, non-blocking smooth animations implemented with **Framer Motion** to deliver an exceptional, premium user experience.

---

## ✨ Features
* **Fully Responsive Design:** Optimized from scratch for fluid display on ultra-small mobile screens up to large 4K desktop screens.
* **Modern UI Components:** Includes a fully custom Hero section, category-based services, top-selling destination grids, and dynamic, interactive booking workflows.
* **Cinema-Grade Animations:** Fluid scroll-triggered component entries, text reveals, and interactive hover mechanics powered by Framer Motion.
* **Component-Driven Architecture:** Modular folder structures built with TypeScript interfaces for clean separation of concerns and robust data typing.
* **Performance Optimized:** Direct custom SVG injection and React Icons implementations to achieve high scores in Core Web Vitals (LCP/FID).

## 🛠️ Tech Stack
* **Frontend Library:** React (Vite-backed setup)
* **Type System:** TypeScript (Strict Mode)
* **Styling Framework:** Tailwind CSS
* **Animation Engine:** Framer Motion
* **Icon Packs:** React Icons (`react-icons/io5`, `react-icons/ri`, `react-icons/fi`, `react-icons/md`)
* **Build Tool:** Vite

---

## 🗂️ Core Sections Built

### 1. 🌟 Hero Section
Features a clean, modern navigation layout paired with high-converting typography, layered vector graphics (`Decore.png`), and animated CTA buttons that establish the brand identity instantly.

### 2. ⚡ Services Section (`Category`)
Displays high-fidelity service cards (*Calculated Weather, Best Flights, Local Events, Customization*) with smooth, complex container interaction and responsive grid alignment. Features dynamic backdrop offsets on interactive `hover` states.

### 3. 🗺️ Top Destinations
A semantic grid displaying featured global packages. Implements high-end cinematic image micro-zooms (`group-hover:scale-110`) and bounce animation triggers (`whileHover: { y: -10 }`) utilizing spring physics.

### 4. 🛄 Booking Steps workflow
A conversion-focused split section. The left column outlines a 3-step journey leveraging highly customized embedded SVG vectors. The right column renders complex layered, staggered interactive flight cards (*Trip to Greece* & *Trip to Rome*) with interactive progress metrics.

---

## 📂 Project Structure

```plaintext
src/
├── assets/          # Compressed images, backgrounds, and brand assets
├── components/      # Global reusable layout elements (Navbar, Buttons)
├── sections/        # Main landing page layout architecture
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Destinations.tsx
│   └── BookingSteps.tsx
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
cd jadoo-travel
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
Zero Layout Shifts: Layout boundaries are securely managed to guarantee smooth viewport translations during layout scaling.

Clean Interfaces: Strict type typing for data structures (StepItem, DestinationCardProps, ServiceCardProps) ensuring full type safety across components.

Asset Lazy-Loading: Image nodes incorporate explicit standard HTML lazy loading attributes to maximize rendering throughput.