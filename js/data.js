/* Student portfolio content. Keep achievements factual and add evidence as work is completed. */
const PROFILE_DATA = {
    personal: {
        name: "Mithun Krishna K", preferredName: "Mithun",
        title: "B.Tech Cyber Security Student",
        tagline: "Second-year B.Tech student learning to build and secure digital systems.",
        summary: "I am a second-year B.Tech Cyber Security student developing a foundation in programming, networks and secure computing. I enjoy understanding how technology works and using what I learn to make digital systems safer.",
        status: { available: true, text: "Open to learning opportunities", type: "Student" },
        roles: ["Cyber Security Student", "Curious Learner", "Aspiring Security Professional"],
        location: "Bengaluru, India", timezone: "Asia/Kolkata (IST)",
        email: "mithunkrishnakbtech25@rvu.edu.in", phone: "",
        avatar: "assets/images/mithun-krishna.jpg", resumePdfUrl: "#",
        social: { github: "", linkedin: "", twitter: "", discord: "" }
    },
    stats: [
        { label: "Year of study", value: "02", icon: "code" },
        { label: "Learning focus", value: "Cyber Security", icon: "shield" },
        { label: "Current goal", value: "Build & Learn", icon: "sparkles" }
    ],
    about: {
        heading: "Learning how to make technology work—and how to make it safer.",
        paragraphs: [
            "I chose cyber security because every app, network and device depends on trust. I want to understand what happens behind the screen, how weaknesses arise, and how thoughtful design can reduce risk.",
            "I am currently building my fundamentals through coursework and hands-on practice. This portfolio is a record of that journey: what I am learning, the projects I complete, and the questions that keep me curious."
        ],
        corePillars: [
            { title: "Curiosity", description: "I like asking how systems work and following a problem until I understand it." },
            { title: "Consistency", description: "I am building strong foundations through regular study and practice." },
            { title: "Responsible security", description: "I believe security learning should respect privacy, permission and people." }
        ]
    },
    skills: {
        categories: [{ id: "all", label: "All Skills" }, { id: "languages", label: "Programming" }, { id: "backend", label: "Security Foundations" }, { id: "database", label: "Tools & Concepts" }],
        items: [
            { name: "Programming fundamentals", category: "languages", level: 45, icon: "code", tag: "Learning" },
            { name: "Python", category: "languages", level: 40, icon: "py", tag: "Learning" },
            { name: "Networking fundamentals", category: "backend", level: 35, icon: "net", tag: "Coursework" },
            { name: "Cyber security concepts", category: "backend", level: 35, icon: "sec", tag: "Coursework" },
            { name: "Linux fundamentals", category: "database", level: 30, icon: "linux", tag: "Learning" },
            { name: "HTML & CSS", category: "database", level: 40, icon: "web", tag: "Practice" }
        ]
    },
    projects: [],
    experience: [],
    education: [{ degree: "B.Tech in Cyber Security", institution: "RV University", period: "Currently in second year", highlights: "Building foundations in computing and cyber security." }],
    certifications: [],
    services: [],
    testimonials: []
};
if (typeof window !== "undefined") window.PROFILE_DATA = PROFILE_DATA;
