import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Telegram, Instagram, Facebook, X, LinkedIn, GitHub } from "@mui/icons-material";

const FaqComp = () => {
    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row className="d-flex justify-content-center pt-5">
                    <Col md={8} className="text-center ">
                        <h5>Follow Me on Social Media</h5>
                        <ul className="list-unstyled d-flex justify-content-evenly align-items-center mt-5 ml-0">
                            <li>
                                <a href="https://github.com/alfajarjaya">
                                    <GitHub style={{ color: "white" }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/bang_jarrrz/">
                                    <Instagram style={{ color: "white" }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/alfajjar.alfajjar.90?mibextid=9R9pXO">
                                    <Facebook style={{ color: "white" }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/Njir_18">
                                    <Telegram style={{ color: "#fff" }}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/PutraSnjaya?t=z39qpVDJ1jPKyHjnOZqMTQ&s=09">
                                    <X style={{ color: "white"}} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alfajjar-putra-4a2a83290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <LinkedIn style={{
                                        color: "white"
                                    }} />
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
