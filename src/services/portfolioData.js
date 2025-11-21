// /src/services/portfolioData.js

const portfolioData = {
  summary:
    "AI/ML and Full-Stack Developer specializing in end-to-end ML pipelines, RAG systems, model deployment, and full-stack engineering.",
  contact: {
    location: "Sangli, Maharashtra, India",
    phone: "+91-9112140492",
    email: "costaspinto312@gmail.com",
    github: "https://github.com/MrCoss",
    linkedin: "https://linkedin.com/in/costaspinto",
    portfolio: "https://mrcoss.github.io/Costas_Portfolio/",
  },

  experience: [
    {
      company: "Unified Mentor Pvt Ltd",
      role: "Machine Learning Intern",
      period: "Aug 2025 – Nov 2025",
      details: [
        "Developed ML models for healthcare, environment, and wildlife domains.",
        "Built complete ML pipelines, FastAPI backends, and React/Vite frontends.",
        "Deployed production applications with CI/CD pipelines on Render and Vercel.",
      ],
    },
    {
      company: "Kodacy x SPACE",
      role: "Robotics Intern",
      period: "Nov 2025 – Nov 2025",
      details: [
        "Exposure to sensor systems, motion control, actuators, and embedded automation.",
        "Explored robotics for automation and space applications.",
      ],
    },
    {
      company: "Kodacy",
      role: "AI & ML Intern",
      period: "Sep 2025 – Sep 2025",
      details: [
        "Worked on supervised/unsupervised ML pipelines.",
        "Applied feature engineering, preprocessing, and optimization.",
      ],
    },
    {
      company: "SkillFied Mentor",
      role: "Data Analytics Intern",
      period: "Jul 2025 – Aug 2025",
      details: [
        "Performed EDA and built classification models achieving F1 > 0.95.",
        "Developed dashboards and automated analytics reports.",
      ],
    },
    {
      company: "JHT Smart Steps Learning",
      role: "Founder & Tutor",
      period: "Aug 2022 – Aug 2025",
      details: [
        "Founded AI-powered learning platform.",
        "Delivered STEM-based courses and mentored over 25 learners.",
      ],
    },
  ],

  majorProjects: [
    {
      title: "DocuReadAI",
      type: "RAG",
      description:
        "Document Q&A assistant using LangChain, Chroma DB, HuggingFace embeddings, and Watsonx LLM.",
      tech: ["Python", "LangChain", "Chroma DB", "WatsonX", "Gradio"],
    },
    {
      title: "PulmoProbe",
      description:
        "Lung cancer risk prediction system using XGBoost with full-stack deployment.",
      tech: ["Python", "XGBoost", "Flask", "React", "Vite"],
    },
    {
      title: "LiverGuardian",
      description:
        "Liver disease classification platform with automated EDA, feature engineering, and dashboards.",
      tech: ["Python", "Scikit-learn", "FastAPI", "React"],
    },
    {
      title: "WildScan",
      description:
        "Wildlife image classification platform achieving 98% accuracy using CNN models.",
      tech: ["PyTorch", "FastAPI", "React", "Vercel"],
    },
    {
      title: "EcoSim",
      description:
        "Environmental analytics and forest cover classification using ML models.",
      tech: ["Python", "XGBoost", "Scikit-learn", "FastAPI", "React"],
    },
    {
      title: "GFC Financial Chatbot",
      description:
        "Conversational financial assistant retrieving Revenue, Net Income and Cash Flow metrics.",
      tech: ["Python", "Flask", "Pandas"],
    },
    {
      title: "FutureSTOCK",
      description: "LSTM-based stock price forecasting platform.",
      tech: ["Python", "LSTM", "NumPy"],
    },
    {
      title: "ImageCap",
      description:
        "AI image captioning tool generating contextual captions using vision-transformer models.",
      tech: ["Transformers", "Gradio", "Python"],
    },
    {
      title: "PenguinID",
      description:
        "Penguin species and gender classifier using ML models and Streamlit.",
      tech: ["Python", "Scikit-learn", "Streamlit"],
    },
    {
      title: "Breast Cancer Prediction",
      description:
        "Diagnostic model for predicting breast cancer classes using ML.",
      tech: ["Python", "Scikit-learn"],
    },
    {
      title: "Rainfall Prediction",
      tech: ["Python", "Random Forest"],
      description: "Rainfall prediction ML classifier using meteorological data.",
    },
    {
      title: "Bank Marketing EDA",
      tech: ["Python", "Pandas", "XGBoost"],
      description:
        "Exploratory data analysis & ML pipeline for bank marketing dataset.",
    },
    {
      title: "MPT Portfolio Optimization",
      description:
        "Modern Portfolio Theory-based optimization with efficient frontier visualization.",
      tech: ["Python", "NumPy", "Matplotlib"],
    },
    {
      title: "Diabetes Prediction",
      description:
        "Health analytics ML model for predicting diabetes risk.",
      tech: ["Python", "Scikit-learn"],
    },
    {
      title: "Titanic Survival Prediction",
      description:
        "Stacked ML model for predicting passenger survival probabilities.",
      tech: ["Python", "XGBoost"],
    },
    {
      title: "House Price Prediction",
      description:
        "Regression model estimating property prices using key features.",
      tech: ["Python", "Scikit-learn"],
    },
    {
      title: "LangGraph Agents",
      description:
        "AI agent-based workflows using LangGraph and advanced RAG utilities.",
      tech: ["Python", "LangGraph", "RAG"],
    },
  ],

  education: [
    {
      school: "Manipal University Jaipur",
      degree: "MCA — Artificial Intelligence and Machine Learning",
      period: "2024 – Ongoing",
    },
    {
      school: "Shivaji University",
      degree: "B.Sc Computer Science",
      period: "2016 – 2019",
    },
  ],

  certifications: {
    IBM: [
      "IBM Generative AI Engineering Professional Certificate",
      "Prompt Engineering Basics",
      "Machine Learning with Python",
      "Python for Data Science",
      "Deep Learning with Keras",
      "RAG and LangChain",
      "Transformers and Fine-Tuning",
      "Cloud Native, Microservices, DevOps & Agile",
      "Computer Networks & Security",
    ],
    Google: [
      "Google AI Essentials Certificate",
      "Google IT Automation with Python",
      "Google UX Design (in progress)",
      "Google Cloud Data Analytics",
    ],
    Intel: ["Intel AI Fundamentals Certificate"],
    AWS: ["AWS ML & AI Foundation"],
    DeepLearningAI: [
      "Advanced Retrieval with Chroma",
      "AI Agents in LangGraph",
      "Building AI Apps with Haystack",
    ],
    Meta: ["Front-End Development", "Back-End Development"],
    Microsoft: ["Microsoft UX Design"],
    Others: [
      "Forage: Accenture, BCG, Lloyds, Deloitte, Tata, Quantium job simulations",
    ],
  },

  skills: {
    programming: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
    frameworks: ["React", "FastAPI", "Flask", "Vite", "Tailwind"],
    ml: [
      "XGBoost",
      "Random Forest",
      "Deep Learning",
      "Neural Networks",
      "EDA",
      "Feature Engineering",
    ],
    ai: ["RAG", "LangChain", "LLMs", "Transformers", "Fine-Tuning"],
    cloud: ["Google Cloud", "Vercel", "Render"],
    robotics: ["Control Systems", "Sensors", "Actuators", "Embedded Systems"],
  },
};

export default portfolioData;
