import React from 'react';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './app/layout/styles.css';
import './app/layout/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.min.css";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-right" hideProgressBar theme="colored" />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
