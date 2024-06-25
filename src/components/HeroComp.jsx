import React, { useState, useEffect } from "react";
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

    const title = "Just a Student's. ";
    const [heading, setHeading] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeading(prevHeading => {
                if (count === title.length) {
                    setCount(0);
                    return "";
                } else {
                    setCount(count + 1);
                    return prevHeading + title[count];
                }
            });
        }, 200);

        return () => clearInterval(interval);
    }, [count, title]);

    return (
        <div className="hero min-vh-100 w-100 d-flex align-items-center" id="home">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="display-3 text-white text-bold mb-4" data-aos="fade-left">
                            <u>Hi, I'm Fajar</u></h1>
                        <h2 className="lead text-white-75 mb-4 text-warning " data-aos="fade-right" id="heading">
                            {heading}
                        </h2>
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
