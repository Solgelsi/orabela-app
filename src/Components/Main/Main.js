import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Main = ({greatingMsg}) => {
    return ( 
        <div>
            <h1 className="text-center p-3">{greatingMsg}</h1>
            <ItemListContainer/>
        </div>
    );
}

export default Main;