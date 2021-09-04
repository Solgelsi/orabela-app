import React, { useContext, useState } from 'react';
import './Checkout.css';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { CartContext } from '../../../Context/cartContext';
import CheckoutDetailContainer from './CheckOutDetail/CheckOutDetailContainer';
import { addDoc, writeBatch } from "firebase/firestore";
import { ordenesRef } from '../../../Apis/apis/ordenesFirebase';
import { db } from '../../../Firebase';
import { productRef } from '../../../Apis/apis/productosFirebase';
import swal from 'sweetalert';
import Loader from '../../Loader/Loader';
import { useHistory } from 'react-router';
import CurrencyFormater from '../../Helpers/CurrencyFormater/CurrencyFormater';

const Checkout = () => {
    const { getTotal, purchases, buyer, clear } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const history = useHistory();

    const onBuy = () => {
        setLoading(true);
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
            //no se porque Prettier mueve todo este bloque
            .then(response => {
                const batch = writeBatch(db());
                purchases.forEach(({ quantity, item: { id, stock } }) => {
                    batch.update(productRef(id), {
                        "stock": stock - quantity
                    });
                });
                batch.commit();
                setOrderNumber(response.id);
                clear();
            })
            .catch(error => swal("Ocurrio un error al intentar procesar tu orden"))
            .finally(() => setLoading(false));
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
                            {loading ? <Loader /> :
                                orderNumber.length !== 0 ?
                                    <div className="d-flex flex-column align-items-center">
                                        <h2 className="text-center">Se creo con éxito la orden n° {orderNumber}</h2>
                                        <button type="button" onClick={() => history.push("/")} className="btn btn-outline-primary text-center btn-lg me-4 mt-3">Volver a inicio</button>
                                    </div>
                                    :
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
                                                        <button type="button" onClick={onBuy} className="btn btn-lg btn-success">PAGAR <CurrencyFormater price={getTotal()} /></button>
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
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Checkout;