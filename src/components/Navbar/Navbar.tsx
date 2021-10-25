import { Container, FormControl, InputGroup, Navbar as NavbarRB} from "react-bootstrap";
import React from "react";
import "./styles.scss"
import logo from "../../assets/Logo_ML.png"
import searchIcon from "../../assets/ic_Search.png"

function Navbar() {
    return (
        <NavbarRB className="navbar__ml" variant="dark">
            <Container>
                <NavbarRB.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        className="d-inline-block align-top logo__ml"/>
                </NavbarRB.Brand>
                    <InputGroup>
                        <FormControl
                            type="text"
                            className="input_search"
                            placeholder="Search..."
                        />
                        <div className="search_icon_container">
                            <img
                                alt=""
                                src={searchIcon}
                                className="d-inline-block align-top search_icon"/>
                        </div>
                    </InputGroup>
            </Container>
        </NavbarRB>
    );
}

export default Navbar;
