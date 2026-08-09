export const personalInfo = {
  name: "Bitla Umesh Kumar",
  role: "AI Engineer & Full-Stack Developer",
  shortDesc: "CSE student specializing in AI/ML and full-stack development. Founder of the LEGION Club, MERN Developer Intern at Infyntrek Systèmes, Alonzo AI, and YugaYatra Retail.",
  aboutText: [
    "I'm a CSE student specializing in AI/ML integration and full-stack development. I build AI-native applications that solve real-world problems — from Sanskrit RAG platforms to multimodal document intelligence systems.",
    "As the Founder and Lead of the LEGION Club, I've proven I can lead teams and orchestrate complex events across the department. I have built production-grade web applications during my internships at Infyntrek Systèmes (MERN Stack), Alonzo AI (SPARK Program), and YugaYatra Retail.",
    "My code speaks in Python, MERN Stack, & FastAPI. My ambition speaks on hackathon stages and in late-night builds."
  ],
  email: "bitlaumesh04@gmail.com",
  location: "Hyderabad, India",
  resumeDriveLink: "https://drive.google.com/file/d/1ZNFKX7IOwYMcdcC5JP1LpatVaLViEVHa/view?usp=sharing"
};

export const homeHighlights = [
  { text: "CSE Student (AI/ML & Full-Stack)", icon: "🎓" },
  { text: "MERN Developer @Infyntrek Systèmes", icon: "⚡" },
  { text: "AI & Full Stack Intern @Alonzo AI", icon: "🧠" },
  { text: "Founder, LEGION Club", icon: "👥" },
  { text: "4x National Hackathon Participant", icon: "🏆" }
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/BitlaUmesh' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bitla-umesh-kumar-272b2b344' }
];

export const experienceData = [
  {
    company: "Infyntrek Systèmes",
    role: "Software Developer Intern (MERN Stack)",
    date: "Jul 2026 – Sep 2026",
    desc: [
      "Developed and maintained full-stack web applications on the MERN stack (MongoDB, Express.js, React.js, Node.js) as part of the core Development team.",
      "Designed and built RESTful APIs and back-end services with Node.js and Express.js, and implemented user-facing features with React.js.",
      "Owned MongoDB schema design and data modeling; participated in code reviews and cross-team planning sessions to uphold engineering best practices."
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    iconText: "IS",
    logo: "/logos/infyntrek.png",
    logoBg: "#ffffff"
  },
  {
    company: "Alonzo AI",
    role: "Full Stack & AI Developer Intern",
    date: "May 2026 – July 2026",
    roles: [
      {
        role: "Associate Full Stack Developer Intern",
        date: "June 2026 – July 2026",
        desc: [
          "Transitioned from the SPARK Program to a 1-month on-site internship, building company-owned production projects alongside Alonzo AI's engineering team.",
          "Contributed across the full stack on internal products, applying Agentic Driven Development practices established during the SPARK program."
        ]
      },
      {
        role: "AI & Full-Stack Engineering Intern (SPARK Program)",
        date: "May 2026 – June 2026",
        desc: [
          "Merit-selected (top 5 students/college) for an in-person industry internship at Gachibowli, Hyderabad, building production-grade AI and full-stack projects.",
          "Contributed to open-source repositories via Agentic Driven Development and delivered a capstone project at program conclusion."
        ]
      }
    ],
    tags: ["AI", "Full Stack", "React.js", "Python", "Agentic Dev", "SPARK Program"],
    iconText: "AA",
    logo: "/logos/alonzo.png"
  },
  {
    company: "YugaYatra Retail OPC Pvt. Ltd.",
    role: "Software Engineer Intern",
    date: "Mar 2026 – May 2026",
    desc: [
      "Built scalable web applications using Cursor AI, Supabase, and integrated AI technologies for live freelance client projects.",
      "Contributed to e-commerce deployments and seller portal management, ensuring stable, zero-downtime production rollouts."
    ],
    tags: ["Cursor AI", "Supabase", "React", "AI", "E-commerce"],
    iconText: "YY",
    logo: "/logos/yugayatra.jpeg"
  },
  {
    company: "LEGION Club, SVIT",
    role: "Founder & Non-Technical Lead",
    date: "Feb 2026 – Present",
    desc: [
      "Founded and structured the CSE Department's student club into Technical and Non-Technical divisions to better serve the student body.",
      "Directed the Non-Technical division, orchestrating multiple department-wide events and managing all logistical operations end-to-end."
    ],
    tags: ["Leadership", "Event Management", "Operations", "Team Lead"],
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
  languages: ["Python", "JavaScript", "C", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Streamlit", "Git", "Docker", "Vercel"],
  ai: ["MongoDB", "ChromaDB", "pgvector", "Supabase", "RAG Pipelines", "Cohere API", "Groq API", "OpenRouter", "PyMuPDF", "Upstash Redis", "REST APIs"]
};

export const credentialsData = [
  {
    id: "infyntrek-offer",
    title: "Software Developer Intern",
    organization: "Infyntrek Systèmes",
    date: "July 2026",
    category: "Offer Letter",
    status: "ISO 27001 Verified",
    documentUrl: "/documents/Infyntrek_Offer_Letter.pdf",
    badgeClass: "badge-purple",
    desc: "Official offer letter for MERN Stack Software Developer Internship at Infyntrek Systèmes."
  },
  {
    id: "alonzo-spark",
    title: "SPARK Program Merit Selection",
    organization: "Alonzo AI",
    date: "May 2026",
    category: "Merit Award",
    status: "Top 5 Merit Selected",
    badgeClass: "badge-gold",
    desc: "Merit-selected in top 5 students for on-site industry internship at Gachibowli, Hyderabad."
  }
];
