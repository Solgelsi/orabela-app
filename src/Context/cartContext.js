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

    return (
        <CartContext.Provider value={{purchases, addPurchase, removeItem, isInCart, clear}}>
            {children}
        </CartContext.Provider>
    )

}