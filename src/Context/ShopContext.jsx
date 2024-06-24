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

    function addToCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    function removeFromCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    function getTotalCartAmount() {
        let totalAmount = 0;
        for(const index in cartItems) {
            if(cartItems[index] > 0) {
                let itemInfo = all_product.find((product)=>product.id === Number(index))
                totalAmount += itemInfo.new_price * cartItems[index]
            } // end if
        } // end for loop
        return totalAmount;
    } // end of getTotalCartAmount function


    function getTotalCartItems() {
        let totalItems = 0;
        for(const index in cartItems) {
            totalItems += cartItems[index]
        } //end for loop
        return totalItems;
    }


    const contextValue = {all_product, cartItems, user, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;