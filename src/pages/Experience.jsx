import PageTransition from '../components/PageTransition';
import { experienceData, personalInfo } from '../data/constants';
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

                  <ul className="timeline-bullets">
                    {exp.desc.map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                  
                  <div className="timeline-tags">
                    {exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
            
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
