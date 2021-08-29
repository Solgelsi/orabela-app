import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { CartContext } from '../../Context/cartContext';
import { useState } from 'react/cjs/react.development';

const CartWidget = () => {
    const { purchases, getItemCount } = useContext(CartContext);
    const [cartNumber, setCartNumber] = useState(getItemCount());

    useEffect(() => {
        setCartNumber(getItemCount());
    }, [purchases])

    return (
        <Link to="/Cart" className="cart position-relative d-inline-flex">
            <i className="fas fa fa-shopping-cart fa-lg"></i>
            {cartNumber !== 0 && <span className="cart-basket d-flex align-items-center justify-content-center">{cartNumber}</span>}
        </Link>
    );
}

export default CartWidget;