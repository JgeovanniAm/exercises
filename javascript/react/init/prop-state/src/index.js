// React DOM
// React JSX forma de escribir jsvascript en react

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const container = document.getElementById('root');

// react dom tiene un method Render
// RENDER( QUE , DONDE )

ReactDOM.render(<div>
    <App/>
</div>, container)
