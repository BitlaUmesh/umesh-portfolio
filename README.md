# Premium Glassmorphic Developer Portfolio

A high-end, responsive developer portfolio showcasing projects, experience, and skills in a dark glassmorphic aesthetic. Built using React, Vite, Framer Motion, and optimized Vanilla CSS.

---

## ✨ Features & Micro-Interactions

- **Floating Glass Pill Navigation**: A sleek floating navigation bar (`#navbar`) with blurred backgrounds (`backdrop-filter`) and smooth active item transition states.
- **Spring-Physics Custom Cursor**: A custom dual-state cursor utilizing Framer Motion's `useSpring` hooks for physics-based lagging trail effects that adapt on hover.
- **Dynamic Spotlight Card Borders**: Coordinate-tracking inputs (`SpotlightWrapper`) that project a glowing cyan radial halo following your mouse coordinates.
- **Moving Glass Card Sheen**: A dynamic light glare reflection (`::after` radial-gradient shine) across cards that mirrors mouse hover positions.
- **3D Parallax Perspective**: Hover-based interactive card tilt transformations on featured projects.
- **Fully Responsive & SEO Aligned**: Tailored media queries for mobile viewports, fast loading times, and configured metadata via `react-helmet-async`.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (Client Environment)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (Transitions & Physics Springs)
- **Styling**: Vanilla CSS (Custom Design System with global CSS variables)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Contact Form Backend**: [Web3Forms](https://web3forms.com/) API Integration
- **SEO/Metadata**: [React Helmet Async](https://github.com/cprecioso/react-helmet-async)

---

## 📂 Project Structure

```text
umesh-portfolio/
├── public/                 # Static assets (favicons, logos, PDF resume)
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, Cursor, Preloader)
│   ├── data/               # Constants (projects data, timeline data, education)
│   ├── pages/              # Routed pages (Home, About, Experience, Projects, Contact)
│   ├── App.jsx             # Main layout, router configuration, global event tracking
│   ├── index.css           # Styling rules, variables, responsive design tokens
│   └── main.jsx            # React root mount point
├── package.json            # Scripts and dependency list
└── vite.config.js          # Vite compilation settings
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BitlaUmesh/umesh-portfolio.git
   cd umesh-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

5. **Build for production**:
   ```bash
   npm run build
   ```
   Deploy the generated `dist/` directory to hosting platforms like Vercel, Netlify, or GitHub Pages.
