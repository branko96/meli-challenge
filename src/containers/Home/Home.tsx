import React from "react"
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom"
import "./styles.scss"
import { Container } from "react-bootstrap";
import ProductsList from "../../components/ProductsList";

const Home = () => {
    return (
        <div className="home_container">
            <Navbar />
            <Container>
                <span className="breadcrum">{"Electronica, Audio y video > iPod > Reproductores > iPod Touch > 32 GB"}</span>
            </Container>
            <Container>
                <div className="content">
                    <Link to="/product">Product</Link>
                    <ProductsList />
                </div>
            </Container>
        </div>
    )
}

export default Home
