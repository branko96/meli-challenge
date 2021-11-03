import React from "react"
import Navbar from "../../components/Navbar";
import { useHistory, useLocation } from "react-router-dom"
import "./styles.scss"
import ProductsList from "../../components/ProductsList";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../store/actions/products";
import { GlobalState } from "../../store/reducers";

const ItemsSearch = () => {
  let { search } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { products, isLoadingProducts } = useSelector((state: GlobalState) => state.productsReducer)
  const searchProductsStart = (search: string) => dispatch(searchProducts(search))
  const goToSearchPage = (search: string) => history.push("/items?search=" + search)
  const query = new URLSearchParams(search);
  const paramField = query.get('search');

  React.useEffect(() => {
    if(paramField) {
      searchProductsStart(paramField)
    }
  },[paramField])

  return (
        <div className="items_search_container">
            <Navbar onSubmit={goToSearchPage} />
            <Container>
                <span className="breadcrum">{"Electronica, Audio y video > iPod > Reproductores > iPod Touch > 32 GB"}</span>
                <div className="content">
                    <ProductsList products={products} isProductsLoading={isLoadingProducts} />
                </div>
            </Container>
        </div>
    )
}

export default ItemsSearch
