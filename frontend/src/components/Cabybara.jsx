import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "../axios";


const Cabybara = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/capybara`)
            .then((res) => {
                console.log(res.data, "data res");
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch data failed! :", err);
                setLoading(false);
            });
    }, []);
    return (
        <div className="mb-10">
            <h1 className="text-2xl text-center text-red-500 uppercase font-bold border-b-[1px] border-b-[#02c4c1]">Bộ sưu tập Cabybara</h1>
            <div className="flex flex-wrap justify-between my-8">
                {data.slice(0, 4).map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} thumbnail={item.thumbnail} price={item.price} />
                })}
                <button className="mx-auto mt-8 bg-red-300 border-2 rounded-xl px-4 py-2 text-white font-medium hover:bg-[#02c4c1] transition all ease-out duration-200">XEM TẤT CẢ BỘ SƯU TẦM CABYBARA</button>
            </div>
        </div>
    )
}
export default Cabybara