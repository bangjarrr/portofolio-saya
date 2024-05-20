import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const importAll = (r) => r.keys().map(r);
let images = importAll(require.context('../assets/img/skills/', false, /\.(png|jpe?g|svg)$/));

const About = () => {

    const showAllProject = () => {
        window.open('https://bangjarrr.github.io/my-project/', '_blank');
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center w-body text-white" id="about">
            <Container>
                <Row>
                    <Col className="text-center mt-5">
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={8} className="text-start">
                        <p>
                            Hi, I'm Mochammad Alfajjar, usually called Fajar. I'm from East
                            Java, Indonesia 🇮🇩. I am a vocational high school student,
                            majoring in computer and network engineering. I have an interest
                            in the world of programming, especially web programming. I actively
                            participate in training, teaching, and learning communities. I
                            also managed to get a competency certificate
                            <a href="#" className="text-warning"> show my certificate</a>. To get to know me better, you
                            can connect on my <a href="https://t.me/Njir_18" target="_blank" className="text-warning">Telegram</a> or you can also contact me via this page <a href="https://bangjarrr.github.io#contact" className="text-warning" target="_blank">Contact</a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-5">
                        <h1>About Fajar Pages</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} className="text-start mt-5">
                        <p>
                            <a href="https://bangjarrr.github.io" className="text-warning" target="_blank">Fajar Pages</a> is a website created in December 2023. I made this website as a personal record of what I have done, be it my project or other things.
                            Hopefully this website can be useful for all of you; Hopefully we can work together to advance this beloved country through programming or other things related to technology.
                            I personally apologize profusely if there are any mistakes, because I am also still in the learning stage.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col className="text-center">
                        <h1>Tech Stack</h1>
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
                        <div className="mb-3 project">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/QofPahiYfMo?si=RSePFEM7W1Pg5VsT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
                            <p>Website Coffe Shop.</p>
                        </div>
                        <div className="mb-3 project">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ihBd1PjKnLY?si=1yMyr9D-7YzzQvV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
                            <p>Translate Pytho GUI.</p>
                        </div>
                        <div className="justify-content-center text-center mt-5 mb-5">
                            <Button variant="outline-warning" onClick={showAllProject}>Show All Project</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
