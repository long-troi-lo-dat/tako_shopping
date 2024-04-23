import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

export const ProductDisplay = (props) => {
    const slideImages = [
        {
            url: require("../assets/img/team/chillies/khang.jpg"),
            name: '',
            desciption: ""
        },
        {
            url: require("../assets/img/team/chillies/nhim.jpg"),
            name: '',
            desciption: ""
        },
        {
            url: require("../assets/img/team/chillies/phuoc.jpg"),
            name: '',
            desciption: ""
        },
        {
            url: require("../assets/img/team/chillies/sifu.jpg"),
            name: '',
            desciption: ""
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="flex gap-8">
            <div className="">
                <div className="w-[590px] h-[600px] duration-500" style={{ backgroundImage: `url(${slideImages[currentIndex].url})` }}>
                </div>
                <div className="flex gap-2 mt-2">
                    {slideImages.map((slide, slideIndex) => (
                        <div className="w-[78.24px] h-[78.24px]" style={{ backgroundImage: `url(${slideImages[slideIndex].url})` }} key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
                    ))}
                </div>
            </div>
            <div className="">
                <h1 className="font-semibold text-2xl mb-3">{props.name}</h1>
                {/* <div>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
                    </svg>
                    <p>(25)</p>
                </div> */}
                <table className="border-2 border-[#02c4c1] w-3/4 text-left mb-3">
                    <thead>
                        <tr>
                            <th className="py-[5px] px-[15px]">Size</th>
                            <th className="py-[5px] px-[15px]">Giá bán</th>
                            <th className="py-[5px] px-[15px]">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-[5px] px-[15px]">35cm</td>
                            <td className="py-[5px] px-[15px]">265.000đ</td>
                            <td className="py-[5px] px-[15px]"></td>
                        </tr>
                        <tr>
                            <td className="py-[5px] px-[15px]">45cm</td>
                            <td className="py-[5px] px-[15px]">365.000đ</td>
                            <td className="py-[5px] px-[15px]"></td>
                        </tr>
                        <tr>
                            <td className="py-[5px] px-[15px]">55cm</td>
                            <td className="py-[5px] px-[15px]">465.000đ</td>
                            <td className="py-[5px] px-[15px]"></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div className="text-2xl text-[#02c4c1] font-bold mb-3">{product.new_price}</div>
                    <div className="flex gap-2 text-xs mb-3">
                        <button className="px-2 py-1 bg-[#ff6683] font-semibold text-white hover:bg-[#ff6683] hover:text-white transition-all ease-in duration-200">35cm</button>
                        <button className="px-2 py-1 border-[1px] font-semibold text-black hover:bg-[#ff6683] hover:text-white transition-all ease-in duration-200">45cm</button>
                        <button className="px-2 py-1 border-[1px] font-semibold text-black hover:bg-[#ff6683] hover:text-white transition-all ease-in duration-200">55cm</button>
                    </div>
                </div>
                <div className='w-3/4 bg-[#ff6683] mb-3'>
                    <button className="w-full py-2 text-white font-semibold duration-500 hover:bg-[#02c4c1]" onClick={(e) => { e.preventDefault(); addToCart(product.id) }}>THÊM VÀO GIỎ</button>
                </div>
                <div className='w-3/4 bg-[#02c4c1] mb-3 px-2 py-2.5 text-sm'>
                    <h1 className="text-center uppercase text-white font-semibold pb-2">Đặt hàng nhanh</h1>
                    <div className='text-center'>
                        <input type="text" placeholder='Nhập số điện thoại' className="w-2/3 outline-none pl-2 py-2" />
                        <button className="uppercase text-white bg-[#ff6683] p-2">GỬI</button>
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-between text-sm">
                    <div className="relative pl-6 w-1/2 mb-2 pr-4">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.3em"
                            width="1.3em"
                            className="absolute top-0 left-0"
                        >
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                        </svg>
                        Giao Hàng Nội Thành HCM Chỉ 30P
                    </div>
                    <div className="relative pl-6 w-1/2 mb-2 pr-4">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.3em"
                            width="1.3em"
                            className="absolute top-0 left-0"
                        >
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                        </svg>
                        100% Gòn Cao Cấp
                    </div>
                    <div className="relative pl-6 w-1/2 mb-2 pr-4">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.3em"
                            width="1.3em"
                            className="absolute top-0 left-0"
                        >
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                        </svg>
                        Gói Quà - Nén Nhỏ Gấu - Tặng Thiệp Miễn Phí
                    </div>
                    <div className="relative pl-6 w-1/2 mb-2 pr-4">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.3em"
                            width="1.3em"
                            className="absolute top-0 left-0"
                        >
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                        </svg>
                        Bảo Hành Đường Chỉ Vĩnh Viễn - Bảo Hành Bông Gấu 1 năm
                    </div>
                    <div className="relative pl-6 w-1/2 mb-2 pr-4">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.3em"
                            width="1.3em"
                            className="absolute top-0 left-0"
                        >
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                        </svg>
                        Địa Chỉ Shop Dễ Tìm - Có Chỗ Để Xe Ô Tô Miễn Phí
                    </div>
                    <div className="relative pl-6 w-1/2 mb-2 pr-4">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.3em"
                            width="1.3em"
                            className="absolute top-0 left-0"
                        >
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                        </svg>
                        Hơn 500 Mẫu Có Sẵn tại Shop
                    </div>
                </div>
                <div className='w-full mb-3 text-sm'>
                    <h2 className="text-lg text-[#ff6683] font-semibold">Hồ Chí Minh</h2>
                    <p className="flex items-center">
                        <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
                        </svg>
                        114 Cách Mạng Tháng 8, Phường 7, Quận 3, Hồ Chí Minh - 093.828.6616
                    </p>
                    <p className="flex items-center">
                        <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
                        </svg>
                        228 Âu Cơ, Phường 9, Tân Bình, Hồ Chí Minh - 038.699.6616
                    </p>
                    <p className="flex items-center">
                        <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
                        </svg>
                        77 Bàu Cát 1, Phường 14, Tân Bình, Hồ Chí Minh - 09.6618.6616
                    </p>
                    <p className="flex items-center">
                        <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
                        </svg>
                        555 Quang Trung, Phường 10, Gò Vấp, Hồ Chí Minh - 037.838.6616
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProductDisplay