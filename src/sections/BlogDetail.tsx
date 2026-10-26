import { Link, useParams } from "react-router-dom";
import { blogPosts, businessEmail, getReadingMinutes } from "../content/blogPosts";
import NotFound from "./NotFound";

const BlogDetail = () => {
  const { blogSlug } = useParams();
  const post = blogPosts.find((item) => item.slug === blogSlug);

  if (!post) return <NotFound />;

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const emailLink = `mailto:${businessEmail}?subject=${encodeURIComponent(`Project inquiry: ${post.title}`)}`;

  return (
    <div className="container blog-page">
      <nav aria-label="Breadcrumb" className="blog-breadcrumb">
        <Link to="/insights">Insights</Link><span aria-hidden="true"> / </span><span>Blog</span>
      </nav>
      <article aria-labelledby="blog-title">
        <header className="blog-header">
          <span className="eyebrow">{post.topic}</span>
          <h1 id="blog-title">{post.title}</h1>
          <p className="blog-deck">{post.description}</p>
          <p className="blog-byline">By The Software Consulting <span aria-hidden="true">·</span> {getReadingMinutes(post)} min read</p>
        </header>
        <div className="blog-layout">
          <nav className="blog-toc" aria-label="In this article">
            <h2>In this article</h2>
            <ol>
              {post.sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`}>{section.title.replace(/^\d+\. /, "")}</a></li>
              ))}
            </ol>
          </nav>
          <div className="blog-prose">
            {post.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {post.sections.map((section) => (
              <section id={section.id} className="blog-section" aria-labelledby={`${section.id}-title`} key={section.id}>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.checklist && (
                  <div className="blog-checklist">
                    <h3>Your starting checklist</h3>
                    <ul>{section.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                )}
              </section>
            ))}
            <aside className="blog-contact" aria-labelledby="blog-contact-title">
              <span className="eyebrow">Let’s talk about your project</span>
              <h2 id="blog-contact-title">Turn the next step into a conversation.</h2>
              <p>{post.contactPrompt}</p>
              <p>Email us at <a href={emailLink}>{businessEmail}</a>.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={emailLink}>Email us <span aria-hidden="true">↗</span></a>
                <Link className="button" to="/contact">Use our contact form</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <section className="blog-related" aria-labelledby="related-title">
        <div className="section-header">
          <div><span className="eyebrow">Keep reading</span><h2 id="related-title">More practical perspectives.</h2></div>
          <Link className="section-link" to="/insights">All insights <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="insight-grid">
          {relatedPosts.map((related) => (
            <article className="card blog-card" key={related.slug}>
              <span className="insight-type">{related.topic}</span>
              <h3><Link to={`/insights/${related.slug}`}>{related.title}</Link></h3>
              <p>{related.description}</p>
              <Link className="section-link" to={`/insights/${related.slug}`} aria-label={`Read article: ${related.title}`}>
                Read article <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
