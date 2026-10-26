import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { insightsData } from "../assets/mockData/mockData";
import { blogPosts, businessEmail, getReadingMinutes } from "../content/blogPosts";
import PageIntro from "../components/PageIntro";
import RevealCardBody from "../components/RevealCardBody";

const categories = ["All", "Blogs", "Case Studies"];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const insights = useMemo(
    () => activeCategory === "Blogs" ? [] : insightsData.filter((item) => item.title === "Case Studies"),
    [activeCategory],
  );

  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Ideas for building what comes next."
        description="Practical perspectives on product, engineering, AI, cloud, and the decisions that shape successful digital businesses."
        meta="Field notes & case studies"
      />
      <section className="section container">
        <div className="filter-row" aria-label="Filter insights">
          {categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category ? "filter-button active" : "filter-button"}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="insight-grid">
          {activeCategory !== "Case Studies" && blogPosts.map((post) => (
            <article className="card insight-card blog-card" key={post.slug}>
              <span className="insight-type">Blog · {post.topic}</span>
              <h2><Link to={`/insights/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.description}</p>
              <span className="blog-reading-time">{getReadingMinutes(post)} min read</span>
              <Link className="section-link" to={`/insights/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                Read article <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
          {insights.map((insight, index) => (
            <article className="card reveal-card insight-card" key={`${insight.title}-${insight.description}`} tabIndex={0}>
              <span className="insight-type">{insight.title} · {String(index + 1).padStart(2, "0")}</span>
              <h3>{insight.description}</h3>
              <RevealCardBody summary={insight.content} />
            </article>
          ))}
        </div>
        <aside className="blog-contact insights-contact" aria-labelledby="insights-contact-title">
          <span className="eyebrow">Put these ideas to work</span>
          <h2 id="insights-contact-title">Have a question about your next project?</h2>
          <p>Email The Software Consulting at <a href={`mailto:${businessEmail}`}>{businessEmail}</a> to discuss your goals, challenges, and where you need support.</p>
          <Link className="section-link" to="/contact">Tell us about your project <span aria-hidden="true">↗</span></Link>
        </aside>
      </section>
    </>
  );
};

export default Insights;
