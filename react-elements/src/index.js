import React from 'react';
import * as ReactDOM from 'react-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const el = React.createElement('h1', null, 'Hello, React!');

root.render(el);
