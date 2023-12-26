import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/index.css";

/* import { Routes } from './routes'; */
import { Sign } from './pages/Sign';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sign />
  </React.StrictMode>,
)