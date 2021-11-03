import { Container, Navbar as NavbarRB } from "react-bootstrap";
import React from "react";
import "./styles.scss"
import logo from "../../assets/Logo_ML.png"
import FormSearch from "../FormSearch";

interface NavBarProps {
  onSubmit: (search: string) => void
}

const Navbar = ({ onSubmit }: NavBarProps) => {
    return (
        <NavbarRB className="navbar__ml" variant="dark">
            <Container className="navbar__container">
                <NavbarRB.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        className="d-inline-block align-top logo__ml"/>
                </NavbarRB.Brand>
                <FormSearch onSubmit={onSubmit} />
            </Container>
        </NavbarRB>
    );
}

export default Navbar;
