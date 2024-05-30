import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/main.css';

const importAll = (r) => r.keys().map(r);
let images = importAll(require.context('../assets/img/gallery/', false, /\.(png|jpe?g|svg)$/));

const GalleryComp = () => {
    const [showAll, setShowAll] = useState(false);
    const imagesToShow = showAll ? images : images.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center w-body text-white" id="gallery">
            <div className="mt-5">
                <Container className="pb-5 mb-5">
                    <Row>
                        <Col>
                            <h1 className="text-center text-warning">My Gallery</h1>
                            <div className="border-bottom"></div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {imagesToShow.map((image, index) => (
                            <Col key={index} md={4}>
                                <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid gallery-img" />
                            </Col>
                        ))}
                    </Row>
                    {showAll ? (
                        <Row className="justify-content-center mt-3">
                            <Col md={6} className="text-center">
                                <Button variant="outline-warning" onClick={toggleShowAll}>Tutup</Button>{' '}
                            </Col>
                        </Row>
                    ) : (
                        <Row className="justify-content-center mt-3">
                            <Col md={6} className="text-center">
                                <Button variant="outline-warning" onClick={toggleShowAll}>Lihat Selengkapnya</Button>{' '}
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default GalleryComp;
