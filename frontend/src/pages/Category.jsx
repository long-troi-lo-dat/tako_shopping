import axios from '../axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const keyword = params.keyword;

    useEffect(() => {
        axios.get(`/api/products/${keyword}`)
            .then((res) => {
                console.log(res.data, "data res");
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch data failed! :", err);
                setLoading(false);
            });
    }, [keyword]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (data.length > 0) {
        return (
            <div className="bg-white w-full h-auto px-48 my-10">
                <div id="shop-category" >
                    <div className="flex justify-between items-center">
                        <p>
                            <span className="font-[600]">Showing 1-12</span> out of {data.length} products
                        </p>
                        <div className="px-5 py-1 border-[1px] rounded-[40px]">
                            Sort by
                        </div>
                    </div>
                    <div id="shop-category-products" className="flex flex-wrap justify-between my-4">
                        {data.map((item) => (
                            <Item key={item.id} id={item.id} name={item.name} thumbnail={item.thumbnail} price={item.price} />
                        ))}
                    </div>
                    <div className="flex justify-center items-center mx-auto my-5 w-[213px] h-[59px] rounded-[75px] bg-[#ededed] text-[18px] font-[500] text-[#787878]">
                        Xem thêm
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ProductList;
