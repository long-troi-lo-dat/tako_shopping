import { Link } from "react-router-dom";
import "../index.css";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "../axios";

const Header = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const { cartItems } = useContext(ShopContext);

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const filterProducts = (value) => {
        const filtered = data.filter((product) => {
            return (
                value && product.name && product.name.toLowerCase().includes(value)
            );
        });
        setFilteredProducts(filtered);
    };

    const handleChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchInput(value);
        filterProducts(value);
    };

    const getAllProducts = () => {
        axios
            .get(`/api/products`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Fetch data failed! :", err);
            });
    };
    const handleAuth = () => {
        axios
            .get("/checkauth", {
                headers: {
                    "access-token": localStorage.getItem("token"),
                },
            })
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    setUser(res.user[0]);
                    console.log(res.user[0], "oasdignoaisndgiasongd");
                } else {
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getAllProducts();
        handleAuth();
        console.log(user)
    }, []);

    return (
        <header className="w-4/5 m-auto">
            <div className="flex items-center justify-between h-20">
                <div className="flex items-center">
                    <div className="h-full w-72 mr-6 py-2">
                        <a href="/#" rel="home" className="flex items-center">
                            <img
                                loading="lazy"
                                src={`${process.env.REACT_APP_URL_API}/src/images/GAUBONG-THEOYEUCAUCUANGUOILA.png`}
                                alt="Gấu bông online"
                                className="h-16"
                            />
                            <span className="text-[#02c4c1] uppercase text-xl font-bold">
                                Gấu Bông Online
                            </span>
                        </a>
                    </div>
                </div>
                <div className="relative border rounded-sm border-gray-200 hover:border-gray-400 active:border-gray-400 focus-within:border-gray-400 bg-gray-100 p-2 flex ">
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1em"
                        className="mr-2"
                    >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="lg:w-80 outline-none bg-gray-100"
                        value={searchInput}
                        onChange={handleChange}
                    />
                    {filteredProducts.length > 0 ? (
                        <div className="absolute bg-black h-auto w-full top-[51.6px] left-0 z-50">
                            {filteredProducts.map((item, i) => {
                                return (
                                    <div className="w-64 text-center bg-white rounded-2xl mb-8 shadow-xl pb-4 hover:drop-shadow-2xl transition-all ease-in-out duration-500">
                                        <Link
                                            to={`/san-pham/${item.id}`}
                                            onClick={window.scrollTo(0, 0)}
                                            className=""
                                        >
                                            <img
                                                src={`${process.env.REACT_APP_URL_API}/products/${item.id}/${item.thumbnail}`}
                                                alt="nothing"
                                                className="rounded-2xl"
                                            />
                                        </Link>
                                        <p className="pt-2">
                                            <Link
                                                to={`/san-pham/${item.id}`}
                                                className="hover:text-[#02c4c1] transition-all ease-in duration-200 font-medium block lowercase first-letter:uppercase min-h-12"
                                            >
                                                {item.name}
                                            </Link>
                                        </p>
                                        <p className="font-semibold py-2 cursor-default">
                                            {Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(item.price)}
                                        </p>
                                        <div className="flex justify-center gap-2 text-xs">
                                            <button className="px-1.5 py-0.5 bg-red-400 rounded-md text-white">
                                                35cm
                                            </button>
                                            <button className="px-1.5 py-0.5 border-[1px] border-red-500 rounded-md text-black hover:bg-red-400 hover:text-white transition-all ease-in duration-200">
                                                45cm
                                            </button>
                                            <button className="px-1.5 py-0.5 border-[1px] border-red-500 rounded-md text-black hover:bg-red-400 hover:text-white transition-all ease-in duration-200">
                                                55cm
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex items-center">
                    <div className="flex relative mr-4">
                        <Link to="/cart">Giỏ hàng</Link>
                        <p className="absolute text-xs top-0 right-[-8px]">
                            {totalQuantity}
                        </p>
                    </div>
                    <div className="">
                        <Link
                            to="/login"
                            className="font-medium hover:opacity-60 px-2 py-4 -mr-2"
                        >
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
