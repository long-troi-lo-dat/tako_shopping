import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "../axios";


const Cabybara = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`/api/products/capybara`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Fetch data failed! :", err);
            });
    }, []);
    return (
        <div className="w-full mb-10 m-auto">
            <h1 className="text-2xl text-center text-red-500 uppercase font-bold border-b-[1px] border-b-[#02c4c1]">Bộ sưu tập Cabybara</h1>
            <div className="flex flex-wrap justify-between my-4">
                {data.slice(0, 4).map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} thumbnail={item.thumbnail} price={item.price} delay={i * 50} />
                })}
            </div>
            <button className="mt-8 bg-red-300 border-2 rounded-xl px-4 py-2 text-white font-medium hover:bg-[#02c4c1] transition all ease-out duration-200">XEM TẤT CẢ BỘ SƯU TẦM CABYBARA</button>
        </div>
    )
}
export default Cabybara