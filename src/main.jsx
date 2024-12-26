import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './App.jsx'; // Import WrappedApp instead of App
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrappedApp /> {/* Use WrappedApp here */}
  </React.StrictMode>
);
