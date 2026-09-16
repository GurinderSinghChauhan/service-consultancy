import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="status-page container">
    <span className="eyebrow">404 · Page not found</span>
    <h1>This page has moved—or never existed.</h1>
    <p>Let’s get you back to a useful part of the site.</p>
    <div className="hero-actions">
      <Link className="button button-primary" to="/">Return home</Link>
      <Link className="button" to="/contact">Contact us</Link>
    </div>
  </section>
);

export default NotFound;
