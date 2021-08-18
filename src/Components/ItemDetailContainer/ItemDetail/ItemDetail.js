import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
    const [compra, setCompra] = useState(0);
    const history = useHistory();
    const { title, price, descriptionLong, img, stock } = producto;

    const onAdd = (compra) => {
        setCompra(compra);
    };
    const goToCart = () => {
        history.push(`/Cart`);
    }
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
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="precio">
                                    <span>Price: </span><span>${price}</span>
                                </div>
                            </div>
                            <div className="col-6 mt-2">
                                <span style={(stock === 0) ? {} : { display: 'none' }}>No hay stock disponible de este producto</span>
                                {(stock !== 0 && compra === 0) && <ItemCount stockDisponible={stock} onAdd={onAdd} inicial={1}></ItemCount>}
                                {(compra !== 0) && (<button type="button" className="btn btn-primary" onClick={goToCart}>Terminar mi compra</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;