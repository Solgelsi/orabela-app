import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import groupBy from 'lodash/groupBy';
import { getProductos, getProductosXCategoria } from '../../Apis/apis/productosApi';
import ItemList from './ItemList/ItemList';
import Loader from '../Loader/Loader';

const ItemListContainer = ({ greatingMsg }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    /**
     * funcion que va a buscar los productos dependiendo de la ruta que se active
     * ya que si desde un link o si el usuario ingreso una ruta particular
     * este componente debe buscar los prodeuctos filtrados
     */
    useEffect(() => {
        setLoading(true);
        if (id) {
            getProductosXCategoria(id).then(result => {
                setLoading(false);
                setProductos(groupBy(result, (item) => item.categoriaNombre))
            });
        }
        else {
            getProductos.then(result => {
                setLoading(false);
                setProductos(groupBy(result, (item) => item.categoriaNombre))
            });
        }
    }, [id]);

    return (
        <div>
            <div>
                <h1 className="text-center mt-5 p-3">{greatingMsg}</h1>
            </div>
            <div className="mt-5">
                {loading && <Loader />}
                {!loading && (Object.keys(productos).map((prod, index) => {
                    return <ItemList key={index} items={productos[prod]} nombreCategoria={prod} />
                }))}
                {}
            </div>
        </div>
    );
}

export default ItemListContainer;
