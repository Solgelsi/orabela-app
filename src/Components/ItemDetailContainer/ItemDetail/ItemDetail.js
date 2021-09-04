import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../../Context/cartContext';
import CurrencyFormater from '../../Helpers/CurrencyFormater/CurrencyFormater';
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    const history = useHistory();
    const { addPurchase, isInCart } = useContext(CartContext);
    const { id, title, price, descriptionLong, img, stock } = product;

    const onAdd = (quantity) => {
        addPurchase({ item: product, quantity });
    };

    const goToCart = () => {
        history.push(`/Cart`);
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col text-center">
                    <h2>Detalle de Producto</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6 text-center">
                    <img src={img} className="img-fluid" alt={title}></img>
                </div>
                <div className="col-6 text-center">
                    <h3>{title}</h3>
                    <p>{descriptionLong}</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="precio">
                                    <span>Precio: </span><span><CurrencyFormater price={price} /></span>
                                </div>
                            </div>
                            <div className="col-6 mt-2">
                                <span style={(stock === 0) ? {} : { display: 'none' }}>No hay stock disponible de este producto</span>
                                {(stock !== 0 && !isInCart(id)) && <ItemCount availableStock={stock} onButtonClick={onAdd} initial={1}></ItemCount>}
                                {(isInCart(id)) && (<button type="button" className="btn btn-primary" onClick={goToCart}>Terminar mi compra</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;