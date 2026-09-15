import PageIntro from "../components/PageIntro";

const Contact = () => (
    <>
      <PageIntro
        eyebrow="Start a conversation"
        title="Tell us what you’re working on."
        description="Share the challenge, the opportunity, or simply where you need momentum. We’ll respond with a clear next step."
        meta="Replies within 1–2 business days"
      />
      <section className="section container contact-grid">
        <div className="contact-details">
          <div className="contact-detail"><span>Email</span><a href="mailto:gschauhan1991@gmail.com">gschauhan1991@gmail.com</a></div>
          <div className="contact-detail"><span>Phone</span><a href="tel:+13102591394">+1 310 259 1394</a></div>
          <div className="contact-detail"><span>Best for</span><strong>New products, modernization, AI, and technical strategy</strong></div>
        </div>
        <form className="contact-form" action="https://formsubmit.co/gschauhan1991@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New contact form message" />
          <input type="hidden" name="_template" value="table" />
          <div className="form-row">
            <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" maxLength={100} required /></div>
            <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} required /></div>
          </div>
          <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" maxLength={150} /></div>
          <div className="field"><label htmlFor="message">What can we help you build?</label><textarea id="message" name="message" minLength={20} maxLength={4000} required /></div>
          <button className="button button-primary" type="submit">Send message <span aria-hidden="true">↗</span></button>
          <p className="form-note">Your message will be sent securely to our team.</p>
        </form>
      </section>
    </>
);

export default Contact;
