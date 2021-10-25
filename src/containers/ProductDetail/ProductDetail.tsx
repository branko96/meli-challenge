import React from "react"
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import "./styles.scss"
import {Container} from "react-bootstrap";
import ProductCardDetail from "../../components/ProductCardDetail";

const ProductDetail = () => {
    return (
        <div className="product_detail_container">
            <Navbar />
            <Container>
                <Link to="/">Home</Link>
                <span className="breadcrum">{"Electronica, Audio y video > iPod > Reproductores > iPod Touch > 32 GB"}</span>
            </Container>
            <Container>
                <div className="content">
                    <ProductCardDetail />
                </div>
            </Container>
        </div>
    )
}

export default ProductDetail
