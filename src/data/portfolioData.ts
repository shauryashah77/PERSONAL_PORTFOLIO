import { Project, EducationEntry, ExperienceEntry, ClubEntry, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Shaurya Shah",
  role: "Artificial Intelligence & Machine Learning",
  subtitle:
    "AI & Machine Learning student engineering intelligent systems, predictive algorithms, and scalable software.",
  educationShort: "B.Tech — Artificial Intelligence & Machine Learning",
  honorsShort: "DJSCE — Mumbai",
  institutionShort: "Dwarkadas J. Sanghvi College of Engineering",
  location: "Mumbai, India",
  coordinates: "19.1075° N, 72.8372° E",
  email: "shauryashah857@gmail.com",
  phone: "+91 9082504330",
  linkedin: "https://www.linkedin.com/in/shaurya-shah-188b84394",
  status: "OPEN TO INTERNSHIPS & COLLABORATIONS",
  bioHeadline:
    "Engineering intelligent computational systems with applied machine learning, predictive modeling, and scalable software architectures. Passionate about turning complex datasets into intuitive automated solutions and high-performance algorithms.",
  metaStats: [
    { label: "CGPA (Engineering)", value: "8.3" },
    { label: "Timeline", value: "2025 — 2029" },
    { label: "Location", value: "Mumbai, IN" },
    { label: "Focus", value: "AI/ML & Systems" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "finsight",
    number: "01",
    title: "FinSight",
    subtitle: "Intelligent Statement Analytics & Behavioral Intelligence Platform",
    category: "Full-Stack AI & Data Intelligence System",
    year: "2025",
    description:
      "A full-stack data analytics and intelligence web application built using Next.js, TypeScript and FastAPI. Features automated statement parsing, secure JWT authentication, and intelligent reasoning powered by DeepSeek-R1 to analyze behavioral patterns, detect anomalies, and formulate predictive insights.",
    longDescription:
      "FinSight bridges the gap between raw, opaque transaction records and actionable behavioral intelligence. Built on an asynchronous FastAPI backend paired with a high-performance Next.js and TypeScript frontend, the system allows users to upload unstructured CSV statements. The automated pipeline normalizes records, categorizes activity lines, and leverages the DeepSeek-R1 reasoning engine to evaluate multi-month velocity, detect micro-leakages, and generate personalized optimization recommendations.",
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "DeepSeek-R1",
      "JWT",
      "Pandas",
      "Scikit-Learn",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Engine", value: "DeepSeek-R1 Reasoner" },
      { label: "Pipeline", value: "Vector Classification" },
      { label: "Auth", value: "Stateless JWT" },
      { label: "Latency", value: "< 140ms" },
    ],
    highlights: [
      "Automated statement ingestion pipeline converting arbitrary CSV formats into normalized data matrices",
      "Prompt-engineered DeepSeek-R1 reasoning engine extracting behavioral clusters and trend anomalies",
      "Algorithmic synthesis of personalized allocation models and predictive milestone forecasting",
      "Stateless JWT-authenticated architecture ensuring client privacy and isolated telemetry",
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
    honors: "HONORS CANDIDATE",
    period: "2025 — 2029",
    location: "Vile Parle, Mumbai",
    gradeLabel: "CGPA",
    gradeValue: "8.3",
    description:
      "Rigorous undergraduate curriculum centered around foundational artificial intelligence, statistical machine learning, algorithms, and applied computing. Focused on scalable data systems, deep learning architectures, and modern software engineering.",
    keyModules: [
      "Artificial Intelligence & ML",
      "Data Structures & Algorithms",
      "Machine Learning & Deep Learning",
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
