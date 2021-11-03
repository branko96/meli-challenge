import React from "react"
import "./styles.scss"
import { Button, Col, Row } from "react-bootstrap";
import Loading from "../Loading";
import { formatCurrency, getDecimals } from "../../utils/constants";
import { Product } from "../../models/product";

interface ProductCardDetailProps {
  product: Product
  isLoadingProduct: boolean
}

const ProductCardDetail = ({ product, isLoadingProduct }: ProductCardDetailProps) => {
    return (
        <div className="product_detail">
          <Row>
            <Col sm="9" md="9" lg="9" xl="9" xxl="9">
              <div className="product_detail_media">
                <Loading viewBox="0 0 500 600" width="500" height="600" show={isLoadingProduct}>
                  <img
                    src={product?.picture}
                    alt=""
                  />
                </Loading>
              </div>
              <div className="details text-left">
                <h2>Descripción del producto</h2>
                <Loading viewBox="0 0 600 900" width="600" height="900" show={isLoadingProduct}>
                  <p>
                    {product?.description}
                  </p>
                </Loading>
              </div>
            </Col>
            <Col sm="3" className="product_detail_info_col">
              <div className="product_detail_info">
                <Loading containerStyle={{paddingBottom: 40}} viewBox="0 0 90 75" width="90" height="75" show={isLoadingProduct}>
                  <div>
                    <h6>{product?.condition} - {product?.soldQuantity} vendidos</h6>
                    <h4>{product?.title}</h4>
                    <h1>{formatCurrency(product?.price?.amount)}<span>{getDecimals(product)}</span></h1>
                  </div>
                </Loading>
                <div className="d-grid gap-2">
                  <Button className="buy_button" variant="primary">Comprar</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
    )
}

export default ProductCardDetail
