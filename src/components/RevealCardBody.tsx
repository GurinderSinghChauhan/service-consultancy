import type { ReactNode } from "react";

type RevealCardBodyProps = {
  children?: ReactNode;
  summary: ReactNode;
};

const RevealCardBody = ({ children, summary }: RevealCardBodyProps) => (
  <div className="card-body">
    <div className="card-preview" aria-hidden="true">
      <p>{summary}</p>
      <span className="reveal-prompt">Explore details <span aria-hidden="true">+</span></span>
    </div>
    <div className="card-details">
      <div className="card-details-inner">
        <p>{summary}</p>
        {children}
      </div>
    </div>
  </div>
);

export default RevealCardBody;
