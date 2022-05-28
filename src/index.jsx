import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './ChartComponents/ScatterPlot/App.jsx';


const root = createRoot(document.getElementById('root'));
root.render(<App/>);

// const root = createRoot(document.getElementById('root'));
// root.render(<HelloWorld title='Hello Ju'/>);

// Doesn't work without correct props
// root.render(<HelloWorld title={3} />);

//---------------------------------------------------------------------------------------------------

import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import { render } from 'react-dom';
import App from './App';

import "./styles.css"

// type title = string;

const root = document.getElementById('root');
render( <App />, root);
