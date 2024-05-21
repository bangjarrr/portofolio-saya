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
                                <a href="#gallery" className="text-warning" target="_blank">Gallery</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-warning" target="_blank">Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="">
                        <h5>Social Media</h5>
                        <ul className="list-unstyled d-flex justify-content-between align-items-center mt-5 ml-0">
                            <li>
                                <a href="#">
                                    <i data-feather="instagram" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i data-feather="facebook" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i data-feather="message-square" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i data-feather="twitter" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i data-feather="linkedin" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i data-feather="youtube" color="#fff"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2024 Alfajjar. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FaqComp;
