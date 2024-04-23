import { useParams } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox";
import ItemDetail from "../components/ItemDetail";
import Service from "../components/Service";
import Breadcrum from "../breadcrum/breadcrum";
import axios from "../axios";
import { useEffect, useState } from "react";

const Shop = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`/api/product/${productId}`)
            .then((res) => {
                setProduct(res.data[0])
            })
            .catch((err) => {
                console.error("Fetch data failed! :", err)
            })
    }, [productId]);

    return (
        <div className="mx-48">
            <Breadcrum product={product} />
            <Service />
            <ItemDetail product={product} />
            <DescriptionBox />
        </div>
    )
}

export default Shop;