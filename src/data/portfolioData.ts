import { Project, Experience, SkillCategory, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Norbert Ihimbazwe Manzi',
  role: 'Senior Full-Stack Software Engineer & Systems Architect',
  tagline: 'Architecting resilient full-stack web applications, educational management systems, and enterprise business platforms.',
  email: 'norbertihimbazwemanzi@gmail.com',
  location: 'Kigali, Rwanda · Available Globally (Remote / Relocation)',
  availabilityStatus: 'Available for Full-Time Roles, System Consulting & High-Impact Contracts',
  yearsExperience: 6,
  github: 'https://github.com/norbert-manzi',
  linkedin: 'https://linkedin.com/in/norbert-ihimbazwe-manzi',
  instagram: 'https://instagram.com/ma_nzi1',
  instagramHandle: 'ma_nzi1',
  facebook: 'https://facebook.com/manziwizzyog',
  facebookHandle: 'manziwizzyog',
  codeImage: '/src/assets/images/software_code_display_1790509312345.jpg',
  portraitImage: '/src/assets/images/software_code_display_1790509312345.jpg',
  workspaceImage: '/src/assets/images/hero_dev_workspace_1790508096459.jpg',
  bioShort:
    'Full-Stack Developer with deep expertise engineering production-grade web systems. Currently building institutional management suites like GS Mugina School System, ES Rutobwe Academic Portal, and enterprise operational platforms for EjoHeja Ltd.',
  summaryPoints: [
    'Lead architect behind GS Mugina School System Management and ES Rutobwe Academic Platform',
    'Enterprise web platform engineering for EjoHeja .ltd handling operations, inventory, and revenue ledgers',
    'Specialist in modern React 19, TypeScript, Next.js, Node.js, Express, and high-performance REST APIs',
    'Relational database engineering with PostgreSQL, schema migration strategies, and real-time state management'
  ],
  stats: [
    { label: 'Key Platforms', value: '3 Active' },
    { label: 'Years Full-Stack Exp.', value: '6+' },
    { label: 'Active Users Served', value: '15,000+' },
    { label: 'System Uptime SLA', value: '99.98%' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'gs-mugina-school-system',
    title: 'GS Mugina School System Management',
    tagline: 'Comprehensive Digital Institutional Administration & Academic Portal',
    description:
      'All-in-one full-stack school management system engineered for Groupe Scolaire Mugina (GS Mugina). Centralizes student admissions, real-time daily attendance recording, curriculum scheduling, continuous assessment grading, automated report card generation, and school tuition fee tracking.',
    category: 'School Management',
    imageUrl: '/src/assets/images/gsmugina_school_system_1790509328606.jpg',
    techStack: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Tailwind CSS',
      'PDF Generation Engine',
      'RBAC Security'
    ],
    metrics: [
      { label: 'Students Managed', value: '2,400+' },
      { label: 'Report Generation', value: '< 2.5s / class' },
      { label: 'Attendance Accuracy', value: '99.9%' }
    ],
    githubUrl: 'https://github.com/norbert-manzi/gs-mugina-school-management',
    liveUrl: 'https://gsmugina-portal.edu',
    featured: true,
    caseStudy: {
      overview:
        'GS Mugina required a secure, centralized digital backbone to transition away from labor-intensive manual paper registers, vulnerable grading sheets, and delayed end-of-term academic reports.',
      architectureSummary:
        'Built with a modern TypeScript and React client paired with a robust Node.js / Express REST API and PostgreSQL relational database. Implemented role-based access control (Headmaster, Dean of Studies, Teachers, Bursar/Accountant, and Students/Parents) with automated PDF grade transcript rendering and daily attendance audits.',
      keyChallenges: [
        {
          challenge:
            'Generating end-of-term academic report cards for thousands of students simultaneously was causing memory spikes on the server.',
          solution:
            'Engineered a background batch-worker queue that streams PDF compilation into cached cloud storage chunks, reducing peak RAM consumption by 72% and completing an entire grade batch in seconds.'
        },
        {
          challenge:
            'Managing complex multi-trimester grading calculations with varying subject coefficients and disciplinary penalty points.',
          solution:
            'Implemented an atomic database calculation engine with idempotent grade computation triggers and audit history so any mark alteration is logged with timestamp and teacher ID.'
        }
      ],
      systemHighlights: [
        'Automated term-by-term grading matrix with dynamic rank computation and coefficient weighting',
        'Daily classroom attendance tracker with instant absentee reporting and parent alerts',
        'Tuition fee ledger with installment tracking, balance reconciliation, and receipt generation',
        'Granular role-based permissions preventing unauthorized grade edits once marks are locked by the administration',
        'Print-ready, vectorized official report card export with official school stamps and QR verification'
      ],
      databaseDesign:
        'PostgreSQL schema designed with 3NF normalization: distinct schemas for Academic_Years, Class_Streams, Student_Enrollments, Subject_Coefficients, Assessment_Scores, and Fee_Ledger with composite indexes on (academic_year_id, term_id, student_id).',
      outcome:
        'Cut end-of-term report card preparation time from 3 weeks of manual data entry to 1 afternoon, eliminated fee discrepancy disputes, and provided administrators with real-time academic analytics.'
    }
  },
  {
    id: 'es-rutobwe-portal',
    title: 'ES Rutobwe Academic System',
    tagline: 'Modern Secondary School Academic & Timetable Infrastructure',
    description:
      'High-performance institutional web portal and academic coordination suite for École Secondaire Rutobwe (ES Rutobwe). Powers student academic records, digital course management, examination timetabling, teacher classroom allocations, and parent SMS notification integration.',
    category: 'School Management',
    imageUrl: '/src/assets/images/esrutobwe_school_portal_1790509341892.jpg',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Prisma ORM',
      'Tailwind CSS',
      'Twilio / AfricaTalking SMS',
      'Docker'
    ],
    metrics: [
      { label: 'Active Students', value: '1,850+' },
      { label: 'Timetable Conflicts', value: 'Zero Collisions' },
      { label: 'Parent SMS Delivery', value: '99.4%' }
    ],
    githubUrl: 'https://github.com/norbert-manzi/es-rutobwe-platform',
    liveUrl: 'https://esrutobwe.edu',
    featured: true,
    caseStudy: {
      overview:
        'ES Rutobwe required a modern digital platform to streamline secondary school operations, eliminate scheduling conflicts across classrooms and laboratories, and bridge direct communication with parents across Rwanda.',
      architectureSummary:
        'Designed as a responsive Next.js and TypeScript web application connected to a high-availability PostgreSQL database via Prisma ORM. Integrates an automated CSP (Constraint Satisfaction Problem) timetable allocation algorithm and third-party SMS gateway for instant guardian dispatches.',
      keyChallenges: [
        {
          challenge:
            'Manual teacher timetable scheduling frequently resulted in double-booked laboratories and overlapping faculty hours.',
          solution:
            'Developed an automated constraint-solving timetable scheduler in TypeScript that detects room and instructor availability conflicts in real time as shifts are populated.'
        },
        {
          challenge:
            'Reliable communication with parents in areas with intermittent internet access.',
          solution:
            'Integrated an asynchronous SMS dispatch queue via transactional telephony gateways, sending instantaneous alerts when term marks or fee receipts are published.'
        }
      ],
      systemHighlights: [
        'Automated master timetable generator preventing classroom and laboratory resource collisions',
        'National curriculum grade mapping with letter grades, standard deviations, and class percentiles',
        'Direct parent SMS notification pipeline for emergency alerts, report releases, and fee reminders',
        'Faculty lesson plan submission portal with administrative review and approval workflows',
        'Encrypted student disciplinary and medical profile archives accessible strictly by authorized staff'
      ],
      databaseDesign:
        'Structured relational model in PostgreSQL with Prisma ORM, utilizing foreign-key cascade protections, composite unique constraints on (teacher_id, day_of_week, period_slot), and optimized relational joins for student academic dossiers.',
      outcome:
        'Successfully automated weekly scheduling for 60+ instructors across 24 classrooms with zero scheduling collisions, while elevating parent engagement through automated SMS reports.'
    }
  },
  {
    id: 'ejoheja-ltd-platform',
    title: 'EjoHeja .ltd Enterprise Platform',
    tagline: 'Enterprise Operations, Inventory & Financial Management System',
    description:
      'Scalable enterprise business management and ERP web solution engineered for EjoHeja Ltd. Unifies company operations, supply chain inventory, multi-account invoicing, client relationship management (CRM), and real-time revenue analytics dashboards.',
    category: 'Enterprise Systems',
    imageUrl: '/src/assets/images/ejoheja_ltd_platform_1790509356281.jpg',
    techStack: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis Caching',
      'Chart.js',
      'Tailwind CSS'
    ],
    metrics: [
      { label: 'Inventory Items', value: '10,000+' },
      { label: 'Query Response', value: '45ms p95' },
      { label: 'Financial Balance', value: '100% Reconciled' }
    ],
    githubUrl: 'https://github.com/norbert-manzi/ejoheja-ltd-erp',
    liveUrl: 'https://ejoheja-portal.com',
    featured: true,
    caseStudy: {
      overview:
        'EjoHeja .ltd operates dynamic commercial workflows requiring unified tracking across inventory movements, client invoicing, cash flow ledgers, and executive analytics across multiple branch locations.',
      architectureSummary:
        'Engineered an enterprise-grade full-stack ERP architecture utilizing React 19 and Tailwind on the frontend, with an Express/Node.js backend, Redis caching layer for rapid product lookups, and a PostgreSQL database enforcing double-entry bookkeeping rules.',
      keyChallenges: [
        {
          challenge:
            'Simultaneous checkout orders across warehouse branches were creating race conditions in inventory stock quantities.',
          solution:
            'Implemented PostgreSQL row-level pessimistic locking (`SELECT ... FOR UPDATE`) within ACID database transactions, preventing negative stock sales and phantom updates.'
        },
        {
          challenge:
            'Executive financial summaries and quarterly profit reports were taking over 15 seconds to calculate during peak hours.',
          solution:
            'Constructed PostgreSQL materialized views with periodic automated re-indexing and Redis caching for top aggregate financial metrics, slashing dashboard query latency to 45ms.'
        }
      ],
      systemHighlights: [
        'Real-time multi-warehouse inventory tracking with automated low-stock reorder alerts',
        'Double-entry commercial accounting ledger with invoice generation and automated tax calculation',
        'Customer Relationship Management (CRM) module tracking client transaction histories and outstanding balances',
        'Interactive analytics dashboard displaying real-time gross revenue, profit margins, and sales velocity',
        'Secure multi-tier role authorization (Executive, Finance Manager, Inventory Clerk, Cashier)'
      ],
      databaseDesign:
        'PostgreSQL with strict ACID transactional boundaries, UUID primary keys, partitioned financial ledger tables by fiscal quarter, and Redis key-value caching for frequent SKU lookups.',
      outcome:
        'Reduced inventory shrinkage, eliminated billing discrepancies, and provided EjoHeja Ltd leadership with instant financial visibility across all business operations.'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Crafting responsive, accessible, high-performance interfaces with modern React and web standards.',
    skills: [
      { name: 'React 19 & Next.js', level: 'Mastery', experienceYears: 6, details: 'Server Components, Hooks, State Architecture, Suspense' },
      { name: 'TypeScript', level: 'Mastery', experienceYears: 6, details: 'Strict typing, Generics, Type-safe client/server contracts' },
      { name: 'Tailwind CSS & Modern UI', level: 'Mastery', experienceYears: 5, details: 'Responsive design, dark/light theme systems, micro-interactions' },
      { name: 'State Management', level: 'Mastery', experienceYears: 6, details: 'Zustand, React Context, TanStack Query, Redux' },
      { name: 'Client Performance & SEO', level: 'Mastery', experienceYears: 5, details: 'Lighthouse 99+, code-splitting, Core Web Vitals' },
      { name: 'Data Visualization & PDF', level: 'Mastery', experienceYears: 5, details: 'Chart.js, Canvas, automated PDF export pipelines' }
    ]
  },
  {
    title: 'Backend & System Architecture',
    description: 'Designing fault-tolerant REST APIs, business logic controllers, and secure auth layers.',
    skills: [
      { name: 'Node.js & Express', level: 'Mastery', experienceYears: 6, details: 'Async I/O, middleware pipelines, streaming, REST APIs' },
      { name: 'Role-Based Access (RBAC)', level: 'Mastery', experienceYears: 6, details: 'Granular permissions, JWT token rotation, bcrypt security' },
      { name: 'API Contract Design', level: 'Mastery', experienceYears: 6, details: 'Clean REST schemas, Swagger/OpenAPI, data validation' },
      { name: 'Background Workers & Queues', level: 'Advanced', experienceYears: 4, details: 'Job schedulers, automated reports, batch processing' },
      { name: 'Third-Party Gateways', level: 'Advanced', experienceYears: 5, details: 'SMS Gateways (Twilio/AfricaTalking), payment webhooks' },
      { name: 'Go (Golang)', level: 'Advanced', experienceYears: 3, details: 'High-throughput microservices, concurrent workers' }
    ]
  },
  {
    title: 'Databases & Data Integrity',
    description: 'Structuring normalized relational schemas, transactional ACID integrity, and query optimization.',
    skills: [
      { name: 'PostgreSQL', level: 'Mastery', experienceYears: 6, details: 'Complex joins, indexing, materialized views, transactions' },
      { name: 'Prisma & ORMs', level: 'Mastery', experienceYears: 5, details: 'Type-safe queries, automated schema migrations, relations' },
      { name: 'Redis', level: 'Mastery', experienceYears: 5, details: 'In-memory caching, session storage, rate limiters' },
      { name: 'Database Security & Backup', level: 'Mastery', experienceYears: 5, details: 'Automated snapshots, encryption at rest, data sanitization' },
      { name: 'SQL Optimization', level: 'Mastery', experienceYears: 6, details: 'EXPLAIN ANALYZE, composite indexes, partition pruning' }
    ]
  },
  {
    title: 'DevOps, Cloud & Infrastructure',
    description: 'Containerizing services, deploying production environments, and maintaining high uptime.',
    skills: [
      { name: 'Docker & Containers', level: 'Mastery', experienceYears: 5, details: 'Multi-stage Dockerfiles, docker-compose, environment parity' },
      { name: 'CI/CD Pipelines', level: 'Mastery', experienceYears: 5, details: 'GitHub Actions, automated testing, continuous delivery' },
      { name: 'Cloud Deployment', level: 'Advanced', experienceYears: 5, details: 'GCP Cloud Run, AWS EC2/S3, Vercel, DigitalOcean' },
      { name: 'Linux Server Administration', level: 'Mastery', experienceYears: 6, details: 'Nginx reverse proxies, SSL/TLS, systemd daemons' },
      { name: 'Testing & QA', level: 'Mastery', experienceYears: 5, details: 'Vitest, Jest, end-to-end user acceptance testing' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2023 - Present',
    role: 'Lead Full-Stack Systems Architect',
    company: 'Independent Systems & Institutional Engineering',
    location: 'Kigali, Rwanda',
    type: 'Full-time / Contract',
    description:
      'Directing end-to-end full-stack development for institutional education platforms and commercial enterprise solutions. Architecting production web software used daily by thousands of educators, students, and corporate personnel.',
    highlights: [
      'Architected and deployed GS Mugina School System Management, digitizing academic workflows for 2,400+ students and 80+ staff members',
      'Developed ES Rutobwe Academic System featuring conflict-free master timetable scheduling and automated parent SMS notifications',
      'Engineered enterprise ERP software for EjoHeja .ltd integrating multi-warehouse inventory, accounting ledgers, and sales analytics',
      'Maintained 99.98% platform availability across all deployed client installations'
    ],
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker']
  },
  {
    period: '2021 - 2023',
    role: 'Senior Full-Stack Developer',
    company: 'Apex Distributed Labs',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Engineered high-performance web applications, customer portals, and real-time backend API services. Led database schema optimizations and security compliance audits.',
    highlights: [
      'Architected transactional database schemas with automated indexing, reducing API response times by 68%',
      'Implemented robust role-based authentication and audit-logging systems for enterprise clients',
      'Mentored junior software engineers in TypeScript best practices, Git workflows, and test-driven development'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs']
  },
  {
    period: '2019 - 2021',
    role: 'Full-Stack Software Engineer',
    company: 'K-Tech Innovations',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    description:
      'Built custom web applications, client administrative dashboards, and database systems for local institutions and commercial businesses.',
    highlights: [
      'Delivered 15+ custom web applications with responsive mobile-first interfaces and high Lighthouse performance ratings',
      'Designed relational database models in PostgreSQL and MySQL ensuring strict referential integrity',
      'Engineered automated PDF invoice and report generators adopted across corporate client tools'
    ],
    technologies: ['JavaScript/TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Jean-Paul Habimana',
    role: 'Head of Administration',
    company: 'GS Mugina',
    avatarText: 'JH',
    quote:
      'Norbert transformed our entire school operations. The GS Mugina School System eliminated weeks of tedious gradebook calculations and brought total transparency to our fee collection and attendance. His attention to detail, reliability, and full-stack technical mastery are world-class.',
    projectRelation: 'GS Mugina School System Management'
  },
  {
    id: 't2',
    name: 'Aimable Mukamana',
    role: 'Director of Studies',
    company: 'ES Rutobwe',
    avatarText: 'AM',
    quote:
      'The timetable scheduling system and parent SMS alerts Norbert built for ES Rutobwe solved problems we struggled with for years. The platform is blazing fast, easy for our teachers to use, and has never experienced downtime during critical exam periods.',
    projectRelation: 'ES Rutobwe Academic System'
  },
  {
    id: 't3',
    name: 'Fabrice Ntwali',
    role: 'Operations Director',
    company: 'EjoHeja .ltd',
    avatarText: 'FN',
    quote:
      'Working with Norbert on the EjoHeja enterprise platform was a game changer for our business. He delivered a flawless ERP that seamlessly tracks our inventory, sales, and accounts with remarkable precision and speed.',
    projectRelation: 'EjoHeja .ltd Enterprise Management'
  }
];
