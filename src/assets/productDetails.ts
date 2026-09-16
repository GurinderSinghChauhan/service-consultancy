export type ProductDetail = {
  slug: "arcline" | "velora";
  label: string;
  title: string;
  statement: string;
  description: string;
  audience: string;
  technologies: string[];
  highlights: Array<{ title: string; description: string }>;
  workflow: Array<{ title: string; description: string }>;
  principles: string[];
};

export const productDetails: Record<ProductDetail["slug"], ProductDetail> = {
  arcline: {
    slug: "arcline",
    label: "Private document intelligence",
    title: "Arcline",
    statement: "Turn sensitive documents into dependable answers—without giving up control.",
    description:
      "Arcline is a self-hosted document intelligence platform for teams working with sensitive, high-value information. It brings ingestion, structured extraction, permission-aware retrieval, and source-grounded Q&A into one controlled environment.",
    audience: "Built for regulated and document-heavy teams in healthcare, legal, financial, and operational settings.",
    technologies: ["FastAPI", "PostgreSQL", "Qdrant", "MinerU", "Local AI"],
    highlights: [
      {
        title: "Understand complex files",
        description: "Process PDFs, office documents, scans, tables, formulas, and figures while preserving useful structure.",
      },
      {
        title: "Protect every retrieval",
        description: "Organization boundaries, role-based access, and document-level permissions are applied before search results are returned.",
      },
      {
        title: "Keep answers grounded",
        description: "Responses are built from approved source material, making the path from an answer back to its evidence clear.",
      },
      {
        title: "Operate on your terms",
        description: "Self-hosted services and controlled compute keep documents, embeddings, and model traffic inside your environment.",
      },
    ],
    workflow: [
      {
        title: "Ingest",
        description: "Upload documents into an organization workspace with clear ownership and lifecycle controls.",
      },
      {
        title: "Structure",
        description: "Extract content, classify records, capture metadata, and prepare approved material for retrieval.",
      },
      {
        title: "Discover",
        description: "Search and ask questions across only the information each user is permitted to access.",
      },
    ],
    principles: ["Private by design", "Permission-aware retrieval", "Metadata-only audit trails", "Deployment control"],
  },
  velora: {
    slug: "velora",
    label: "Local service marketplace",
    title: "Velora",
    statement: "Make finding and booking the right local professional feel effortless.",
    description:
      "Velora connects customers with local service businesses through focused discovery, real availability, and a clear booking experience. Behind the marketplace, providers get practical tools for managing services, schedules, and incoming appointments.",
    audience: "Designed for customers who value convenience and independent service businesses that need simpler day-to-day operations.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    highlights: [
      {
        title: "Relevant local discovery",
        description: "Customers can browse by service and city, compare approved businesses, and save the ones they trust.",
      },
      {
        title: "Availability that reflects reality",
        description: "Bookable times account for weekly hours, blocked periods, existing appointments, and business time zones.",
      },
      {
        title: "A focused owner workspace",
        description: "Providers manage their public profile, service menu, availability, and booking inbox from one place.",
      },
      {
        title: "Quality before visibility",
        description: "Business applications pass through an administrative review before appearing in public discovery.",
      },
    ],
    workflow: [
      {
        title: "Discover",
        description: "Narrow nearby options by category, service, and location without wading through irrelevant listings.",
      },
      {
        title: "Choose",
        description: "Review the business and its services, then select a genuinely available appointment time.",
      },
      {
        title: "Book",
        description: "Confirm the appointment and give both customer and provider a clear view of what comes next.",
      },
    ],
    principles: ["Customer-first discovery", "Conflict-safe booking", "Provider autonomy", "Curated marketplace"],
  },
};
