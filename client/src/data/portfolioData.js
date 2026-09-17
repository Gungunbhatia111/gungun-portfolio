export const personalInfo = {
  name: "Gungun Bhatia",
  shortName: "Gungun",
  title: "MERN Stack Developer & Freelance Web Developer",
  tagline: "I build modern websites and full-stack web applications that turn ideas into reality.",
  bio: "I'm a 3rd-year B.Tech Computer Science & Engineering student at Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly. I specialize in building responsive, high-performance web applications and production-ready sites for businesses and individuals using the MERN stack.",
  email: "bhatiagungun1111@gmail.com",
  phone: "+91 9897055770",
  location: "Bareilly, Uttar Pradesh, India",
  college: "Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly",
  university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  cgpa: "7.83 (through 4th Sem)",
  github: "https://github.com/Gungunbhatia111",
  linkedin: "https://linkedin.com/in/gungun-bhatia-524636323",
  resumeUrl: "/GUNGUN.pdf",
  availableForFreelance: true,
};

export const servicesData = [
  {
    id: "web-dev",
    title: "Website Development",
    icon: "Globe",
    description: "Custom business websites, high-converting landing pages, portfolio sites, and personal brand platforms built with modern web tech.",
    features: ["Fully Responsive Layouts", "SEO Friendly Architecture", "Speed & Performance Optimized", "Custom Design & Animations"],
    pricingHint: "Starting from $150 / Rs. 10,000",
  },
  {
    id: "fullstack-app",
    title: "Full-Stack Web Applications",
    icon: "Layers",
    description: "Scalable MERN stack web applications with custom REST APIs, database integration, user authentication, and admin dashboards.",
    features: ["Node.js & Express REST APIs", "MongoDB / SQL Data Modeling", "JWT & OAuth Security", "Real-time Dashboards"],
    pricingHint: "Starting from $350 / Rs. 25,000",
  },
  {
    id: "frontend-ui",
    title: "Frontend UI/UX Development",
    icon: "Layout",
    description: "Transforming Figma designs, wireframes, or ideas into pixel-perfect, interactive, mobile-ready React interfaces.",
    features: ["React.js & Component Libraries", "Tailwind CSS & Glassmorphic UI", "Dark / Light Mode Support", "Smooth Micro-interactions"],
    pricingHint: "Starting from $120 / Rs. 8,000",
  },
  {
    id: "site-fixes",
    title: "Website Improvements & Fixes",
    icon: "Wrench",
    description: "Upgrading existing websites with fresh UI, mobile responsiveness fixes, bug resolution, performance boosts, and feature additions.",
    features: ["Bug Diagnosis & Fixing", "Mobile & Tablet Optimization", "Codebase Cleanups", "API Integration"],
    pricingHint: "Starting from $70 / Rs. 5,000",
  },
];

export const skillsData = {
  frontend: [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 92, category: "Frontend" },
    { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Bootstrap 5", level: 88, category: "Frontend" },
  ],
  backend: [
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 88, category: "Backend" },
    { name: "REST APIs", level: 90, category: "Backend" },
    { name: "JWT Authentication", level: 84, category: "Backend" },
    { name: "Java Servlets", level: 78, category: "Backend" },
  ],
  database: [
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "MySQL", level: 82, category: "Database" },
    { name: "SQL", level: 84, category: "Database" },
  ],
  programming: [
    { name: "Java", level: 86, category: "Languages" },
    { name: "C++", level: 80, category: "Languages" },
    { name: "C Language", level: 90, category: "Languages" },
    { name: "Python", level: 75, category: "Languages" },
  ],
  tools: [
    { name: "Git & GitHub", level: 88, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "Postman", level: 85, category: "Tools" },
    { name: "Eclipse", level: 80, category: "Tools" },
    { name: "Data Cleaning & Tableau", level: 78, category: "Analytics" },
  ],
};

export const projectsData = [
  {
    id: "placement-ai",
    title: "Placement Cell - AI Placement Assistant",
    category: "Full-Stack",
    subtitle: "AI-Powered Career & Placement Readiness Platform",
    description: "Built a full-stack AI placement platform with a Node.js/Express/MongoDB backend, computing real-time resume ATS scores, SDE-role matching, and placement-readiness metrics.",
    problemSolves: "Automates manual resume evaluations for placement cells, offering instant 92% accurate ATS scoring and personalized role-matching feedback.",
    keyFeatures: [
      "Integrated Gemini LLM API for deep resume analysis across 50+ criteria",
      "Achieved 92% match accuracy on technical resumes",
      "Built live dashboard tracking resume grades & practice streaks",
      "Reduced manual review overhead by 85%",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini LLM API", "Tailwind CSS"],
    github: "https://github.com/Gungunbhatia111",
    liveDemo: "#",
    featured: true,
    imageBg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
  },
  {
    id: "bombay-bakers",
    title: "Bombay Bakers - Freelance Bakery Website",
    category: "Freelance Websites",
    subtitle: "Live Business Website for a Bakery Brand in Bareilly",
    description: "Built a client-facing bakery website for Bombay Bakers with product highlights, menu sections, store information, location access, and mobile-friendly browsing.",
    problemSolves: "Helps local customers quickly discover bakery offerings, view product categories, find the store location, and contact the business from one clean online presence.",
    keyFeatures: [
      "Showcases cakes, pastries, breads, cookies, coffee, shakes, and bakery specials",
      "Includes store location, contact details, and operating hours",
      "Designed for quick scanning by mobile-first local customers",
      "Created as real freelance work for a client-facing business",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Client Website"],
    github: "#",
    liveDemo: "https://bombaybakers.in",
    featured: true,
    imageBg: "linear-gradient(135deg, #7c2d12 0%, #be123c 50%, #f59e0b 100%)",
  },
  {
    id: "event-mgmt",
    title: "Campus Management System",
    category: "Web Applications",
    subtitle: "Role-Based Campus Portal with Admin & Student Dashboards",
    description: "Built a role-based campus web application with separate admin and student dashboards for managing campus events, registrations, and student-facing updates.",
    problemSolves: "Reduces scattered campus communication by giving students and administrators one organized place to manage events and registrations.",
    keyFeatures: [
      "Server-side authentication with Java Servlets on Apache Tomcat",
      "Separate administrative control panel & student event registration",
      "Secured administrative routes & encrypted user session data",
      "Dynamic event filter by date, category, and venue",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Java Servlets", "Apache Tomcat", "Eclipse"],
    github: "#",
    liveDemo: "#",
    featured: true,
    imageBg: "linear-gradient(135deg, #701a75 0%, #a21caf 50%, #d946ef 100%)",
  },
];

export const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "MPIS Revolution Pvt. Ltd.",
    period: "June 2026 - July 2026 (6 Weeks)",
    location: "Remote / Hybrid",
    highlights: [
      "Developed Automated ATS Resume Scoring, Job Matching Engine, and Technical Interview Practice Lab using Node.js, Express, MongoDB, React, and Gemini LLM API.",
      "Delivered 7-category resume audit REST APIs and real-time SDE role-matching algorithms.",
      "Implemented dark/light theme systems resulting in 95% keyword extraction accuracy and sub-5-second analysis time.",
      "Achieved 85% overall time reduction in resume evaluations for placement command centers.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini LLM API", "REST APIs"],
  },
  {
    role: "Hackathon 3.0 Finalist & Commendation Winner",
    company: "Shri Ram Murti Smarak CET (SRMS CET), Bareilly",
    period: "March 2025 (36-Hour Hackathon)",
    location: "Bareilly, India",
    highlights: [
      "Built and presented a real-time emergency alert web app competing against 100+ national teams in a 36-hour sprint.",
      "Received special panel commendation for UI/UX design, execution speed, and database architecture.",
    ],
    tech: ["JavaScript", "HTML5/CSS3", "Real-Time WebSockets", "Node.js"],
  },
];

export const certificationsData = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "June 2026",
    badge: "Verified Badge on Credly",
    description: "Completed 8 courses covering data foundations, SQL, R, Python analysis, data cleaning, and visualization.",
  },
  {
    title: "HackerRank 5-Star Gold Badge - C Language",
    issuer: "HackerRank",
    date: "Top Global Percentile",
    badge: "5-Star Gold",
    description: "Earned top-tier Gold badge in C-language skill assessment on HackerRank.",
  },
  {
    title: "LeetCode 50+ DSA Problems Solved",
    issuer: "LeetCode (Java)",
    date: "Ongoing Practice",
    badge: "50+ Solved",
    description: "Consistent problem solving in Java covering Arrays, Strings, Linked Lists, Stacks, and Recursion.",
  },
  {
    title: "Java SE (JSE) Certification",
    issuer: "E-School Driving Intellects",
    date: "February 2026",
    badge: "Certified",
    description: "Comprehensive Java Standard Edition development certification.",
  },
  {
    title: "Data Structures & Algorithms (DSA) Training",
    issuer: "E-School Driving Intellects",
    date: "December 2025",
    badge: "Completed",
    description: "Intensive training in data structure optimizations and algorithm analysis.",
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "2024 - 2028 (Currently in 3rd Year)",
    metrics: {
      overallCGPA: "7.83 (through 4th Sem)",
      semesters: [
        { sem: "Sem 1", sgpa: "8.82" },
        { sem: "Sem 2", sgpa: "7.05" },
        { sem: "Sem 3", sgpa: "7.72" },
        { sem: "Sem 4", sgpa: "7.74" },
      ],
      year1Percentage: "78%",
      year2Percentage: "84%",
    },
  },
  {
    degree: "Class XII (CBSE Senior Secondary)",
    institution: "St. Francis Convent School, Bareilly",
    period: "Passout 2024",
    metrics: { score: "79.2%" },
  },
  {
    degree: "Class X (CBSE High School)",
    institution: "St. Francis Convent School, Bareilly",
    period: "Passout 2022",
    metrics: { score: "84.4%" },
  },
];
