import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStates } from './contextApi/ContextApi';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStates>
    <App />
  </GlobalStates>
);

reportWebVitals();
