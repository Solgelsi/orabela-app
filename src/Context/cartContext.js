import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [purchases, setPurchase] = useState([]);
    const [buyer, setBuyer] = useState({});

    const addPurchase = (purchase) => {
        isInCart(purchase.item.id) ?
            setPurchase(purchases.map(p => p.item.id === purchase.item.id ? { ...p, quantity: purchase.quantity } : p))
            : setPurchase([...purchases, purchase]);
    }

    const removeItem = (id) => {
        setPurchase(purchases.filter(p => p.item.id !== id));
    }

    const isInCart = (id) => {
        return purchases.some(x => x.item.id === id);
    }

    const clear = () => {
        setPurchase([]);
        setBuyer({});
    }

    const getItemCount = () => {
        return purchases.reduce((val, current) => val + current.quantity, 0);
    }

    const getSubTotal = () => {
        return purchases.reduce((val, current) => val + (current.item.price * current.quantity), 0);
    }

    const getTotal = () => {
        return getSubTotal() * 1.21;
    }

    return (
        <CartContext.Provider value={{ purchases, addPurchase, removeItem, isInCart, clear, getItemCount, getSubTotal, getTotal, buyer, setBuyer }}>
            {children}
        </CartContext.Provider>
    )

}