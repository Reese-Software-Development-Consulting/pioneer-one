import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // this is fine
import App from './App';      // this is fine

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
