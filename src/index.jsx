import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import App from './App.jsx';
import styles from './styles.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

// const root = document.getElementById('root');
// render( <App />, root);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
