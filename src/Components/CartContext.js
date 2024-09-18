import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCartMedicine = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId)); // Ensure you use the correct key here
    };
    const removeFromCartLabtest = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.test_id !== itemId)); // Ensure you use the correct key here
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCartMedicine, removeFromCartLabtest }}>
            {children}
        </CartContext.Provider>
    );
};

