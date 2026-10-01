import RevealCardBody from "../components/RevealCardBody";

const values = [
  {
    icon: "B",
    title: "Business First",
    copy: "Technology should always serve a real business purpose. We focus on solutions that create measurable value, improve operations, support growth, and solve meaningful problems.",
  },
  {
    icon: "U",
    title: "Understand Before Building",
    copy: "We listen before we recommend. By understanding your business, goals, challenges, customers, and existing systems, we can design solutions that truly fit your needs.",
  },
  {
    icon: "I",
    title: "Integrity Always",
    copy: "We believe in honest advice and transparent relationships. We recommend what is right for the client — even when that means choosing a simpler solution, using an existing tool, or doing less work ourselves.",
  },
  {
    icon: "L",
    title: "Long-Term Thinking",
    copy: "We build with the future in mind. Our goal is to create secure, scalable, maintainable solutions that continue to support your business as it grows, rather than quick fixes that become tomorrow’s problems.",
  },
  {
    icon: "D",
    title: "Deliver What We Promise",
    copy: "We take ownership of our commitments. From the first conversation through final delivery and beyond, we believe in clear communication, accountability, quality, and doing what we say we will do.",
  },
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
        <div><span className="eyebrow">Our Values</span><h2>BUILD</h2></div>
        <p>At The Software Consulting, we believe great technology starts with the right principles. Our work is guided by BUILD — a simple framework that reflects how we approach every client, project, and partnership.</p>
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
      <p className="values-closing">We do not believe in selling technology for the sake of technology. We believe in building the right solution for the right business problem.</p>
    </section>
  </>
);

export default About;
