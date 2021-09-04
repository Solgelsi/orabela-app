import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../../Context/cartContext';
import swal from 'sweetalert';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import CurrencyFormater from '../../Helpers/CurrencyFormater/CurrencyFormater';

const Item = ({ item }) => {
    const { addPurchase } = useContext(CartContext);
    const { id, title, price, img, description, stock } = item;
    const history = useHistory();

    const onAdd = (quantity) => {
        swal(`Has agregado ${quantity} items del producto ${title} a tu carrito`);
        addPurchase({ item, quantity });
    };
    const goToDetail = () => {
        history.push(`/item/${id}`);
    }

    return (
        <div className="card h-100 text-center border-primary mb-3">
            <img className="card-img-top" alt={title} src={img} />
            <div className="card-body">
                <h5 className="card-title link-primary" onClick={goToDetail}>{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer text-muted">
                <h5>{<CurrencyFormater price={price} />}</h5>
                <span style={(stock === 0) ? {} : { display: 'none' }}>No hay stock disponible de este producto</span>
                <div>
                    {(stock !== 0) && <ItemCount availableStock={stock} onButtonClick={onAdd} initial={1}></ItemCount>}
                </div>
            </div>
        </div>
    );
}

export default Item;