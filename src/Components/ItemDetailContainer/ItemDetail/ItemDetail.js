import React from 'react';

const ItemDetail = ({ producto }) => {

    const { id, title, price, description, categoriaNombre, url } = producto;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 text-center">
                    <img src={url}></img>
                </div>
                <div className="col-6 text-center">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>Price: </span><span>{price}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;