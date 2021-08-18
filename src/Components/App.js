import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import NotFound from './NotFound/NotFound';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App = () => {
    return ( 
        <div>
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
                    <Route exact path="/item/:id" component={ItemDetailContainer}/>
                    <Route exact path="/Cart" component={Cart}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
                <footer></footer>
            </BrowserRouter>
        </div>
    );
}

export default App;