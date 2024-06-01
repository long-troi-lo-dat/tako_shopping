import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

export const CartItems = () => {
    const [cartItems, setCartItems] = useState(() => { return JSON.parse(sessionStorage.getItem('cartItems')) || [] })

    const { addToCart, removeFromCart, deleteFromCart, clearCart, getCartTotal } = useContext(ShopContext)

    useEffect(() => {
        const cartItems = sessionStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, [cartItems]);

    return (
        cartItems.length ?
            (
                <div className="w-4/5 m-auto flex">
                    <div className="w-3/5">
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
                                                <svg
                                                    viewBox="0 0 64 64"
                                                    fill="currentColor"
                                                    height="2em"
                                                    width="2em"
                                                    onClick={() => { deleteFromCart(item) }}
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
                    <div className="w-2/5">
                        <div className="">
                            <div className="text-base text-gray-700 uppercase bg-gray-50 h-10 font-bold leading-[40px]">
                                Thông tin giao hàng
                            </div>
                            <div>
                                <form class="max-w-md mx-auto">
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                                        </div>
                                    </div>
                                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
            )
            :
            ""
    )
}

export default CartItems
