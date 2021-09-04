import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../../Context/cartContext';
import CurrencyFormater from '../../Helpers/CurrencyFormater/CurrencyFormater';

import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import './CartItem.css';

const CartItem = ({ purchase }) => {
    const { addPurchase, removeItem } = useContext(CartContext);
    const history = useHistory();
    const { item, quantity } = purchase;

    const onChange = (newQuantity) => {
        addPurchase({ item, quantity: newQuantity });
    };

    const onDeleteItem = () => {
        removeItem(item.id);
    };

    const goToDetail = () => {
        history.push(`/item/${purchase.item.id}`);
    }

    return (
        <div>
            <ul className="cart_list">
                <li className="cart_item py-3 ps-3 clearfix">
                    <div className="cart_item_image">
                        <img src={item.img} alt={item.title} /></div>
                    <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name ">
                            <div className="fs-6 fw-bold">Nombre</div>
                            <div className="itemName mt-2 fs-5" onClick={goToDetail}>{item.title}</div>
                        </div>
                        <div className="text-center">
                            <div className="fs-6 fw-bold">Cantidad</div>
                            <ItemCount key={item.id} availableStock={item.stock} onChange={onChange} hideButton={true} initial={quantity}></ItemCount>
                        </div>
                        <div className=" text-end">
                            <div className="fs-6 fw-bold">Precio</div>
                            <div className="mt-2 fs-5"><CurrencyFormater price={item.price} /></div>
                        </div>
                        <div className=" text-end">
                            <div className="fs-6 fw-bold">Subtotal</div>
                            <div className="mt-2 fs-5"><CurrencyFormater price={item.price * quantity} /></div>
                        </div>
                        <div className="btnDelete">
                            <button className="btn btn-link" onClick={onDeleteItem}>Eliminar</button>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    );
}

export default CartItem;