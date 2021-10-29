import React from "react"
import "./styles.scss"
import shippingIcon from "../../assets/ic_shipping.png"
import {Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

interface ProductCardProps {
  isLast: boolean
}

const ProductCard = ({isLast}: ProductCardProps) => {
  const history = useHistory();

  return (
        <div className="product" onClick={() => history.push("/items/1")}>
          <div className="product_card">
            <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Col sm="6" md="6" xl="2" xxl="2" lg="4">
                <img src="http://http2.mlstatic.com/D_960745-MLA46114990453_052021-I.jpg" alt=""/>
              </Col>
              <Col sm="6" md="8" lg="8" xxl="8">
                <div className="product_info">
                  <div className="product_price">
                    <h3>$ 1.980</h3>
                    <img src={shippingIcon} className="icon_shipping" alt=""/>
                  </div>
                  <h5>Apple iPod Touch 32GB Negro</h5>
                </div>
              </Col>
              <Col sm="6" md="2" xxl="2">
                <div className="product_location">
                  <h6>Capital Federal</h6>
                </div>
              </Col>
            </Row>
          </div>
          {!isLast && <hr/>}
        </div>
    )
}

export default ProductCard
