import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import all_product from '../Assets/all_product'
import remove_icon from '../Assets/cart_cross_icon.png'


import './CartItems.css'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount, getTotalCartItems} = useContext(ShopContext);
    const shipping_cost = 5.00;
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />  
        
        {all_product.map((e)=>{
            if(cartItems[e.id] > 0) {
                return ( 
                    <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price.toFixed(2)}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                            {/* <p>${e.new_price * cartItems[e.id]}</p> */}
                            <img class='carticon-remove-icon' src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}} />
                        </div>
                        <hr />
                    </div>
                )
            } else {
                return (null);
            }
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart TOTALS:</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Number of items</p>
                        <p>{getTotalCartItems()}</p>
                    </div>
                    <div className="cartitems-total-item">
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount().toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping</p>
                        <p>${shipping_cost.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${(getTotalCartAmount()+shipping_cost).toFixed(2)}</h3>
                    </div>
                    <hr />
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here!</p>
                <div className="cartitems-promobox">
                    <input type='text' placeholder='Enter Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default CartItems