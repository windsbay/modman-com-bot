import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const image = document.getElementById('preloader');
image.width = window.innerWidth;
image.height = window.innerHeight;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
