import { productsData } from "../assets/mockData/mockData";
import PageIntro from "../components/PageIntro";
import RevealCardBody from "../components/RevealCardBody";

const Products = () => (
  <>
    <PageIntro
      eyebrow="Products & work"
      title="Useful technology, shaped around real needs."
      description="A selection of platforms and product concepts that combine thoughtful experience design with dependable engineering."
      meta={`${productsData.length} selected projects`}
    />
    <section className="section container">
      <div className="product-grid">
        {productsData.map((product, index) => (
          <article className="card reveal-card product-card" key={product.title} tabIndex={0}>
            <span className="card-index">Project {String(index + 1).padStart(2, "0")}</span>
            <h3>{product.title}</h3>
            <RevealCardBody summary={product.description}>
              {product.demoUrl && (
                <a className="product-link" href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                  View live product <span aria-hidden="true">↗</span>
                </a>
              )}
              <div className="tag-list">
                {product.tech.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
              </div>
            </RevealCardBody>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Products;
