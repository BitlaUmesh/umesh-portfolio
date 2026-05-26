import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav id="navbar" style={{ boxShadow: scrolled ? '0 4px 32px rgba(108,99,255,0.12)' : 'none' }}>
      <div className="nav-container">
        <a href="/" className="nav-logo" aria-label="Home">
          <img src="/logo_only.png" alt="Umesh Kumar Logo" className="logo-img" />
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`nav-link ${(location.pathname === link.path || (link.path === '/' && location.pathname === '')) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </li>
        </ul>
        <div className="nav-actions">
          <button id="theme-toggle" className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <span className="icon-sun">☀️</span> : <span className="icon-moon">🌙</span>}
          </button>
          <button className="hamburger" id="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.path} 
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
