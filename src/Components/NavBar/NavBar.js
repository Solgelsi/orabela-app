import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const menuItems = [
    {
        nombre: "Todos los productos",
        className: "nav-link",
        url: "/category"
    },
    {
        nombre: "Anillos",
        className: "nav-link",
        url: "/category/1"
    },
    {
        nombre: "Pulseras",
        className: "nav-link",
        url: "/category/2"
    },
    {
        nombre: "Carrito",
        className: "nav-link",
        url: "/Cart"
    },
];



const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink exact activeClassName="activeNav" className="navbar-brand" to="/" >ORABELA TIENDA DE JOYAS</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menuItems.map((menuItem, i) => {
                            return <li key={i} className="nav-item">
                                <NavLink exact activeClassName="activeNav" className={menuItem.className} to={menuItem.url}>{menuItem.nombre}</NavLink>
                            </li>
                        })}
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
