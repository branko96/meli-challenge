import React from "react"
import Navbar from "../../components/Navbar";
import {Link, useLocation} from "react-router-dom"
import "./styles.scss"
import ProductsList from "../../components/ProductsList";
import Container from "../../components/Container";

const Home = () => {
  let { search } = useLocation();

  const query = new URLSearchParams(search);
  const paramField = query.get('search');
  console.log(paramField);

  return (
        <div className="home_container">
            <Navbar />
            <Container>
                <span className="breadcrum">{"Electronica, Audio y video > iPod > Reproductores > iPod Touch > 32 GB"}</span>
                <div className="content">
                    <ProductsList />
                </div>
            </Container>
        </div>
    )
}

export default Home
