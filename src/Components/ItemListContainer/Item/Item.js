import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../../Context/cartContext';
import swal from 'sweetalert';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({ item }) => {
    const {addPurchase} = useContext(CartContext);
    const { id, title, price, url, description, stock } = item;
    const history = useHistory();
    
    const onAdd = (cantidad) => {        
        swal(`Has agregado ${cantidad} items del producto ${title} a tu carrito`);
        addPurchase({ item, cantidad });
    };
    const goToDetail = () => {
        history.push(`/item/${id}`);
    }

    return (
        <div className="card text-center border-primary mb-3">
            <img className="card-img-top" alt={title} src={url} />
            <div className="card-body">
                <h5 className="card-title link-primary" onClick={goToDetail}>{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer text-muted">
                <h6>$ {price}</h6>
                <span style={(stock === 0) ? {} : { display: 'none' }}>No hay stock disponible de este producto</span>
                <div>
                    { (stock !== 0) && <ItemCount stockDisponible={stock} onButtonClick={onAdd} inicial={1}></ItemCount> }
                </div>
            </div>
        </div>
    );
}

export default Item;