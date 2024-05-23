import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';

const importAll = (r) => r.keys().map(r);
let images = importAll(require.context('../assets/img/skills/', false, /\.(png|jpe?g|svg)$/));

const About = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center w-body text-white" id="about">
            <Container>
                <Row>
                    <Col className="text-center mt-5">
                        <h1 data-aos="fade-down">About Me</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={8} className="text-start" data-aos="fade-down">
                        <p>
                            Hi, I'm Mochammad Alfajjar, usually called Fajar. I'm from East
                            Java, Indonesia 🇮🇩. I am a vocational high school student,
                            majoring in computer and network engineering. I have an interest
                            in the world of programming, especially web programming. I actively
                            participate in training, teaching, and learning communities. I
                            also managed to get a competency certificate
                            <a href="https://bangjarrr.github.io/certificate/" className="text-warning"> show my certificate</a>. To get to know me better, you
                            can connect on my <a href="https://t.me/Njir_18" target="_blank" rel="noreferrer" className="text-warning">Telegram</a> or you can also contact me via this page <a href="#contact" className="text-warning">Contact</a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-5">
                        <h1 data-aos="fade-down">About Fajar Pages</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} className="text-start mt-5" data-aos="fade-down">
                        <p>
                            Fajar Pages is a website created in December 2023. I made this website as a personal record of what I have done, be it my project or other things.
                            Hopefully this website can be useful for all of you; Hopefully we can work together to advance this beloved country through programming or other things related to technology.
                            I personally apologize profusely if there are any mistakes, because I am also still in the learning stage.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col className="text-center">
                        <h1 data-aos="fade-up">Tech Stack</h1>
                        <hr />
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    {images.map((image, index) => (
                        <Col key={index} md={4} className="text-center mt-5">
                            <img
                                src={image}
                                alt={`Skill ${index + 1}`}
                                className="img-fluid skills-img p-3"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            />
                        </Col>
                    ))}
                </Row>
                <Row className="justify-content-center">
                    <Col className="mt-5 text-center">
                        <h1>My Projects</h1>
                        <hr />
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="mt-5 img-fluid">
                        <div>
                            <div className="mb-3 project">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/QofPahiYfMo?si=RSePFEM7W1Pg5VsT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <p>Website Coffee Shop.</p>
                            </div>
                            <div className="mb-3 project">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/os4mnM_xepo?si=TQ-L5KLuXko4aebw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <p>Manajemen Perpuskataan with Python.</p>
                            </div>

                            {showAll && (
                                <div>
                                    <div className="mb-3 project">
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ihBd1PjKnLY?si=1yMyr9D-7YzzQvV4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        <p>Translate Python GUI.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="justify-content-center text-center mt-5 mb-5">
                            <Button variant="outline-warning" onClick={toggleShowAll}>
                                {showAll ? "Close" : "Show All Project"}
                            </Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
