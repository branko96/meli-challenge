import React from "react"
import Navbar from "../../components/Navbar";
import { useHistory, useParams } from "react-router-dom";
import "./styles.scss"
import ProductCardDetail from "../../components/ProductCardDetail";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../store/reducers";
import { getProduct } from "../../store/actions/products";

type ProductDetailParams = {
  id: string;
}

const ProductDetail = () => {
  const { id } = useParams<ProductDetailParams>()
  const history = useHistory()
  const dispatch = useDispatch();
  const { selectedProduct, isLoadingProduct } = useSelector((state: GlobalState) => state.productsReducer)
  const getProductStart = (id: string) => dispatch(getProduct(id))
  const searchProductsStart = (search: string) => history.push("/items?search=" + search)

  React.useEffect(() => {
    if(id) {
      getProductStart(id)
    }
  },[id])

  return (
        <div className="product_detail_container">
          <Navbar onSubmit={searchProductsStart} />
          <Container>
            <span className="breadcrum">{"Electronica, Audio y video > iPod > Reproductores > iPod Touch > 32 GB"}</span>
            <div className="content">
                <ProductCardDetail product={selectedProduct} isLoadingProduct={isLoadingProduct} />
            </div>
          </Container>
        </div>
    )
}

export default ProductDetail
