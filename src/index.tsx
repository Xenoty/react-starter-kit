import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './app/styles/custom.scss';

const rootElement = document.getElementById('root') as HTMLElement;
// Get browser's preferred color scheme
const prefersDarkMode = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;
// Set the Bootstrap theme attribute based on preference
document.body.setAttribute('data-bs-theme', prefersDarkMode ? 'dark' : 'light');
// Otherwise, uncomment below if you want to set the theme to dark by default.
// document.body.setAttribute('data-bs-theme', 'dark');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
