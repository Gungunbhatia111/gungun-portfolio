import React, { useState } from 'react';
import { 
  X, 
  LayoutDashboard, 
  FileText, 
  HelpCircle, 
  Briefcase, 
  User, 
  Settings as SettingsIcon,
  Sparkles,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Search,
  Upload,
  RefreshCw,
  Award,
  BookOpen,
  Code2,
  Terminal,
  Database,
  Building,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const PlacementAssistantModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // ATS Reviewer State
  const [resumeText, setResumeText] = useState(
    `GUNGUN BHATIA\nB.Tech Computer Science & Engineering | SRMS CET, Bareilly\nEmail: bhatiagungun1111@gmail.com | Phone: +91 9897055770\nGitHub: github.com/Gungunbhatia111 | LinkedIn: linkedin.com/in/gungun-bhatia-524636323\n\nEDUCATION:\nB.Tech CSE - SRMS CET Bareilly (AKTU) | CGPA: 7.83 (2024 - 2028)\n\nEXPERIENCE:\nFull Stack Developer Intern - MPIS Revolution Pvt. Ltd. (June 2026 - July 2026)\n• Developed Automated ATS Resume Scoring engine and technical interview practice module.\n• Built RESTful APIs with Node.js and Express.js, integrated Google Gemini LLM API.\n• Implemented secure MongoDB database schemas for candidate profile management.\n\nPROJECTS:\n1. Bombay Bakers (bombaybakers.in) - Live Commercial Bakery Website\n• Developed responsive website for leading bakery in Bareilly using HTML5, CSS3, JavaScript.\n\n2. Campus Management Portal - Java Servlets & Tomcat\n• Role-based event registration and participant rosters with session management.\n\nSKILLS:\nLanguages: Java, C, C++, Python, JavaScript (ES6+)\nWeb: React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, Bootstrap\nDatabases: MongoDB, MySQL, SQL\nTools: Git, GitHub, VS Code, Postman, Eclipse`
  );
  const [atsResult, setAtsResult] = useState({
    score: 88,
    categoryScores: {
      keywordMatch: 92,
      impactMetrics: 82,
      formatting: 95,
      sectionsComplete: 90,
    },
    matchedKeywords: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Java', 'Git', 'HTML5', 'CSS3', 'Data Structures'],
    missingKeywords: ['Docker', 'AWS / Cloud Deployment', 'CI/CD Pipeline', 'Unit Testing (Jest/Mocha)'],
    feedback: [
      'Strong technical project foundation with real live client work (bombaybakers.in).',
      'Solid quantifiable internship metrics at MPIS Revolution.',
      'ATS-compatible single-column structure with standard section headers.',
    ],
    improvements: [
      'Add cloud deployment keywords (e.g. Vercel, Render, AWS EC2).',
      'Mention test coverage or testing libraries (Jest, Postman automated tests).',
      'Include LeetCode problem count (50+ DSA problems solved) directly under Skills.',
    ],
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Interview Prep State
  const [selectedInterviewCategory, setSelectedInterviewCategory] = useState('dsa');
  const [revealedQuestions, setRevealedQuestions] = useState({});
  const [practicedQuestions, setPracticedQuestions] = useState({});

  // Question Bank
  const interviewQuestions = {
    dsa: [
      {
        id: 'dsa-1',
        question: 'How do you detect a cycle in a singly linked list in O(n) time and O(1) space?',
        hint: "Think about Floyd's Cycle Detection Algorithm using two pointers moving at different speeds.",
        answer: "Use Floyd's Tortoise and Hare algorithm. Initialize two pointers: 'slow' and 'fast' at the head. Advance slow by 1 node and fast by 2 nodes in each step. If fast or fast.next reaches null, there is no cycle. If slow == fast at any point, a cycle exists. Time complexity is O(n) and auxiliary space is O(1).",
      },
      {
        id: 'dsa-2',
        question: 'What is the difference between Array and LinkedList in terms of cache locality and memory layout?',
        hint: 'Consider contiguous memory allocation vs pointer chasing.',
        answer: 'Arrays store elements in contiguous memory locations, giving excellent CPU cache locality and O(1) random index access. LinkedLists allocate nodes dynamically across heap memory connected via pointers, which causes frequent CPU cache misses and requires extra pointer storage per node.',
      },
      {
        id: 'dsa-3',
        question: 'Explain the Time & Space Complexity of QuickSort in best, average, and worst cases.',
        hint: 'Worst case happens when the pivot chosen is consistently the smallest or largest element.',
        answer: 'Best Case: O(n log n) with balanced partitions. Average Case: O(n log n). Worst Case: O(n²) when the pivot chosen is already the minimum or maximum element (e.g. already sorted array with first element as pivot). Auxiliary stack space is O(log n) for recursion.',
      },
    ],
    java: [
      {
        id: 'java-1',
        question: 'Why is String immutable in Java, and how does the String Constant Pool work?',
        hint: 'Consider security, multithreading synchronization, and hash caching.',
        answer: 'Strings are immutable in Java for three key reasons: 1) Security (Strings are used for DB connection URLs, network ports, and file paths), 2) Thread Safety (immutable objects are inherently thread-safe without synchronization), and 3) Caching (hashCode can be cached, and String Constant Pool allows sharing instances to save heap memory).',
      },
      {
        id: 'java-2',
        question: 'Explain the difference between HashMap and ConcurrentHashMap.',
        hint: 'Consider locking granularity and null keys/values.',
        answer: 'HashMap is non-synchronized and not thread-safe; concurrent modifications can cause race conditions or infinite loops. ConcurrentHashMap achieves high concurrent throughput using bucket-level / CAS locks (and synchronized blocks on node heads in Java 8+) without locking the entire map. ConcurrentHashMap does not allow null keys or values.',
      },
    ],
    react: [
      {
        id: 'react-1',
        question: 'Explain how React Reconciliation and the Virtual DOM work with Keys.',
        hint: 'Keys help React identify which items have changed, been added, or removed.',
        answer: 'When component state changes, React builds a new Virtual DOM tree and performs a heuristic O(n) diffing algorithm against the previous tree. Stable, unique keys allow React to match children across renders without re-rendering or unmounting the entire subtree, preventing visual state bugs in lists.',
      },
      {
        id: 'react-2',
        question: 'When should you use useMemo and useCallback vs standard functions/values?',
        hint: 'Avoid premature optimization; focus on expensive calculations and referential equality.',
        answer: 'useMemo caches the result of an expensive calculation between renders. useCallback caches a function definition to preserve referential equality when passing callbacks to memoized child components (React.memo). They should not be used everywhere because memory overhead and dependency array checks have a cost.',
      },
    ],
    backend: [
      {
        id: 'be-1',
        question: 'How do JWTs (JSON Web Tokens) work, and how do you store them securely in the browser?',
        hint: 'Compare localStorage with httpOnly cookies against XSS and CSRF.',
        answer: 'A JWT consists of Header.Payload.Signature. The server signs the payload with a secret key so it can verify authenticity statelessly. Storing tokens in localStorage makes them vulnerable to Cross-Site Scripting (XSS). The most secure practice is storing tokens in an httpOnly, SameSite=Strict, Secure cookie so client-side JavaScript cannot access it.',
      },
      {
        id: 'be-2',
        question: 'What is the role of Middleware in Express.js?',
        hint: 'Middleware functions have access to the req, res, and next objects.',
        answer: 'Middleware functions execute during the lifecycle of a request to the Express server. They can parse incoming request bodies, verify authentication tokens, log HTTP requests, validate input schemas, or terminate the request early with an error response by calling next(err).',
      },
    ],
    database: [
      {
        id: 'db-1',
        question: 'Compare SQL (Relational) vs MongoDB (NoSQL) in terms of ACID transactions and schema flexibility.',
        hint: 'Structured tables vs dynamic BSON documents.',
        answer: 'SQL databases (MySQL, PostgreSQL) enforce predefined schemas with relational foreign keys and strong ACID guarantees, making them ideal for financial transactions and structured schemas. MongoDB stores flexible BSON documents, easily accommodates evolving schemas, supports multi-document transactions since v4.0, and scales horizontally with native sharding.',
      },
    ],
    hr: [
      {
        id: 'hr-1',
        question: 'Tell me about a challenging technical bug you faced and how you resolved it.',
        hint: 'Use the STAR method: Situation, Task, Action, Result.',
        answer: 'Use the STAR format: Describe the situation (e.g. handling asynchronous API state in React or Tomcat servlet sessions), the exact task, the debugging actions you took (inspecting network tabs, logging payloads, writing unit tests), and the positive outcome with clean delivery.',
      },
    ],
  };

  const currentQuestions = interviewQuestions[selectedInterviewCategory] || interviewQuestions.dsa;

  // Toggle hint/answer
  const toggleQuestion = (id) => {
    setRevealedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const togglePracticed = (id) => {
    setPracticedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Run ATS audit simulation
  const handleRunAudit = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAtsResult({
        score: 91,
        categoryScores: {
          keywordMatch: 94,
          impactMetrics: 88,
          formatting: 96,
          sectionsComplete: 92,
        },
        matchedKeywords: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Java', 'Git', 'HTML5', 'CSS3', 'Data Structures', 'C Language'],
        missingKeywords: ['Docker', 'AWS / Cloud Deployment', 'CI/CD Pipeline', 'Unit Testing'],
        feedback: [
          'Excellent keyword density for Full-Stack / MERN Developer roles.',
          'Direct link to production client site (bombaybakers.in) provides verified real-world proof.',
          'HackerRank Gold and LeetCode milestones demonstrate verifiable coding discipline.',
        ],
        improvements: [
          'Consider adding automated testing keywords (Jest / Supertest).',
          'Mention Docker containerization experience if deploying microservices.',
        ],
      });
    }, 800);
  };

  // Realistic Placement Jobs Data
  const sampleJobs = [
    {
      id: 'job-1',
      title: 'Software Engineer Intern (Frontend / Full-Stack)',
      company: 'TCS Digital / Innovations Lab',
      location: 'Noida / Remote',
      type: 'Internship (6 Months)',
      skills: ['React.js', 'JavaScript', 'HTML5/CSS3', 'REST APIs'],
      experience: 'Fresher / 2026–2028 Batch',
      stipend: '₹25,000 / month',
    },
    {
      id: 'job-2',
      title: 'Associate Software Engineer - Java & MERN',
      company: 'Infosys Springboard',
      location: 'Gurugram / Hybrid',
      type: 'Campus Drive',
      skills: ['Java', 'Data Structures', 'Node.js', 'SQL'],
      experience: 'Entry Level (B.Tech CSE)',
      stipend: '₹4.5 - ₹7.0 LPA',
    },
    {
      id: 'job-3',
      title: 'Junior Web Developer (Commercial Projects)',
      company: 'WebCraft Digital Solutions',
      location: 'Bareilly / Hybrid',
      type: 'Full-Time / Freelance',
      skills: ['React.js', 'Tailwind CSS', 'Responsive Design', 'MongoDB'],
      experience: '0-1 Year',
      stipend: '₹3.6 - ₹5.0 LPA',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl my-auto bg-slate-950 light:bg-white border border-indigo-500/30 light:border-slate-300 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-100 light:text-slate-900">
        
        {/* Top Header Bar */}
        <div className="px-5 py-4 border-b border-slate-800 light:border-slate-200 flex items-center justify-between bg-slate-900/60 light:bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-100 light:text-slate-900">
                  AI Placement Assistant
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-400 light:text-indigo-700 border border-indigo-500/30">
                  Internship Project at MPIS Revolution
                </span>
              </div>
              <p className="text-[11px] text-slate-400 light:text-slate-500">
                Centralized dashboard for ATS resume scoring, curated interview prep & placement drives
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-800 light:hover:bg-slate-200 text-slate-400 hover:text-slate-200 transition-colors"
            title="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="px-4 py-2 border-b border-slate-800 light:border-slate-200 bg-slate-900/30 light:bg-slate-100 flex items-center gap-1.5 overflow-x-auto shrink-0">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'ats', label: 'ATS Resume Reviewer', icon: FileText },
            { id: 'interview', label: 'Interview Preparation', icon: HelpCircle },
            { id: 'jobs', label: 'Placement Jobs', icon: Briefcase },
            { id: 'profile', label: 'Student Profile', icon: User },
            { id: 'settings', label: 'Settings', icon: SettingsIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome & Overview */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/50 light:from-indigo-50 light:to-white border border-indigo-500/25 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-semibold text-indigo-300 light:text-indigo-700">Placement Preparation Cycle 2026</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 light:text-slate-900">
                    Welcome back, Gungun Bhatia!
                  </h4>
                  <p className="text-xs text-slate-300 light:text-slate-600 mt-1 max-w-xl">
                    SRMS CET Bareilly • 3rd Year B.Tech CSE (7.83 CGPA). Your overall placement readiness is on track with 50+ DSA problems solved and an active ATS resume score of 88/100.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveTab('ats')}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Review Resume</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('interview')}
                    className="px-4 py-2 rounded-xl bg-slate-900 light:bg-slate-200 text-slate-300 light:text-slate-800 hover:bg-slate-800 text-xs font-semibold transition-colors"
                  >
                    <span>Practice DSA</span>
                  </button>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500 mb-1">
                    <span>ATS Score</span>
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <span className="text-2xl font-bold text-indigo-400 light:text-indigo-600">{atsResult.score}/100</span>
                  <span className="block text-[10px] text-emerald-400 mt-0.5">Top 15% Candidate Rank</span>
                </div>

                <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500 mb-1">
                    <span>DSA Questions</span>
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-2xl font-bold text-emerald-400 light:text-emerald-600">50+ Solved</span>
                  <span className="block text-[10px] text-slate-400 light:text-slate-500 mt-0.5">LeetCode & Java</span>
                </div>

                <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500 mb-1">
                    <span>Live Projects</span>
                    <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <span className="text-2xl font-bold text-amber-400 light:text-amber-600">2 Verified</span>
                  <span className="block text-[10px] text-slate-400 light:text-slate-500 mt-0.5">bombaybakers.in + Portal</span>
                </div>

                <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500 mb-1">
                    <span>Active Drives</span>
                    <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span className="text-2xl font-bold text-purple-400 light:text-purple-600">3 Available</span>
                  <span className="block text-[10px] text-slate-400 light:text-slate-500 mt-0.5">Campus Internships</span>
                </div>
              </div>

              {/* Recent Activity & Core Skills */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Recent Activity */}
                <div className="p-5 rounded-2xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-3">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 light:text-slate-500">
                    Recent Preparation Activity
                  </h5>
                  <ul className="space-y-2.5 text-xs">
                    <li className="flex items-start gap-2 text-slate-300 light:text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Completed ATS Resume Audit for Full-Stack / MERN Developer profile (Score: 88).</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300 light:text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Practiced Linked List cycle detection & Java String Pool interview questions.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300 light:text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Verified live deployment link for Bombay Bakers commercial showcase.</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Actions */}
                <div className="p-5 rounded-2xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-3">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 light:text-slate-500">
                    Quick Actions
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveTab('ats')}
                      className="p-3 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 hover:border-indigo-500 text-left text-xs space-y-1 transition-all"
                    >
                      <span className="font-semibold block text-slate-200 light:text-slate-800">Scan New Resume</span>
                      <span className="text-[11px] text-slate-400 light:text-slate-500">Check keyword compatibility</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('interview')}
                      className="p-3 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 hover:border-indigo-500 text-left text-xs space-y-1 transition-all"
                    >
                      <span className="font-semibold block text-slate-200 light:text-slate-800">Mock Question Bank</span>
                      <span className="text-[11px] text-slate-400 light:text-slate-500">Review Java, DSA & React</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('jobs')}
                      className="p-3 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 hover:border-indigo-500 text-left text-xs space-y-1 transition-all"
                    >
                      <span className="font-semibold block text-slate-200 light:text-slate-800">Campus Drives</span>
                      <span className="text-[11px] text-slate-400 light:text-slate-500">Apply to matching roles</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className="p-3 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 hover:border-indigo-500 text-left text-xs space-y-1 transition-all"
                    >
                      <span className="font-semibold block text-slate-200 light:text-slate-800">Student Profile</span>
                      <span className="text-[11px] text-slate-400 light:text-slate-500">Update academic metrics</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ATS RESUME REVIEWER (Preserved & Enhanced) */}
          {activeTab === 'ats' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 light:border-slate-200">
                <div>
                  <h4 className="text-lg font-bold text-slate-100 light:text-slate-900">
                    ATS Resume Reviewer & Keyword Analyzer
                  </h4>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    Built during MPIS Revolution internship. Evaluates resume text against SDE criteria and keyword frequencies.
                  </p>
                </div>
                <button
                  onClick={handleRunAudit}
                  disabled={isAnalyzing}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all shrink-0 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
                  <span>{isAnalyzing ? 'Analyzing Resume...' : 'Re-Run ATS Audit'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Resume Input Editor */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-300 light:text-slate-700">
                      Resume Content (Plain Text Format)
                    </label>
                    <span className="text-[11px] text-slate-500">Single-column parser</span>
                  </div>
                  <textarea
                    rows={12}
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-xs font-mono text-slate-200 light:text-slate-800 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
                  />
                  <p className="text-[11px] text-slate-400 light:text-slate-500">
                    Tip: You can edit or paste your own resume text above and click "Re-Run ATS Audit" to see updated feedback.
                  </p>
                </div>

                {/* Audit Structured Feedback */}
                <div className="lg:col-span-6 space-y-4">
                  {/* Score Pill */}
                  <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 block">Overall ATS Score</span>
                      <span className="text-3xl font-extrabold text-indigo-400 light:text-indigo-600">{atsResult.score}/100</span>
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Strong Fit
                      </span>
                    </div>
                  </div>

                  {/* Matched Keywords */}
                  <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 block">
                      Detected Technical Keywords:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {atsResult.matchedKeywords.map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          ✓ {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Missing Skills / Improvement */}
                  <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 light:text-amber-600 block">
                      Recommended Additional Keywords:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {atsResult.missingKeywords.map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-500/10 text-amber-400 light:text-amber-700 border border-amber-500/20">
                          + {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actionable Suggestions */}
                  <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 block">
                      Actionable Feedback:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300 light:text-slate-700">
                      {atsResult.improvements.map((imp, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERVIEW PREPARATION (Robust Question Bank with hints & answers) */}
          {activeTab === 'interview' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800 light:border-slate-200">
                <div>
                  <h4 className="text-lg font-bold text-slate-100 light:text-slate-900">
                    Curated Technical Interview Bank
                  </h4>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    High-frequency questions asked in campus drives and SDE-1 interviews with structured explanations.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  Reliable Offline Bank Active
                </span>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'dsa', label: 'DSA & Algorithms' },
                  { id: 'java', label: 'Java & OOP' },
                  { id: 'react', label: 'React.js' },
                  { id: 'backend', label: 'Backend & Node' },
                  { id: 'database', label: 'Databases & SQL' },
                  { id: 'hr', label: 'HR & Behavioral' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedInterviewCategory(c.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedInterviewCategory === c.id
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:bg-slate-800 border border-slate-800 light:border-slate-300'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Questions List */}
              <div className="space-y-3">
                {currentQuestions.map((q) => {
                  const isRevealed = revealedQuestions[q.id];
                  const isPracticed = practicedQuestions[q.id];

                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-3 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 light:text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            ?
                          </span>
                          <span className="font-semibold text-xs sm:text-sm text-slate-100 light:text-slate-900">
                            {q.question}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => togglePracticed(q.id)}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-colors ${
                              isPracticed
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : 'bg-slate-800 light:bg-slate-200 text-slate-400 light:text-slate-600'
                            }`}
                          >
                            <CheckCircle className="w-3 h-3" />
                            <span>{isPracticed ? 'Practiced' : 'Mark Done'}</span>
                          </button>

                          <button
                            onClick={() => toggleQuestion(q.id)}
                            className="p-1.5 rounded-lg bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-300 light:text-slate-700"
                            title={isRevealed ? 'Hide Answer' : 'Show Answer'}
                          >
                            {isRevealed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Hint */}
                      <div className="pl-7">
                        <span className="text-[11px] text-amber-400/90 light:text-amber-700 italic">
                          Hint: {q.hint}
                        </span>
                      </div>

                      {/* Answer Details */}
                      {isRevealed && (
                        <div className="mt-2 pl-7 p-3 rounded-lg bg-slate-950/80 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 text-xs text-slate-300 light:text-slate-700 leading-relaxed space-y-1">
                          <span className="font-bold text-[11px] text-indigo-400 light:text-indigo-600 block uppercase tracking-wider">
                            Detailed Solution / Explanation:
                          </span>
                          <p>{q.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: PLACEMENT JOBS BOARD */}
          {activeTab === 'jobs' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800 light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-100 light:text-slate-900">
                    College Placement Drives & Opportunities
                  </h4>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    Sample drives curated for SRMS CET and affiliated campus placements.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                  Showing 3 verified demo drives
                </span>
              </div>

              <div className="space-y-3.5">
                {sampleJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-5 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base text-slate-100 light:text-slate-900">
                          {job.title}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/15 text-indigo-400 light:text-indigo-600 border border-indigo-500/25">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 light:text-slate-600">
                        <span className="flex items-center gap-1 font-medium text-slate-300 light:text-slate-700">
                          <Building className="w-3.5 h-3.5 text-indigo-400" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400 light:text-emerald-700 font-semibold">
                          {job.stipend}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.skills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[10px] bg-slate-800/80 light:bg-slate-200 text-slate-300 light:text-slate-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Application submitted for: ${job.title} at ${job.company}!`)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0 transition-all"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: STUDENT PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800 light:border-slate-200">
                <h4 className="text-lg font-bold text-slate-100 light:text-slate-900">
                  Student Placement Profile
                </h4>
                <p className="text-xs text-slate-400 light:text-slate-600">
                  Verified candidate information maintained for recruiter export and placement officer reviews.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Full Name</span>
                  <p className="text-sm font-semibold text-slate-200 light:text-slate-800">{personalInfo.name}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Email Address</span>
                  <p className="text-sm font-semibold text-slate-200 light:text-slate-800">{personalInfo.email}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Institution</span>
                  <p className="text-sm font-semibold text-slate-200 light:text-slate-800">{personalInfo.college}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Degree & CGPA</span>
                  <p className="text-sm font-semibold text-slate-200 light:text-slate-800">
                    B.Tech CSE • {personalInfo.cgpa}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl human-card bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Coding Profiles & Portfolios
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-800/60 light:bg-slate-200 text-xs font-semibold text-slate-300 light:text-slate-800 flex items-center justify-between hover:text-indigo-400"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-800/60 light:bg-slate-200 text-xs font-semibold text-slate-300 light:text-slate-800 flex items-center justify-between hover:text-indigo-400"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-800/60 light:bg-slate-200 text-xs font-semibold text-slate-300 light:text-slate-800 flex items-center justify-between hover:text-indigo-400"
                  >
                    <span>LeetCode</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-xs font-semibold text-indigo-300 light:text-indigo-800 flex items-center justify-between"
                  >
                    <span>PDF Resume</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800 light:border-slate-200">
                <h4 className="text-lg font-bold text-slate-100 light:text-slate-900">
                  Assistant Preferences & Notification Settings
                </h4>
                <p className="text-xs text-slate-400 light:text-slate-600">
                  Configure placement alerts and mock interview reminders.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-200 light:text-slate-800 block">
                      Daily Placement Drive Alerts
                    </span>
                    <span className="text-xs text-slate-400 light:text-slate-500">
                      Receive notifications for matching SDE internships
                    </span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600" />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-200 light:text-slate-800 block">
                      ATS Keyword Recommendations
                    </span>
                    <span className="text-xs text-slate-400 light:text-slate-500">
                      Auto-highlight missing terms during resume updates
                    </span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600" />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-200 light:text-slate-800 block">
                      Target Role Preference
                    </span>
                    <span className="text-xs text-slate-400 light:text-slate-500">
                      Software Engineer / Full-Stack MERN
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-400 light:text-indigo-700">
                    SDE-1 / Full-Stack
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="px-5 py-3 border-t border-slate-800 light:border-slate-200 bg-slate-900/60 light:bg-slate-50 flex items-center justify-between shrink-0 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Project built by Gungun Bhatia (MPIS Revolution Internship)</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-200 light:text-slate-800 font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
