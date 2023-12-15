import React from 'react';
import { BrowserRouter } from 'react-router-dom/';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'; 
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/LearnLingo">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
