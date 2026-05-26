import { skillsData } from '../data/constants';

export default function SkillsMarquee() {
  const allSkills = [
    ...skillsData.languages,
    ...skillsData.frameworks,
    ...skillsData.ai
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-gradient-left"></div>
      <div className="marquee-content">
        {/* Double array for infinite effect */}
        {[...allSkills, ...allSkills].map((skill, idx) => (
          <div key={idx} className="marquee-item glass-card">
            {skill}
          </div>
        ))}
      </div>
      <div className="marquee-gradient-right"></div>
    </div>
  );
}
