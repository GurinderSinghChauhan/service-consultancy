import { industries } from "../assets/industries";
import PageIntro from "../components/PageIntro";
import RevealCardBody from "../components/RevealCardBody";

const Industries = () => (
  <>
    <PageIntro
      eyebrow="Industries"
      title="Technology Solutions for Every Industry"
      description="At The Software Consulting, we help businesses across diverse industries overcome challenges, streamline operations, and accelerate growth through innovative technology. From small businesses and startups to large enterprises, we deliver custom software, AI, cloud solutions, automation, and digital services tailored to your industry's unique needs."
      meta={`${industries.length} industries`}
    />
    <section className="section container">
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <article className="card reveal-card industry-card" key={industry.name} tabIndex={0}>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{industry.name}</h3>
            <RevealCardBody summary={industry.description} />
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Industries;
