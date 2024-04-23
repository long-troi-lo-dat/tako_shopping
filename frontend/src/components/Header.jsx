import { Link } from "react-router-dom"
import '../index.css'
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

const Header = () => {

    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <header className="w-full">
            <div className="flex items-center justify-between mx-48 h-20">
                <div className="flex items-center">
                    <div className="h-full w-36 mr-6 py-2">
                        <Link to="/">
                            <img src={require('../assets/img/logo-1200x600.png')} alt="No" className="w-32 p-2" />
                        </Link>
                    </div>
                    <div className="border rounded-sm border-gray-200 hover:border-gray-400 active:border-gray-400 focus-within:border-gray-400 bg-gray-100 p-2 flex ">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.5em"
                            width="1em"
                            className="mr-2"
                        >
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                        </svg>
                        <input type="text" placeholder="Search" className="w-80 outline-none bg-gray-100" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex relative mr-4">
                        <Link to="/cart">Cart</Link>
                        <p className="absolute text-xs top-0 right-[-8px]">{getTotalCartItems()}</p>
                    </div>
                    <div className="">
                        <Link to="/login" className="font-medium hover:opacity-60">Login | Sign up</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header