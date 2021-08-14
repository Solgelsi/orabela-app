import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoXId } from '../../Apis/apis/productosApi';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProductoXId(id).then(result => { SetProducto(result)});
    }, [id]);

    return (
        <div>
            <ItemDetail producto={producto}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;