export const profile = {
  name: "Salah Asif Parbhulkar",
  shortName: "Salah",
  initials: "SP",
  title: "Emerging AI & ML Professional",
  location: "UAE / India",
  email: "salah.asif2@gmail.com",
  phone: "+971 552257085",
  github: "https://github.com/Salah-P",
  linkedin: "https://linkedin.com/in/salah-parbhulkar-bb4530216",
  summary:
    "Data-driven AI Engineer with hands-on experience in LLM systems, agentic workflows, model benchmarking, scalable APIs, and offline AI pipelines built under real-world constraints such as latency, throughput, memory, and privacy.",
};

export const roles = [
  "AI Engineer",
  "ML Engineer",
  "LLM Systems Developer",
  "Backend Developer",
  "Research Intern",
];

export const skills = [
  {
    category: "AI / ML",
    items: [
      "LLMs",
      "LangChain",
      "Model Evaluation",
      "Scikit-learn",
      "TensorFlow",
      "Feature Engineering",
      "Geospatial AI",
      "ArcGIS",
    ],
    level: 90,
  },
  {
    category: "Backend & Programming",
    items: ["Python", "Java", "C#", "FastAPI", "Flask", "REST APIs", "HTML", "CSS"],
    level: 88,
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "MySQL", "Pandas", "NumPy", "Power BI", "Excel", "Matplotlib", "Seaborn"],
    level: 84,
  },
  {
    category: "Tools & Platforms",
    items: [
      "Ollama",
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Unity Hub",
      "CUDA",
      "Azure AI Foundry",
      "Copilot Studio",
    ],
    level: 82,
  },
];

export const projects = [
  {
    title: "Local LLM Benchmarking & Evaluation System",
    description:
      "Developed an offline benchmarking system to evaluate Llama 3.2 3B, Phi-4 Mini, and Mistral 7B on identical hardware. Measured tokens/sec, time to first token, total latency, memory usage and output quality.",
    highlights: [
      "Implemented structured JSON output enforcement using Pydantic.",
      "Added retry logic for deterministic generation.",
      "Conducted temperature-based variance analysis across 30 - 50 prompts.",
    ],
    tech: ["Python", "Ollama", "FastAPI", "Pydantic", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Line Follower Robot",
    description:
      "Built autonomous robot behavior for line tracking, obstacle detection and automatic stopping/resuming using Python and sensor based control logic.",
    highlights: [
      "Programmed QTR-8A sensor array line tracking.",
      "Integrated ultrasonic obstacle detection.",
      "Optimized autonomous navigation across curves and corners.",
    ],
    tech: ["Python", "Robotics", "Sensors", "Automation"],
  },
];

export const experience = [
  {
    role: "Interdisciplinary Research Intern",
    company: "Lockheed Martin CISS",
    location: "Abu Dhabi",
    period: "Oct 2025 - Present",
    points: [
      "Developing simulations for product demonstration systems used at airshows and tradeshows using Unity Hub.",
      "Added UI features and functional interaction systems.",
      "Developed an AI-powered system using constrained LLM generation with GPT-OSS-20B and Ollama.",
      "Implemented an agentic editing pipeline using JSONPatch and FastAPI.",
    ],
  },
  {
    role: "Intern",
    company: "4i Apps Solutions",
    location: "Dubai",
    period: "May 2025 - Sep 2025",
    points: [
      "Configured payroll definitions, elements, ICPs, and tested payroll components.",
      "Created HR/payroll documentation and customized DFFs.",
      "Designed offboarding workflows and enabled AI Assist and HCM Digital Assistant features.",
    ],
  },
  {
    role: "Intern",
    company: "Conneqtion Group",
    location: "Dubai",
    period: "Jan 2025 - May 2025",
    points: [
      "Configured Core HR, Absence Management, enterprise structures, and approval workflows in Oracle Fusion HCM.",
      "Managed employee records, roles, AORs, and bulk uploads with HDL.",
      "Applied REST APIs and PL/SQL for HCM data integration and validation.",
    ],
  },
  {
    role: "Intern",
    company: "Smart Navigation Systems",
    location: "Abu Dhabi",
    period: "Jan 2025 - Apr 2025",
    points: [
      "Worked on indoor routing, BLE integration, and ESP32 programming.",
      "Applied geospatial AI in ArcGIS.",
      "Built real-time APIs with Flask and Twilio.",
      "Gained experience with digital twin technology for urban planning and simulations.",
    ],
  },
  {
    role: "Intern",
    company: "DMCC",
    location: "Dubai",
    period: "Jun 2023 - Aug 2023",
    points: [
      "Worked on Oracle Fusion modules including Core HR, Absence, Performance, Recruitment, and Payroll.",
      "Developed custom BI reports.",
      "Gained exposure to Salesforce CRM, Service Cloud, and Community Cloud.",
    ],
  },
  {
    role: "Intern",
    company: "Finesse Dubai",
    location: "Dubai",
    period: "Jul 2022 - Aug 2022",
    points: [
      "Built scalable RPA bots using Automation Anywhere.",
      "Automated workflows and extracted data from HTML pages using DOM XPath and loops.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "United Arab Emirates University",
    location: "Al Ain, Abu Dhabi, UAE",
    period: "Aug 2021 - May 2025",
    result: "CGPA: 3.36 / 4.00",
  },
  {
    degree: "Senior School Certificate Examination",
    institution: "The Indian High School",
    location: "Dubai, Oud Metha, UAE",
    period: "Apr 2017 - Jun 2021",
    result: "Senior School: 91.6% · Secondary School: 90.2%",
  },
];

export const certifications = [
  {
    title: "PCEP-Certified Entry-Level Python Programmer",
    abbreviation: "Python",
    issuer: "Python Institute",
    code: "PCEP-30-01",
    image: "/certificates/PCEP.png",
  },
  {
    title: "PCAP-Certified Associate in Python Programming",
    abbreviation: "Python",
    issuer: "Python Institute",
    code: "PCAP-31-03",
    image: "/certificates/PCAP.png",
  },
  {
    title: "Salesforce Certified Associate",
    abbreviation: "Salesforce",
    issuer: "Trailhead",
    code: "Salesforce",
    image: "/certificates/Salesforce Associate.png",
  },
  {
    title: "Salesforce Certified Administrator",
    abbreviation: "Salesforce",
    issuer: "Trailhead",
    code: "Salesforce",
    image: "/certificates/Salesforce Administrator.png",
  },
  {
    title: "Oracle Fusion AI Agent Studio Foundations Associate",
    abbreviation: "Oracle",
    issuer: "Oracle",
    code: "1Z0-1145-0",
    image: "/certificates/Oracle AI Agent Studio.jpeg",
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    abbreviation: "Microsoft",
    issuer: "Microsoft",
    code: "AI-901",
    image: "/certificates/Microsoft Azure AI.png",
  },
  {
    title: "AWS Certified AI Practitioner",
    abbreviation: "Amazon",
    issuer: "Amazon Web Services",
    code: "AWS-Certified-AI-Practitioner",
    image: "/certificates/AWS AI.png",
  },
];

export const awards = [
  {
    title: "Hackathon: Abu Dhabi AI PropTech Challenge",
    organizer: "Cursor & eVoost AI",
    result: "5th Place - Track 4: Decision Intelligence",
    date: "Jun 2026",
    description:
      "Built Hakim AI, a real-time talking AI avatar that sits between raw city data and the decision-maker. Ask a question out loud and it runs live analysis over Abu Dhabi proptech datasets, returning a clear, grounded, sourced result. Built with Anam.ai SDK for real-time avatar, Next.js frontend with FastAPI/Python sidecar for data analysis using pandas over CSV datasets, and OpenAI as the code agent LLM.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Anam.ai SDK",
      "Python",
      "FastAPI",
      "pandas",
      "OpenAI",
    ],
  },
  {
    title: "FINSPIRE 1.0 Hackathon",
    organizer: "ACM BPDC Chapter @ BITS Pilani",
    result: "First Place",
    date: "Oct 2025",
    description:
      "Built Ripple Analytics, a comprehensive portfolio risk analysis platform designed specifically for UAE investors to understand how oil prices, currency movements, and global market forces impact their investments. Features include an Oil Price Impact Radar for real-time WTI and Brent crude tracking with sector sensitivity heatmaps, Currency Exchange Analysis across USD, EUR, AED, JPY, CNY with historical visualization, UAE-Specific Insights with economic benefit scoring and AED strength analysis, and AI-powered analysis via Ollama for portfolio risk assessment and personalized investment insights.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Flask", "Python", "Ollama", "Recharts", "Google Maps API"],
  },
  {
    title: "Vibe Coding Hackathon — Poolara",
    organizer: "NYU Abu Dhabi and NYU Shanghai",
    result: "Second Place - Launch Track",
    date: "Nov 2025",
    description:
      "Built Poolara, a vibrant student-first campus ridesharing platform that helps students share rides, split costs, and build community. Features include ride sharing/finding for classes, events, and weekend trips, automatic cost splitting, .edu email verification for safety, and integration with Google Maps API for directions and autocomplete. Built with Next.js 16, React 19, Tailwind CSS with a custom playful palette (purple, magenta, coral, navy), Radix UI components, React Hook Form with Zod validation, and optimized for performance and accessibility (WCAG AA).",
    tech: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS", "Google Maps API", "Radix UI", "React Hook Form", "Zod"],
  },
];

export const languages = ["English", "Urdu", "Hindi", "Arabic"];
