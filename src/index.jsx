import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import App from './App.jsx';
import AppRoutes from './AppRoutes.jsx';
import styles from './styles.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

/**
 * AppRoutes is the generalized version that programmatically generates routes based on our 'dictionary' of chart info
 */

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <AppRoutes />
  </Provider>
);
