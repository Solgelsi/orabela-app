import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemDetail from './ItemDetail/ItemDetail';
import { productoXId } from '../../Apis/apis/productosFirebase';

const ItemDetailContainer = () => {
    const [product, SetProduct] = useState({});
    const [loading, SetLoading] = useState(true);
    const [noItemFound, setnoItemFound] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        SetLoading(true);
        setnoItemFound(false);
        productoXId(id)
            .then((result) => {
                if (!result.data()) {
                    setnoItemFound(true);
                }
                SetProduct({ id: result.id, ...result.data() });
            })
            .finally(() => SetLoading(false));
    }, [id]);

    return (
        <div>
            {loading ? <Loader />
                : noItemFound ?
                    <div className="text-center mt-5">
                        <h1>No se encontró el producto que desea consultar.</h1>
                    </div>
                    : <ItemDetail product={product} />
            }
        </div>
    );
}

export default ItemDetailContainer;