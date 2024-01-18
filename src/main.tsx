// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.tsx';

// Styles
import '@/styles/index.css';
import '@fontsource-variable/onest';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
