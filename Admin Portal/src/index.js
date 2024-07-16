import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStates } from './contextApi/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStates>
    <App />
  </GlobalStates>
);

reportWebVitals();
