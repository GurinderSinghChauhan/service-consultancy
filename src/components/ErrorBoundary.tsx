import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error("Route rendering failed", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="status-page container" role="alert">
          <span className="eyebrow">Something went wrong</span>
          <h1>We couldn’t load this page.</h1>
          <p>Please refresh the page. If the problem continues, return home and try again.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => window.location.reload()}>Refresh page</button>
            <a className="button" href="/">Return home</a>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
