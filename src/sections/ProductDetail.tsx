import { Link, useParams } from "react-router-dom";
import { productDetails, type ProductDetail as ProductDetailData } from "../assets/productDetails";
import NotFound from "./NotFound";

const ProductVisual = ({ product }: { product: ProductDetailData }) => (
  <div className={`product-visual product-visual-${product.slug}`} aria-hidden="true">
    <div className="product-visual-topline">
      <span>{product.title}</span>
      <span className="product-status">Live system</span>
    </div>
    <div className="product-visual-body">
      <div className="product-visual-nav">
        <span className="active" />
        <span />
        <span />
        <span />
      </div>
      <div className="product-visual-content">
        <span className="visual-kicker">{product.label}</span>
        <div className="visual-heading" />
        <div className="visual-heading short" />
        <div className="visual-panels">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  const { productSlug } = useParams();
  const product = productDetails[productSlug as keyof typeof productDetails];

  if (!product) return <NotFound />;

  return (
    <>
      <section className="product-hero container">
        <div className="product-hero-copy">
          <Link className="product-back" to="/products"><span aria-hidden="true">←</span> All products</Link>
          <span className="eyebrow">{product.label}</span>
          <h1>{product.title}</h1>
          <p className="product-statement">{product.statement}</p>
          <p className="product-description">{product.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">Discuss a similar project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <ProductVisual product={product} />
      </section>

      <section className="product-proof container" aria-label="Product principles">
        {product.principles.map((principle, index) => (
          <div key={principle}><span>{String(index + 1).padStart(2, "0")}</span><strong>{principle}</strong></div>
        ))}
      </section>

      <section className="section container product-overview">
        <div className="section-header">
          <div><span className="eyebrow">What it enables</span><h2>A focused product for a real operating need.</h2></div>
          <p>{product.audience}</p>
        </div>
        <div className="product-feature-grid">
          {product.highlights.map((highlight, index) => (
            <article className="product-feature" key={highlight.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-workflow-section">
        <div className="container">
          <div className="section-header">
            <div><span className="eyebrow">The experience</span><h2>From first step to useful outcome.</h2></div>
          </div>
          <div className="product-workflow">
            {product.workflow.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
