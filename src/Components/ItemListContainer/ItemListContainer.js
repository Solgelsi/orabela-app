import React, { useEffect, useState } from 'react';
import { getProductos, getProductosXCategoria } from '../../Apis/apis/productosApi';
import groupBy from 'lodash/groupBy';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';

const ItemListContainer = ({greatingMsg}) => {
    const [productos, setProductos] = useState([]);
    // const [anillos, setAnillos] = useState([]);
    const {id} = useParams();
    /**
     * funcion que va a buscar los productos dependiendo de la ruta que se active
     * ya que si desde un link o si el usuario ingreso una ruta particular
     * este componente debe buscar los prodeuctos filtrados
     */
    useEffect(() => {
        if(id){
            getProductosXCategoria(id).then(result => { setProductos(groupBy(result, (item) => item.categoriaNombre))});
        }
        else{
            getProductos.then(result => { setProductos(groupBy(result, (item) => item.categoriaNombre))});
        }
    }, [id]);

    return (
        <div>
            <div>
                <h1 className="text-center p-3">{greatingMsg}</h1>
            </div>
            <div>
                {Object.keys(productos).map((prod, index) => {
                    return <ItemList key={index} items={productos[prod]} nombreCategoria={prod}/>
                })}
            </div>
        </div>
    );
}

export default ItemListContainer;
