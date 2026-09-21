const app = document.getElementById('app');

const member = {
    "name": "สรวิชญ์ สำเร็จงาน",
    "role": "UX-UI Design",
    "about": "Motivated Software Engineering student at Burapha University with interests in UI/UX Design, Front-end Development, Web Coding, and Web Application Development. Passionate about creating user-friendly digital experiences and continuously improving technical skills.",
    "contact": {
        "Phone": "080 3241353",
        "Email": "sorawit9845@gmail.com",
        "Address": "91/4 ต.ทับช้าง อ.สอยดาว จ.จันทบุรี"
    },
    "education": [
        { "title": "Software Engineering Student", "school": "Burapha University", "period": "2023 – Present", "detail": "Studying software development, data structures, algorithms, database systems, and web technologies." },
        { "title": "Secondary School", "school": "Wangsomboonwittayakom School" }
    ],
    "skills": [
        "HTML / CSS", "Java", "PHP / Laravel", "MySQL", "JavaScript", "Figma", "Git / GitHub", "React", "Bootstrap"
    ],
    "projects": [
        {
            "name": "MyOrderCheckBlacklist Web Application", "period": "2025 – 2026", "subtitle": "Check Blacklist", "description": "Website for checking the fraud blacklist of stores within the MyOder company network."
        },
        {
            "name": "Game Development : Rule of Survival (team)", "period": "2024 – 2025", "subtitle": "mysterious mission", "description": "Action game featuring stage progression and puzzle-solving elements along the way."
        },
        {
            "name": "Game Development : Slime Slayer", "period": "2023 – 2024", "subtitle": "scratch", "description": "Monster-hunting, stage-based game with a variety of levels that get progressively harder the further you go."
        }
    ],
    "interests": ["Coding", "UI/UX Design", "Technology"]
};

function renderProfile() {
    return `
        <section id="profile" class="container">
            <div class="section-header">
                <span>PROFILE</span>
                <h2>เกี่ยวกับสมาชิก</h2>
            </div>

            <div class="card">
                <h3>${member.name}</h3>

                <p style="margin-top: 10px;">
                    ${member.about}
                </p>

                <p style="margin-top: 15px;">
                    <strong>Role:</strong>
                    ${member.role}
                </p>
            </div>
        </section>
    `;
}

function renderEducation() {
    const education = member.education.map(item => `
        <article class="timeline-item">
            <div class="timeline-heading"><h3>${item.title}</h3>${item.period ? `<span>${item.period}</span>` : ''}</div>
            <p class="institution">${item.school}</p>
            ${item.detail ? `<p>${item.detail}</p>` : ''}
        </article>
    `).join('');
    return `<section id="education" class="container"><div class="section-header"><span>EDUCATION</span><h2>การศึกษา</h2></div><div class="card timeline">${education}</div></section>`;
}

function renderSkills() {
    const skills = member.skills
        .map(skill => `<span class="skill">${skill}</span>`)
        .join('');

    return `
        <section id="skills" class="container">
            <div class="section-header">
                <span>SKILLS</span>
                <h2>Skills & Technologies</h2>
            </div>

            <div class="card">
                <div class="skill-list">
                    ${skills}
                </div>
            </div>
        </section>
    `;
}

function renderProjects() {
    const projects = member.projects
        .map(project => `
            <article class="card project-card">
                <div class="project-heading"><h3>${project.name}</h3><span>${project.period}</span></div>
                <p class="project-subtitle">${project.subtitle}</p>
                <p>${project.description}</p>
            </article>
        `)
        .join('');

    return `
        <section id="projects" class="container">
            <div class="section-header">
                <span>PROJECTS</span>
                <h2>Projects</h2>
            </div>

            <div class="grid">
                ${projects}
            </div>
        </section>
    `;
}

function renderContact() {
    const contact = Object.entries(member.contact)
        .map(([type, value]) => `<li><strong>${type}:</strong> ${value}</li>`)
        .join('');

    return `
        <section id="contact" class="container">
            <div class="section-header">
                <span>CONTACT</span>
                <h2>ติดต่อ</h2>
            </div>

            <div class="card">
                <ul class="responsibility-list">
                    ${contact}
                </ul>
            </div>
        </section>
    `;
}

function renderInterests() {
    return `<section class="container interests-section"><div class="section-header"><span>INTERESTS</span><h2>ความสนใจ</h2></div><div class="card interest-list">${member.interests.map(item => `<span>${item}</span>`).join('')}</div></section>`;
}

function renderApp() {
    app.innerHTML = `
        ${renderProfile()}
        ${renderEducation()}
        ${renderSkills()}
        ${renderProjects()}
        ${renderContact()}
        ${renderInterests()}
    `;
}

renderApp();
