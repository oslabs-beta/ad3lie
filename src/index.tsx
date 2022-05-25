import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import HelloWorld from './components/HelloWorld';
import { render } from 'react-dom';

type title = string;

const root = document.getElementById('root');
render(
<HelloWorld title='YOOOOOO! I got it!!!' />, root);

// Doesn't work without correct props
// root.render(<HelloWorld title={3} />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// //   <Provider store={store}>
//     // <App />
// //   </Provider>,
// );