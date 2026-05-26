import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import MagneticButton from '../components/MagneticButton';
import ResumeViewer from '../components/ResumeViewer';
import { personalInfo, projectsData, socialLinks, homeHighlights } from '../data/constants';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import DevCard from '../components/DevCard';
import ProjectGraphics from '../components/ProjectGraphics';

function TypewriterText() {
  const words = [
    "AI Engineer",
    "Full-Stack Developer",
    "RAG Platform Architect",
    "SecOps Automation Builder"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  // Typing effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const delayTimeout = setTimeout(() => setReverse(true), 1600);
      return () => clearTimeout(delayTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <span className="hero-typewriter">
      {words[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </span>
  );
}

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      window.open(personalInfo.resumeDriveLink, '_blank');
    } else {
      setIsResumeOpen(true);
    }
  };

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{personalInfo.name} | {personalInfo.role}</title>
        <meta name="description" content={personalInfo.shortDesc.replace(/<[^>]*>/g, '')} />
      </Helmet>
      
      <ResumeViewer 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        resumeUrl="/assets/Umesh_Resume.pdf" 
      />
      
      <section id="hero">
        <div className="hero-container container">
          <div className="hero-content">
            <Motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-dot"></span>
              Available for Opportunities
            </Motion.div>
            
            <Motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Bitla Umesh<br />Kumar
            </Motion.h1>
            
            <Motion.div 
              className="hero-role-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TypewriterText />
            </Motion.div>
            
            <div className="hero-highlights-container">
              {homeHighlights.map((hl, idx) => {
                const parts = hl.text.split('@');
                const content = parts.length > 1 ? (
                  <>
                    {parts[0]} <span className="hl-at">@</span><span className="hl-company">{parts[1]}</span>
                  </>
                ) : hl.text;
                
                return (
                  <Motion.div 
                    key={idx}
                    className="hero-highlight-pill interactive"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                  >
                    <span className="hl-icon">{hl.icon}</span>
                    <span className="hl-text">{content}</span>
                  </Motion.div>
                );
              })}
            </div>
            
            <Motion.div 
              className="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <MagneticButton>
                <button onClick={handleResumeClick} className="btn btn-primary interactive">
                  Download Resume
                </button>
              </MagneticButton>
              <MagneticButton>
                <Link to="/projects" className="btn btn-ghost interactive">View My Work <span>→</span></Link>
              </MagneticButton>
            </Motion.div>
            
            <Motion.div 
              className="hero-socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={social.name}>
                  {social.name === 'GitHub' ? <FaGithub /> : <FaLinkedin />}
                </a>
              ))}
            </Motion.div>
          </div>
          
          <Motion.div 
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="hero-image-backdrop"></div>
            <img src="/assets/profile.jpg" alt={personalInfo.name} className="hero-image" loading="lazy" />
          </Motion.div>
        </div>
        
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* TEASERS & SANDBOX */}
      <section className="section intro-sandbox-section">
        <div className="container intro-sandbox-container">
          <div className="intro-text-column">
            <div className="section-label">Brief Intro</div>
            <h2 className="section-title">Behind the Code.</h2>
            {personalInfo.aboutText.slice(0, 2).map((para, i) => (
              <p key={i} className="intro-para">
                {para}
              </p>
            ))}
            <div className="intro-ctas-row">
              <Link to="/about" className="btn btn-primary interactive">Read Full Story</Link>
              <Link to="/projects" className="btn btn-ghost interactive">All Projects</Link>
            </div>
          </div>
          <div className="sandbox-column">
            <DevCard />
          </div>
        </div>
      </section>
      
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Highlight</div>
          <h2 className="section-title">Top Projects</h2>
          <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 480px))', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            {projectsData.filter(p => p.topProject).slice(0, 2).map((project, idx) => (
              <div key={idx} className="project-card glass-card" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={`project-banner ${project.bannerClass}`}>
                  <div className="banner-pattern"></div>
                  <ProjectGraphics type={project.graphicType} />
                </div>
                <div className="project-body" style={{ textAlign: 'left' }}>
                  <div className="project-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 className="project-name">{project.name}</h3>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-github-link interactive" aria-label="GitHub Repository" style={{ color: 'var(--on-surface-muted)', display: 'inline-flex' }}>
                        <FaGithub size={16} />
                      </a>
                    </div>
                    <span className={`project-badge ${project.badge.class}`}>{project.badge.text}</span>
                  </div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/projects" className="btn btn-ghost interactive">View All Projects</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
