import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroComp = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero min-vh-100 w-100 d-flex align-items-center" id="home">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="display-3 text-white mb-4">Welcome to My Portfolio</h1>
                        <p className="lead text-white-75 mb-4 text-warning">
                            Discover my work, projects, and get in touch for collaborations.
                        </p>
                        <Button 
                            variant="primary" 
                            size="lg" 
                            className="me-2" 
                            onClick={() => scrollToSection('about')}
                        >
                            Learn More
                        </Button>
                        <Button 
                            variant="outline-light" 
                            size="lg" 
                            onClick={() => scrollToSection('contact')}
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
