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

        const mediaPhone = window.matchMedia('(max-width:768px)');
        const mediaDesktop = window.matchMedia('(min-width: 769px)');

        if (mediaPhone.matches) {
            if (window.scrollY > 200 && window.scrollY < 4100) {
                setChangeColor(true);
            } else {
                setChangeColor(false);
            }
        } else if (mediaDesktop.matches) {
            if (window.scrollY > 200 && window.scrollY < 3300) {
                setChangeColor(true);
            } else {
                setChangeColor(false);
            }
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
                            <Nav.Link href="javascript:void(0)" className="d-flex align-items-center" onClick={() => scrollY("home")}>
                                <Home />
                                Home
                            </Nav.Link>
                            <Nav.Link href="javascript:void(0)" className="d-flex align-items-center" onClick={() => scrollY("about")}>
                                <Person />
                                About
                            </Nav.Link>
                            <Nav.Link href="javascript:void(0)" className="d-flex align-items-center" onClick={() => scrollY("project")}>
                                <WorkHistory />
                                Project
                            </Nav.Link>
                            <Nav.Link href="javascript:void(0)" className="d-flex align-items-center" onClick={() => scrollY("contact")}>
                                <ContactSupport />
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
