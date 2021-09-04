import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App';

import 'bootstrap/scss/bootstrap.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDom.render(
    <div>
        <App />
    </div>,
    document.getElementById('root'));