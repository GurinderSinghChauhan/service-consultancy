import RevealCardBody from "../components/RevealCardBody";

const values = [
  { icon: "01", title: "Think in outcomes", copy: "We anchor decisions in the change they need to create—not deliverables for their own sake." },
  { icon: "02", title: "Make complexity clear", copy: "The best solutions feel simple because the hard thinking happened before implementation." },
  { icon: "03", title: "Build for the long run", copy: "Quality, security, maintainability, and knowledge transfer are part of the product from day one." },
];

const About = () => (
  <>
    <section className="section founder-section">
      <div className="container founder-grid">
        <header className="founder-profile">
          <span className="eyebrow">Meet the Founder</span>
          <div className="founder-monogram" aria-hidden="true">GC</div>
          <h2>Gurinder Singh Chauhan</h2>
          <p>Founder &amp; CEO, The Software Consulting</p>
        </header>
        <div className="founder-story">
          <p className="founder-lead">I’m a software and AI engineering leader with experience building technology across a wide range of business environments — from small startups and growing companies to large, multi-billion-dollar enterprises.</p>
          <p>I hold a Master of Science in Electrical Engineering from Loyola Marymount University, with a specialization in Artificial Intelligence, and bring more than 10 years of experience building software and technology solutions.</p>
          <p>Throughout my career, I’ve worked with organizations at very different stages of growth, which has given me a practical understanding of how technology needs change as a business scales. A startup may need speed, flexibility, and cost efficiency, while a large enterprise may require security, reliability, governance, scalability, and complex system integrations.</p>
          <p>My experience includes senior engineering roles across organizations working across artificial intelligence, machine learning, cloud infrastructure, software engineering, Kubernetes, APIs, automation, data platforms, and enterprise systems.</p>
          <p>I founded The Software Consulting to bring that experience to businesses of all sizes.</p>
          <p>Whether you are a small business looking to modernize your operations, a startup building your first product, or an established organization looking to improve or scale existing systems, we can bring together the right technical expertise to help turn your business requirements into working solutions.</p>
          <p>Our capabilities span custom software development, AI and automation, cloud infrastructure, mobile and web applications, Salesforce, CRM solutions, integrations, DevOps, data platforms, digital transformation, and more.</p>
          <p>Having worked across companies ranging from small startups to multi-billion-dollar enterprises, I understand that there is no single technology strategy that works for every business. The right solution should fit your company, your stage of growth, your budget, and your long-term goals.</p>
          <p>That philosophy is at the core of The Software Consulting: understand the business problem first, then build the right technology around it.</p>
          <p className="founder-closing">From idea to production, we help businesses build, automate, modernize, and scale.</p>
        </div>
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
