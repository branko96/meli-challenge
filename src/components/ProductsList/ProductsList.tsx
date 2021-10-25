import React from "react"
import "./styles.scss"
import ProductCard from "../ProductCard";

const ProductsList = () => {
    return (
        <div className="products_list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductsList
