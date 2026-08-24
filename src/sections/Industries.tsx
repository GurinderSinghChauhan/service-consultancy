import { industriesData } from "../assets/mockData/mockData";
import PageIntro from "../components/PageIntro";

const Industries = () => (
  <>
    <PageIntro
      eyebrow="Industries"
      title="Deep context. Fresh perspective."
      description="Technology performs best when it understands the world around it. We pair domain fluency with cross-industry thinking to build solutions that fit how your business really works."
      meta={`${industriesData.length} sectors`}
    />
    <section className="section container">
      <div className="industry-grid">
        {industriesData.map((industry, index) => (
          <article className="card reveal-card industry-card" key={industry.name} tabIndex={0}>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{industry.name}</h3>
            <div className="card-preview" aria-hidden="true">
              <p>{industry.description}</p>
              <span className="reveal-prompt">Explore details <span aria-hidden="true">+</span></span>
            </div>
            <div className="card-details">
              <p>{industry.description}</p>
              <ul className="capability-list">
                {industry.capabilities.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Industries;
