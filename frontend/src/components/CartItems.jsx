import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

// export const CartItems = () => {
//     return (
//         <></>
//     )
// }
export const CartItems = () => {
    const { getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div>
            <div>
                <p>Products</p>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartItems.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div>
                                <img src={e.image} alt="nothing" loading="lazy" />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}</p>
                                <p>
                                    <svg
                                        viewBox="0 0 64 64"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        onClick={() => { removeFromCart(e.id) }}
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                            d="M18.947 17.153l26.098 25.903M19.045 43.153l25.902-26.097"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                            d="M62.998999999999995 32 A30.999 30.999 0 0 1 32 62.998999999999995 A30.999 30.999 0 0 1 1.0010000000000012 32 A30.999 30.999 0 0 1 62.998999999999995 32 z"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div>
                <div>
                    <h1>Cart Totals</h1>
                    <div>
                        <div>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div>
                    <p>If you have a promo code, Enter it here</p>
                    <div>
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartItems
