import React, { useEffect } from "react";
import Aos from "aos";
import { Container, Row, Col } from 'react-bootstrap';
import '../..//css/main.css';

export default function About() {

    const scrollY = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <div className="w-body text-white pt-5" id="about">
            <div className="pt-5">
                <Container>
                    <Row>
                        <Col className="text-center mt-5">
                            <h1 data-aos="fade-down">About Me</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col md={8} className="text-start" data-aos="fade-down">
                            <p>
                                Hi, I'm Mochammad Alfajjar, usually called Fajar. I'm from East Java, Indonesia 	ID. I am a vocational high school student, majoring in computer and network engineering. I have an interest in the world of programming. I actively participate in training and learning communities. I also managed to get a competency certificate.  I also have a lot of experience from the Paskibra so getting a certificate is quite proud for me
                                <button className="text-warning bg-transparent border-0" onClick={() => scrollY('service')}> see my certificate</button>. To get to know me better, you
                                can connect on my <a href="https://t.me/Njir_18" target="_blank" rel="noreferrer" className="text-warning text-decoration-none">Telegram</a> or <a href="https://www.instagram.com/bang_jarrrz/" target="_blank" rel="noreferrer" className="text-warning text-decoration-none">Instagram</a> you can also contact me via this page <button className="text-warning bg-transparent border-0" onClick={() => scrollY('contact')}>Contact</button>.
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
                                <span className="text-warning">Fajar Pages</span> is a website created in December 2023. I made this website as a personal record of what I have done, be it my project or other things.
                                Hopefully this website can be useful for all of you; Hopefully we can work together to advance this beloved country through programming or other things related to technology.
                                I personally apologize profusely if there are any mistakes, because I am also still in the learning stage.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

}