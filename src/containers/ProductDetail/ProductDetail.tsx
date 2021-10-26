import React from "react"
import Navbar from "../../components/Navbar";
import {Link, useParams} from "react-router-dom";
import "./styles.scss"
import ProductCardDetail from "../../components/ProductCardDetail";
import Container from "../../components/Container";

type ProductDetailParams = {
  id: string;
}

const ProductDetail = () => {
  const { id } = useParams<ProductDetailParams>()
  console.log(id);
  return (
        <div className="product_detail_container">
          <Navbar />
          <Container>
            <Link to="/">Home</Link>
            <span className="breadcrum">{"Electronica, Audio y video > iPod > Reproductores > iPod Touch > 32 GB"}</span>
            <div className="content">
                    <ProductCardDetail />
                </div>
            </Container>
        </div>
    )
}

export default ProductDetail
