```javascript
const app = document.getElementById('app');

/*
|--------------------------------------------------------------------------
| Member Data
|--------------------------------------------------------------------------
*/

const member = {
    name: 'อลงกรณ์ แก้วกลั่น',

    role: 'Software Engineering Student',

    about: `
        นักศึกษาสาขาวิศวกรรมซอฟต์แวร์
        สมาชิก Team 7 ของโครงการ 2HandToYou
    `,

    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Git',
        'GitHub',
        'Software Engineering'
    ],

    projects: [
        {
            name: '2HandToYou',
            description:
                'ระบบ Marketplace สำหรับซื้อขายสินค้ามือสองภายใต้โครงการของ Team 7'
        }
    ],

    responsibilities: [
        'พัฒนาและดูแลส่วนที่ได้รับมอบหมายของระบบ',
        'ทำงานร่วมกับสมาชิกใน Team 7',
        'ทดสอบและตรวจสอบระบบในส่วนที่รับผิดชอบ',
        'แก้ไข Bug และปรับปรุงระบบตาม Requirement',
        'จัดทำเอกสารและหลักฐานประกอบการพัฒนา'
    ]
};


/*
|--------------------------------------------------------------------------
| Render Profile
|--------------------------------------------------------------------------
*/

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


/*
|--------------------------------------------------------------------------
| Render Skills
|--------------------------------------------------------------------------
*/

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


/*
|--------------------------------------------------------------------------
| Render Projects
|--------------------------------------------------------------------------
*/

function renderProjects() {

    const projects = member.projects
        .map(project => `
            <article class="card project-card">

                <h3>
                    ${project.name}
                </h3>

                <p>
                    ${project.description}
                </p>

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


/*
|--------------------------------------------------------------------------
| Render Responsibilities
|--------------------------------------------------------------------------
*/

function renderResponsibilities() {

    const responsibilities = member.responsibilities
        .map(item => `
            <li>
                ${item}
            </li>
        `)
        .join('');

    return `
        <section id="responsibilities" class="container">

            <div class="section-header">
                <span>RESPONSIBILITIES</span>
                <h2>หน้าที่ในทีม</h2>
            </div>

            <div class="card">

                <ul class="responsibility-list">
                    ${responsibilities}
                </ul>

            </div>

        </section>
    `;
}


/*
|--------------------------------------------------------------------------
| Render Application
|--------------------------------------------------------------------------
*/

function renderApp() {

    app.innerHTML = `
        ${renderProfile()}
        ${renderSkills()}
        ${renderProjects()}
        ${renderResponsibilities()}
    `;
}


/*
|--------------------------------------------------------------------------
| Start Application
|--------------------------------------------------------------------------
*/

renderApp();
```
