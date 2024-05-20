import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

const importAll = (r) => r.keys().map(r);
let images = importAll(require.context('../assets/img/gallery/', false, /\.(png|jpe?g|svg)$/));

const GalleryComp = () => {
    const [showAll, setShowAll] = useState(false);
    const imagesToShow = showAll ? images : images.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="min-vh-100 w-body pb-5" id="gallery">
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
    );
};

export default GalleryComp;
