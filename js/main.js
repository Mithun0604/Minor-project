/**
 * ECHO PORTFOLIO - Core Controller & Dynamic Renderer
 * Handles rendering from PROFILE_DATA, interactions, filtering, modals, and audio feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    const data = window.PROFILE_DATA;
    if (!data) {
        console.error('PROFILE_DATA not found. Please ensure data.js is loaded.');
        return;
    }

    // --- Audio Feedback Engine (Web Audio API) ---
    let soundEnabled = false;
    let audioCtx = null;

    function playBeep(freq = 600, duration = 0.05, type = 'sine') {
        if (!soundEnabled) return;
        try {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Audio policy handling
        }
    }

    const soundToggleBtn = document.getElementById('sound-toggle-btn');
    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            soundToggleBtn.classList.toggle('active', soundEnabled);
            soundToggleBtn.setAttribute('title', soundEnabled ? 'Sound Effects: ON' : 'Sound Effects: OFF');
            soundToggleBtn.innerHTML = soundEnabled ? getIconSvg('volume-2') : getIconSvg('volume-x');
            showToast(soundEnabled ? '🔊 Sound effects enabled' : '🔇 Sound effects muted');
            if (soundEnabled) playBeep(880, 0.08);
        });
    }

    // Attach click beeps to interactive buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('button, .btn, .filter-tab, .nav-link, .social-link')) {
            playBeep(700, 0.04);
        }
    });

    // --- Dynamic Content Injection ---
    // 1. Personal & Hero
    document.querySelectorAll('[data-bind="name"]').forEach(el => el.textContent = data.personal.name);
    document.querySelectorAll('[data-bind="title"]').forEach(el => el.textContent = data.personal.title);
    document.querySelectorAll('[data-bind="tagline"]').forEach(el => el.textContent = data.personal.tagline);
    document.querySelectorAll('[data-bind="summary"]').forEach(el => el.textContent = data.personal.summary);
    document.querySelectorAll('[data-bind="location"]').forEach(el => el.textContent = data.personal.location);
    document.querySelectorAll('[data-bind="email"]').forEach(el => {
        el.textContent = data.personal.email;
        if (el.tagName === 'A') el.href = `mailto:${data.personal.email}`;
    });
    document.querySelectorAll('[data-bind="phone"]').forEach(el => {
        el.textContent = data.personal.phone;
        if (el.tagName === 'A') el.href = `tel:${data.personal.phone.replace(/\s+/g, '')}`;
    });

    const statusPillText = document.querySelector('[data-bind="status-text"]');
    if (statusPillText) statusPillText.textContent = data.personal.status.text;

    // Social Links
    const socialsContainer = document.querySelector('.hero-socials');
    let hasAnySocial = false;
    if (data.personal.social) {
        ['github', 'linkedin', 'twitter'].forEach(network => {
            const el = document.querySelector(`[data-social="${network}"]`);
            if (el) {
                if (data.personal.social[network] && data.personal.social[network].trim() !== '') {
                    el.href = data.personal.social[network];
                    el.style.display = 'inline-flex';
                    hasAnySocial = true;
                } else {
                    el.style.display = 'none';
                }
            }
        });
    }
    if (!hasAnySocial && socialsContainer) {
        socialsContainer.style.display = 'none';
    }

    // Role Rotator / Typewriter
    initTypewriter(data.personal.roles);

    // 2. Metrics & Stats Ribbon
    renderStats(data.stats);

    // 3. About Section Narrative & Pillars
    renderAbout(data.about);

    // 4. Skills & Filter Tabs
    renderSkills(data.skills);

    // 5. Featured Projects
    renderProjects(data.projects);

    // 6. Timeline (Experience & Education)
    renderTimeline(data.experience, data.education, data.certifications);

    // 7. Services
    renderServices(data.services);

    // 8. Testimonials
    renderTestimonials(data.testimonials);

    // 9. Time Ticker
    startTimeTicker();

    // 10. Navigation & Mobile Menu
    initNavigation();

    // 11. Modals & Contact Form
    initModals(data);
    initContactForm(data.personal.email);
});

/* ==========================================================================
   ROLE ROTATOR / TYPEWRITER
   ========================================================================== */
function initTypewriter(roles) {
    const roleElem = document.getElementById('hero-role-text');
    if (!roleElem || !roles || !roles.length) return;

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            roleElem.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typeSpeed = 45;
        } else {
            roleElem.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typeSpeed = 90;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            typeSpeed = 1800; // Pause at end of word
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typeSpeed = 400; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */
function renderStats(stats) {
    const container = document.getElementById('stats-grid');
    if (!container || !stats) return;

    container.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-icon">
                ${getIconSvg(stat.icon)}
            </div>
            <div>
                <div class="stat-value text-gradient">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        </div>
    `).join('');
}

function renderAbout(about) {
    if (!about) return;

    const headingElem = document.getElementById('about-heading');
    if (headingElem) headingElem.textContent = about.heading;

    const paragraphsElem = document.getElementById('about-paragraphs');
    if (paragraphsElem) {
        paragraphsElem.innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    const pillarsContainer = document.getElementById('about-pillars-grid');
    if (pillarsContainer && about.corePillars) {
        pillarsContainer.innerHTML = about.corePillars.map(pillar => `
            <div class="pillar-card">
                <div class="pillar-icon">${getIconSvg('sparkles')}</div>
                <div class="pillar-title">${pillar.title}</div>
                <div class="pillar-desc">${pillar.description}</div>
            </div>
        `).join('');
    }
}

function renderSkills(skillsData) {
    const tabsContainer = document.getElementById('skills-tabs');
    const gridContainer = document.getElementById('skills-grid');
    if (!gridContainer || !skillsData) return;

    // Render filter tabs
    if (tabsContainer) {
        tabsContainer.innerHTML = skillsData.categories.map((cat, idx) => `
            <button class="filter-tab ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
                ${cat.label}
            </button>
        `).join('');

        tabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                tabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterSkillCards(tab.getAttribute('data-category'));
            });
        });
    }

    // Render cards
    renderSkillCards(skillsData.items);
}

function renderSkillCards(items) {
    const gridContainer = document.getElementById('skills-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = items.map(skill => `
        <div class="skill-card" data-category="${skill.category}">
            <div class="skill-card-top">
                <div class="skill-info">
                    <div class="skill-icon-wrap">${getSkillIcon(skill.icon)}</div>
                    <div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-tag">${skill.tag}</div>
                    </div>
                </div>
                <div class="skill-pct">${skill.level}%</div>
            </div>
            <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
            </div>
        </div>
    `).join('');
}

function filterSkillCards(category) {
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function renderProjects(projects) {
    const gridContainer = document.getElementById('projects-grid');
    const tabsContainer = document.getElementById('projects-tabs');
    if (!gridContainer || !projects) return;

    // Handle empty projects gracefully
    if (projects.length === 0) {
        if (tabsContainer) tabsContainer.style.display = 'none';
        gridContainer.innerHTML = `
            <div class="stat-card" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 3.5rem 2rem; border: 1px dashed rgba(56, 189, 248, 0.35); background: rgba(14, 17, 26, 0.65); border-radius: var(--radius-lg);">
                <div style="width: 56px; height: 56px; border-radius: 16px; background: rgba(56, 189, 248, 0.12); color: var(--accent-sky); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div class="project-badge-tag" style="position: static; margin-bottom: 0.85rem;">
                    PROJECT SHOWCASE IN PROGRESS
                </div>
                <h3 class="text-gradient" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.6rem;">
                    10+ Projects Currently Being Documented & Staged
                </h3>
                <p style="color: var(--text-secondary); max-width: 600px; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
                    Full-stack web applications, AI reverse engineering prototypes, and system security tools are currently being packaged for public release. Case studies and live interactive demos will be available here soon.
                </p>
                <a href="#contact" class="btn btn-secondary btn-sm">
                    Inquire for Private Demos & Code Samples →
                </a>
            </div>
        `;
        return;
    }

    if (tabsContainer) tabsContainer.style.display = 'flex';

    // Filter tabs
    if (tabsContainer) {
        tabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                tabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const cat = tab.getAttribute('data-project-category');
                filterProjects(cat);
            });
        });
    }

    gridContainer.innerHTML = projects.map(proj => `
        <div class="project-card" data-category="${proj.category}" data-project-id="${proj.id}">
            <div class="project-preview">
                <div class="project-badge-tag">${proj.badge || 'Project'}</div>
                <div class="project-preview-mockup">
                    <div class="mockup-header">
                        <span class="mockup-dot" style="background:#ef4444;"></span>
                        <span class="mockup-dot" style="background:#f59e0b;"></span>
                        <span class="mockup-dot" style="background:#10b981;"></span>
                    </div>
                    <div class="mockup-body">
                        <div class="mockup-line" style="width: 55%; background: rgba(56, 189, 248, 0.4);"></div>
                        <div class="mockup-line" style="width: 80%;"></div>
                        <div class="mockup-line" style="width: 40%;"></div>
                        <div class="mockup-line" style="width: 65%; margin-top: auto;"></div>
                    </div>
                </div>
            </div>

            <div class="project-body">
                <h3 class="project-title text-gradient">${proj.title}</h3>
                <p class="project-subtitle">${proj.subtitle}</p>

                <div class="project-tags">
                    ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>

                <div class="project-actions">
                    <button class="btn btn-secondary btn-sm open-project-modal" data-id="${proj.id}">
                        ${getIconSvg('info')} Quick View
                    </button>
                    ${proj.liveUrl ? `
                        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                            ${getIconSvg('external-link')} Demo
                        </a>
                    ` : ''}
                    ${proj.githubUrl ? `
                        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Source">
                            ${getIconSvg('github')}
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Attach click events for project modal
    document.querySelectorAll('.open-project-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const projId = btn.getAttribute('data-id');
            const project = projects.find(p => p.id === projId);
            if (project) openProjectModal(project);
        });
    });
}

function filterProjects(cat) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function renderTimeline(experience, education, certifications) {
    const expContainer = document.getElementById('experience-timeline');
    if (expContainer && experience) {
        expContainer.innerHTML = experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-header">
                        <h4 class="timeline-role">${exp.role}</h4>
                        <span class="timeline-period">${exp.period}</span>
                    </div>
                    <div class="timeline-company">${exp.company} • ${exp.location}</div>
                    <p class="timeline-desc">${exp.description}</p>
                    <ul class="timeline-achievements">
                        ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                    <div class="timeline-skills">
                        ${exp.skills.map(s => `<span class="timeline-skill-pill">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    const eduContainer = document.getElementById('education-cards');
    if (eduContainer && education) {
        eduContainer.innerHTML = education.map(edu => `
            <div class="edu-card">
                <h4 class="edu-degree">${edu.degree}</h4>
                <div class="edu-inst">${edu.institution} (${edu.period})</div>
                <p class="timeline-desc">${edu.highlights}</p>
            </div>
        `).join('');
    }

    const certContainer = document.getElementById('certifications-cards');
    if (certContainer && certifications) {
        certContainer.innerHTML = certifications.map(cert => `
            <div class="cert-card">
                <div style="font-weight:700; color:var(--text-primary);">${cert.title}</div>
                <div style="font-size:0.85rem; color:var(--accent-sky);">${cert.issuer} • ${cert.year}</div>
            </div>
        `).join('');
    }
}

function renderServices(services) {
    const container = document.getElementById('services-grid');
    if (!container || !services) return;

    container.innerHTML = services.map(s => `
        <div class="service-card">
            <div class="service-icon-box">
                ${getIconSvg(s.icon)}
            </div>
            <h3 class="service-title">${s.title}</h3>
            <p class="service-desc">${s.description}</p>
            <ul class="service-deliverables">
                ${s.deliverables.map(d => `<li><span style="color:var(--accent-sky);">✓</span> ${d}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderTestimonials(testimonials) {
    const container = document.getElementById('testimonials-grid');
    if (!container || !testimonials) return;

    container.innerHTML = testimonials.map(t => `
        <div class="stat-card" style="display:block; padding:1.75rem;">
            <p style="font-style:italic; color:var(--text-secondary); margin-bottom:1rem; line-height:1.6;">
                "${t.quote}"
            </p>
            <div>
                <div style="font-weight:700; color:var(--text-primary);">${t.name}</div>
                <div style="font-size:0.82rem; color:var(--accent-sky);">${t.title}, ${t.company}</div>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   TIME TICKER & NAVIGATION
   ========================================================================== */
function startTimeTicker() {
    const timeElem = document.getElementById('local-time');
    if (!timeElem) return;

    function update() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        timeElem.innerHTML = `● IST: ${timeStr} • Available`;
    }

    update();
    setInterval(update, 1000);
}

function initNavigation() {
    const navbar = document.querySelector('.navbar-wrapper');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-menu-drawer');

    // Sticky shadow
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.top = '0.5rem';
        } else {
            navbar.style.top = '1rem';
        }
    });

    // Mobile menu toggle
    if (mobileBtn && drawer) {
        mobileBtn.addEventListener('click', () => {
            drawer.classList.toggle('open');
            mobileBtn.innerHTML = drawer.classList.contains('open') ? getIconSvg('x') : getIconSvg('menu');
        });

        drawer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                drawer.classList.remove('open');
                mobileBtn.innerHTML = getIconSvg('menu');
            });
        });
    }

    // Scroll Spy
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) {
                current = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   MODALS (PROJECT & RESUME)
   ========================================================================== */
function initModals(data) {
    // Project modal close
    const projModal = document.getElementById('project-modal');
    if (projModal) {
        projModal.querySelector('.modal-close-btn').addEventListener('click', () => {
            projModal.classList.remove('open');
        });
        projModal.addEventListener('click', (e) => {
            if (e.target === projModal) projModal.classList.remove('open');
        });
    }

    // Resume Modal triggers
    const resumeModal = document.getElementById('resume-modal');
    document.querySelectorAll('.open-resume-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (resumeModal) {
                renderResumeModalContent(data);
                resumeModal.classList.add('open');
            }
        });
    });

    if (resumeModal) {
        resumeModal.querySelector('.modal-close-btn').addEventListener('click', () => {
            resumeModal.classList.remove('open');
        });
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) resumeModal.classList.remove('open');
        });
    }
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('project-modal-body');
    if (!modal || !body) return;

    body.innerHTML = `
        <div style="margin-bottom:1.5rem;">
            <div class="project-badge-tag" style="position:static; display:inline-block; margin-bottom:0.75rem;">
                ${project.badge || 'Project'}
            </div>
            <h2 class="text-gradient" style="font-size:1.85rem; font-weight:800; margin-bottom:0.5rem;">${project.title}</h2>
            <p style="color:var(--text-secondary); font-size:1rem;">${project.subtitle}</p>
        </div>

        <div style="margin-bottom:1.5rem; background:rgba(255,255,255,0.03); border:1px solid var(--border-color); border-radius:12px; padding:1.25rem;">
            <h4 style="color:var(--accent-sky); font-size:0.9rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.5rem;">
                Overview & Impact
            </h4>
            <p style="color:var(--text-primary); font-size:0.95rem; line-height:1.6;">${project.description}</p>
        </div>

        <div style="margin-bottom:1.5rem;">
            <h4 style="color:var(--text-primary); font-size:1rem; font-weight:700; margin-bottom:0.75rem;">
                Key Features & Engineering Highlights
            </h4>
            <ul style="list-style:none;">
                ${project.features.map(f => `
                    <li style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:0.4rem; padding-left:1.2rem; position:relative;">
                        <span style="position:absolute; left:0; color:var(--accent-sky);">▹</span> ${f}
                    </li>
                `).join('')}
            </ul>
        </div>

        ${project.architecture ? `
            <div style="margin-bottom:1.5rem; background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.25); border-radius:12px; padding:1rem;">
                <div style="font-weight:700; color:var(--accent-indigo); font-size:0.85rem; margin-bottom:0.3rem;">SYSTEM ARCHITECTURE</div>
                <div style="color:var(--text-secondary); font-size:0.88rem;">${project.architecture}</div>
            </div>
        ` : ''}

        <div style="margin-bottom:2rem;">
            <h4 style="color:var(--text-primary); font-size:0.9rem; font-weight:700; margin-bottom:0.5rem;">Technologies Used</h4>
            <div class="project-tags">
                ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
        </div>

        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            ${project.liveUrl ? `
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    ${getIconSvg('external-link')} Launch Live Application
                </a>
            ` : ''}
            ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    ${getIconSvg('github')} Source Code
                </a>
            ` : ''}
        </div>
    `;

    modal.classList.add('open');
}

function renderResumeModalContent(data) {
    const container = document.getElementById('resume-modal-body');
    if (!container) return;

    container.innerHTML = `
        <div style="text-align:center; margin-bottom:2rem; border-bottom:1px solid var(--border-color); padding-bottom:1.5rem;">
            <h2 class="text-gradient" style="font-size:2rem; font-weight:800;">${data.personal.name}</h2>
            <div style="color:var(--accent-sky); font-weight:600; margin-top:0.3rem;">${data.personal.title}</div>
            <div style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">
                ${data.personal.email} • ${data.personal.phone} • ${data.personal.location}
            </div>
        </div>

        <div style="margin-bottom:1.5rem;">
            <h3 style="color:var(--accent-indigo); font-size:1.1rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.6rem;">
                Professional Summary
            </h3>
            <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">${data.personal.summary}</p>
        </div>

        <div style="margin-bottom:1.5rem;">
            <h3 style="color:var(--accent-indigo); font-size:1.1rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.6rem;">
                Work Experience
            </h3>
            ${data.experience.map(exp => `
                <div style="margin-bottom:1rem;">
                    <div style="display:flex; justify-content:space-between; font-weight:700;">
                        <span>${exp.role}</span>
                        <span style="color:var(--accent-sky); font-family:var(--font-mono); font-size:0.85rem;">${exp.period}</span>
                    </div>
                    <div style="color:var(--text-muted); font-size:0.88rem; margin-bottom:0.3rem;">${exp.company} • ${exp.location}</div>
                    <ul style="list-style:disc; margin-left:1.2rem; color:var(--text-secondary); font-size:0.88rem;">
                        ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>

        <div style="margin-bottom:1.5rem;">
            <h3 style="color:var(--accent-indigo); font-size:1.1rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.6rem;">
                Education & Credentials
            </h3>
            ${data.education.map(edu => `
                <div style="margin-bottom:0.5rem;">
                    <div style="font-weight:700;">${edu.degree}</div>
                    <div style="color:var(--text-muted); font-size:0.85rem;">${edu.institution} • ${edu.period}</div>
                </div>
            `).join('')}
        </div>

        <div style="text-align:center; margin-top:2rem;">
            <button class="btn btn-primary" onclick="window.print()">
                ${getIconSvg('download')} Print / Save as PDF
            </button>
        </div>
    `;
}

/* ==========================================================================
   CONTACT FORM & CLIPBOARD COPY
   ========================================================================== */
function initContactForm(recipientEmail) {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const service = form.querySelector('[name="service"]').value;
        const message = form.querySelector('[name="message"]').value.trim();

        if (!name || !email || !message) {
            showToast('⚠️ Please fill in all required fields.');
            return;
        }

        // Generate mailto link as direct fallback
        const subject = encodeURIComponent(`Project Inquiry: ${service} from ${name}`);
        const body = encodeURIComponent(`Hello Mithun,\n\nMy name is ${name} (${email}).\nService Needed: ${service}\n\nMessage:\n${message}\n\nLooking forward to speaking with you!`);
        
        showToast('🚀 Opening your email client to send message...');
        setTimeout(() => {
            window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
            form.reset();
        }, 800);
    });

    // Copy email button
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(recipientEmail).then(() => {
                showToast('📋 Email copied to clipboard!');
                copyEmailBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyEmailBtn.textContent = 'Copy';
                }, 2000);
            }).catch(() => {
                showToast('Unable to copy automatically.');
            });
        });
    }
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(msg) {
    let toast = document.getElementById('toast-msg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-msg';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

/* ==========================================================================
   INLINE SVG ICON GENERATORS (Zero external network dependencies)
   ========================================================================== */
function getIconSvg(name) {
    const svgs = {
        'shield': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        'code': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        'layers': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        'git-commit': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line></svg>',
        'award': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
        'sparkles': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>',
        'server': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>',
        'zap': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
        'external-link': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
        'github': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
        'info': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
        'download': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
        'volume-2': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>',
        'volume-x': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>',
        'menu': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
        'x': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    };
    return svgs[name] || svgs['code'];
}

function getSkillIcon(icon) {
    return `<span style="font-family:var(--font-mono); font-size:0.8rem; font-weight:800; color:var(--accent-sky);">${icon.toUpperCase().slice(0, 3)}</span>`;
}
