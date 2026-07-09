import {
  Code2,
  Workflow,
  Lightbulb,
  Brain,
  Layers,Shield
} from 'lucide-react';

const EMAIL = "priyanshualex@gmail.com";
const LOCATION = 'Kolkata, India';
const GITHUB = 'https://github.com/Alexisontheway';
const LINKEDIN = 'https://linkedin.com/in/priyanshu-pramanik-422124245';


export const personalInfo = Object.freeze({
  name: 'Priyanshu Pramanik',
  title: 'Software Engineer',
  tagline: 'Building production-ready software, intelligent automation, and AI-powered systems from architecture to deployment.',
  location: LOCATION,
  email: EMAIL,
  phone: '+91 6204058150',
  linkedin: LINKEDIN,
  github: GITHUB,
  resumeUrl: '/resume.pdf?v=' + new Date().getTime(),
});

export const systemProfile = Object.freeze({
  status: 'Available',
  location: LOCATION,
  focusAreas: ['Full-Stack Systems', 'Intelligent Automation', 'AI Engineering'],
  currentStack: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Python', 'Docker'],
  highlights: [
    { value: '4+', label: 'Applications' },
    { value: '100+', label: 'Leads / Day' },
    { value: '8.89', label: 'CGPA' },
  ],
});

export const aboutText = {
  headline: 'Engineering Reliable Software Systems.',
  paragraphs: [
    "I'm a Computer Science undergraduate focused on building end-to-end systems — from responsive frontends to resilient backends and automated workflows.",
    "My work spans full-stack web development, intelligent data processing, and workflow automation. I've built tools that clean messy datasets, automate lead generation, and streamline repetitive operations — with a focus on reliability and maintainability.",
    "I care about systems that are clean, performant, and production-ready — not just functional on localhost.",
  ],
  highlights: [
    { label: 'Leads Generated Daily', value: '100+' },
    { label: 'Data Cleaning Time Saved', value: '85%' },
    { label: 'End-to-End Application Development', value: "4+"}
  ],
};

export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,

    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
    ],
  },

  {
    title: "Frontend",
    icon: Layers,

    skills: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: Workflow,

    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
      "JWT",
      "MVC Architecture",
    ],
  },

  {
    title: "Database",
    icon: Brain,

    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Neon PostgreSQL",
    ],
  },

  {
    title: "Tools & Platforms",

    icon: Lightbulb,

    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "VS Code",
    ],
  },
];
export const projects = [
  {
    id: "movie-recommender",
    title: 'Wanna Watch',
    subtitle: 'AI-Powered Movie Discovery Platform',
    description:
      'A full-stack movie recommendation platform that combines machine learning with real-time TMDB integration.',
    impact: 'Hybrid ML + TMDB engine delivering personalized recommendations across 800,000+ movies with cosine similarity scoring, 100-point quiz algorithm, and real-time enrichment.',
    techStack: ['React', 'Node.js', 'Express', 'FastAPI', 'Python', 'scikit-learn', 'PostgreSQL', 'TMDB API', 'JWT Auth', 'Vercel', 'Render'],
    features: [
      'ML content-based filtering using TF-IDF & Cosine Similarity on 4,800+ movies with TMDB enrichment',
      'Hybrid recommendation engine combining ML similarity scores with TMDB similar movies API',
      '5-question personality quiz with 100-point scoring algorithm (genre 50pts, rating 20pts, era 15pts)',
      'Full movie detail pages with YouTube trailers, cast photos, where to watch, and budget/revenue',
      'JWT authentication with watchlist, favorites, star ratings, and "Recommend from Favorites" feature',
      'Real-time global search across 800,000+ movies with debounced instant dropdown results',
      'Multi-movie mode: pick up to 5 movies for combined AI-powered suggestions',
      'Microservices architecture deployed across Vercel (frontend), Render (backend + ML), and Neon (PostgreSQL)',
    ],
    github: 'https://github.com/Alexisontheway/movie-recommender',
    demo: 'https://movie-recommender-ten-weld.vercel.app',
    featured: true,
    category: 'ai',
  },
   {
    id: "data-cleaner",
    title: 'CleanFlow',
    subtitle: 'Automated Data Pipeline',
    description:
      'An automated pipeline that ingests raw datasets, identifies inconsistencies, removes duplicates, validates formats, and outputs clean, analysis-ready data. Built to handle messy real-world data efficiently with detailed reporting.',
    impact: 'Automated ETL pipeline for validating, transforming, and standardizing structured datasets with real-time reporting.',
    techStack: ['Python', 'FastAPI', 'Pandas', 'NumPy', 'Uvicorn', 'RESTful APIs'],
    features: [
      'Automated duplicate detection and removal',
      'Format validation for emails, phones, and dates',
      'Business-rule validation checks for schema consistency',
      'Structured Excel reports for stakeholder review',
      'Batch processing for large-scale datasets',
    ],
    github: 'https://github.com/Alexisontheway', 
    demo: 'https://intelligent-data-cleaning-tool.onrender.com/',
    featured: true,
    category: 'automation',
  },
  {
    id: 'dailytaskapp',
    title: 'TaskForce',
    subtitle: 'Full-Stack Productivity Platform',
    description:
      'A comprehensive task management application built with a modern full-stack architecture. Features real-time updates, priority-based organization, deadline tracking, and a clean dashboard interface designed for daily productivity workflows.',
    impact: 'Designed using scalable MVC architecture with secure JWT authentication and PostgreSQL-backed persistence.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Vanilla JS', 'REST API', 'JWT Auth'],
    features: [
      'Priority-based task organization with smart sorting',
      'Real-time status updates and progress tracking',
      'Secure authentication with JWT tokens',
      'RESTful API with input validation and error handling',
      'Responsive UI with dark/light mode support',
    ],
    github: 'https://github.com/Alexisontheway/Daily-Task-App',
    demo: 'https://daily-task-app-2.onrender.com',
    featured: true,
    category: 'fullstack',
  },]
 
  ;

export const experience = [
  {
    role: 'Technical Intern',
    company: 'GAOTek Inc.',
    location: 'Remote — Kolkata, India',
    period: 'August 2025 – November 2025',
    type: 'Internship',
    description:
      'Handled AI-assisted technical writing, product documentation, and lead generation operations across automation and SaaS workflows.',
    achievements: [
      'Documented 120+ products (4–5 daily) with detailed specifications, supplier links, and feature descriptions into a standardized internal database',
      'Designed a repeatable product documentation workflow that reduced manual entry errors and improved data organization',
      'Generated 100+ qualified leads daily using Apollo and Clay, maintaining database accuracy for follow-up',
      'Built and executed automated email outreach campaigns using Apollo and Thunderbird for scalable lead engagement',
      'Integrated multiple SaaS tools (Apollo, Clay, Thunderbird) to create a unified lead generation pipeline',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Swami Vivekananda University',
    location: 'Kolkata, India',
    period: '2024 – 2027 (Expected)',
    grade: 'CGPA: 8.89 / 10',
    type: 'Undergraduate',
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Computer Engineering',
    institution: 'Government Polytechnic Khutri',
    location: 'Khutri, India',
    period: '2021 – 2024',
    grade: 'Distinction',
    type: 'Diploma',
  },
];


export const certifications = [
  {
    title: "CS50's Introduction to Computer Science",
    issuer: 'HarvardX (edX)',
    year: '2024',
    icon: Code2,
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Software Engineering',
    issuer: 'NPTEL (IIT Kharagpur)',
    year: '2024',
    icon: Layers,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: 'HarvardX (edX)',
    year: '2025',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: "OSINT Using Python",
    issuer: 'CyberVidyaPeeth',
    year: '2023',
    icon: Shield,
    color: 'from-slate-500 to-indigo-600',
  }
  
];


  
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
