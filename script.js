const content = {
    en: {
        name: "Juan Manuel Canovas",
        tagline: "IA & Automation Engineer | Co-Founder",
        aboutTitle: "About Me",
        aboutText: "A proactive and highly adaptable professional with strong problem-solving skills and a genuine passion for technology and software development. Currently in the second year of the TUDAI program at UNICEN, building a solid foundation in programming, algorithms, and modern development practices. Thrives in dynamic environments, excels in teamwork, and continuously seeks opportunities to expand technical expertise while contributing to impactful projects.",
        skillsTitle: "Skills",
        skills: [
            {
                icon: "fas fa-code",
                title: "Frontend Development",
                desc: "HTML, CSS, JavaScript, Bootstrap, Angular, TypeScript"
            },
            {
                icon: "fas fa-robot",
                title: "Automation & AI",
                desc: "N8N, Selenium, Multi-Agent Systems"
            },
            {
                icon: "fas fa-server",
                title: "Backend & Tools",
                desc: "Java, Git, REST APIs, Authentication (Auth0), DevOps (Deployment, Monitoring)"
            },
            {
                icon: "fas fa-users",
                title: "Soft Skills",
                desc: "Teamwork, Problem-Solving, Adaptability"
            }
        ],
        experienceTitle: "Experience",
        experience: [
            {
                title: "IA & Automation Engineer (Co-Founder)",
                company: "DSFP (Automation & AI Startup), 2024 - Present",
                desc: "Designed and developed advanced automations using N8N, integrating external APIs, webhooks, and scalable workflows to deliver value for clients. Implemented AI multi-agent systems for intelligent analysis, autonomous responses, and operational support. Created lead recovery bots, intelligent scheduling systems, and sophisticated automations with platforms like GoHighLevel for seamless data injection and synchronization. Developed React-based web applications to manage automation flows, including custom internal tools such as monthly commission dashboards for sales teams. Handled light DevOps responsibilities, including cloud deployment, monitoring, and maintenance for optimal system stability and availability. Managed REST API integrations, authentication flows, credential management, and basic security protocols across multiple systems."
            },
            {
                title: "Web App Development",
                company: "2024",
                desc: "Designed and developed a Budget Calculator web app for Digiseg using HTML, CSS, JavaScript, Bootstrap, MockAPI, and Auth0 for secure user authentication and data handling."
            }
        ],
        educationTitle: "Education",
        education: [
            "Associate Degree in Application Development (Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas), UNICEN, Present",
            "Angular Seminar, UNICEN, July 2024"
        ],
        startup: "Co-Founder of DSFP, an Automation & AI Startup focused on delivering scalable solutions for clients through advanced workflows and AI integrations.",
        langBtn: "Español"
    },
    es: {
        name: "Juan Manuel Canovas",
        tagline: "Ingeniero de IA y Automatización | Co-Fundador",
        aboutTitle: "Sobre Mí",
        aboutText: "Profesional proactivo y altamente adaptable con sólidas habilidades para resolver problemas y una genuina pasión por la tecnología y el desarrollo de software. Actualmente en el segundo año del programa TUDAI en UNICEN, fortaleciendo mis bases en programación, algoritmos y prácticas de desarrollo modernas. Prosperan en entornos dinámicos, destacan en el trabajo en equipo y buscan constantemente oportunidades para expandir mis habilidades técnicas mientras contribuyen a proyectos impactantes.",
        skillsTitle: "Habilidades",
        skills: [
            {
                icon: "fas fa-code",
                title: "Desarrollo Frontend",
                desc: "HTML, CSS, JavaScript, Bootstrap, Angular, TypeScript"
            },
            {
                icon: "fas fa-robot",
                title: "Automatización e IA",
                desc: "N8N, Selenium, Sistemas Multi-Agente"
            },
            {
                icon: "fas fa-server",
                title: "Backend y Herramientas",
                desc: "Java, Git, APIs REST, Autenticación (Auth0), DevOps (Despliegue, Monitoreo)"
            },
            {
                icon: "fas fa-users",
                title: "Habilidades Blandas",
                desc: "Trabajo en Equipo, Resolución de Problemas, Adaptabilidad"
            }
        ],
        experienceTitle: "Experiencia",
        experience: [
            {
                title: "Ingeniero de IA y Automatización (Co-Fundador)",
                company: "DSFP (Startup de Automatización e IA), 2024 - Presente",
                desc: "Diseñé y desarrollé automatizaciones avanzadas utilizando N8N, integrando APIs externas, webhooks y flujos de trabajo escalables para ofrecer valor a los clientes. Implementé sistemas multi-agente de IA para análisis inteligente, respuestas autónomas y soporte operativo. Creé bots de recuperación de leads, sistemas de programación inteligente y automatizaciones sofisticadas con plataformas como GoHighLevel para inyección y sincronización de datos sin problemas. Desarrollé aplicaciones web basadas en React para gestionar flujos de automatización, incluyendo herramientas internas personalizadas como dashboards de comisiones mensuales para equipos de ventas. Maneje responsabilidades ligeras de DevOps, incluyendo despliegue en la nube, monitoreo y mantenimiento para una estabilidad y disponibilidad óptimas del sistema. Gestioné integraciones de APIs REST, flujos de autenticación, gestión de credenciales y protocolos de seguridad básicos en múltiples sistemas."
            },
            {
                title: "Desarrollo de Aplicaciones Web",
                company: "2024",
                desc: "Diseñé y desarrollé una aplicación web Calculadora de Presupuestos para Digiseg utilizando HTML, CSS, JavaScript, Bootstrap, MockAPI y Auth0 para autenticación segura de usuarios y manejo de datos."
            }
        ],
        educationTitle: "Educación",
        education: [
            "Técnico Universitario en Desarrollo de Aplicaciones Informáticas, UNICEN, Presente",
            "Seminario de Angular, UNICEN, Julio 2024"
        ],
        startup: "Co-Fundador de DSFP, una startup de Automatización e IA enfocada en ofrecer soluciones escalables para clientes a través de flujos de trabajo avanzados e integraciones de IA.",
        langBtn: "English"
    }
};

let currentLang = 'en';

document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateContent();
});

function updateContent() {
    const lang = content[currentLang];
    document.getElementById('name').textContent = lang.name;
    document.getElementById('tagline').textContent = lang.tagline;
    document.getElementById('about-title').textContent = lang.aboutTitle;
    document.getElementById('about-text').textContent = lang.aboutText;
    document.getElementById('skills-title').textContent = lang.skillsTitle;
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';
    lang.skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `<i class="${skill.icon}"></i><h3>${skill.title}</h3><p>${skill.desc}</p>`;
        skillsGrid.appendChild(card);
    });
    document.getElementById('experience-title').textContent = lang.experienceTitle;
    const expContent = document.getElementById('experience-content');
    expContent.innerHTML = '';
    lang.experience.forEach(job => {
        const div = document.createElement('div');
        div.className = 'job';
        div.innerHTML = `<h3>${job.title}</h3><p class="job-company">${job.company}</p><p>${job.desc}</p>`;
        expContent.appendChild(div);
    });
    document.getElementById('education-title').textContent = lang.educationTitle;
    const eduList = document.getElementById('education-list');
    eduList.innerHTML = '';
    lang.education.forEach(edu => {
        const li = document.createElement('li');
        li.textContent = edu;
        eduList.appendChild(li);
    });
    document.getElementById('startup').textContent = lang.startup;
    document.getElementById('lang-btn').textContent = lang.langBtn;
}

updateContent();