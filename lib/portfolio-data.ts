export type Project = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  period: string;
  description: string;
  longDescription: string;
  stack: string[];
  features: string[];
  github: string;
  demo?: string;
  certificate?: string;
  award?: string;
};

export type AchievementMedia = {
  src?: string;
  label: string;
  fileName: string;
  kind?: "photo" | "certificate";
  fit?: "cover" | "contain";
  position?: string;
  orientation?: "landscape" | "portrait";
};

export type Achievement = {
  id: string;
  index: string;
  rank: number;
  year: string;
  title: string;
  organizer: string;
  result: string;
  prize?: string;
  summary: string;
  build: string;
  stack: string[];
  media: AchievementMedia[];
  featured?: boolean;
};

export const portfolio = {
  person: {
    name: "Akhilesh Kumar",
    firstName: "Akhilesh",
    shortName: "AK",
    role: "Software Engineer / AI Engineer",
    headline: "AI Engineer · Full Stack Developer · GIS Developer",
    location: "Gurugram, Haryana, India",
    availability: "Open to high-impact engineering roles",
    email: "akhileshkr17122002@gmail.com",
    phone: "+91 92055 37442",
    intro:
      "Software Engineer with 2+ years of experience designing AI-powered enterprise applications, LLM and RAG orchestration workflows, scalable Java services, geospatial systems, and modern full-stack products. I combine AI engineering with backend depth to turn complex requirements into reliable, usable software.",
    about:
      "Software engineer with 2+ years of experience across enterprise AI, Java backend services, and full-stack product engineering. I work where language models meet real systems—GIS, spatial data, computer vision, and human-centered interfaces.",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/akhilesh-kumar-7a6857248/",
    github: "https://github.com/Akhilesh1712",
    leetcode: "https://leetcode.com/u/akhileshkr17122002/",
    resume: "https://drive.google.com/file/d/1UFtTeYujAxLqCEIunk7p6u5iBBBixXZ8/view?usp=drivesdk",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  experience: [
    {
      period: "MAR 2025—NOW",
      company: "Amantya Technologies",
      role: "Software Engineer",
      location: "Gurugram / On-site",
      description:
        "Building intelligent utility-network planning products that compress months of manual spatial analysis and design work into workflows that can run in nearly a day.",
      stack: ["Java", "LangGraph", "LangChain", "React", "PostGIS"],
      achievement:
        "Designed LLM orchestration and RAG pipelines that translate natural language into enterprise GIS operations, network planning, discovery, styling, and cost estimation.",
      recognition: [
        {
          type: "KNOWLEDGE LEADERSHIP",
          title: "AI-Driven Transformation for Modern Project Delivery",
          description:
            "Delivered an internal training session covering domain-specific LLM fine-tuning, prompt engineering, LoRA and parameter-efficient methods, and optimizing models for accuracy, latency, and deployment readiness.",
          media: {
            src: "/experience/amantya/ai-session/certificate.png",
            label: "AI training certificate awarded to Akhilesh Kumar by Amantya Technologies",
            fileName: "certificate.png",
            kind: "certificate",
            fit: "contain",
            orientation: "landscape",
          },
        },
        {
          type: "WORKPLACE RECOGNITION",
          title: "2× Certificates of Appreciation",
          description:
            "Recognized twice for ownership and contribution across AI orchestration, enterprise GIS integration, backend delivery, and team impact at Amantya Technologies.",
          media: {
            src: "/experience/amantya/appreciation/certificate.png",
            label: "Certificate of appreciation awarded to Akhilesh Kumar by Amantya Technologies",
            fileName: "certificate.png",
            kind: "certificate",
            fit: "contain",
            orientation: "landscape",
          },
        },
      ],
    },
    {
      period: "AUG—NOV 2024",
      company: "IIT Bombay",
      role: "Research Intern",
      location: "Remote",
      description:
        "Worked on CNN-based computer-vision models for image-driven product filtering and classification, alongside SaaS product-management experiences.",
      stack: ["CNN", "React.js", "Node.js", "PostgreSQL"],
      achievement:
        "Connected applied ML research with usable admin and product workflows across the stack.",
      recognition: [],
    },
    {
      period: "MAR—APR 2024",
      company: "Fetch.ai",
      role: "Open-source Contributor",
      location: "IIT Delhi / Open source",
      description:
        "Contributed to the uAgents ecosystem during the Fetch.ai hackathon, integrating a notes API with an agent-based recommendation flow.",
      stack: ["Python", "uAgents", "APIs", "Machine Learning"],
      achievement:
        "Led the team to 3rd place at the Fetch.ai hackathon hosted at IIT Delhi.",
      recognition: [],
    },
  ],
  projects: [
    {
      id: "ai-genie",
      number: "01",
      title: "AI Genie",
      eyebrow: "AI AGENT RECOMMENDATION",
      period: "DEC 2024—JAN 2025",
      description:
        "A personalized discovery engine that turns a real-world need into the right AI agent, then learns from every interaction.",
      longDescription:
        "AI Genie is an AI-powered recommendation application built with Next.js and Flask. It interprets needs across travel, business, automation, and other domains using NLP, RAG, and generative AI, then ranks the most relevant agents. A reinforcement-learning feedback loop continuously improves recommendation quality from user interactions.",
      stack: ["Next.js", "Tailwind CSS", "Flask", "Scikit-Learn", "NLP", "RAG", "GenAI"],
      features: [
        "Intent-aware, personalized AI agent recommendations",
        "Reinforcement learning that improves ranking over time",
        "NLP and RAG-powered search across multiple domains",
        "Scalable Next.js and Flask application architecture",
      ],
      github: "https://github.com/Akhilesh1712/AI_AGENT_RECOMMENDATION_APPLICATION",
      certificate:
        "https://www.linkedin.com/in/akhilesh-kumar-7a6857248/overlay/Project/816268181/treasury/?profileId=ACoAAD1ZqK4BmdFCJCSlu_hiTkeeqlbZ9zdmiiM",
      award: "PIWOT × RELIANCE · 5TH PLACE · ₹50K",
    },
    {
      id: "cryptonight",
      number: "02",
      title: "Crypto Night",
      eyebrow: "AI MARKET INTELLIGENCE",
      period: "JAN—FEB 2024",
      description:
        "A customizable crypto intelligence platform combining AI recommendations with live buy and sell signals.",
      longDescription:
        "Crypto Night recommends crypto assets around each user’s goals and risk preferences. It combines independently analyzed market data, AI ranking models, live CoinGecko charts, and Pine Script buy/sell indicators in a full-stack experience built for the first-place EXECUTE 3.0 hackathon entry.",
      stack: ["Python", "PyTorch", "TensorFlow", "Pine Script", "Flask", "React", "MongoDB"],
      features: [
        "Customizable crypto recommendations by user profile",
        "Pine Script-powered buy and sell signals",
        "Live market charts, sentiment, and historical analysis",
      ],
      github: "https://github.com/Akhilesh1712/Trading-Crypto-Stocks-Recommendation",
      award: "EXECUTE 3.0 · 1ST PLACE",
    },
    {
      id: "vision-s",
      number: "03",
      title: "Vision S Software",
      eyebrow: "ACCESSIBLE MULTIMODAL AI",
      period: "SEP—NOV 2023",
      description:
        "A real-time accessibility platform for people with visual, verbal, and hearing impairments.",
      longDescription:
        "Vision S combines sound detection, object and distance detection, gesture recognition, smart health tracking, and two-way sign-language translation. TensorFlow, Flask, React, and Socket.IO work together to turn visual and acoustic events into useful real-time assistance across devices.",
      stack: ["Python", "TensorFlow", "Flask", "React", "Socket.IO", "YOLOv5"],
      features: [
        "Real-time object, distance, and environmental detection",
        "Sound and gesture recognition for immediate assistance",
        "Sign-language translation and smart health monitoring",
      ],
      github: "https://github.com/Akhilesh1712/ForImpaired",
      award: "HACK@UIET 2.0 · 2ND PLACE",
    },
    {
      id: "twetterix",
      number: "04",
      title: "Twetterix",
      eyebrow: "SOCIAL RECOMMENDATION SYSTEM",
      period: "APR 2022",
      description:
        "A full-stack Twitter-style network with a personalized post recommendation pipeline.",
      longDescription:
        "Twetterix is a MERN social application with user publishing, feed interactions, and recommendation-aware data fetching. TanStack Query powers responsive feed behavior while Express and Mongoose support the backend and personalized post delivery.",
      stack: ["React", "TanStack Query", "Tailwind CSS", "Express.js", "MongoDB", "Mongoose"],
      features: [
        "Personalized user post recommendations",
        "Responsive social publishing and feed interactions",
        "MERN architecture with intelligent client-side caching",
      ],
      github: "https://github.com/Akhilesh1712/Mern-Twitter-With-Post-Recommendation",
    },
  ] satisfies Project[],
  skillGroups: [
    { label: "AI", items: ["LLMs", "LangGraph", "RAG", "NLP", "Computer Vision"] },
    { label: "Backend", items: ["Java", "Spring Boot", "FastAPI", "Node.js", "REST"] },
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "ArcGIS SDK"] },
    { label: "Data", items: ["PostgreSQL", "PostGIS", "ChromaDB", "MongoDB", "MySQL"] },
    { label: "Platform", items: ["Docker", "Kubernetes", "Git", "PyTorch", "TensorFlow"] },
  ],
  impact: [
    { value: "6×", label: "Hackathon winner / finalist" },
    { value: "1st", label: "EXECUTE 3.0 · DTU" },
    { value: "₹1L", label: "Cash + award value" },
    { value: "8.68", label: "B.Tech CSE GPA" },
  ],
  achievements: [
    {
      id: "hack-uiet",
      index: "01",
      rank: 4,
      year: "SEP 2023",
      title: "HACK@UIET 2.0",
      organizer: "UIET · Maharshi Dayanand University",
      result: "2ND PLACE",
      summary:
        "The first hackathon—the moment a classroom interest in technology became a real engineering journey. The team finished second after a 15-hour build.",
      build:
        "An inclusive healthcare system for visually impaired, blind, deaf, and hard-of-hearing users: object and distance detection, intelligent sound alerts, voice and Wear OS notifications, and two-way sign-language translation.",
      stack: ["Computer Vision", "CNN", "YOLOv5", "Android", "Wear OS"],
      media: [
        { src: "/achievements/01-hack-uiet/photo.png", label: "Prize ceremony", fileName: "photo.png", kind: "photo", position: "center 58%", orientation: "landscape" },
        { src: "/achievements/01-hack-uiet/certificate.png", label: "Certificate", fileName: "certificate.png", kind: "certificate", fit: "contain", orientation: "landscape" },
      ],
    },
    {
      id: "innovate-nsut",
      index: "02",
      rank: 5,
      year: "DEC 2023",
      title: "INNOVATE NSUT ’24",
      organizer: "Netaji Subhas University of Technology",
      result: "6TH / 50+ TEAMS",
      summary:
        "The first major inter-college hackathon—a 30-hour sprint that advanced through the opening round and finished sixth among more than 50 teams.",
      build:
        "A stronger evolution of Vision Assist with improved assistive flows and a dedicated sign-language detection model for more natural communication between deaf and hearing users.",
      stack: ["Deep Learning", "Sign Detection", "Python", "React"],
      media: [
        { src: "/achievements/02-innovate-nsut/photo.png", label: "NSUT journey", fileName: "photo.png", kind: "photo", fit: "contain", position: "center", orientation: "portrait" },
      ],
    },
    {
      id: "execute-zebpay",
      index: "03",
      rank: 2,
      year: "JAN 2024",
      title: "EXECUTE 3.0",
      organizer: "ZebPay · Delhi Technological University",
      result: "1ST PLACE",
      prize: "₹40K CASH + ₹10K VOUCHER",
      summary:
        "The breakthrough win. Akhilesh led the Fantastic Four team to first place and earned the team’s first income through engineering.",
      build:
        "CryptoNight—an AI cryptocurrency recommendation platform trained on independently analyzed Kaggle data, backed by Surprise, PyTorch, TensorFlow, Flask, Node.js, MongoDB, and live CoinGecko charts.",
      stack: ["PyTorch", "TensorFlow", "Flask", "React", "CoinGecko"],
      media: [
        { src: "/achievements/03-execute-zebpay/photo.png", label: "Winning at DTU", fileName: "photo.png", kind: "photo", fit: "contain", position: "center", orientation: "landscape" },
        { src: "/achievements/03-execute-zebpay/certificate.png", label: "Winner certificate", fileName: "certificate.png", kind: "certificate", fit: "contain", orientation: "landscape" },
      ],
      featured: true,
    },
    {
      id: "scale-91",
      index: "04",
      rank: 6,
      year: "MAR 2024",
      title: "SCALE +91",
      organizer: "Fintech Festival India · Hack2Skill",
      result: "TOP 50 · INDIA",
      summary:
        "Selected among the top 50 teams nationwide in an online fintech innovation challenge.",
      build:
        "Advanced the AI-driven cryptocurrency recommendation concept for a national fintech audience, combining personalization, market signals, and explainable insights.",
      stack: ["FinTech", "Recommendations", "Machine Learning", "Data Analysis"],
      media: [{ src: "/achievements/04-scale-91/certificate.png", label: "National finalist certificate", fileName: "certificate.png", kind: "certificate", fit: "contain", orientation: "landscape" }],
    },
    {
      id: "fetch-ai",
      index: "05",
      rank: 3,
      year: "APR 2024",
      title: "FETCH.AI @ IIT DELHI",
      organizer: "Fetch.ai · IIT Delhi",
      result: "3RD PLACE",
      summary:
        "An open-source challenge at IIT Delhi, competing against teams from across India and finishing on the podium.",
      build:
        "Merged a ListNotes API with Fetch.ai’s agent engine to provide intelligent note recommendations, contributing the solution through the open-source uAgents ecosystem.",
      stack: ["Python", "uAgents", "Open Source", "Recommendation Systems"],
      media: [
        { src: "/achievements/05-fetch-ai/photo.png", label: "IIT Delhi team photo", fileName: "photo.png", kind: "photo", position: "center 40%", orientation: "landscape" },
      ],
    },
    {
      id: "piwot-reliance",
      index: "06",
      rank: 1,
      year: "FEB 2025",
      title: "PIWOT × RELIANCE",
      organizer: "PanIIT Alumni India · Reliance Industries",
      result: "5TH PLACE",
      prize: "₹50K CASH AWARD",
      summary:
        "The defining national-stage final: Jio World Convention Centre, Mumbai. A first major hackathon journey to Mumbai, culminating in fifth place and a ₹50,000 award.",
      build:
        "AI Genie—an AI agent recommendation system that parses a user’s requirements and finds the most useful AI tools using text processing, semantic matching, and machine learning.",
      stack: ["Next.js", "Flask", "scikit-learn", "TF-IDF", "NLP"],
      media: [
        { src: "/achievements/06-piwot-reliance/photo-02.png", label: "PIWOT national stage", fileName: "photo-02.png", kind: "photo", fit: "contain", position: "center", orientation: "landscape" },
        { src: "/achievements/06-piwot-reliance/photo-01.png", label: "Jio World Convention Centre", fileName: "photo-01.png", kind: "photo", fit: "contain", position: "center", orientation: "landscape" },
        { src: "/achievements/06-piwot-reliance/certificate.png", label: "Reliance certificate", fileName: "certificate.png", kind: "certificate", fit: "contain", orientation: "portrait" },
      ],
      featured: true,
    },
  ] satisfies Achievement[],
  socials: [
    { label: "GitHub", href: "https://github.com/Akhilesh1712" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akhilesh-kumar-7a6857248/" },
    { label: "LeetCode", href: "https://leetcode.com/u/akhileshkr17122002/" },
  ],
  education: {
    school: "University Institute of Engineering and Technology, MDU",
    degree: "B.Tech · Computer Science & Engineering",
    period: "2021—2025",
    gpa: "8.68 / 10.0",
  },
} as const;
