import React from 'react';

export default class AppErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio runtime error:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="app-error-screen">
        <div className="app-error-card">
          <div className="app-error-mark">!</div>
          <p className="eyebrow">PORTFOLIO ERROR</p>
          <h1>Something went wrong while loading the portfolio.</h1>
          <p className="app-error-message">
            The application encountered a runtime error. The page is intentionally
            kept visible so the problem can be diagnosed instead of leaving a blank screen.
          </p>
          <pre>{this.state.error?.message || 'Unknown runtime error'}</pre>
          <button type="button" onClick={this.handleReload}>Reload portfolio</button>
        </div>
      </div>
    );
  }
}
