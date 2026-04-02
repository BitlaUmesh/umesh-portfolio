import PageTransition from '../components/PageTransition';
import { experienceData, personalInfo } from '../data/constants';
import { Helmet } from 'react-helmet-async';

export default function Experience() {
  return (
    <PageTransition>
      <Helmet>
        <title>Experience | {personalInfo.name}</title>
      </Helmet>
      <section className="section" id="experience" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <div className="container">
          <div className="section-label">MY JOURNEY</div>
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-line"></div>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot pulse"></div>
                <div className="timeline-card glass-card">
                  <div className="timeline-header">
                    <div className="timeline-company-icon">{exp.iconText}</div>
                    <div>
                      <h3 className="timeline-company">{exp.company}</h3>
                      <p className="timeline-role">{exp.role}</p>
                    </div>
                    {exp.date.includes('Present') && <span className="timeline-badge present-badge">PRESENT</span>}
                  </div>
                  <p className="timeline-date">📅 {exp.date}</p>
                  <ul className="timeline-bullets">
                    {exp.desc.map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                  <div className="timeline-tags">
                    {exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
