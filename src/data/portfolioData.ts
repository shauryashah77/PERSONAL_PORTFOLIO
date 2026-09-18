import { Project, EducationEntry, ExperienceEntry, ClubEntry, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Shaurya Shah",
  role: "AI & Machine Learning × FinTech",
  subtitle:
    "AI & Machine Learning student building at the intersection of technology, finance and intelligent systems.",
  educationShort: "B.Tech — Artificial Intelligence & Machine Learning",
  honorsShort: "Honors — FinTech",
  institutionShort: "Dwarkadas J. Sanghvi College of Engineering",
  location: "Mumbai, India",
  coordinates: "19.1075° N, 72.8372° E",
  email: "shauryashah857@gmail.com",
  phone: "+91 9082504330",
  linkedin: "https://www.linkedin.com/in/shaurya-shah-188b84394",
  status: "OPEN TO INTERNSHIPS & COLLABORATIONS",
  bioHeadline:
    "Engineering intelligent computational systems where machine learning meets algorithmic finance. Focused on building high-throughput financial architectures, predictive modeling, and generative agent workflows that solve real-world capital and behavioral problems.",
  metaStats: [
    { label: "CGPA (Engineering)", value: "8.3" },
    { label: "Timeline", value: "2025 — 2029" },
    { label: "Location", value: "Mumbai, IN" },
    { label: "Focus", value: "AI/ML × FinTech" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "finsight",
    number: "01",
    title: "FinSight",
    subtitle: "Personal Financial Behaviour Analysis Platform",
    category: "Full-Stack AI × FinTech System",
    year: "2025",
    description:
      "A full-stack financial web application built using Next.js, TypeScript and FastAPI. Features automated CSV statement parsing, secure JWT authentication, and AI-powered financial insights powered by Google Gemini API to analyze spending behaviour and formulate predictive saving trajectories.",
    longDescription:
      "FinSight bridges the gap between raw, opaque bank statement records and actionable personal finance intelligence. Built on an asynchronous FastAPI backend paired with a high-performance Next.js and TypeScript frontend, the system allows users to upload unstructured financial CSV statements. The automated engine parses and categorizes transaction lines, while deep integration with Google Gemini API evaluates multi-month spending velocity, detects micro-leakages, and generates personalized saving recommendations tailored to user-defined capital goals.",
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Gemini API",
      "JWT",
      "Pandas",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Engine", value: "Gemini 1.5 Pro/Flash" },
      { label: "Pipeline", value: "Automated CSV Parsing" },
      { label: "Auth", value: "Stateless JWT" },
      { label: "Latency", value: "< 850ms" },
    ],
    highlights: [
      "Automated statement ingestion pipeline converting arbitrary CSV formats into normalized transaction matrices",
      "Prompt-engineered Google Gemini analysis engine extracting spending clusters and behavioral anomalies",
      "Dynamic algorithmic generation of personalized savings quotas and milestone forecasting",
      "Stateless JWT-authenticated architecture ensuring client privacy and isolated financial telemetry",
    ],
    status: "Featured",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: "djsce",
    step: "01",
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    degree: "Bachelor of Technology",
    specialization: "Artificial Intelligence & Machine Learning",
    honors: "FINTECH",
    period: "2025 — 2029",
    location: "Vile Parle, Mumbai",
    gradeLabel: "CGPA",
    gradeValue: "8.3",
    description:
      "Rigorous undergraduate curriculum centered around foundational artificial intelligence, statistical machine learning, algorithms, and applied computing. Pursuing specialized Honors in FinTech to combine quantitative engineering with decentralized protocols and intelligent financial systems.",
    keyModules: [
      "Artificial Intelligence & ML",
      "Data Structures & Algorithms",
      "FinTech Specialization & Honors",
      "Discrete Mathematics & Logic",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems",
    ],
  },
  {
    id: "champions",
    step: "02",
    institution: "Champions Science Junior College",
    degree: "Higher Secondary Certificate (HSC)",
    specialization: "Science & Pure Mathematics",
    period: "2023 — 2025",
    location: "Mumbai, India",
    gradeLabel: "GPA",
    gradeValue: "70%",
    description:
      "Intensive higher secondary coursework focusing on advanced mathematics, calculus, theoretical physics, and computational logic, laying the mathematical groundwork for algorithmic machine learning.",
    keyModules: [
      "Higher Mathematics & Calculus",
      "Applied Physics & Mechanics",
      "Chemistry & Material Science",
      "Analytical Problem Solving",
    ],
  },
  {
    id: "jamnabai",
    step: "03",
    institution: "Jamnabai Narsee School",
    degree: "Secondary School Certificate",
    specialization: "Foundational Sciences & Computer Applications",
    period: "2013 — 2023",
    location: "Mumbai, India",
    gradeLabel: "GPA",
    gradeValue: "95%",
    description:
      "Graduated with top academic standing (95%). Developed early expertise in foundational computer applications, procedural programming, structured problem solving, and public communication.",
    keyModules: [
      "Computer Applications (Java/Foundations)",
      "Mathematics & Geometry",
      "General Science & Physics",
      "English Language & Public Discourse",
    ],
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "latim-group",
    step: "01",
    role: "Sales & Technical Support Intern",
    company: "LaTim Group",
    division: "Enterprise Operations & Data Support",
    period: "July 2025 — September 2025",
    location: "Mumbai, India",
    type: "Internship",
    bullets: [
      "Managed and maintained mission-critical customer and sales data repositories using advanced Excel models and structured spreadsheets.",
      "Performed precise data entry, organized records, and updated enterprise databases with verified, audit-ready information.",
      "Assisted senior personnel with basic technical tasks, hardware/software diagnostics, and operational troubleshooting for day-to-day operations.",
      "Prepared, curated, and maintained structured reports and documentation to support the sales and leadership teams.",
    ],
    skillsApplied: [
      "Spreadsheets & Advanced Excel",
      "Data Entry & Record Organization",
      "Database Updates & Hygiene",
      "Technical Diagnostics",
      "Operational Reporting",
      "Documentation",
    ],
  },
  {
    id: "djs-codeai",
    step: "02",
    role: "Creatives Member",
    company: "DJS CODEAI",
    division: "Department of Artificial Intelligence",
    period: "2025 — Present",
    location: "Mumbai, India",
    type: "Committee & Design",
    bullets: [
      "Contributed to designing promotional creatives and event materials for high-impact technical symposiums and AI hackathons.",
      "Collaborated closely with technical leads on visual concepts, typography, branding identities, and social media creative assets.",
      "Articulated complex computational and machine learning concepts through high-fidelity editorial visual design.",
      "Maintained brand consistency across digital announcements, banners, and technical workshop collateral.",
    ],
    skillsApplied: [
      "Visual Concepts & Typography",
      "Event Branding & Identity",
      "Creative Direction",
      "Social Media Design",
      "Team Collaboration",
    ],
  },
  {
    id: "djs-nss",
    step: "03",
    role: "Volunteer",
    company: "DJS NSS",
    division: "National Service Scheme Chapter",
    period: "2025 — Present",
    location: "Mumbai, India",
    type: "Social Impact & Leadership",
    bullets: [
      "Participated actively in community service initiatives and assisted in organizing and coordinating campus-wide NSS activities.",
      "Demonstrated teamwork, operational responsibility, and on-ground leadership across community outreach initiatives.",
      "Managed volunteer coordination, event logistics, and participant engagement for large-scale social welfare drives.",
      "Facilitated cross-functional communication between student volunteers, faculty heads, and community leaders.",
    ],
    skillsApplied: [
      "Community Outreach",
      "Team Leadership & Coordination",
      "Logistics Management",
      "Public Communication",
      "Civic Responsibility",
    ],
  },
];

export const CLUBS: ClubEntry[] = [
  {
    id: "djs-nss",
    organization: "DJS NSS",
    role: "Volunteer",
    category: "Community Impact & Social Leadership",
    description:
      "Active volunteer in the National Service Scheme chapter at Dwarkadas J. Sanghvi College of Engineering. Participated directly in community service initiatives and coordinated campus-wide social responsibility drives.",
    deliverables: [
      "Assisted in orchestrating and executing student community engagement drives",
      "Coordinated cross-functional volunteer logistics under tight campus schedules",
      "Exercised on-ground leadership, team accountability, and civic advocacy",
    ],
  },
  {
    id: "djs-codeai",
    organization: "DJS CODEAI",
    role: "Creatives Member",
    category: "Visual Design & Brand Identity",
    description:
      "Core creative member within the departmental Artificial Intelligence committee. Directed visual communication strategies, event branding assets, and promotional media across college hackathons and technical symposiums.",
    deliverables: [
      "Formulated visual concepts, typography treatments, and event branding identities",
      "Produced digital marketing collaterals and social media creative assets",
      "Collaborated with technical leads to articulate complex AI concepts visually",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core low-level and high-level languages for algorithms & systems",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
    ],
  },
  {
    category: "Web Development",
    description: "Modern full-stack engineering, responsive interfaces & robust APIs",
    items: [
      "Web Development",
      "Next.js",
      "TypeScript",
      "FastAPI",
    ],
  },
  {
    category: "Data Analysis & Visualization",
    description: "Exploratory analytics and visual intelligence",
    items: [
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    category: "Tools & Environments",
    description: "Version control, containerization, and cloud notebooks",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Google Colab",
      "VS Code",
      "Linux / Bash",
    ],
  },
  {
    category: "Professional & Soft Skills",
    description: "Interpersonal communication, team leadership & strategic problem solving",
    items: [
      "Communication",
      "Problem Solving",
      "Teamwork & Collaboration",
      "Client Relationship Management",
      "Critical Thinking",
      "Adaptability & Fast Learning",
    ],
  },
];
