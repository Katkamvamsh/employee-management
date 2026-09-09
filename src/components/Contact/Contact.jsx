import './Contact.css'

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container contact-inner">
                <p className="eyebrow">03 / Contact</p>
                <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
                <a className="contact-email" href="mailto:hello@example.com">hello@example.com <span aria-hidden="true">-&gt;</span></a>
            </div>
        </section>
    )
}

export default Contact
