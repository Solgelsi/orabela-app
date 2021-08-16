import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {

    const { title, price, descriptionLong, img } = producto;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col text-center">
                    <h2>Detalle de Producto</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6 text-center">
                    <img src={img}></img>
                </div>
                <div className="col-6 text-center">
                    <h3>{title}</h3>
                    <p>{descriptionLong}</p>
                    <div className="precio">
                        <span>Price: </span><span>${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;