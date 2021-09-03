import React, { useContext } from 'react';
import { CartContext } from '../../../../Context/cartContext';
import CheckOutDetail from './CheckOutDetail';

const CheckoutDetailContainer = () => {
    const { purchases, getSubTotal, getTotal } = useContext(CartContext);

    return (<div>
        <div className="mt-1 card-body">
            <div className="row justify-content-between">
                <div className="col-auto col-md-7 fw-bold">
                    <p>Producto</p>
                </div>
                <div className=" pl-0 flex-sm-col col-auto my-auto fw-bold">
                    <p>Cantidad</p>
                </div>
                <div className=" pl-0 flex-sm-col col-auto my-auto fw-bold">
                    <p>Precio</p>
                </div>
                <div className=" pl-0 flex-sm-col col-auto my-auto fw-bold">
                    <p>Importe</p>
                </div>
            </div>
            {purchases.map((purchase, index) => { return <CheckOutDetail key={index} purchase={purchase}></CheckOutDetail> })}
            <div className="row ">
                <div className="col">
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <p className="mb-1"><b>Subtotal</b></p>
                        </div>
                        <div className="flex-sm-col col-auto">
                            <p className="mb-1"><b>$ {getSubTotal()}</b></p>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col">
                            <p className="mb-1"><b>Impuestos</b></p>
                        </div>
                        <div className="flex-sm-col col-auto">
                            <p className="mb-1"><b>IVA 21%</b></p>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <p><b>Total</b></p>
                        </div>
                        <div className="flex-sm-col col-auto">
                            <p className="mb-1"><b>$ {getTotal()}</b></p>
                        </div>
                    </div>
                    <hr className="my-0" />
                </div>
            </div>
        </div>
    </div>);
}

export default CheckoutDetailContainer;