import { services } from "../assets/mockData/mockData";
import PageIntro from "../components/PageIntro";

const Services = () => (
  <>
    <PageIntro
      eyebrow="Capabilities"
      title="Expertise that turns complexity into momentum."
      description="Bring us a hard problem, a bold opportunity, or a product that needs to scale. We assemble the right mix of strategy, design, and engineering around the outcome."
      meta={`${services.length} capabilities`}
    />
    <section className="section container">
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="card reveal-card service-card" key={service.title} tabIndex={0}>
            <span className="card-index">{String(index + 1).padStart(2, "0")} / {service.category}</span>
            <h3>{service.title}</h3>
            <div className="card-preview" aria-hidden="true">
              <p>{service.description}</p>
              <span className="reveal-prompt">Explore details <span aria-hidden="true">+</span></span>
            </div>
            <div className="card-details">
              <p>{service.description}</p>
              <ul className="capability-list">
                {service.items.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Services;
