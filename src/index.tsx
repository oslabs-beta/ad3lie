import React from 'react'
import {createRoot} from 'react-dom/client'
import HelloWorld from './components/HelloWorld';

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld title='YOOOOOO! I got it!!!'/>);

// Doesn't work without correct props
// root.render(<HelloWorld title={3} />);