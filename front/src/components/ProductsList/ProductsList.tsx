import React from "react"
import "./styles.scss"
import ProductCard from "../ProductCard";
import { Product } from "../../models/product";

interface ProductsListProps {
  products: Product[]
  isProductsLoading: boolean
}

const ProductsList = ({ products, isProductsLoading }: ProductsListProps) => {
  if (isProductsLoading || !products) {
    return (
      <div>
        <ProductCard isProductLoading={isProductsLoading} isLast={false} />
        <ProductCard isProductLoading={isProductsLoading} isLast={false} />
        <ProductCard isProductLoading={isProductsLoading} isLast={false} />
        <ProductCard isProductLoading={isProductsLoading} isLast={true} />
      </div>
    )
  }

    return (
        <div className="products_list">
          {products.map((product, index) => {
            return <ProductCard isProductLoading={false} product={product} isLast={index === products.length -1} />
          })}
        </div>
    )
}

export default ProductsList
