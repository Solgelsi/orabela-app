import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from '../Context/cartContext';
import NavBar from './NavBar/NavBar';
import NotFound from './NotFound/NotFound';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Cart/Checkout/Checkout';
import './main.css';

const App = () => {

    return (
        <div>
            <CartProvider>
                <BrowserRouter>
                    <header><NavBar /></header>
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer greatingMsg="Bienvenido a Orabela Joyas" />
                        </Route>
                        <Route exact path="/category">
                            <ItemListContainer greatingMsg="Bienvenido a Orabela Joyas" />
                        </Route>
                        <Route exact path="/category/:id">
                            <ItemListContainer greatingMsg="Bienvenido a Orabela Joyas" />
                        </Route>
                        <Route exact path="/item/:id" component={ItemDetailContainer} />
                        <Route exact path="/Cart" component={Cart} />
                        <Route exact path="/Checkout" component={Checkout} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                    <footer className="text-muted mt-5 py-2">
                        <div className="container">
                            <p className="mb-1 fw-bold">Orabella e-commerce 2021</p>
                        </div>
                    </footer>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;