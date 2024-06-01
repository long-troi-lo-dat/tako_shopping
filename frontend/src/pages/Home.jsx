import Slider from '../components/Slider';
import Cabybara from '../components/Cabybara';
import NewsLetter from '../components/NewsLetter';
import Service from '../components/Service';


const Home = () => {
    return (
        <>
            <div className="bg-white">
                <div>
                    <div className="w-full h-[calc(100vh-144px)] relative group">
                        <Slider />
                    </div>
                </div>
                <div className="w-4/5 h-auto m-auto">
                    <div className="">
                        <Service />
                    </div>
                    <div className="">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-1/3 p-4">
                                <a href="/#" className="w-full h-full">
                                    <img src={`${process.env.REACT_APP_URL_API}/cate/gaubong1.png`} alt="nothing" loading='lazy' className="transition-all duration-300 ease-in hover:transform hover:scale-105" />
                                </a>
                            </div>
                            <div className="w-1/3 p-4">
                                <a href="/#">
                                    <img src={`${process.env.REACT_APP_URL_API}/cate/gaubong3.png`} alt="nothing" loading='lazy' className="transition-all duration-300 ease-in hover:transform hover:scale-105" />
                                </a>
                            </div>
                            <div className="w-1/3 p-4">
                                <a href="/#">
                                    <img src={`${process.env.REACT_APP_URL_API}/cate/thu-bong-cute.jpg`} alt="nothing" loading='lazy' className="transition-all duration-300 ease-in hover:transform hover:scale-105" />
                                </a>
                            </div>
                            <div className="w-1/3 p-4">
                                <a href="/#">
                                    <img src={`${process.env.REACT_APP_URL_API}/cate/gaubong5.png`} alt="nothing" loading='lazy' className="transition-all duration-300 ease-in hover:transform hover:scale-105" />
                                </a>
                            </div>
                            <div className="w-1/3 p-4">
                                <a href="/#">
                                    <img src={`${process.env.REACT_APP_URL_API}/cate/gaubong4.png`} alt="nothing" loading='lazy' className="transition-all duration-300 ease-in hover:transform hover:scale-105" />
                                </a>
                            </div>
                            <div className="w-1/3 p-4">
                                <a href="/#">
                                    <img src={`${process.env.REACT_APP_URL_API}/cate/thu-bong-theo-mau-sac.png`} alt="nothing" loading='lazy' className="transition-all duration-300 ease-in hover:transform hover:scale-105" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <Cabybara />
                </div>
                <NewsLetter />
                <div className="w-4/5 h-auto m-auto">
                    <div className="">
                        <h1 className="text-2xl text-center text-red-500 uppercase font-bold border-b-[1px] border-b-[#02c4c1]">CHUYỆN NHÀ GẤU</h1>
                        <div className="grid grid-cols-2 mt-4 gap-4">
                            <div className="flex flex-auto">
                                <img src={`${process.env.REACT_APP_URL_API}/news/Ateddy-chan-love-2-200x120.jpg`} alt="nothing" loading="lazy" className="h-28 mr-4" />
                                <div className="">
                                    <h3 className="text-base">MẸO NHẬN BIẾT 1 SHOP GẤU BÔNG UY TÍN</h3>
                                    <p className="text-sm">Hiện nay, gấu bông được bày bán ở rất nhiều nơi từ các shop, cửa hàng cao cấp đến chợ, vỉa hè… Tuy nhiên để chọn được một chú gấu chất lượng...</p>
                                </div>
                            </div>
                            <div className="flex flex-auto">
                                <img src={`${process.env.REACT_APP_URL_API}/news/do-kich-thuoc-teddy-200x120.jpg`} alt="nothing" loading="lazy" className="h-28 mr-4" />
                                <div className="">
                                    <h3 className="text-base">Mách Bạn Cách Đo Kích Thước Gấu Bông Chính Xác Nhất</h3>
                                    <p className="text-sm">Dù sở hữu bao nhiêu chú gấu bông, thú nhồi bông lớn nhỏ, liệu bạn đã biết cách đo kích thước gấu bông chính xác nhất? Với bài viết này, Gấu Bông Online...</p>
                                </div>
                            </div>
                            <div className="flex flex-auto">
                                <img src={`${process.env.REACT_APP_URL_API}/news/teddy-logo-baby-12-200x120.jpg`} alt="nothing" loading="lazy" className="h-28 mr-4" />
                                <div className="">
                                    <h3 className="text-base">Mách Bạn Cách Đo Kích Thước Gấu Bông Chính Xác Nhất</h3>
                                    <p className="text-sm">Dù sở hữu bao nhiêu chú gấu bông, thú nhồi bông lớn nhỏ, liệu bạn đã biết cách đo kích thước gấu bông chính xác nhất? Với bài viết này, Gấu Bông Online...</p>
                                </div>
                            </div>
                            <div className="flex flex-auto">
                                <img src={`${process.env.REACT_APP_URL_API}/news/gau-teddy-mr-bean-7-200x120.jpg`} alt="nothing" loading="lazy" className="h-28 mr-4" />
                                <div className="">
                                    <h3 className="text-base">Gấu Teddy Mr Bean – món quà yêu thương dành cho mọi lứa tuổi</h3>
                                    <p className="text-sm">Gấu Teddy Mr Bean không phải là gấu hình ngài Bean, mà đó là chú gấu nhồi bông đồng hành cùng Mr. Bean trong bộ phim hài cùng tên được rất nhiều người yêu...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        {/* <Carousel /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home