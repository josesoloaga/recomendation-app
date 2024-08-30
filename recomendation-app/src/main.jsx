import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { RecomendationProvider } from './modules/recomendation/providers/RecomendationProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecomendationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </RecomendationProvider>
  </StrictMode>,
);
