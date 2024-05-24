import React, {useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import feather from 'feather-icons';

const FaqComp = () => {
    useEffect(() => {
        feather.replace()
    }, []);

    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row className="justify-content-evenly pt-5">
                    <Col md={2} className="">
                        <h5>About Fajar Pages</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#home" className="text-warning">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-warning">About</a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-warning" >Gallery</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-warning">Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="">
                        <h5>Social Media</h5>
                        <ul className="list-unstyled d-flex justify-content-between align-items-center mt-5 ml-0">
                            <li>
                                <a href="https://github.com/alfajarjaya">
                                    <i data-feather="github" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/bang_jarrrz/">
                                    <i data-feather="instagram" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/alfajjar.alfajjar.90?mibextid=9R9pXO">
                                    <i data-feather="facebook" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/Njir_18">
                                    <i data-feather="message-square" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/PutraSnjaya?t=z39qpVDJ1jPKyHjnOZqMTQ&s=09">
                                    <i data-feather="twitter" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alfajjar-putra-4a2a83290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <i data-feather="linkedin" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@AlfajjarSyachputra">
                                    <i data-feather="youtube" color="#fff"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2023 Alfajjar. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FaqComp;
