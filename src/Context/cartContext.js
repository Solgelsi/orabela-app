import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [purchases, setPurchase] = useState([]);

    const addPurchase = (purchase) => {
        isInCart(purchase.item.id) ?
            setPurchase(purchases.map(p => p.item.id === purchase.item.id ? { ...p, cantidad: purchase.cantidad } : p))
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
    }

    const getItemCount = () => {
        return purchases.reduce((val, current) => val + current.cantidad, 0);
    }

    const getTotal = () => {
        return purchases.reduce((val, current) => val + (current.item.price * current.cantidad),0);
    }

    return (
        <CartContext.Provider value={{ purchases, addPurchase, removeItem, isInCart, clear, getItemCount, getTotal }}>
            {children}
        </CartContext.Provider>
    )

}