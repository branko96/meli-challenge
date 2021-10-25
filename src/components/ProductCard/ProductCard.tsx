import React from "react"
import "./styles.scss"
import shippingIcon from "../../assets/ic_shipping.png"

const ProductCard = () => {
    return (
        <>
            <div className="product">
                <div className="product_media">
                    <img src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" alt=""/>
                </div>
                <div className="product_info">
                    <div className="product_price">
                        <h3>$1.980</h3>
                        <img src={shippingIcon} className="icon_shipping" alt=""/>
                    </div>
                    <h5>Apple iPod Touch 32GB Negro</h5>
                </div>
                <div className="product_location">
                    <h5>Capital Federal</h5>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default ProductCard
