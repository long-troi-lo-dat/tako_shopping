import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";

const ShopCategory = (props) => {
    const { data_product } = useContext(ShopContext)
    if (data_product.length > 1) {
        return (
            <div className="bg-white w-full h-auto px-48 my-10">
                <div id="shop-category" >
                    <div className="flex justify-between items-center">
                        <p>
                            <span className="font-[600]">Showing 1-12</span> out of 36 products
                        </p>
                        <div className="px-5 py-1 border-[1px] rounded-[40px]">
                            Sort by
                        </div>
                    </div>
                    <div id="shop-category-products" className="flex flex-wrap justify-between my-4">
                        {data_product.map((item, i) => {
                            if (props.category === item.category) {
                                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                            } else {
                                return null
                            }
                        })}
                    </div>
                    <div className="flex justify-center items-center mx-auto my-5 w-[213px] h-[59px] rounded-[75px] bg-[#ededed] text-[18px] font-[500] text-[#787878]">
                        Xem thêm
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default ShopCategory;