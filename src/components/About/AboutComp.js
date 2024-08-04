import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../css/main.css';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function About() {

    const [showRightAbout, setShowRightAbout] = useState(false);
    const [showLeftAbout, setShowLeftAbout] = useState(false);

    const scrollY = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const toggleAboutRight = () => {
        if(showRightAbout) {
            setShowRightAbout(false);
            setShowRightAbout(true);
        } else {
            setShowLeftAbout(false);
            setShowRightAbout(true);
        }
    }

    const toggleAboutLeft = () => {
        setShowRightAbout(false);
        setShowLeftAbout(true);
    }

    useEffect(() => {
        Aos.init();
        Aos.refresh();
        setShowLeftAbout(true);
    }, []);

    return (
        <div className="text-dark m-0 px-0 py-5 w-body text-white" id="about" >
            <Container>
                {showLeftAbout && (
                    <>
                        <Row>
                            <Col className="text-center mt-5">
                                <h1 data-aos="fade-up">About Me</h1>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col md={8} className="text-start" data-aos="fade-up">
                                <p>
                                    Hi, I'm Mochammad Alfajjar, usually called Fajar. I'm from East Java, Indonesia 🇮🇩. I am a vocational high school student, majoring in computer and network engineering. I have an interest in the world of programming. I actively participate in training and learning communities. I also managed to get a competency certificate.  I also have a lot of experience from the Paskibra so getting a certificate is quite proud for me 
                                    <button className="text-primary bg-transparent border-0 py-0 px-1 text-warning" onClick={() => scrollY('service')}> see my certificate</button>. To get to know me better, you
                                    can connect on my <a href="https://t.me/Njir_18" target="_blank" rel="noreferrer" className="text-warning">Telegram</a> or <a href="https://www.instagram.com/bang_jarrrz/" target="_blank" rel="noreferrer" className="text-warning">Instagram</a> you can also contact me via this page <button className="text-primary bg-transparent border-0 py-0 px-1 text-warning" onClick={() => scrollY('contact')}>Contact</button>.
                                </p>
                            </Col>
                        </Row>
                    </>
                )}

                {showRightAbout && (
                    <>
                        <Row>
                            <Col className="text-center mt-5">
                                <h1 data-aos="fade-right">About Fajar Pages</h1>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={8} className="text-start mt-5" data-aos="fade-right">
                                <p>
                                    <a href="/" className="text-warning">Fajar Pages</a> is a website created in December 2023. I made this website as a personal record of what I have done, be it my project or other things.
                                    Hopefully this website can be useful for all of you; Hopefully we can work together to advance this beloved country through programming or other things related to technology.
                                    I personally apologize profusely if there are any mistakes, because I am also still in the learning stage.
                                </p>
                            </Col>
                        </Row>
                    </>
                )}

                <div className="d-flex justify-content-evenly align-items-center mt-5">
                    <Button variant="outline-warning" className="px-5 " onClick={toggleAboutLeft}>
                        <ChevronLeft />
                    </Button>
                    <Button variant="outline-warning" className="px-5" onClick={toggleAboutRight}>
                        <ChevronRight />
                    </Button>
                </div>
            </Container>
        </div>
    );
}
