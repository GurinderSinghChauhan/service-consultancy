import PageIntro from "../components/PageIntro";
import RevealCardBody from "../components/RevealCardBody";

const values = [
  { icon: "01", title: "Think in outcomes", copy: "We anchor decisions in the change they need to create—not deliverables for their own sake." },
  { icon: "02", title: "Make complexity clear", copy: "The best solutions feel simple because the hard thinking happened before implementation." },
  { icon: "03", title: "Build for the long run", copy: "Quality, security, maintainability, and knowledge transfer are part of the product from day one." },
];

const About = () => (
  <>
    <PageIntro
      eyebrow="About us"
      title="Small by design. Senior by default."
      description="We are a technology consultancy built for close collaboration, clear thinking, and high-accountability delivery."
      meta="Strategy · Design · Engineering"
    />
    <section className="section container about-split">
      <div><span className="eyebrow">Our point of view</span></div>
      <div className="about-copy">
        <p className="about-statement">Great software is a business advantage, not just a technical achievement.</p>
        <p>We work alongside founders, operators, and technology leaders to translate ambition into systems people trust and enjoy using.</p>
        <p>Our model stays intentionally direct: experienced people close to the work, short feedback loops, and decisions made with the full product lifecycle in view.</p>
      </div>
    </section>
    <section className="section container">
      <div className="section-header">
        <div><span className="eyebrow">Our principles</span><h2>How we show up.</h2></div>
        <p>Good partnerships are built on transparency, curiosity, and a shared standard for excellent work.</p>
      </div>
      <div className="value-grid">
        {values.map((value) => (
          <article className="card reveal-card value-card" key={value.title} tabIndex={0}>
            <span className="value-icon">{value.icon}</span>
            <h3>{value.title}</h3>
            <RevealCardBody summary={value.copy} />
          </article>
        ))}
      </div>
    </section>
  </>
);

export default About;
