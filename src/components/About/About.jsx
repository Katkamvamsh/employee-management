import './About.css'

function About() {
    return (
        <section className="section about-section" id="about">
            <div className="section-label">01 / About</div>
            <div className="about-layout container">
                <h2>I care about the details that make a digital product feel like humans.</h2>
                <div className="about-copy">
                    <p>I&apos;m a placeholder for your short introduction. Share what you do, how you think, and the kind of work you want to be known for.</p>
                    <p>With a mix of design sensitivity and technical curiosity, I help ideas find their clearest shape on the web.</p>
                    <a className="text-link" href="#contact">Let&apos;s talk <span aria-hidden="true">-&gt;</span></a>
                </div>
            </div>
        </section>
    )
}

export default About
