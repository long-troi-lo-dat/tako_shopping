import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

export const CartItems = () => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    const { addToCart, removeFromCart, clearCart, getCartTotal } = useContext(ShopContext)

    const calculateTotalPrice = (price, quantity) => {
        return price * quantity;
    };

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, [cartItems]);

    return (
        cartItems.length ?
            (
                <div className="mx-48">
                    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sản phẩm
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tên
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giá
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số lượng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Thành tiền
                                </th>
                                <th scope="col" className="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4">
                                            <img className="m-auto" width="120px" height="120px" src={`${process.env.REACT_APP_URL_API}/products/${item.id}/${item.thumbnail}`} alt="nothing" loading="lazy" />
                                        </th>
                                        <td className="px-6 py-4 lowercase first-letter:uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-2xl mr-4 font-bold" onClick={() => { removeFromCart(item) }}>-</button>
                                            <span className="">{item.quantity}</span>
                                            <button className="text-2xl ml-4 font-bold" onClick={() => { addToCart(item) }}>+</button>
                                        </td>
                                        <td className="px-6 py-4">
                                            {Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(calculateTotalPrice(item.price, item.quantity))}
                                        </td>
                                        <td className="px-6 py-4">
                                            <svg
                                                viewBox="0 0 64 64"
                                                fill="currentColor"
                                                height="2em"
                                                width="2em"
                                                onClick={() => { removeFromCart(item) }}
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
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {
                        cartItems.length > 0 ? (
                            <div className="flex flex-col justify-between items-center">
                                <h1 className="text-lg font-bold">Tổng cộng: {Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(getCartTotal())}</h1>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        clearCart()
                                    }}
                                >
                                    Clear cart
                                </button>
                            </div>
                        ) : (
                            <h1 className="text-lg font-bold">Your cart is empty</h1>
                        )
                    }
                </div>
            )
            :
            ""
    )
}

export default CartItems
