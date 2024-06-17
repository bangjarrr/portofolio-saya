import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComp = () => {

    const scrollY = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [changeColor, setChangeColor] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 750) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    }

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

    return (
        <div className="sticky-top w-body">
            <Navbar variant="dark" expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold fs-4">Portofolio | Alfajjar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Button 
                                className="mx-2 border-0"
                                variant="outline-light"
                                onClick={() => scrollY("home")}
                            >
                                Home
                            </Button>
                            <Button 
                                className="mx-2 border-0"
                                variant="outline-light"
                                onClick={() => scrollY("about")}
                            >
                                About
                            </Button>
                            <Button 
                                className="mx-2 border-0"
                                variant="outline-light"
                                onClick={() => scrollY('project')}
                            >
                                Projects
                            </Button>
                            <Button 
                                className="mx-2 border-0"
                                variant="outline-light"
                                onClick={() => scrollY("contact")}
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
