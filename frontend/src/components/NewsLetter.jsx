import React from "react";

const NewsLetter = () => {
    return (
        <div className="mb-10 -mx-48">
            <div className="flex flex-col items-center m-auto px-[140px] py-10 gap-[30px] bg-gradient-to-b from-pink-200 via-gray-100 to-green-200 ">
                <h1 className="text-[#454545] text-[40px] font-[600]">Nhận thông báo về các ưu đãi qua mail</h1>
                <p className="text-[#454545] text-[20px]">Tham gia để nhận thông báo mới nhất</p>
                <div className="flex items-center justify-between bg-[white] w-[730px] h-[70px] rounded-[80px] border-[1px]">
                    <input type="email" placeholder="Email của bạn" className="w-[500px] ml-[30px] border-none text-[#616161] text-[16px] outline-none" />
                    <button className="w-[210px] h-[70px] rounded-[80px] bg-black text-[16px] text-white cursor-pointer">Tham gia</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter