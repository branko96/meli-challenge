import React from "react"
import "./styles.scss"
import shippingIcon from "../../assets/ic_shipping.png"
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Loading from "../Loading";
import { formatCurrency } from "../../utils/constants";
import PRODUCT_CARD_STYLES from "./styles";
import { Product } from "../../models/product";

interface ProductCardProps {
  isLast: boolean
  product?: Product | undefined
  isProductLoading: boolean
}

const ProductCard = ({ product, isLast, isProductLoading }: ProductCardProps) => {
  const history = useHistory();

  return (
        <div className="product" onClick={() => history.push(`/items/${product?.id}`)}>
          <div className="product_card">
            <Row className="product_card_row">
              <Col sm="6" md="6" xl="2" xxl="2" lg="4">
                <div>
                  <Loading containerStyle={PRODUCT_CARD_STYLES.LOADING_PICTURE} viewBox="0 0 210 210" width="210" height="210" show={isProductLoading}>
                    <img src={product?.picture} alt=""/>
                  </Loading>
                </div>
              </Col>
              <Col sm="6" md="8" lg="8" xxl="8">
                  <div className="product_info">
                      <div className="product_price">
                        <Loading containerStyle={PRODUCT_CARD_STYLES.LOADING_INFO} viewBox="0 0 100 10" width="100" height="10" show={isProductLoading}>
                          <>
                            <h3>{formatCurrency(product?.price?.amount)}</h3>
                            {product?.freeShipping && <img src={shippingIcon} className="icon_shipping" alt=""/>}
                          </>
                        </Loading>
                      </div>
                    <h5>{product?.title}</h5>
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
