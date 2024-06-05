import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeedInsights } from '@vercel/speed-insights/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>
);

