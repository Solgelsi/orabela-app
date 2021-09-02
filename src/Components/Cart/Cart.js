import React, { useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { CartContext } from '../../Context/cartContext';
import { useHistory } from 'react-router-dom';

const Cart = () => {
    const { purchases, getItemCount, getTotal, clear } = useContext(CartContext);
    const history = useHistory();

    const goBack = () => {
        history.push("/");
    }
    const goCheckout = () => {
        history.push("/Checkout");
    }
    const onClear = () => {
        clear();
    }
    return (
        <div className="cart_section">
            <div className="container-fluid">
                {purchases.length <= 0 ?
                    <div className="d-flex flex-column align-items-center">
                        <h2 className="text-center">No hay items en su carrito por el momento</h2>
                        <button type="button" onClick={goBack} className="btn btn-outline-primary text-center btn-lg me-4 mt-3">Volver a inicio</button>
                    </div>
                    :
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                                <div className="d-flex flex-md-row flex-column justify-content-between">
                                    <div className="fs-2 fw-bold mb-3">Carrito de compras<small> ({getItemCount()} {getItemCount() == 1 ? 'item' : 'items'} en tu carrito) </small></div>
                                    <button className="btn btn-danger mb-3 align-self-end" onClick={onClear}>Eliminar todo</button>
                                </div>
                                {purchases.map((purchase, i) => {
                                    return <div key={i}>
                                        <CartItem purchase={purchase} />
                                    </div>
                                })}
                                <div className="order_total">
                                    <div className="order_total_content text-md-right d-flex justify-content-end">
                                        <div className="order_total_title">Total:</div>
                                        <div className="order_total_amount">${getTotal()}</div>
                                    </div>
                                </div>
                                <div className="cart_buttons"> <button type="button" onClick={goBack} className="btn btn-outline-primary btn-lg me-4">Continuar comprando</button>
                                    <button type="button" className="btn btn-success btn-lg" onClick={goCheckout}>Ir al Checkout</button> </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;