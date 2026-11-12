/**
 * PROFILE DATA CONFIGURATION
 * -------------------------------------------------------------
 * Personalized for Mithun Krishna K - Security Engineer & Full Stack Dev
 * -------------------------------------------------------------
 */

const PROFILE_DATA = {
    // 1. Personal & Hero Information
    personal: {
        name: "Mithun Krishna K",
        preferredName: "Mithun",
        title: "Security Engineer",
        tagline: "Specializing in System Hardening, AI Reverse Engineering & Scalable Web Architectures",
        summary: "Security Engineer and Full Stack Developer with 2+ years of hands-on experience in vulnerability assessment, AI model reverse engineering, and architecting resilient full-stack systems. Proven track record with 3 hackathon victories, 10+ completed projects, and a passion for impenetrable systems.",
        status: {
            available: true,
            text: "Available for Security & Engineering Roles",
            type: "Full-time / High-Impact Projects"
        },
        roles: [
            "Full Stack Dev",
            "Security Engineer",
            "AI Reverse Engineer",
            "Vulnerability Researcher"
        ],
        location: "Bengaluru, Karnataka, India",
        timezone: "Asia/Kolkata (IST • UTC+5:30)",
        email: "mithunkrishnakbtech25@rvu.edu.in",
        phone: "+91 523567420",
        avatar: "assets/images/avatar.svg", // Minimalist blank security terminal avatar
        resumePdfUrl: "#",
        social: {
            github: "",   // Kept blank as requested
            linkedin: "", // Kept blank as requested
            twitter: "",  // Kept blank as requested
            discord: ""
        }
    },

    // 2. Metrics & Numbers (Ribbon & Cards)
    stats: [
        { label: "Years Experience", value: "2+", icon: "code" },
        { label: "Projects Completed", value: "10+", icon: "layers" },
        { label: "Code Commits", value: "1,000+", icon: "git-commit" },
        { label: "Hackathons Won", value: "3 🏆", icon: "award" }
    ],

    // 3. About Section Bio & Core Pillars
    about: {
        heading: "Deconstructing Complex Systems, Securing Architectures, and Engineering Resilient Software.",
        paragraphs: [
            "Hello! I am a Security Engineer and Full Stack Developer based in Bengaluru, Karnataka, India. I operate at the vital intersection of defensive engineering, software development, and AI reverse engineering — analyzing model vulnerabilities, testing attack surfaces, and developing secure, high-performance web applications.",
            "With 2+ years of active development experience, 1,000+ code commits, and 3 hackathon victories under my belt, I bridge low-level algorithmic problem solving in C/C++, Java, and Python with modern reactive web stacks like React, Next.js, Vue, Node.js, and FastAPI. Whether it is uncovering edge-case vulnerabilities, reverse-engineering AI systems, or architecting reliable databases with PostgreSQL, MongoDB, and Redis, I focus on delivering robust and dependable solutions that clients trust."
        ],
        corePillars: [
            {
                title: "AI Reverse Engineering",
                description: "Probing model pipelines, mitigating adversarial prompts, analyzing weights and data flows, and defending against model inversion."
            },
            {
                title: "Security & Threat Mitigation",
                description: "Performing in-depth vulnerability assessments, API hardening, cryptographic security, and secure authorization flows."
            },
            {
                title: "Full-Stack Development",
                description: "Engineering responsive web interfaces with React, Next.js, and Vue, powered by high-throughput FastAPI and Node.js backends."
            },
            {
                title: "Algorithmic Precision",
                description: "Deep foundation in systems programming, data structures, and memory efficiency across C/C++, Java, and Python."
            }
        ]
    },

    // 4. Skills & Tech Stack
    skills: {
        categories: [
            { id: "all", label: "All Skills" },
            { id: "languages", label: "Languages" },
            { id: "frontend", label: "Frontend & UI" },
            { id: "backend", label: "Backend & Security" },
            { id: "database", label: "Databases & Cloud" }
        ],
        items: [
            // Languages
            { name: "C / C++", category: "languages", level: 90, icon: "cpp", tag: "Systems & Security" },
            { name: "Python", category: "languages", level: 95, icon: "py", tag: "AI & Scripting" },
            { name: "Java", category: "languages", level: 85, icon: "java", tag: "OOP & Enterprise" },
            { name: "JavaScript (ES6+)", category: "languages", level: 92, icon: "js", tag: "Web Core" },
            { name: "CSS / Modern CSS3", category: "languages", level: 90, icon: "css", tag: "Styling & Responsive" },

            // Frontend
            { name: "React.js", category: "frontend", level: 92, icon: "react", tag: "UI Framework" },
            { name: "Next.js", category: "frontend", level: 88, icon: "next", tag: "SSR & Fullstack" },
            { name: "Vue.js", category: "frontend", level: 82, icon: "vue", tag: "Reactive Framework" },
            { name: "CSS Architecture & UI", category: "frontend", level: 90, icon: "css", tag: "Design & Layouts" },

            // Backend & Security
            { name: "Node.js", category: "backend", level: 90, icon: "node", tag: "Runtime" },
            { name: "Express.js", category: "backend", level: 88, icon: "exp", tag: "Web Framework" },
            { name: "FastAPI", category: "backend", level: 92, icon: "api", tag: "Async Python" },
            { name: "AI Reverse Engineering", category: "backend", level: 88, icon: "ai", tag: "Model Security" },
            { name: "Vulnerability Assessment", category: "backend", level: 86, icon: "sec", tag: "System Audits" },

            // Databases & Cloud
            { name: "PostgreSQL", category: "database", level: 88, icon: "sql", tag: "Relational DB" },
            { name: "MongoDB", category: "database", level: 86, icon: "mdb", tag: "NoSQL DB" },
            { name: "Redis", category: "database", level: 82, icon: "redis", tag: "In-Memory Cache" }
        ]
    },

    // 5. Featured Projects Showcase
    // Note: User requested to keep projects blank for now.
    // Setting to empty array so the UI renders a sleek "Under Active Staging / Updating" showcase card.
    projects: [],

    // 6. Experience Timeline
    experience: [
        {
            role: "Security Engineer & Full Stack Developer",
            company: "Independent Practice & Client Solutions",
            location: "Bengaluru, India",
            period: "2023 - Present (2 Years)",
            description: "Engineered secure web applications and conducted specialized AI reverse engineering and system hardening for technical projects.",
            achievements: [
                "Won 3 competitive hackathons by designing innovative, secure architectures under tight deadlines.",
                "Engineered responsive frontends using React, Next.js, and Vue paired with high-performance FastAPI and Node.js backends.",
                "Conducted vulnerability assessments and implemented resilient database layers with PostgreSQL, MongoDB, and Redis.",
                "Maintained 100% client satisfaction across 10+ completed software delivery milestones."
            ],
            skills: ["Python", "FastAPI", "React", "Next.js", "C/C++", "PostgreSQL", "Redis"]
        }
    ],

    // 7. Education & Credentials
    education: [
        {
            degree: "Bachelor of Technology (B.Tech)",
            institution: "RV University (RVU)",
            period: "Bengaluru, Karnataka, India",
            highlights: "Focused on Computer Science, Cyber Security, Systems Programming, and Applied AI."
        }
    ],
    certifications: [
        {
            title: "3x Hackathon Winner 🏆",
            issuer: "Collegiate & Tech Competitions",
            year: "2023 - 2024"
        },
        {
            title: "AI Reverse Engineering & Model Security Specialist",
            issuer: "Independent Research & Audits",
            year: "2024"
        }
    ],

    // 8. Services / Capabilities
    services: [
        {
            id: "security",
            title: "System & AI Reverse Engineering",
            description: "Specialized analysis of machine learning models, API defense, vulnerability discovery, and robust hardening against zero-day exploits.",
            icon: "shield",
            deliverables: ["AI Model Auditing & Defense", "Penetration Testing & Threat Modeling", "Secure Authentication Architecture"]
        },
        {
            id: "fullstack",
            title: "Full-Stack Web Development",
            description: "End-to-end development of dynamic, lightning-fast web applications using React, Next.js, Vue, Node.js, and FastAPI.",
            icon: "code",
            deliverables: ["Modern Responsive Frontends", "Fast RESTful APIs with FastAPI/Express", "Database Modeling (PostgreSQL, Mongo, Redis)"]
        },
        {
            id: "systems",
            title: "High-Performance Systems & Scripting",
            description: "Developing memory-efficient, low-level modules and automated analysis scripts in C/C++, Java, and Python.",
            icon: "server",
            deliverables: ["Low-Level C/C++ Optimization", "Automated Security Scripts in Python", "Concurrency & Cache Tuning with Redis"]
        },
        {
            id: "consulting",
            title: "Security Auditing & Client Advisory",
            description: "Reviewing codebases for vulnerabilities, ensuring best practices, and helping technical teams ship secure software on schedule.",
            icon: "zap",
            deliverables: ["Code Security Reviews", "Architecture Hardening", "100% Client-Focused Communication"]
        }
    ],

    // 9. Testimonials / Accolades
    testimonials: [
        {
            quote: "Mithun's deep understanding of security vulnerabilities paired with his rapid full-stack execution was a game changer for our project. 3 hackathon wins are definitely not an accident!",
            name: "Hackathon Jury & Mentors",
            title: "Technical Review Board",
            company: "Tech Innovation League"
        },
        {
            quote: "Working with Mithun was seamless. Clear communication, top-tier code quality, and proactive security suggestions that saved us weeks of future refactoring.",
            name: "Verified Client Collaborator",
            title: "Product Lead",
            company: "Bengaluru Tech Ecosystem"
        }
    ]
};

// Export to window
if (typeof window !== "undefined") {
    window.PROFILE_DATA = PROFILE_DATA;
}
