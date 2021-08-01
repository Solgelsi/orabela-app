import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const menuItems = [
    {
        nombre: "Home",
        className: "nav-link active",
        url: ""
    },
    {
        nombre: "Nuestros productos",
        className: "nav-link",
        url: ""
    },
    {
        nombre: "Tabla de talles",
        className: "nav-link",
        url: ""
    },
    {
        nombre: "Política de cambio",
        className: "nav-link",
        url: ""
    },
];

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ORABELA TIENDA DE JOYAS
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menuItems.map((menuItem) => {
                            return <li className="nav-item">
                                <a className={menuItem.className} aria-current="page" href={menuItem.url}>{menuItem.nombre}</a>
                            </li>
                        })}
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;
