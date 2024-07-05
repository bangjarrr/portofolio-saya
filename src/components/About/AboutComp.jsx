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
        <div className="text-dark m-0 p-0 w-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#202020" fill-opacity="1" d="M0,192L0,192L65.5,192L65.5,224L130.9,224L130.9,192L196.4,192L196.4,96L261.8,96L261.8,192L327.3,192L327.3,128L392.7,128L392.7,128L458.2,128L458.2,128L523.6,128L523.6,160L589.1,160L589.1,256L654.5,256L654.5,224L720,224L720,192L785.5,192L785.5,96L850.9,96L850.9,224L916.4,224L916.4,160L981.8,160L981.8,160L1047.3,160L1047.3,256L1112.7,256L1112.7,256L1178.2,256L1178.2,64L1243.6,64L1243.6,256L1309.1,256L1309.1,192L1374.5,192L1374.5,32L1440,32L1440,0L1374.5,0L1374.5,0L1309.1,0L1309.1,0L1243.6,0L1243.6,0L1178.2,0L1178.2,0L1112.7,0L1112.7,0L1047.3,0L1047.3,0L981.8,0L981.8,0L916.4,0L916.4,0L850.9,0L850.9,0L785.5,0L785.5,0L720,0L720,0L654.5,0L654.5,0L589.1,0L589.1,0L523.6,0L523.6,0L458.2,0L458.2,0L392.7,0L392.7,0L327.3,0L327.3,0L261.8,0L261.8,0L196.4,0L196.4,0L130.9,0L130.9,0L65.5,0L65.5,0L0,0L0,0Z"></path></svg>
            <Container id="about">
                <Row>
                    <Col className="text-center mt-5">
                        <h1 data-aos="fade-down">About Me</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={8} className="text-start" data-aos="fade-down">
                        <p>
                            Hi, I'm Mochammad Alfajjar, usually called Fajar. I'm from East Java, Indonesia 🇮🇩. I am a vocational high school student, majoring in computer and network engineering. I have an interest in the world of programming. I actively participate in training and learning communities. I also managed to get a competency certificate.  I also have a lot of experience from the Paskibra so getting a certificate is quite proud for me
                            <a href="javascript:void(0)" className="text-dark bg-transparent border-bottom-black border-0" onClick={() => scrollY('service')}> see my certificate</a>. To get to know me better, you
                            can connect on my <a href="https://t.me/Njir_18" target="_blank" rel="noreferrer" className="text-dark">Telegram</a> or <a href="https://www.instagram.com/bang_jarrrz/" target="_blank" rel="noreferrer" className="text-dark ">Instagram</a> you can also contact me via this page <a href="javascript:void(0)" className="text-dark bg-transparent border-0" onClick={() => scrollY('contact')}>Contact</a>.
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
                            <a href="/" className="text-dark">Fajar Pages</a> is a website created in December 2023. I made this website as a personal record of what I have done, be it my project or other things.
                            Hopefully this website can be useful for all of you; Hopefully we can work together to advance this beloved country through programming or other things related to technology.
                            I personally apologize profusely if there are any mistakes, because I am also still in the learning stage.
                        </p>
                    </Col>
                </Row>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#202020" fill-opacity="100000" d="M0,160L0,0L65.5,0L65.5,128L130.9,128L130.9,128L196.4,128L196.4,64L261.8,64L261.8,192L327.3,192L327.3,256L392.7,256L392.7,96L458.2,96L458.2,256L523.6,256L523.6,192L589.1,192L589.1,224L654.5,224L654.5,192L720,192L720,96L785.5,96L785.5,288L850.9,288L850.9,96L916.4,96L916.4,192L981.8,192L981.8,64L1047.3,64L1047.3,32L1112.7,32L1112.7,224L1178.2,224L1178.2,192L1243.6,192L1243.6,96L1309.1,96L1309.1,160L1374.5,160L1374.5,96L1440,96L1440,320L1374.5,320L1374.5,320L1309.1,320L1309.1,320L1243.6,320L1243.6,320L1178.2,320L1178.2,320L1112.7,320L1112.7,320L1047.3,320L1047.3,320L981.8,320L981.8,320L916.4,320L916.4,320L850.9,320L850.9,320L785.5,320L785.5,320L720,320L720,320L654.5,320L654.5,320L589.1,320L589.1,320L523.6,320L523.6,320L458.2,320L458.2,320L392.7,320L392.7,320L327.3,320L327.3,320L261.8,320L261.8,320L196.4,320L196.4,320L130.9,320L130.9,320L65.5,320L65.5,320L0,320L0,320Z"></path></svg>
        </div>
    );

}