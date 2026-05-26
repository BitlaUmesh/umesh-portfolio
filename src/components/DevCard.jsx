import { useState } from 'react';
import { motion as Motion } from 'framer-motion';

export default function DevCard() {
  const [activeTab, setActiveTab] = useState('stats');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <div className="dev-card-container" onMouseMove={handleMouseMove}>
      <div className="dev-badge-header">
        <div className="badge-org">CSE DEPARTMENT</div>
        <div className="badge-pass-type">DEVELOPER PASS // 2026</div>
      </div>

      <div className="dev-badge-body">
        <div className="profile-row">
          <div className="avatar-box">
            <img src="/assets/profile.jpg" alt="Bitla Umesh Kumar" className="avatar-image" />
            <div className="badge-verified-badge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Bitla Umesh Kumar</h3>
            <p className="profile-role">CSE Student & AI/ML Dev</p>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">OPEN FOR INTERNSHIPS</span>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="badge-tabs">
          <button 
            className={`badge-tab interactive ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            📊 Stats
          </button>
          <button 
            className={`badge-tab interactive ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            🛠️ Skills
          </button>
          <button 
            className={`badge-tab interactive ${activeTab === 'leadership' ? 'active' : ''}`}
            onClick={() => setActiveTab('leadership')}
          >
            🔥 Club
          </button>
        </div>

        <div className="badge-content-box">
          {activeTab === 'stats' && (
            <Motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-tab-content"
            >
              <div className="stats-list">
                <div className="stat-item">
                  <span className="stat-val">3</span>
                  <span className="stat-label">Internships (Alonzo AI, YugaYatra, QSkill)</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">5+</span>
                  <span className="stat-label">Projects Built (RAG, Web, Security)</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">1</span>
                  <span className="stat-label">Tech Club Founded (LEGION Club)</span>
                </div>
              </div>
            </Motion.div>
          )}

          {activeTab === 'skills' && (
            <Motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-tab-content"
            >
              <div className="badge-skills-grid">
                <div className="skills-group">
                  <span className="group-title">Languages & AI:</span>
                  <div className="chips-row">
                    <span className="skill-chip">Python</span>
                    <span className="skill-chip">JavaScript</span>
                    <span className="skill-chip">Vector Databases</span>
                    <span className="skill-chip">LangChain</span>
                  </div>
                </div>
                <div className="skills-group">
                  <span className="group-title">Full-Stack Development:</span>
                  <div className="chips-row">
                    <span className="skill-chip">React.js</span>
                    <span className="skill-chip">Node.js</span>
                    <span className="skill-chip">Express.js</span>
                    <span className="skill-chip">SQL / NoSQL</span>
                  </div>
                </div>
              </div>
            </Motion.div>
          )}

          {activeTab === 'leadership' && (
            <Motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-tab-content"
            >
              <div className="leadership-info">
                <h4 className="club-title">LEGION Club (Founder & Lead)</h4>
                <p className="club-description">
                  Established and orchestrated the department's computer science club. Organise inter-departmental coding hackathons, technical workshops, and guide peer projects in AI/ML & web apps.
                </p>
              </div>
            </Motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
