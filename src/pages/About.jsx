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
      
      <section className="section" style={{ paddingTop: '130px' }}>
        <div className="container">
          <h2 className="about-section-title">WHO I AM</h2>
          <div className="about-grid">
            <div className="about-stats">
              <div className="stat-card glass-card stat-hackathon">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">4+</div>
                <div className="stat-label">Hackathons</div>
              </div>
              <div className="stat-card glass-card stat-internship">
                <div className="stat-icon">💼</div>
                <div className="stat-number">3</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-card glass-card stat-project">
                <div className="stat-icon">🚀</div>
                <div className="stat-number">6</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card glass-card stat-club">
                <div className="stat-icon">👥</div>
                <div className="stat-number">1</div>
                <div className="stat-label">Club Founded</div>
              </div>
            </div>
            <div className="about-bio">
              {personalInfo.aboutText.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para
                  .replace(/LEGION Club/g, '<strong>LEGION Club</strong>')
                  .replace(/Alonzo AI/g, '<strong>Alonzo AI</strong>')
                  .replace(/YugaYatra Retail/g, '<strong>YugaYatra Retail</strong>')
                }} />
              ))}
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
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <div className="container">
          <div className="section-label">ACADEMIC BACKGROUND</div>
          <h2 className="section-title">Education</h2>
          <div className="edu-card glass-card">
            <div className="edu-logo-wrapper">
              <img src="/svit-logo.jpg" alt="SVIT Seal Logo" className="edu-logo-img" />
            </div>
            <div className="edu-content">
              <div className="edu-affiliation">JNTUH (Jawaharlal Nehru Technological University, Hyderabad) Affiliated</div>
              <h3 className="edu-institution">Swami Vivekananda Institute of Technology</h3>
              <p className="edu-degree">B.Tech in Computer Science and Engineering (CSE)</p>
              <div className="edu-meta">
                <span className="edu-date">📅 Sept 2023 – May 2027</span>
                <span className="gpa-badge">GPA: 7.2 / 10.0</span>
              </div>
              <div className="edu-courses">
                {['Data Structures', 'Computer Networking', 'DevOps', 'Database Management Systems'].map(course => (
                  <span key={course} className="course-chip">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
