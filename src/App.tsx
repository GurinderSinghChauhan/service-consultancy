import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import PageMeta from "./components/PageMeta";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));
const Services = lazy(() => import("./sections/Services"));
const Products = lazy(() => import("./sections/Products"));
const Industries = lazy(() => import("./sections/Industries"));
const Insights = lazy(() => import("./sections/Insights"));
const NotFound = lazy(() => import("./sections/NotFound"));

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <PageMeta />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ErrorBoundary>
        <Suspense
          fallback={
            <div className="route-loader" role="status" aria-live="polite">
              <span /> Loading experience
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
