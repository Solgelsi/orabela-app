import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemDetail from './ItemDetail/ItemDetail';
import { productoXId } from '../../Apis/apis/productosFirebase';

const ItemDetailContainer = () => {
    const [product, SetProduct] = useState({});
    const [loading, SetLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        productoXId(id)
            .then((result) => {
                SetProduct({ id: result.id, ...result.data() });
            })
            .finally(() => SetLoading(false));
    }, [id]);

    return (
        <div>
            {loading ? <Loader /> : <ItemDetail product={product} />}
        </div>
    );
}

export default ItemDetailContainer;