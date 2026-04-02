import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-gradient-line"></div>
      <div className="container footer-content">
        <p className="footer-copy">Designed &amp; Built by <span className="gradient-text">Bitla Umesh Kumar</span></p>
        <div className="footer-socials">
          <a href="https://github.com/BitlaUmesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/bitla-umesh-kumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social">
            <FaLinkedin size={18} />
          </a>
        </div>
        <p className="footer-legal">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
