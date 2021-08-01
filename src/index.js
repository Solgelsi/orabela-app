import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import 'bootstrap/scss/bootstrap.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDom.render(
    <div>
        <header><NavBar /></header>
        <main><Main greatingMsg="Bienvenido a Orabela Joyas"/></main>
        <footer></footer>
    </div>,
document.getElementById('root'));