import PageTransition from '../components/PageTransition';
import { projectsData, personalInfo } from '../data/constants';
import { Helmet } from 'react-helmet-async';
import { FaGithub } from 'react-icons/fa';
import ProjectGraphics from '../components/ProjectGraphics';

export default function Projects() {
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Projects | {personalInfo.name}</title>
      </Helmet>
      <section className="section" id="projects" style={{ paddingTop: '130px' }}>
        <div className="container">
          <h2 className="about-section-title">FEATURED WORK</h2>
          <div className="projects-grid">
            
            {projectsData.map((project, idx) => (
              <div key={idx} className="project-card glass-card" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={`project-banner ${project.bannerClass}`}>
                  <div className="banner-pattern"></div>
                  <ProjectGraphics type={project.graphicType} />
                </div>
                <div className="project-body">
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
                    <span className={`project-badge ${project.badge.class}`}>{project.badge.text}</span>
                  </div>
                  <p className="project-event">{project.event}</p>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link interactive">
                    <FaGithub size={14} />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
