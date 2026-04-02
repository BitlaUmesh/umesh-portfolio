export const personalInfo = {
  name: "Bitla Umesh Kumar",
  role: "AI Engineer & Full-Stack Developer",
  shortDesc: "CSE student specializing in AI/ML and full-stack development.\nFounder of SVIT's LEGION Club · 4x Hackathon Participant · Software Engineer Intern",
  aboutText: [
    "I'm a CSE student at SVIT Hyderabad, specializing in AI/ML integration and full-stack development. I build AI-native applications that solve real-world problems — from cybersecurity platforms to intelligent shopping agents.",
    "As the Founder and Lead of SVIT's LEGION Club, I've proven I can lead teams and orchestrate complex events across the department. Currently I'm a Software Engineer Intern at YugaYatra Retail OPC Pvt. Ltd., contributing to scalable e-commerce solutions using cutting-edge AI.",
    "My code speaks in Python, React, & FastAPI. My ambition speaks on hackathon stages and in late-night builds."
  ],
  email: "bitlaumesh04@gmail.com",
  location: "Hyderabad, India",
  resumeDriveLink: "https://drive.google.com/file/d/1ZNFKX7IOwYMcdcC5JP1LpatVaLViEVHa/view?usp=sharing"
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/BitlaUmesh' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bitla-umesh-kumar-272b2b344' }
];

export const experienceData = [
  {
    company: "YugaYatra Retail OPC Pvt. Ltd.",
    role: "Software Engineer Intern",
    date: "Mar 2026 – Present",
    desc: [
      "Developing scalable web applications utilizing Cursor AI, Firebase Studio, and integrated AI technologies.",
      "Contributing to live freelance projects and assisting in e-commerce deployments and seller portal management."
    ],
    tags: ["Cursor AI", "Firebase", "React", "AI"],
    iconText: "YY"
  },
  {
    company: "LEGION Club (SVIT)",
    role: "Founder & Non-Technical Lead",
    date: "Feb 2026 – Present",
    desc: [
      "Founded and structured the CSE Department club into Technical and Non-Technical divisions to serve the broader student body.",
      "Directed the Non-Technical division, orchestrating multiple department-wide events and managing all logistical operations."
    ],
    tags: ["Leadership", "Event Management", "Team Building"],
    iconText: "LC"
  }
];

export const projectsData = [
  {
    name: "SENTRY",
    badge: { text: "🏆 National Hackathon", class: "badge-gold" },
    event: "Novus'24 National Hackathon",
    desc: "AI-Native, ChatOps-first Security Orchestration platform to mitigate alert fatigue in SOCs. Architected a FastAPI backend integrated with Llama 3.1 (via Groq) for zero-shot threat mapping to MITRE ATT&CK. Human-in-the-Loop via Telegram Bot API.",
    tech: ["Python", "FastAPI", "Llama 3.1", "Groq", "Telegram API", "MITRE ATT&CK"],
    link: "https://github.com/BitlaUmesh/SENTRY",
    bannerClass: "banner-red",
    icon: "🔐",
    topProject: false
  },
  {
    name: "Neural-Sync",
    badge: { text: "🥈 4th Place", class: "badge-silver" },
    event: "HackForge 48-Hour National Hackathon",
    desc: "Python framework synchronizing neural network outputs with high-frequency data streams. Optimized Git-versioned data pipelines to reduce processing latency for real-time AI inference. Secured 4th Place and a Software Engineering Internship.",
    tech: ["Python", "Git", "Neural Networks", "Data Pipelines"],
    link: "https://github.com/BitlaUmesh/Neural_Sync",
    bannerClass: "banner-purple",
    icon: "🧠",
    topProject: true
  },
  {
    name: "Shopping Agent",
    badge: { text: "🤖 AI Agent", class: "badge-blue" },
    event: "GDG Hyderabad Agent-A-Thon",
    desc: "AI-powered price-comparison engine using Streamlit and Python to aggregate e-commerce data via Google APIs. ChromaDB + Sentence Transformers for semantic search and highly accurate cross-site product matching.",
    tech: ["Python", "Streamlit", "ChromaDB", "Sentence Transformers", "Google APIs"],
    link: "https://github.com/BitlaUmesh/Shopping-Agent",
    bannerClass: "banner-teal",
    icon: "🛒",
    topProject: false
  },
  {
    name: "EcoScan AI",
    badge: { text: "🌱 National Hackathon", class: "badge-green" },
    event: "Data Dynamo 2.0 National Hackathon",
    desc: "Computer vision-based AI agent using Python to classify waste via real-time camera feeds. Developed a responsive HTML5/CSS3 front-end that delivers step-by-step recycling instructions to users.",
    tech: ["Python", "Computer Vision", "HTML5", "CSS3"],
    link: "https://github.com/BitlaUmesh/EcoScan-AI",
    bannerClass: "banner-green",
    icon: "♻️",
    topProject: false
  }
];

export const skillsData = {
  languages: ["Python", "C", "HTML", "CSS"],
  frameworks: ["React", "FastAPI", "Streamlit", "ChromaDB", "Firebase", "Git"],
  ai: ["Llama 3.1", "Groq", "Sentence Transformers", "Computer Vision"],
  tools: ["Cursor AI", "Antigravity", "GitHub", "VS Code"]
};
