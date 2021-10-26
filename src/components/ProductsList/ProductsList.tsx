import React from "react"
import "./styles.scss"
import ProductCard from "../ProductCard";

const ProductsList = () => {
    return (
        <div className="products_list">
            <ProductCard isLast={false} />
            <ProductCard isLast={false} />
            <ProductCard isLast={true} />
        </div>
    )
}

export default ProductsList
