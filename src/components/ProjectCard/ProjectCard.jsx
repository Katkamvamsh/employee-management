import './ProjectCard.css'

function ProjectCard({ number, title, description, tags }) {
    return (
        <article className="project-card">
            <div className="project-visual"><span>{number}</span><span className="project-arrow" aria-hidden="true">-&gt;</span></div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
        </article>
    )
}

export default ProjectCard
