import React, { useContext } from 'react'
import Item from './Item'
import { ShopContext } from '../context/ShopContext'


export const RelatedProducts = () => {
    const { products } = useContext(ShopContext)
    return (
        <div>
            <h1>Related Products</h1>
            <hr />
            <div>
                {products.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} thumbnail={item.thumbnail} price={item.price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts