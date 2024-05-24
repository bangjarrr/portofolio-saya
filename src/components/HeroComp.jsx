import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';

const HeroComp = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="hero min-vh-100 w-100 d-flex align-items-center" id="home">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="display-3 text-white text-bold mb-4" data-aos="fade-left">
                            <u>Hi, I'm Fajar</u></h1>
                        <p className="lead text-white-75 mb-4 text-warning" data-aos="fade-right">
                            Just a Student's.
                        </p>
                        <Button
                            variant="warning"
                            size="lg"
                            className="me-2"
                            onClick={() => scrollToSection('about')}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Let's Explore
                        </Button>
                        <Button
                            variant="outline-light"
                            size="lg"
                            onClick={() => scrollToSection('contact')}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Contact Me
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroComp;
