import PageTransition from '../components/PageTransition';
import { experienceData, credentialsData, personalInfo } from '../data/constants';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 14 }
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Experience | {personalInfo.name}</title>
      </Helmet>
      <section className="section" id="experience" style={{ paddingTop: '130px', minHeight: '80vh' }}>
        <div className="container">
          <h2 className="about-section-title">MY JOURNEY</h2>
          
          <motion.div 
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="timeline-line"></div>

            {experienceData.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-dot pulse"></div>
                <div className="timeline-card glass-card">
                  <div className="timeline-header">
                    <div className="timeline-company-icon">
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="company-logo-img" 
                          style={exp.logoBg ? { background: exp.logoBg } : {}}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.innerText = exp.iconText;
                          }}
                        />
                      ) : (
                        exp.iconText
                      )}
                    </div>
                    <div>
                      <h3 className="timeline-company">{exp.company}</h3>
                      <p className="timeline-role">{exp.role}</p>
                    </div>
                    {exp.date.includes('Present') && <span className="timeline-badge present-badge">PRESENT</span>}
                  </div>
                  
                  <div className="timeline-date-pill">
                    <span className="calendar-icon">📅</span>
                    <span>{exp.date}</span>
                  </div>

                  {exp.roles ? (
                    <div className="sub-roles-container">
                      {exp.roles.map((sub, sIdx) => (
                        <div key={sIdx} className="sub-role-block">
                          <div className="sub-role-header">
                            <h4 className="sub-role-title">{sub.role}</h4>
                            <span className="sub-role-date">📅 {sub.date}</span>
                          </div>
                          <ul className="timeline-bullets">
                            {sub.desc.map((bullet, i) => <li key={i}>{bullet}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="timeline-bullets">
                      {exp.desc.map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  )}
                  
                  <div className="timeline-tags">
                    {exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* VERIFIED CREDENTIALS & OFFER LETTERS */}
          <div style={{ marginTop: '5rem' }}>
            <div className="section-label">VERIFIED DOCUMENTS</div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Offer Letters & Credentials</h2>
            <div className="credentials-grid">
              {credentialsData.map((cred) => (
                <div key={cred.id} className="credential-card glass-card">
                  <div className="credential-header">
                    <span className={`badge ${cred.badgeClass}`}>{cred.status}</span>
                    <span className="credential-date">{cred.date}</span>
                  </div>
                  <h3 className="credential-title">{cred.title}</h3>
                  <div className="credential-org">{cred.organization}</div>
                  <p className="credential-desc">{cred.desc}</p>
                  {cred.documentUrl && (
                    <a 
                      href={cred.documentUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn interactive cred-btn"
                    >
                      📄 View Official Document
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
