import React, { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({ availableStock, initial, onButtonClick, hideButton = false, onChange }) => {
    const [stock, SetStock] = useState(1);
    const [quantity, SetQuantity] = useState(initial);

    useEffect(() => {
        SetStock(availableStock);
    }, []);

    function min() {
        if (quantity > 1) {
            SetQuantity(quantity - 1);
            if (onChange) {
                onChange(quantity - 1);
            }
        }
    }
    function sum() {
        if (stock > quantity) {
            SetQuantity(quantity + 1);
            if (onChange) {
                onChange(quantity + 1);
            }
        }
    }

    return (
        <div>
            <div className="input-group">
                <span className="input-group-btn">
                    <button type="button" onClick={min} disabled={(availableStock === 0) ? "disabled" : ""} className="btn btn-default btn-number">
                        <i className="fas fa-minus"></i>
                    </button>
                </span>
                <input type="number" readOnly={true} value={quantity} className="form-control text-center" />
                <span className="input-group-btn">
                    <button onClick={sum} className="btn btn-default btn-number" disabled={(availableStock === 0) ? "disabled" : ""}>
                        <i className="fas fa-plus"></i>
                    </button>
                </span>
            </div>
            {!hideButton && <div>
                <button type="button" onClick={() => onButtonClick(quantity)} className="btn btn-primary mt-2">Agregar al carrito</button>
            </div>}

        </div>
    );

};

export default ItemCount;