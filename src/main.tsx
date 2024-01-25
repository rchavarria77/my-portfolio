// Dependencies
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Internationalization
import i18n from './i18n.ts';

// Components
import App from './App.tsx';

// Styles
import '@/styles/index.css';

// Fonts
import '@fontsource-variable/onest';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
