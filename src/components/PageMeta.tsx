import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "The Software Consulting";
const defaultDescription = "Senior product strategy, design, and engineering for ambitious digital businesses.";

const metadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Strategy, Design & Engineering", description: defaultDescription },
  "/about": { title: "About", description: "Meet a senior technology consultancy focused on clear thinking, close collaboration, and accountable delivery." },
  "/contact": { title: "Contact", description: "Talk with The Software Consulting about a new product, modernization initiative, AI opportunity, or technical strategy." },
  "/industries": { title: "Industries", description: "Technology consulting grounded in the operating realities of automotive, banking, healthcare, retail, and more." },
  "/insights": { title: "Insights", description: "Practical perspectives on product, engineering, AI, cloud, and digital business." },
  "/products": { title: "Products & Work", description: "Explore selected digital products shaped around real customer and business needs." },
  "/services": { title: "Services", description: "Product strategy, experience design, software engineering, cloud, data, AI, security, and modernization capabilities." },
};

const setMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
};

const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = metadata[pathname] ?? {
      title: "Page Not Found",
      description: defaultDescription,
    };
    const title = `${page.title} | ${siteName}`;

    document.title = title;
    setMetaContent('meta[name="description"]', page.description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', page.description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', page.description);
  }, [pathname]);

  return null;
};

export default PageMeta;
