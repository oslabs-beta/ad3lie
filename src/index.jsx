import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import App from './App.jsx';
import styles from './styles.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import AppRoutes from './App-Routes.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <AppRoutes />
  </Provider>
);
