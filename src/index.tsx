import React from 'react'
import {createRoot} from 'react-dom/client'
import HelloWorld from './components/HelloWorld';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld title='Hello Ju'/>);

// Doesn't work without correct props
// root.render(<HelloWorld title={3} />);