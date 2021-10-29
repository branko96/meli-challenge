import React from "react"
import "./styles.scss"
import {Button, Col, Row} from "react-bootstrap";
import ImageHoverZoom from "../ImageHoverZoom";

const ProductCardDetail = () => {
    return (
        <div className="product_detail">
          <Row>
            <Col sm="9" md="9" lg="9" xl="9" xxl="9">
              <div className="product_detail_media">
                <ImageHoverZoom imagePath="https://www.insiemeincucina.it/images/our-team/pic1.jpg" />
              </div>
              <div className="details text-left">
                <h2>Descripción del producto</h2>
                <p>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                  and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                  foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
                  in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                  These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business
                  it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always
                  holds in these matters to this principle of selection:
                  he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                </p>
              </div>
            </Col>
            <Col sm="3" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="product_detail_info">
                <h6>Nuevo - 234 vendidos</h6>
                <h4>Deco Reverse Sombrero Oxford</h4>
                <h1>$ 1.980<span>00</span></h1>
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
