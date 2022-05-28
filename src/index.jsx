import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import { render } from 'react-dom';
import App from './App.jsx';

import "./styles.css"


// const root = document.getElementById('root');
// render( <App />, root);

const root = createRoot(document.getElementById("root"))
root.render(<App />)