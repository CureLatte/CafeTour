import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppCounter from './App/AppCounter'
import reportWebVitals from './reportWebVitals';
// 전역 설정이 가능함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppCounter />
  </React.StrictMode>
);
reportWebVitals();
