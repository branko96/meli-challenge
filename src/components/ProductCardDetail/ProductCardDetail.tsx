import React from "react"
import "./styles.scss"
import { Button } from "react-bootstrap";

const ProductCardDetail = () => {
    return (
        <>
            <div className="product_detail">
                <div className="product_detail_media">
                    <img src="https://www.insiemeincucina.it/images/our-team/pic1.jpg" alt=""/>
                </div>
                <div className="product_detail_info">
                    <h5>Apple iPod Touch 32GB Negro Libre Fábrica</h5>
                    <h1>$1.980</h1>
                    <div className="d-grid gap-2">
                        <Button className="buy_button" variant="primary">Comprar</Button>
                    </div>
                </div>
            </div>
            <div className="details">
                <h2>Descripción del producto</h2>
                <p>
                    I know that changing colors is very difficult in react-bootstrap,
                    but I would like to have my button with a color that isn't a primary color.
                    How can I do this in JS/SCSS?
                </p>
            </div>
        </>
    )
}

export default ProductCardDetail
