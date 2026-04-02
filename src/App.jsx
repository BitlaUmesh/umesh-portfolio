import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
import ParticleBackground from './components/ParticleBackground';
import ScrollToTopButton from './components/ScrollToTopButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Suspense fallback={null}><About /></Suspense>} />
        <Route path="/experience" element={<Suspense fallback={null}><Experience /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={null}><Projects /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // Initial Preloader timing based on browser load
  useEffect(() => {
    const handleLoad = () => setLoading(false);
    
    if (document.readyState === 'complete') {
      setTimeout(() => setLoading(false), 0);
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Fallback 3s limit
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  // Global hover glow effect for glass cards and buttons
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.glass-card, .btn, .skill-chip, .project-card').forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <CustomCursor />
      <ParticleBackground />
      
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <div className="layout-container">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
