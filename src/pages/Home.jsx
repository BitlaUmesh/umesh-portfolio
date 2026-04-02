import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import MagneticButton from '../components/MagneticButton';
import ResumeViewer from '../components/ResumeViewer';
import { personalInfo, projectsData, socialLinks } from '../data/constants';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

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
        <meta name="description" content={personalInfo.shortDesc.replace('\n', ' ')} />
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
              Bitla Umesh<br /><span className="gradient-text">Kumar</span>
            </Motion.h1>
            
            <Motion.p 
              className="hero-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.role}
            </Motion.p>
            
            <Motion.p 
              className="hero-summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.shortDesc.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </Motion.p>
            
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

      {/* TEASERS */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="section-label">Brief Intro</div>
          <h2 className="section-title">Hello World.</h2>
          {personalInfo.aboutText.slice(0, 2).map((para, i) => (
            <p key={i} style={{ color: 'var(--on-surface-muted)', fontSize: '1.1rem', marginBottom: '1.2rem', lineHeight: '1.8' }}>
              {para}
            </p>
          ))}
          <Link to="/about" className="btn btn-primary interactive" style={{ marginTop: '0.8rem' }}>Read Full Story</Link>
        </div>
      </section>
      
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Highlight</div>
          <h2 className="section-title">Top Project</h2>
          <div className="projects-grid" style={{ gridTemplateColumns: 'minmax(320px, 600px)', justifyContent: 'center' }}>
            {projectsData.filter(p => p.topProject).slice(0, 1).map((project, idx) => (
              <div key={idx} className="project-card glass-card" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={`project-banner ${project.bannerClass}`}>
                  <div className="banner-pattern"></div>
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-body" style={{ textAlign: 'left' }}>
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
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
