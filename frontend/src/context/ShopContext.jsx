import React, { createContext, useEffect, useState, useDebugValue } from "react";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const [auth, setAuth] = useState({});

    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(sessionStorage.getItem('cartItems')) || []
    });

    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const deleteFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const contextValue = { cartItems, addToCart, removeFromCart, deleteFromCart, clearCart, getCartTotal, auth, setAuth };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider