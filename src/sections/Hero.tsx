import { Link } from "react-router-dom";
import { industriesData, services } from "../assets/mockData/mockData";
import RevealCardBody from "../components/RevealCardBody";

const process = [
  { title: "Discover", copy: "Align on the opportunity, constraints, users, and measurable outcomes." },
  { title: "Design", copy: "Shape the experience and technical foundation before costly build decisions." },
  { title: "Deliver", copy: "Ship in focused increments with quality, security, and observability built in." },
  { title: "Evolve", copy: "Measure real-world performance, learn quickly, and scale what creates value." },
];

const Hero = () => (
  <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Independent technology partner</span>
          <h1>We build software that <em>moves business forward.</em></h1>
          <p>
            Strategy, product design, and engineering for teams solving complex problems. Senior thinking from first conversation to production.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">Contact us <span aria-hidden="true">↗</span></Link>
            <Link className="button" to="/products">Explore our work</Link>
          </div>
          <div className="hero-proof" aria-label="Company highlights">
            <div><strong>16+</strong><span>Capabilities</span></div>
            <div><strong>5+</strong><span>Years building</span></div>
            <div><strong>End-to-end</strong><span>Delivery partner</span></div>
          </div>
        </div>

        <div className="hero-visual reveal" aria-hidden="true">
          <div className="visual-orbit" />
          <div className="visual-core"><span>01</span></div>
          <span className="orbit-label one">Product strategy</span>
          <span className="orbit-label two">AI + engineering</span>
          <span className="orbit-label three">Built to scale</span>
        </div>
      </div>
    </section>

    <div className="industry-strip" aria-label="Selected industries">
      <div className="container industry-list">
        {industriesData.slice(0, 6).map((industry) => <span key={industry.name}>{industry.name}</span>)}
      </div>
    </div>

    <section className="section container">
      <div className="section-header">
        <div>
          <span className="eyebrow">What we do</span>
          <h2>From first idea to lasting impact.</h2>
        </div>
        <p>We combine business context, design craft, and deep engineering to turn difficult initiatives into dependable products.</p>
      </div>
      <div className="service-grid">
        {services.slice(0, 6).map((service, index) => (
          <article className="card reveal-card home-service-card" key={service.title} tabIndex={0}>
            <span className="card-index">0{index + 1}</span>
            <span className="card-arrow" aria-hidden="true">↗</span>
            <h3>{service.title}</h3>
            <RevealCardBody summary={service.description}>
              <ul className="capability-list">
                {service.items.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </RevealCardBody>
          </article>
        ))}
      </div>
      <div className="hero-actions">
        <Link className="section-link" to="/services">View all capabilities <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="section container">
      <div className="section-header">
        <div>
          <span className="eyebrow">How we work</span>
          <h2>Clarity at every stage.</h2>
        </div>
        <p>A pragmatic delivery rhythm designed to reduce risk, keep stakeholders aligned, and create momentum.</p>
      </div>
      <div className="process-grid">
        {process.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Hero;
