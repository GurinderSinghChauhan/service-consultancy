import { productsData } from "../assets/mockData/mockData";
import PageIntro from "../components/PageIntro";
import RevealCardBody from "../components/RevealCardBody";
import { Link } from "react-router-dom";

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
          <Link className="card reveal-card product-card product-card-link" key={product.title} to={`/products/${product.slug}`}>
            <span className="card-index">Project {String(index + 1).padStart(2, "0")}</span>
            <h3>{product.title}</h3>
            <RevealCardBody summary={product.description}>
              <div className="tag-list">
                {product.tech.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
              </div>
              <span className="product-card-cta">View product overview <span aria-hidden="true">→</span></span>
            </RevealCardBody>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Products;
