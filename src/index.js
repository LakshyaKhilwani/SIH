import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS styles
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
