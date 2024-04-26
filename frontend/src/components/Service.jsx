import React from 'react'

export const Service = (props) => {
    return (
        <div className="my-10 h-auto">
            <div className="flex justify-around font-normal duration-500">
                <div className="">
                    <a href="/#" className='hover:text-[#02c4c1]'>
                        <img src={`${process.env.REACT_APP_URL_API}/images/cate/giao-hang-tan-nha.png`} alt="nothing" loading="lazy" className="h-16 w-auto m-auto" />
                        <span className="">Giao hàng tận nhà</span>
                    </a>
                </div>
                <div className="">
                    <a href="/#" className="hover:text-[#02c4c1]">
                        <img src={`${process.env.REACT_APP_URL_API}/images/cate/boc-qua-gia-re.png`} alt="nothing" loading="lazy" className="h-16 w-auto m-auto" />
                        <span className="">Bọc quà giá rẻ</span>
                    </a>
                </div>
                <div className="">
                    <a href="/#" className="hover:text-[#02c4c1]">
                        <img src={`${process.env.REACT_APP_URL_API}/images/cate/tang-thiep-mien-phi.png`} alt="nothing" loading="lazy" className="h-16 w-auto m-auto" />
                        <span className="">Tặng thiệp miễn phí</span>
                    </a>
                </div>
                <div className="">
                    <a href="/#" className="hover:text-[#02c4c1]">
                        <img src={`${process.env.REACT_APP_URL_API}/images/cate/giat-gau-bong.png`} alt="nothing" loading="lazy" className="h-16 w-auto m-auto" />
                        <span className="">Giặt gấu bông</span>
                    </a>
                </div>
                <div className="">
                    <a href="/#" className="hover:text-[#02c4c1]">
                        <img src={`${process.env.REACT_APP_URL_API}/images/cate/nen-nho-gau.png`} alt="nothing" loading="lazy" className="h-16 w-auto m-auto" />
                        <span className="">Nén nhỏ gấu</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Service
