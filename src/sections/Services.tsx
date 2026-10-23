import { services } from "../assets/mockData/mockData";
import PageIntro from "../components/PageIntro";
import RevealCardBody from "../components/RevealCardBody";
import SiteImage from "../components/SiteImage";

const Services = () => (
  <>
    <PageIntro
      eyebrow="Capabilities"
      title="Expertise that turns complexity into momentum."
      description="Bring us a hard problem, a bold opportunity, or a product that needs to scale. We assemble the right mix of strategy, design, and engineering around the outcome."
      meta={`${services.length} capabilities`}
    />
    <section className="section container">
      <figure className="editorial-photo services-photo">
        <SiteImage
          image="engineering"
          alt="A software development workspace with code open on a laptop."
          sizes="(max-width: 680px) calc(100vw - 28px), (max-width: 1220px) calc(100vw - 40px), 1180px"
        />
        <figcaption>
          <span>From strategy to shipping</span>
          <strong>Thoughtful engineering.<br />Built around your business.</strong>
        </figcaption>
      </figure>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="card reveal-card service-card" key={service.title} tabIndex={0}>
            <span className="card-index">{String(index + 1).padStart(2, "0")} / {service.category}</span>
            <h3>{service.title}</h3>
            <RevealCardBody summary={service.description}>
              <ul className="capability-list">
                {service.items.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </RevealCardBody>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Services;
