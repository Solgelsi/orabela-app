import React, { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({ stockDisponible, inicial, onAdd }) => {
    const [stock, SetStock] = useState(1);
    const [compra, SetCompra] = useState(inicial);

    useEffect(() => {
        SetStock(stockDisponible);
    }, []);

    function restar() {
        if (compra > 1) {
            SetCompra(compra - 1);
        }
    }
    function sumar() {
        if (stock > compra) {
            SetCompra(compra + 1);
        }
    }

    return (
        <div>
            <div className="input-group">
                <span className="input-group-btn">
                    <button type="button" onClick={restar} disabled={(stockDisponible === 0) ? "disabled" : ""} className="btn btn-default btn-number">
                        <i className="fas fa-minus"></i>
                    </button>
                </span>
                <input type="number" readOnly={true} value={compra} className="form-control text-center" />
                <span className="input-group-btn">
                    <button onClick={sumar} className="btn btn-default btn-number" disabled={(stockDisponible === 0) ? "disabled" : ""}>
                        <i className="fas fa-plus"></i>
                    </button>
                </span>
            </div>
            <div>
                <button type="button" onClick={() => onAdd(compra)} className="btn btn-primary mt-2">Agregar al carrito</button>
            </div>
        </div>
    );

};

export default ItemCount;