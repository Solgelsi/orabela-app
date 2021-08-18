import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoXId } from '../../Apis/apis/productosApi';
import Loader from '../Loader/Loader';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState({});
    const [loading, SetLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProductoXId(id).then(result => {
            SetProducto(result)
            SetLoading(false);
        });
    }, [id]);

    return (
        <div>
            {loading && <Loader />}
            {!loading && <ItemDetail producto={producto}/>}
        </div>
    );
}

export default ItemDetailContainer;