/**
 * PROFILE DATA CONFIGURATION
 * -------------------------------------------------------------
 * All content for your ECHO-style portfolio is managed here.
 * You can update these values directly or reply in chat with
 * your details, and they will be updated automatically!
 * -------------------------------------------------------------
 */

const PROFILE_DATA = {
    // 1. Personal & Hero Information
    personal: {
        name: "Mithun Krishna K",
        preferredName: "Mithun",
        title: "Full Stack Engineer & Creative Developer",
        tagline: "Crafting High-Performance Digital Experiences & Scalable Cloud Solutions",
        summary: "I build responsive, accessible, and high-velocity web applications with clean code architectures, modern design aesthetics, and scalable backend infrastructure.",
        status: {
            available: true,
            text: "Available for New Opportunities",
            type: "Full-time / Freelance"
        },
        roles: [
            "Full Stack Developer",
            "Creative Web Engineer",
            "UI/UX Technologist",
            "API & Cloud Architect"
        ],
        location: "India",
        timezone: "Asia/Kolkata (IST • UTC+5:30)",
        email: "mithunkrishna.dev@gmail.com",
        phone: "+91 98765 43210",
        avatar: "assets/images/avatar.svg", // SVG generated avatar
        resumePdfUrl: "#", // Link to resume PDF (or opens interactive modal)
        social: {
            github: "https://github.com/",
            linkedin: "https://linkedin.com/in/",
            twitter: "https://twitter.com/",
            instagram: "https://instagram.com/",
            discord: "https://discord.com/"
        }
    },

    // 2. Metrics & Numbers (Hero Ribbon & About Section)
    stats: [
        { label: "Years Experience", value: "3+", icon: "code" },
        { label: "Projects Completed", value: "20+", icon: "layers" },
        { label: "Code Commits", value: "1,400+", icon: "git-commit" },
        { label: "Client Satisfaction", value: "99%", icon: "award" }
    ],

    // 3. About Section Bio & Core Pillars
    about: {
        heading: "Obsessed with Crafting Fast, Intuitive, and Scalable Web Products.",
        paragraphs: [
            "Hello! I'm a developer who bridges the gap between engineering rigor and creative aesthetic design. Inspired by minimalist interfaces, smooth micro-interactions, and robust distributed systems, I create digital products that feel both effortless to use and solid under the hood.",
            "My experience covers everything from architecture design, responsive front-end development with reactive frameworks, to building resilient REST and GraphQL APIs backed by scalable databases."
        ],
        corePillars: [
            {
                title: "Architectural Precision",
                description: "Writing maintainable, modular, and type-safe code that scales gracefully as teams and traffic grow."
            },
            {
                title: "Performance First",
                description: "Targeting 95+ Google Lighthouse scores with sub-second page loads, asset optimizations, and lazy loading."
            },
            {
                title: "Human-Centric UX",
                description: "Delivering intuitive micro-interactions, seamless transitions, and accessible UI patterns for all users."
            },
            {
                title: "Continuous Evolution",
                description: "Relentlessly staying ahead with modern paradigms, AI-assisted tooling, and cloud-native practices."
            }
        ]
    },

    // 4. Skills & Tech Stack
    skills: {
        categories: [
            { id: "all", label: "All Skills" },
            { id: "frontend", label: "Frontend & UI" },
            { id: "backend", label: "Backend & APIs" },
            { id: "database", label: "Database & Cloud" },
            { id: "tools", label: "Tools & DevOps" }
        ],
        items: [
            // Frontend
            { name: "JavaScript (ES6+)", category: "frontend", level: 95, icon: "js", tag: "Core" },
            { name: "TypeScript", category: "frontend", level: 90, icon: "ts", tag: "Core" },
            { name: "React.js", category: "frontend", level: 92, icon: "react", tag: "Framework" },
            { name: "Next.js", category: "frontend", level: 88, icon: "nextjs", tag: "Fullstack" },
            { name: "Tailwind CSS", category: "frontend", level: 95, icon: "tailwind", tag: "Styling" },
            { name: "HTML5 & CSS3 / SCSS", category: "frontend", level: 98, icon: "html", tag: "Foundation" },
            { name: "Redux / Zustand", category: "frontend", level: 85, icon: "state", tag: "State Management" },
            { name: "Three.js / Canvas", category: "frontend", level: 75, icon: "cube", tag: "Creative Tech" },

            // Backend
            { name: "Node.js", category: "backend", level: 90, icon: "node", tag: "Runtime" },
            { name: "Express.js", category: "backend", level: 92, icon: "express", tag: "Framework" },
            { name: "Python", category: "backend", level: 82, icon: "python", tag: "Language" },
            { name: "RESTful APIs", category: "backend", level: 95, icon: "api", tag: "Architecture" },
            { name: "GraphQL", category: "backend", level: 78, icon: "graphql", tag: "API Query" },
            { name: "Authentication (JWT / OAuth)", category: "backend", level: 90, icon: "lock", tag: "Security" },

            // Database & Cloud
            { name: "MongoDB", category: "database", level: 88, icon: "mongodb", tag: "NoSQL" },
            { name: "PostgreSQL", category: "database", level: 84, icon: "postgres", tag: "SQL" },
            { name: "Firebase / Supabase", category: "database", level: 86, icon: "firebase", tag: "BaaS" },
            { name: "Redis", category: "database", level: 76, icon: "redis", tag: "Caching" },
            { name: "AWS (S3, EC2)", category: "database", level: 78, icon: "aws", tag: "Cloud" },

            // Tools & DevOps
            { name: "Git & GitHub", category: "tools", level: 94, icon: "git", tag: "VCS" },
            { name: "Docker", category: "tools", level: 80, icon: "docker", tag: "Containers" },
            { name: "CI / CD Pipelines", category: "tools", level: 78, icon: "pipeline", tag: "Automation" },
            { name: "Postman", category: "tools", level: 90, icon: "send", tag: "Testing" },
            { name: "Figma", category: "tools", level: 82, icon: "figma", tag: "Design" }
        ]
    },

    // 5. Featured Projects Showcase
    projects: [
        {
            id: "echo-saas",
            title: "PulseCore - Cloud Telemetry & Monitoring",
            subtitle: "Real-time distributed system dashboard with interactive metrics & alerting",
            category: "fullstack",
            tags: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS"],
            description: "A high-concurrency developer observability platform providing sub-millisecond metrics visualization, live websocket streaming, and anomaly detection.",
            features: [
                "Real-time streaming charts with dynamic time-window filtering",
                "Automated alerting engine with webhook and email triggers",
                "Role-based access control (RBAC) and audit log tracking",
                "Dark-mode first glassmorphic UI with high framerate rendering"
            ],
            architecture: "Microservices architecture with Node.js and Redis Pub/Sub backend, streaming to a Next.js client with Canvas rendering.",
            liveUrl: "https://example.com/demo",
            githubUrl: "https://github.com/",
            featured: true,
            gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
            badge: "Featured Product"
        },
        {
            id: "nexus-ai",
            title: "NexusAI - Context-Aware Research Assistant",
            subtitle: "Multi-document RAG workspace with intelligent semantic search",
            category: "ai",
            tags: ["Python", "FastAPI", "React", "Vector DB", "OpenAI"],
            description: "An AI-powered document intelligence system allowing users to query, summarize, and extract insights across multi-gigabyte technical documentation libraries.",
            features: [
                "Retrieval-Augmented Generation (RAG) with hybrid lexical & semantic search",
                "Interactive citation highlights linked directly to source paragraphs",
                "Streaming response generation with markdown and code syntax highlighting",
                "Secure multi-tenant data partitioning"
            ],
            architecture: "FastAPI server running LangChain pipelines with Qdrant vector database and React frontend.",
            liveUrl: "https://example.com/demo",
            githubUrl: "https://github.com/",
            featured: true,
            gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
            badge: "AI Application"
        },
        {
            id: "hyper-store",
            title: "Velocity - High-Conversion Headless Storefront",
            subtitle: "Next-gen e-commerce interface with sub-100ms page transitions",
            category: "frontend",
            tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL", "Zustand"],
            description: "A lightning-fast modern e-commerce platform built with edge computing, dynamic faceted filtering, instant cart synchronization, and Stripe checkout.",
            features: [
                "Optimistic UI updates for add-to-cart with zero perceptible latency",
                "Faceted search with real-time URL state preservation",
                "Full Stripe payment intent integration with secure webhooks",
                "Fully accessible, keyboard-navigable and screen-reader ready"
            ],
            architecture: "Next.js App Router deployed on Vercel Edge with PostgreSQL on Supabase.",
            liveUrl: "https://example.com/demo",
            githubUrl: "https://github.com/",
            featured: true,
            gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
            badge: "E-Commerce"
        },
        {
            id: "dev-terminal",
            title: "OmniCLI - Cross-Platform Developer Suite",
            subtitle: "Unified CLI tooling for rapid environment bootstrapping & deployment",
            category: "tools",
            tags: ["Node.js", "TypeScript", "Shell", "Docker API"],
            description: "A developer tool designed to spin up local dockerized microservice environments, seed databases with synthetic data, and manage deployments in one command.",
            features: [
                "Zero-config container orchestration for local development",
                "Integrated mock server with automated schema validation",
                "Interactive command palette with fuzzy search"
            ],
            architecture: "Standalone TypeScript package packaged as an executable CLI with automated binary distribution.",
            liveUrl: "https://example.com/demo",
            githubUrl: "https://github.com/",
            featured: false,
            gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
            badge: "Developer Tool"
        }
    ],

    // 6. Experience Timeline
    experience: [
        {
            role: "Full Stack Software Engineer",
            company: "TechNova Solutions",
            location: "Bengaluru, India (Hybrid)",
            period: "2023 - Present",
            description: "Led end-to-end engineering of customer-facing web platforms, reducing latency by 42% and increasing user retention through responsive architectures.",
            achievements: [
                "Designed and implemented high-throughput REST APIs handling 50k+ daily transactions.",
                "Engineered responsive UI design systems in React and Tailwind, standardizing 40+ modular components.",
                "Integrated continuous integration (CI/CD) pipelines with GitHub Actions, reducing deployment cycle times by 35%."
            ],
            skills: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
        },
        {
            role: "Frontend Developer / Intern",
            company: "Apex Digital Labs",
            location: "Remote",
            period: "2022 - 2023",
            description: "Collaborated in an agile squad to revamp internal enterprise dashboards and customer landing pages with modern motion design.",
            achievements: [
                "Migrated legacy jQuery applications to modular React, boosting page performance scores to 95+.",
                "Implemented interactive data visualizations using Chart.js and customized SVG animations.",
                "Authored comprehensive end-to-end Cypress and Jest test suites."
            ],
            skills: ["JavaScript", "React", "CSS3 / SCSS", "Jest", "Git"]
        }
    ],

    // 7. Education & Certifications
    education: [
        {
            degree: "Bachelor of Technology in Computer Science & Engineering",
            institution: "Institute of Engineering & Technology",
            period: "2019 - 2023",
            location: "India",
            highlights: "Graduated with First Class Distinction. Focus on Data Structures, Algorithms, Distributed Systems, and Web Technologies."
        }
    ],
    certifications: [
        {
            title: "AWS Certified Developer - Associate",
            issuer: "Amazon Web Services",
            year: "2024"
        },
        {
            title: "Meta Certified Frontend Developer Professional",
            issuer: "Meta / Coursera",
            year: "2023"
        }
    ],

    // 8. Services / What I Do
    services: [
        {
            id: "fullstack",
            title: "Full-Stack Web Engineering",
            description: "End-to-end development of dynamic, secure, and responsive web applications from database schemas to polish on the glass.",
            icon: "code",
            deliverables: ["Single Page Apps (SPAs)", "Server-Rendered Apps", "Clean Component Architecture"]
        },
        {
            id: "uiux",
            title: "Creative UI / Motion Engineering",
            description: "Translating brand identities into award-winning digital experiences featuring fluid micro-animations, glassmorphism, and responsive design.",
            icon: "sparkles",
            deliverables: ["Interactive Prototypes", "Design Systems", "Performance-Tuned Animations"]
        },
        {
            id: "api",
            title: "Scalable API & Backend Architecture",
            description: "Developing bulletproof RESTful & GraphQL endpoints, authentication workflows, caching layers, and database migrations.",
            icon: "server",
            deliverables: ["API Design & Documentation", "OAuth & JWT Security", "Database Query Optimization"]
        },
        {
            id: "optimization",
            title: "Performance & SEO Audits",
            description: "Auditing web performance, asset bottlenecks, Core Web Vitals, and accessibility (WCAG) to ensure maximum search ranking and conversions.",
            icon: "zap",
            deliverables: ["Core Web Vitals Boost", "Bundle Size Optimization", "Technical SEO Audits"]
        }
    ],

    // 9. Testimonials / Accolades
    testimonials: [
        {
            quote: "Mithun possesses a rare combination of strong visual sensibilities and deep backend engineering skills. His work on our real-time dashboard exceeded our expectations.",
            name: "Sarah Jenkins",
            title: "VP of Product",
            company: "CloudScale"
        },
        {
            quote: "Fast, reliable, and communicative. The clean structure of the code and the attention to subtle animations made all the difference in our product launch.",
            name: "David Miller",
            title: "Engineering Lead",
            company: "Nexus Innovations"
        }
    ]
};

// Export to window
if (typeof window !== "undefined") {
    window.PROFILE_DATA = PROFILE_DATA;
}
