// Dependencies
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.tsx';

// Fonts
import '@fontsource-variable/onest';

// Internationalization
import i18n from './i18n.ts';

// Styles
import '@/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
