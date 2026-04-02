import PageTransition from '../components/PageTransition';
import SkillsMarquee from '../components/SkillsMarquee';
import { personalInfo, skillsData } from '../data/constants';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const handleChipHover = (e) => {
    const chip = e.currentTarget;
    const rect = chip.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    chip.style.setProperty('--mouse-x', `${x}%`);
    chip.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>About | {personalInfo.name}</title>
        <meta name="description" content="Learn more about my background, skills, and experience as an AI Engineer and Full-Stack Developer." />
      </Helmet>
      
      <section className="section" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="section-label">WHO I AM</div>
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-stats">
              <div className="stat-card glass-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">4+</div>
                <div className="stat-label">Hackathons</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon">💼</div>
                <div className="stat-number">1</div>
                <div className="stat-label">Internship</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon">🚀</div>
                <div className="stat-number">4</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon">👥</div>
                <div className="stat-number">1</div>
                <div className="stat-label">Club Founded</div>
              </div>
            </div>
            <div className="about-bio">
              {personalInfo.aboutText.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/LEGION Club/, '<strong>LEGION Club</strong>').replace(/Software Engineer Intern at YugaYatra Retail OPC Pvt\. Ltd\./, '<strong>Software Engineer Intern at YugaYatra Retail OPC Pvt. Ltd.</strong>') }} />
              ))}
              <div className="about-chips">
                <span className="chip">Python</span>
                <span className="chip">React</span>
                <span className="chip">FastAPI</span>
                <span className="chip">AI/ML</span>
                <span className="chip">ChromaDB</span>
                <span className="chip">Team Leader</span>
              </div>
              <div className="about-contact">
                <span>📧 {personalInfo.email}</span>
                <span>📍 {personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <SkillsMarquee />

      {/* SKILLS */}
      <section className="section">
        <div className="container">
          <div className="section-label">WHAT I USE</div>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="skills-grid">
            <div className="skill-category glass-card">
              <h3 className="category-title"><span className="cat-icon">💻</span> Languages</h3>
              <div className="skill-chips">
                {skillsData.languages.map(skill => (
                  <span key={skill} className="skill-chip chip-lang" onMouseMove={handleChipHover}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category glass-card">
              <h3 className="category-title"><span className="cat-icon">⚙️</span> Frameworks &amp; Tools</h3>
              <div className="skill-chips">
                {skillsData.frameworks.map(skill => (
                  <span key={skill} className="skill-chip chip-fw" onMouseMove={handleChipHover}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category glass-card">
              <h3 className="category-title"><span className="cat-icon">🧠</span> AI / ML</h3>
              <div className="skill-chips">
                {skillsData.ai.map(skill => (
                  <span key={skill} className="skill-chip chip-ai" onMouseMove={handleChipHover}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category glass-card">
              <h3 className="category-title"><span className="cat-icon">🛠️</span> Dev Tools</h3>
              <div className="skill-chips">
                {skillsData.tools.map(skill => (
                  <span key={skill} className="skill-chip chip-tool" onMouseMove={handleChipHover}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <div className="container">
          <div className="section-label">ACADEMIC BACKGROUND</div>
          <h2 className="section-title">Education</h2>
          <div className="edu-card glass-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem' }}>
            <div className="edu-icon" style={{ fontSize: '2.5rem' }}>🎓</div>
            <div className="edu-content">
              <h3 className="edu-institution" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--on-surface)' }}>Swami Vivekananda Institute of Technology</h3>
              <p className="edu-degree" style={{ color: 'var(--on-surface-muted)', fontWeight: 500 }}>B.Tech in Computer Science and Engineering (CSE)</p>
              <p className="edu-date" style={{ fontSize: '0.85rem', color: 'var(--on-surface-dim)', marginTop: '0.3rem', marginBottom: '1rem' }}>📅 Sept 2023 – May 2027</p>
              <span className="gpa-badge" style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: 'var(--surface-high)', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>GPA: 7.7 / 10.0</span>
              <div className="edu-courses" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                {['Data Structures', 'Computer Networking', 'DevOps', 'Database Management Systems'].map(course => (
                  <span key={course} className="tag">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
