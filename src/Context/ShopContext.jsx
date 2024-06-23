import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

function getDefaultCart() {
    let cart = {};
    for(let index = 0; index < (all_product.length+1); index++) {
        cart[index] = 0
    } // end for loop
    return cart;
}

function getDefaultUser() {
    let user = {}
    user.id = 'jmrourke';
    user.name = 'James M. Rourke';
    user.status = 'Retired'
    console.log("User Below");
    console.log(user);
    return user;
}



const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [user, setUser] = useState(getDefaultUser());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {all_product, cartItems, user, addToCart, removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;