// import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Home from './Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/saga-orange/theme.css';

import './index.css';
import './flags.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider >
    <App />
  </PrimeReactProvider>
);




