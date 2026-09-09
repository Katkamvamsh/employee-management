import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content container">
        <p className="eyebrow reveal">Frontend developer / creative problem solver</p>
        <h1 className="reveal reveal-delay-one">
          I build digital<br /><em>experiences</em> that matter.
        </h1>
        <div className="hero-bottom reveal reveal-delay-two">
          <p>
            Hi, I&apos;m Your Name. I turn thoughtful ideas into clear, useful, and memorable web experiences.
          </p>
          <a className="text-link" href="#projects">
            See my work <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">01</div>
    </section>
  )
}

export default Hero
