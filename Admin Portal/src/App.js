import React from 'react';
import Router from './config/router';
import { Toaster } from 'sonner'
import 'typeface-poppins';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster richColors closeButton />
      <Router />
    </div>
  );
}

export default App;
