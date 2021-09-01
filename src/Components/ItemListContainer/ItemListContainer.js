import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import groupBy from 'lodash/groupBy';
import { getProductosXCategoria, getProductos } from '../../Apis/apis/productosApi';
import ItemList from './ItemList/ItemList';
import Loader from '../Loader/Loader';
import { addDoc } from "firebase/firestore";
import { productosSnapshot, productosXCategoria } from '../../Apis/apis/productosFirebase';

const ItemListContainer = ({ greatingMsg }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noItemFound, setnoItemFound] = useState(false);
    const { id } = useParams();
    /**
     * funcion que va a buscar los productos dependiendo de la ruta que se active
     * ya que si desde un link o si el usuario ingreso una ruta particular
     * este componente debe buscar los prodeuctos filtrados
     */
    useEffect(() => {
        setLoading(true);
        setnoItemFound(false);
        if (id) {
            productosXCategoria(id)
                .then(results => {
                    if (results.size === 0) {
                        setnoItemFound(true);
                    }
                    setProductos(groupBy(
                        results.docs.map(product => ({
                            id: product.id,
                            ...product.data()
                        })),
                        (item) => item.categoriaNombre));
                })
                .finally(() => setLoading(false));
        }
        else {

            // addDoc(productosRef(), { 
            //     capital: true 
            // });

            productosSnapshot()
                .then(results => {
                    if (results.size === 0) {
                        setnoItemFound(true);
                    }
                    setProductos(groupBy(
                        results.docs.map(product => ({
                            id: product.id,
                            ...product.data()
                        })),
                        (item) => item.categoriaNombre));
                })
                .finally(() => setLoading(false));
        }
    }, [id]);

    return (
        <div>
            <div>
                <h1 className="text-center mt-5 p-3">{greatingMsg}</h1>
            </div>
            <div className="mt-5">
                {!loading && noItemFound &&
                    <div className="text-center mt-5">
                        <h1>No se encontraron productos</h1>
                    </div>
                }
                {loading && <Loader />}
                {!loading && (Object.keys(productos).map((prod, index) => {
                    return <ItemList key={index} items={productos[prod]} nombreCategoria={prod} />
                }))}
                { }
            </div>
        </div>
    );
}

export default ItemListContainer;
