import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppErrorBoundary from './components/portfolio/AppErrorBoundary';
import './index.css';
import './portfolio-failsafe.css';

const rootElement = document.getElementById('root');

function showFatalError(error) {
  console.error('Portfolio fatal runtime error:', error);
  if (!rootElement) return;
  const message = error instanceof Error ? error.message : String(error);
  rootElement.innerHTML = `
    <div class="app-error-screen">
      <div class="app-error-card">
        <div class="app-error-mark">!</div>
        <p class="eyebrow">PORTFOLIO RUNTIME ERROR</p>
        <h1>The portfolio stopped while loading.</h1>
        <p class="app-error-message">A JavaScript error occurred. The error is shown below instead of leaving a blank page.</p>
        <pre>${message.replace(/[&<>]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}</pre>
        <button type="button" onclick="location.reload()">Reload portfolio</button>
      </div>
    </div>`;
}

window.addEventListener('error', (event) => {
  if (event.error) showFatalError(event.error);
});
window.addEventListener('unhandledrejection', (event) => showFatalError(event.reason));

if (!rootElement) {
  throw new Error('Portfolio root element #root was not found.');
}

createRoot(rootElement).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
