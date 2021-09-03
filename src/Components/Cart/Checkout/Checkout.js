import React, { useContext } from 'react';
import './Checkout.css';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { CartContext } from '../../../Context/cartContext';
import CheckoutDetailContainer from './CheckOutDetail/CheckOutDetailContainer';
import { addDoc, writeBatch } from "firebase/firestore";
import { ordenesRef } from '../../../Apis/apis/ordenesFirebase';
import { db } from '../../../Firebase';
import { productRef } from '../../../Apis/apis/productosFirebase';
import swal from 'sweetalert';

const Checkout = () => {
    const { getTotal, purchases, buyer } = useContext(CartContext);

    const onBuy = () => {
        const newOrder = {
            buyer: { ...buyer },
            items: purchases.map(({ quantity, item: { id, title, price } }) => (
                {
                    item: {
                        id,
                        title,
                        price
                    },
                    quantity
                })),
            total: getTotal()
        };

        addDoc(ordenesRef(), {
            newOrder
        })
            .then(response => {
                const batch = writeBatch(db());
                purchases.forEach(({ quantity, item: { id, stock } }) => {
                    batch.update(productRef(id), {
                        "stock": stock - quantity
                    });
                });
                batch.commit();
                swal(`La orden con número ${response.id} ha sido creada, a la brevedad te llegará un correo electronico a tu casilla`);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="cart_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="d-flex flex-md-row flex-column justify-content-between">
                                <div className="fs-2 fw-bold mb-3">Checkout</div>
                            </div>
                            <div className="checkout_card p-5">
                                <div className="row justify-content-around">
                                    <div className="col-md-5">
                                        <div className="card-header pb-0">
                                            <h5 className="">Detalles del comprador</h5>
                                            <hr className="my-0" />
                                        </div>
                                        <CheckoutForm />
                                        <div className="row m-4 text-center">
                                            <div className="col">
                                                <button type="button" name="" id="" onClick={onBuy} className="btn btn-lg btn-success">PAGAR ${getTotal()}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-header pb-0">
                                            <h5 className="">Detalles de la compra</h5>
                                            <hr className="my-0" />
                                        </div>
                                        <CheckoutDetailContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Checkout;