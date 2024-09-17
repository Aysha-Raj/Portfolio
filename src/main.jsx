import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // No need for .jsx extension if the file is named App.jsx
import './index.css';

// Ensure that 'root' element exists in your index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

