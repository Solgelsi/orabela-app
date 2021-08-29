import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [purchases, setPurchase] = useState([]);

    const addPurchase = (purchase) => {
        if(isInCart(purchase.item))
        {
            removeItem(purchase.item);
        }
        setPurchase([...purchases, purchase]);
    }

    const removeItem = (id) => {
        setPurchase([purchases.filter(p => p.item.id !== id )]);
    }

    const isInCart = (id) => {
        return purchases.some(x => x.item.id === id);    
    }

    const clear = () => {
        setPurchase([]);
    }

    const getItemCount = () => {
        return purchases.reduce((val, current) => val + current.compra,0);
    }

    return (
        <CartContext.Provider value={{purchases, addPurchase, removeItem, isInCart, clear, getItemCount}}>
            {children}
        </CartContext.Provider>
    )

}