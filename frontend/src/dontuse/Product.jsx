import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "./breadcrum/breadcrum";
import ProductDisplay from "../dontuse/ProductDisplay";
import Service from "../components/Service";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts";

const Product = async () => {
    const { productId } = useParams();
    // const res = await axios.get(`/products/${productId}`)

    // const product = await res.data;

    const { products } = useContext(ShopContext)
    const product = products.find((e) => e.id === Number(productId))

    return (
        <div className="mx-48">
            <Breadcrum product={product} />
            <Service />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default Product;