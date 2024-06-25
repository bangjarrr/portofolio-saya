import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComp = () => {

    const [changeColor, setChangeColor] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 0) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    }

    const toContact = () => {
        window.location.href = "/contact";
    }

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

    return (
        <div className="fixed-top w-body">
            <Navbar variant="dark" expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold fs-4">Portofolio | Alfajjar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Button
                                className="mx-2 border-0"
                                variant="outline-light"
                                onClick={() => window.location.href = '/'}
                            >
                                Home
                            </Button>
                            <Button
                                className="mx-2 border-0"
                                variant="outline-light"
                                onClick={toContact}
                            >
                                Contact
                            </Button>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
