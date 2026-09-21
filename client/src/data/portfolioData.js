export const personalInfo = {
  name: "Gungun Bhatia",
  shortName: "Gungun",
  role: "B.Tech Computer Science Student • Aspiring Software Engineer",
  title: "Computer Science Student & Full-Stack Developer",
  tagline: "Building useful things, learning one technology at a time.",
  bio: "Hi, I'm Gungun. I'm a 3rd-year Computer Science student at Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly. I started with programming fundamentals in C and Java, and gradually moved into Data Structures, web development, and the MERN stack. I learn best by building — whether it's a client website like bombaybakers.in, an internship project, or a hackathon prototype. Currently focused on becoming a stronger software engineer through consistent problem solving and full-stack development.",
  email: "bhatiagungun1111@gmail.com",
  phone: "+91 9897055770",
  location: "Bareilly, Uttar Pradesh, India",
  college: "Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly",
  university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  cgpa: "7.83 (through 4th Sem)",
  github: "https://github.com/Gungunbhatia111",
  linkedin: "https://linkedin.com/in/gungun-bhatia-524636323",
  leetcode: "https://leetcode.com/u/gungunbhatia111",
  hackerrank: "https://www.hackerrank.com/profile/bhatiagungun1111",
  resumeUrl: "/GUNGUN.pdf",
  availableForOpportunities: true,
};

export const currentlyLearning = [
  {
    title: "MERN Stack",
    description: "Building production-ready full-stack applications with clean component architecture and secure APIs.",
    tag: "Web Dev",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Solving algorithmic problems in Java daily across Arrays, LinkedLists, Trees, and Recursion.",
    tag: "Core CS",
  },
  {
    title: "Advanced Java",
    description: "Strengthening object-oriented design, multithreading, and enterprise Java backend concepts.",
    tag: "Languages",
  },
  {
    title: "Backend Development",
    description: "Designing RESTful APIs, database indexing, JWT authentication, and server-side workflows.",
    tag: "Backend",
  },
  {
    title: "AI Integration",
    description: "Exploring LLM APIs (Google Gemini) for real-world document processing and candidate evaluation.",
    tag: "Emerging Tech",
  },
];

export const skillsExperience = {
  note: "I learn by building. Most of my skills have come from turning ideas into projects, college coursework, and hackathon prototypes.",
  categories: [
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        { name: "React.js", usedIn: "Placement Assistant & Portfolios", note: "Hooks, SPA routing, state management" },
        { name: "JavaScript (ES6+)", usedIn: "All Web Projects", note: "DOM, async/await, modern syntax" },
        { name: "HTML5 & CSS3", usedIn: "Bombay Bakers & Web Apps", note: "Semantic structure, responsive layouts" },
        { name: "Tailwind CSS", usedIn: "Placement Assistant & Client Work", note: "Utility-first modern styling" },
        { name: "Bootstrap 5", usedIn: "College Web Prototypes", note: "Rapid responsive grid design" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      skills: [
        { name: "Node.js", usedIn: "Placement Assistant Backend", note: "Runtime, npm ecosystem, server scripts" },
        { name: "Express.js", usedIn: "REST API Development", note: "Routing, middleware, JSON error handling" },
        { name: "REST APIs", usedIn: "Full-Stack Projects", note: "API design, HTTP verbs, status codes" },
        { name: "Java Servlets", usedIn: "Campus Management Portal", note: "Server-side Java, MVC architecture" },
      ],
    },
    {
      id: "database",
      name: "Databases",
      skills: [
        { name: "MongoDB", usedIn: "Placement Assistant", note: "Document modeling, collections, Mongoose" },
        { name: "MySQL", usedIn: "Academic Projects & DBMS", note: "Relational tables, foreign keys, queries" },
        { name: "SQL", usedIn: "Data Analytics & Coursework", note: "Complex queries, joins, aggregations" },
      ],
    },
    {
      id: "languages",
      name: "Languages",
      skills: [
        { name: "Java", usedIn: "DSA Practice (LeetCode 50+)", note: "OOP, collections, algorithm problem solving" },
        { name: "C Language", usedIn: "HackerRank 5-Star Gold", note: "Foundational memory, pointers, structures" },
        { name: "C++", usedIn: "Computer Science Coursework", note: "OOP principles, basic DSA" },
        { name: "Python", usedIn: "Google Data Analytics", note: "Scripting, data analysis fundamentals" },
      ],
    },
    {
      id: "tools",
      name: "Tools & Environment",
      skills: [
        { name: "Git & GitHub", usedIn: "Version Control for all projects", note: "Commits, branches, collaboration" },
        { name: "VS Code", usedIn: "Daily Code Editor", note: "Extensions, debugging, terminal integration" },
        { name: "Postman", usedIn: "API Testing & Validation", note: "Endpoint testing, payloads, headers" },
        { name: "Eclipse", usedIn: "Java & Servlet Development", note: "Tomcat server configuration" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "placement-ai",
    title: "Placement Cell — AI Placement Assistant",
    category: "Full-Stack Web Application",
    badge: "Internship Project",
    subtitle: "Centralized preparation portal with ATS resume reviewer, interview prep & jobs",
    problemSolves: "Students often struggle with placement readiness because their resumes, interview prep, job applications, and progress tracking are scattered across separate sites. This tool centralizes the entire workflow.",
    whatIBuilt: [
      "Student Dashboard tracking preparation readiness, resume status, and practice streaks",
      "ATS Resume Reviewer analyzing candidate resumes against SDE criteria using Google Gemini API",
      "Interactive Interview Prep module covering DSA, Java, React, Backend, and HR question banks",
      "Placement Jobs board with filters by role, skill requirements, and direct application links",
      "Full MERN stack with Node.js/Express REST APIs and MongoDB data persistence",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/Gungunbhatia111",
    liveDemo: "#placement-ai-demo",
    hasInteractiveDemo: true,
    imageBg: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #4f46e5 100%)",
  },
  {
    id: "bombay-bakers",
    title: "Bombay Bakers — Bakery & Cafe",
    category: "Freelance Client Website",
    badge: "Live Client Website",
    subtitle: "Official commercial website for a premier bakery brand in Bareilly",
    problemSolves: "The client needed a modern, lightweight digital home where local customers in Bareilly can browse bakery items, find store hours, locate the shop, and get in touch directly without friction.",
    whatIBuilt: [
      "Visual product catalog for artisan breads, celebration cakes, cookies, and beverages",
      "Store information section with operating hours, contact numbers, and location details",
      "Fast, mobile-first design optimized for instant loading on smartphones",
      "Delivered and deployed as active production freelance work for a real business",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Client Delivery"],
    github: "https://github.com/Gungunbhatia111",
    liveDemo: "https://bombaybakers.in",
    isFreelanceClient: true,
    imageBg: "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #ea580c 100%)",
  },
  {
    id: "event-mgmt",
    title: "Campus Management Portal",
    category: "Systems & Web Application",
    badge: "Academic Project",
    subtitle: "Role-based campus portal for student event registrations & admin management",
    problemSolves: "Replaced scattered spreadsheets and paper forms for university events with a centralized web portal where students can register and coordinators can review rosters.",
    whatIBuilt: [
      "Role-based authentication dividing student actions from administrative control panels",
      "Event registration workflow supporting date, venue, and technical category filters",
      "Secured session state management using Java Servlets on Apache Tomcat",
      "Clean relational data tables managing participant lists and event schedules",
    ],
    techStack: ["Java Servlets", "Apache Tomcat", "JavaScript", "HTML5/CSS3", "Eclipse"],
    github: "https://github.com/Gungunbhatia111",
    liveDemo: "#",
    imageBg: "linear-gradient(135deg, #581c87 0%, #7e22ce 50%, #a855f7 100%)",
  },
];

export const journeyTimeline = [
  {
    year: "2024",
    title: "The Beginning: Fundamentals & C Language",
    description: "Started my Computer Science engineering journey at SRMS CET Bareilly. Built a solid grounding in programming logic, pointers, and memory management through C, earning a HackerRank 5-Star Gold Badge.",
    tag: "Foundations",
  },
  {
    year: "2025",
    title: "DSA, Java & 36-Hour Hackathon 3.0",
    description: "Dove deep into Object-Oriented Programming and Data Structures in Java. Participated in the 36-hour National Hackathon 3.0 at SRMS CET, receiving a special commendation for building a real-time emergency alert prototype.",
    tag: "DSA & Hackathon",
  },
  {
    year: "2026",
    title: "Full-Stack Development & Real-World Projects",
    description: "Completed a 6-week Full Stack Developer Internship at MPIS Revolution Pvt. Ltd., building AI ATS resume tools. Designed and shipped the live commercial website for Bombay Bakers (bombaybakers.in).",
    tag: "Internship & Freelance",
  },
  {
    year: "CURRENT",
    title: "Deepening Problem Solving & Systems Skills",
    description: "Actively solving algorithmic problems on LeetCode (50+ solved in Java), exploring backend architectures, and preparing for software engineering and full-stack developer opportunities.",
    tag: "Continuous Growth",
  },
];

export const beyondCode = [
  {
    title: "Reading & Learning",
    description: "Enjoy reading about technology history, engineering culture, and productivity.",
    icon: "BookOpen",
  },
  {
    title: "Staying Active",
    description: "Playing badminton and sports keeps my mind energized and focused between long coding sessions.",
    icon: "Activity",
  },
  {
    title: "Indian Mythology & Epics",
    description: "Fascinated by timeless lessons on ethics, strategy, and duty in Indian epic literature.",
    icon: "Compass",
  },
  {
    title: "UI Design & Typography",
    description: "Curious about thoughtful micro-interactions, clean visual hierarchy, and intuitive user experiences.",
    icon: "Palette",
  },
];

export const lookingFor = {
  heading: "What I'm Looking For",
  statement: "I'm looking for opportunities where I can work on real software problems, strengthen my engineering skills, and learn alongside experienced developers.",
  focusAreas: [
    "Software Engineering Internships",
    "Full-Stack / MERN Development",
    "Backend & Web Applications",
    "Collaborative Team Projects",
  ],
};

export const servicesData = [
  {
    id: "web-dev",
    title: "Business & Client Websites",
    icon: "Globe",
    description: "Custom business websites like bombaybakers.in, high-converting landing pages, and portfolio platforms built with modern web tech.",
    features: ["Fully Responsive Layouts", "Fast Load Times & Clean Code", "Custom Menus & Location Details", "Easy Client Handover"],
    pricingHint: "Typical delivery: 6 to 14 days",
  },
  {
    id: "fullstack-app",
    title: "Full-Stack Web Applications",
    icon: "Layers",
    description: "MERN stack applications with custom REST APIs, database models, user authentication, and interactive dashboards.",
    features: ["Node.js & Express REST APIs", "MongoDB Data Architecture", "Clean React Frontend", "Authentication & Security"],
    pricingHint: "Typical delivery: 14 to 30 days",
  },
  {
    id: "frontend-ui",
    title: "Frontend UI & Component Design",
    icon: "Layout",
    description: "Transforming ideas, Figma designs, or wireframes into clean, mobile-ready React components with smooth micro-interactions.",
    features: ["React.js & Component Libraries", "Tailwind CSS Styling", "Dark & Light Mode Support", "Accessible Markup"],
    pricingHint: "Typical delivery: 6 to 12 days",
  },
  {
    id: "site-fixes",
    title: "Website Improvements & Fixes",
    icon: "Wrench",
    description: "Optimizing existing websites with fresh UI tweaks, mobile responsiveness fixes, bug resolution, and speed boosts.",
    features: ["Mobile & Tablet Polish", "Bug Diagnosis & Fixes", "Codebase Cleanups", "API Integrations"],
    pricingHint: "Typical delivery: 3 to 7 days",
  },
];

export const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "MPIS Revolution Pvt. Ltd.",
    period: "June 2026 - July 2026 (6 Weeks)",
    location: "Remote / Hybrid",
    highlights: [
      "Developed Automated ATS Resume Scoring engine and technical interview practice lab using Node.js, Express, MongoDB, React, and Gemini LLM API.",
      "Delivered multi-category resume audit REST APIs and real-time SDE role-matching algorithms.",
      "Built clean dashboard tracking candidate readiness and keyword recommendations.",
      "Collaborated in a team sprint environment delivering modular, production-ready code.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini LLM API", "REST APIs"],
  },
  {
    role: "Hackathon 3.0 Commendation Winner",
    company: "Shri Ram Murti Smarak CET (SRMS CET), Bareilly",
    period: "March 2025 (36-Hour Hackathon)",
    location: "Bareilly, India",
    highlights: [
      "Built and presented a real-time emergency alert web app competing against 100+ national teams in a 36-hour sprint.",
      "Received special panel commendation for UI/UX design, execution speed, and database architecture.",
    ],
    tech: ["JavaScript", "HTML5/CSS3", "WebSockets", "Node.js"],
  },
];

export const certificationsData = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "June 2026",
    badge: "Verified Certificate",
    description: "Comprehensive 8-course series covering data foundations, SQL, R, Python data analysis, data cleaning, and visualization.",
  },
  {
    title: "HackerRank 5-Star Gold Badge - C Language",
    issuer: "HackerRank",
    date: "Top Percentile",
    badge: "5-Star Gold",
    description: "Earned top-tier Gold badge solving pointers, memory management, and data structures challenges in C.",
  },
  {
    title: "LeetCode 50+ DSA Problems Solved",
    issuer: "LeetCode (Java)",
    date: "Consistent Practice",
    badge: "50+ Solved",
    description: "Consistent problem solving in Java covering Arrays, Strings, Linked Lists, Stacks, and Recursion.",
  },
  {
    title: "Java SE (JSE) Certification",
    issuer: "E-School Driving Intellects",
    date: "February 2026",
    badge: "Certified",
    description: "Java Standard Edition development certification focusing on OOP, exceptions, and core collections.",
  },
  {
    title: "Data Structures & Algorithms (DSA) Training",
    issuer: "E-School Driving Intellects",
    date: "December 2025",
    badge: "Completed",
    description: "Intensive training in algorithmic analysis, complexity, and data structure optimizations.",
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

