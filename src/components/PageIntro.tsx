type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
};

const PageIntro = ({ eyebrow, title, description, meta }: PageIntroProps) => (
  <section className="page-intro container">
    <div className="page-intro-copy reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    {meta && <span className="page-meta">{meta}</span>}
  </section>
);

export default PageIntro;
