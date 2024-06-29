import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Home, Person, ContactSupport, WorkHistory } from '@mui/icons-material'

const NavbarComp = () => {

    const scrollY = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [changeColor, setChangeColor] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 200) {
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
        <div className="w-body">
            <Navbar variant="dark" className={changeColor ? "color-active rounded" : "bg-dark"} fixed="bottom" >
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto w-100 d-flex justify-content-evenly align-items-center">
                            <Nav.Link href="javascript:void(0)" onClick={() => scrollY("home")}>
                                <Home />
                            </Nav.Link>
                            <Nav.Link href="javascript:void(0)" onClick={() => scrollY("about")}>
                                <Person />
                            </Nav.Link>
                            <Nav.Link href="javascript:void(0)" onClick={() => scrollY("project")}>
                                <WorkHistory />
                            </Nav.Link>
                            <Nav.Link href="javascript:void(0)" onClick={() => scrollY("contact")}>
                                <ContactSupport />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
