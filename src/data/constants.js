export const personalInfo = {
  name: "Bitla Umesh Kumar",
  role: "AI Engineer & Full-Stack Developer",
  shortDesc: "CSE student specializing in AI/ML and full-stack development. Founder of the LEGION Club, 4x National Level Hackathon Participant, and Intern at Alonzo AI and YugaYatra Retail.",
  aboutText: [
    "I'm a CSE student specializing in AI/ML integration and full-stack development. I build AI-native applications that solve real-world problems — from cybersecurity platforms to intelligent shopping agents.",
    "As the Founder and Lead of the LEGION Club, I've proven I can lead teams and orchestrate complex events across the department. I have built production-grade AI and full-stack projects during my internships, including the SPARK program at Alonzo AI in Gachibowli, Hyderabad, and developed scalable web applications utilizing Cursor AI and Supabase at YugaYatra Retail.",
    "My code speaks in Python, React, & FastAPI. My ambition speaks on hackathon stages and in late-night builds."
  ],
  email: "bitlaumesh04@gmail.com",
  location: "Hyderabad, India",
  resumeDriveLink: "https://drive.google.com/file/d/1ZNFKX7IOwYMcdcC5JP1LpatVaLViEVHa/view?usp=sharing"
};

export const homeHighlights = [
  { text: "CSE Student (AI/ML & Full-Stack)", icon: "🎓" },
  { text: "Founder, LEGION Club", icon: "👥" },
  { text: "4x National Level Hackathon Participant", icon: "🏆" },
  { text: "Software Intern @YugaYatra Retail", icon: "💼" },
  { text: "AI & Full Stack Intern @Alonzo AI", icon: "🧠" }
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/BitlaUmesh' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bitla-umesh-kumar-272b2b344' }
];

export const experienceData = [
  {
    company: "Alonzo AI",
    role: "AI & Full-Stack Engineering Intern (SPARK Program)",
    date: "May 2026 – June 2026",
    desc: [
      "Merit-selected (5 students/college) for an in-person industry internship at Gachibowli, Hyderabad; building production-grade AI and full-stack projects with Alonzo AI's engineering team.",
      "Contributing to open-source repos via Agentic Driven Development practices and delivering a capstone project at program conclusion."
    ],
    tags: ["AI", "Full Stack", "React", "Python", "Agentic Dev"],
    iconText: "AA",
    logo: "/logos/alonzo.png"
  },
  {
    company: "Squarcell Resource India (QSkill)",
    role: "AI/ML Intern",
    date: "Apr 2026 – May 2026",
    desc: [
      "Selected for an intensive virtual AI/ML program focusing on hands-on skill development and practical model deployment."
    ],
    tags: ["AI/ML", "Model Deployment", "Python"],
    iconText: "QS",
    logo: "/logos/qskill.png",
    logoBg: "#ffffff"
  },
  {
    company: "YugaYatra Retail OPC Pvt. Ltd.",
    role: "Software Engineer Intern",
    date: "Mar 2026 – May 2026",
    desc: [
      "Developed scalable web applications utilizing Cursor AI, Supabase, and integrated AI technologies for live freelance projects.",
      "Contributed to e-commerce deployments and assisted in seller portal management, ensuring stable production rollouts."
    ],
    tags: ["Cursor AI", "Supabase", "React", "AI"],
    iconText: "YY",
    logo: "/logos/yugayatra.jpeg"
  },
  {
    company: "LEGION Club",
    role: "Founder & Non-Technical Lead",
    date: "Feb 2026 – Present",
    desc: [
      "Founded and structured the CSE Department club into Technical and Non-Technical divisions to serve the student body.",
      "Directed the Non-Technical division, orchestrating multiple department-wide events and managing all logistical operations."
    ],
    tags: ["Leadership", "Event Management", "Team Building"],
    iconText: "LC",
    logo: "/logos/legion.png"
  }
];

export const projectsData = [
  {
    name: "Natya Samhita",
    badge: { text: "🎭 RAG Platform", class: "badge-purple" },
    event: "Sanskrit RAG Platform for Natya Shastra",
    desc: "A full-stack RAG platform designed for semantic querying of Sanskrit treatises. Features pgvector index, Cohere reranking, and DeepSeek LLM. Optimized with Upstash Redis caching to deliver ultra-low ~15ms latency.",
    tech: ["Next.js", "FastAPI", "pgvector", "Cohere API", "DeepSeek V3.1", "Upstash Redis"],
    link: "https://github.com/BitlaUmesh/Natya-Samhita",
    bannerClass: "banner-purple",
    graphicType: "rag",
    topProject: true
  },
  {
    name: "Neural-Sync",
    badge: { text: "🏆 4th Place", class: "badge-gold" },
    event: "HackForge 48-Hour National Hackathon",
    desc: "Real-time synchronization framework linking neural network outputs to high-frequency data streams. Optimized data pipelines to reduce latency for AI inference. Awarded 4th Place at HackForge National Hackathon.",
    tech: ["Python", "Git", "Neural Networks", "Data Pipelines"],
    link: "https://github.com/BitlaUmesh/Neural_Sync",
    bannerClass: "banner-blue",
    graphicType: "neural",
    topProject: true
  },
  {
    name: "Vision-RAG",
    badge: { text: "👁️ Multimodal RAG", class: "badge-teal" },
    event: "Multimodal Document Intelligence System",
    desc: "Multimodal RAG system combining computer vision and LLMs to extract intelligence from visually complex PDFs. Leverages FastAPI, ChromaDB, and Groq API to eliminate OCR dependency.",
    tech: ["FastAPI", "PyMuPDF", "Groq API", "ChromaDB", "Sentence Transformers", "Python"],
    link: "https://github.com/BitlaUmesh/Vision-RAG",
    bannerClass: "banner-teal",
    graphicType: "vision",
    topProject: false
  },
  {
    name: "SENTRY",
    badge: { text: "🛡️ SecOps", class: "badge-red" },
    event: "Novus'24 National Hackathon",
    desc: "AI-native ChatOps platform designed to mitigate Security Operations alert fatigue. Maps system logs to threats in real time using Llama 3.1, complete with interactive Telegram bot alerts.",
    tech: ["Python", "FastAPI", "Llama 3.1", "Groq", "Telegram API", "MITRE ATT&CK"],
    link: "https://github.com/BitlaUmesh/SENTRY",
    bannerClass: "banner-red",
    graphicType: "security",
    topProject: false
  },
  {
    name: "Shopping Agent",
    badge: { text: "🤖 AI Agent", class: "badge-blue" },
    event: "GDG Hyderabad Agent-A-Thon",
    desc: "AI-powered price-comparison engine using Streamlit and Python to compare product deals. Features ChromaDB and Sentence Transformers for cross-site semantic matching.",
    tech: ["Python", "Streamlit", "ChromaDB", "Sentence Transformers", "Google APIs"],
    link: "https://github.com/BitlaUmesh/Shopping-Agent",
    bannerClass: "banner-teal",
    graphicType: "shopping",
    topProject: false
  },
  {
    name: "EcoScan AI",
    badge: { text: "🌱 CV Agent", class: "badge-green" },
    event: "Data Dynamo 2.0 National Hackathon",
    desc: "Real-time computer vision agent that classifies waste and outputs recycling guides. Built using Python, OpenCV, and a clean responsive web interface.",
    tech: ["Python", "Computer Vision", "HTML5", "CSS3"],
    link: "https://github.com/BitlaUmesh/EcoScan-AI",
    bannerClass: "banner-green",
    graphicType: "recycle",
    topProject: false
  }
];

export const skillsData = {
  languages: ["Python", "C", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "FastAPI", "Streamlit", "ChromaDB", "Supabase", "Upstash Redis", "Docker", "Git"],
  ai: ["pgvector", "Groq API", "Cohere API", "OpenRouter", "PyMuPDF", "Llama 3.1", "DeepSeek V3.1", "Computer Vision", "Sentence Transformers"]
};
