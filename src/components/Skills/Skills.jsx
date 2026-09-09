import './Skills.css'

const skills = ['HTML & CSS', 'JavaScript', 'React', 'Responsive Design', 'Accessibility', 'Git & GitHub']

function Skills() {
    return (
        <section className="section skills-section" id="skills">
            <div className="section-label">02 / Skills</div>
            <div className="skills-layout container">
                <div>
                    <p className="eyebrow">Tools of the trade</p>
                    <h2>Curious by default.<br />Always learning.</h2>
                </div>
                <div className="skills-list">
                    {skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span>{skill}</div>)}
                </div>
            </div>
        </section>
    )
}

export default Skills
