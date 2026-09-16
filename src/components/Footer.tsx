import { Link, useLocation } from "react-router-dom";
import logo from "../assets/brain-logo.jpeg";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="site-footer">
      <div className="container">
        {pathname !== "/contact" && (
          <div className="footer-cta">
            <div>
              <span className="eyebrow">Have an ambitious idea?</span>
              <h2>Let’s make it real.</h2>
            </div>
            <Link className="button button-primary" to="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}

        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <span className="brand-mark"><img src={logo} alt="" /></span>
              <span className="brand-copy"><strong>The Software</strong><span>Consulting</span></span>
            </Link>
            <p>Strategy, design, and engineering for organizations ready to move forward.</p>
          </div>
          <div>
            <span className="footer-label">Explore</span>
            <Link to="/services">Services</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <span className="footer-label">Company</span>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <span className="footer-label">Contact</span>
            <a href="mailto:gschauhan1991@gmail.com">gschauhan1991@gmail.com</a>
            <a href="tel:+13102591394">+1 310 259 1394</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Software Consulting</span>
          <span>Strategy · Design · Engineering</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
