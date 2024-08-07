import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css';
import '../../css/main.css';
import '../../css/service.css';
import certificateSchool from "./certificateSchool";
import certificateBootcamp from "./certificateBootcamp";
import listProject from "./project/listProject";


const importAll = (r) => r.keys().map(r);
let images = importAll(require.context('../../assets/img/skills/', false, /\.(png|jpe?g|svg)$/));


export default function Service() {
    const [showAll, setShowAll] = useState(false);
    const [showCertificates, setShowCertificates] = useState(false);
    const [showSkills, setShowSkills] = useState(true);
    const [showSchool, setShowSchool] = useState(false);
    const [showBootcamp, setShowBootcamp] = useState(false);

    const titleSkills = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'MYSQL']

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    const toggleCertificates = () => {
        setShowSkills(false);
        setShowCertificates(true);
        setShowSchool(false);
        setShowBootcamp(false);
    }

    const toggleShowSchool = () => {
        if (showSchool) {
            setShowSchool(false);
        } else {
            setShowSchool(true);
            setShowBootcamp(false);
        }
    }

    const toggleShowBootcamp = () => {
        if (showBootcamp) {
            setShowBootcamp(false);
        } else {
            setShowBootcamp(true);
            setShowSchool(false);
        }
    }

    const toggleSkills = () => {
        setShowSkills(true);
        setShowCertificates(false);
        setShowSchool(false);
        setShowBootcamp(false);
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center w-body text-white" id="service">
            <div className="mt-5">
                <Container>
                    <Row className="mt-5 border-bottom">
                        <Col className="d-flex justify-content-evenly align-items-center">
                            <h1 data-aos="fade-up" className="text-menu" onClick={toggleSkills}>Tech Stack</h1>
                            <h1 data-aos="fade-up" className="text-menu" onClick={toggleCertificates}>Certificate</h1>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        {showSkills && (
                            <Row className="justify-content-center mb-5 skill-content">
                                {images.map((image, index) => (
                                    <Col key={index} xs={6} md={3} className="text-center mt-5 d-flex justify-content-center">
                                        <div className="skill-img-container" data-aos="fade-up" data-aos-delay={index * 100}>
                                            <img
                                                src={image}
                                                alt="Tech-Stack"
                                                title={titleSkills[index]}
                                                className="skills-img"
                                            />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        )}

                    </div>
                    <div>
                        {showCertificates && (
                            <div className="my-5 animate__animated animate__fadeInRight">
                                <Row className="justify-content-center">
                                    <Col className="mt-5 text-start">
                                        <h1 className="text-menu" onClick={toggleShowSchool}>
                                            School Certificate
                                        </h1>
                                        <div className="border-bottom w-50"></div>
                                    </Col>
                                    {showSchool && (
                                        <Row className="justify-content-center">
                                            {certificateSchool.map((certif, index) => (
                                                <ul className="list-style my-4 text-start" key={index}>
                                                    <li className="list-item">
                                                        <a href={certif.link} target="_blank" rel="noreferrer" className="text-white fs-6 link">
                                                            {certif.title}
                                                            <img src={certif.img} className="link-img" alt={certif.title} />
                                                        </a>
                                                    </li>
                                                </ul>
                                            ))}
                                        </Row>
                                    )}
                                </Row>
                                <Row className="justify-content-center">
                                    <Col className="mt-5 text-start">
                                        <h1 className="text-menu" onClick={toggleShowBootcamp}>
                                            Learning Certificate
                                        </h1>
                                        <div className="border-bottom w-50"></div>
                                    </Col>
                                    {showBootcamp && (
                                        <Row className="justify-content-center">
                                            {certificateBootcamp.map((certif, index) => (
                                                <ul className="list-style my-4 text-start" key={index}>
                                                    <li className="list-item">
                                                        <a href={certif.link} target="_blank" rel="noreferrer" className="text-white fs-6 link">
                                                            {certif.title}
                                                            <img src={certif.img} className="link-img" alt={certif.title} />
                                                        </a>
                                                    </li>
                                                </ul>
                                            ))}
                                        </Row>
                                    )}
                                </Row>
                            </div>
                        )}
                    </div>


                    <div className="mt-5 pt-5" id="project">
                        <Row className="justify-content-center">
                            <Col className="mt-5 text-center">
                                <h1>My Projects</h1>
                                <hr />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center mb-5 align-items-center" style={{ height: '100%' }}>
                            {listProject.slice(0, 3).map((project, index) => {
                                return (
                                    <Col md={4} key={index}>
                                        <div className="project rounded-3">
                                            <iframe className="img-fluid rounded-3" width="100%" height="315" src={project.source} title={project.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            <div className="mx-3 my-2">
                                                <h5 className="text-normal">{project.title}</h5>
                                                <p>{project.description}</p>
                                                <a href={project.link} target="_blank" rel="noreferrer" className="text-warning text-decoration-none w-100 p-2 project-link d-block text-center rounded-3">Show Demo</a>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                            {showAll && listProject.slice(3).map((project, index) => (
                                <Col md={4} key={index}>
                                    <div className="project rounded-3">
                                        <img src={project.source} alt={project.title} width={'100%'} height={315} className="img-fluid rounded-3" />
                                        <div className="mx-3 my-2">
                                            <h5 className="text-normal">{project.title}</h5>
                                            <p>{project.description}</p>
                                            <a href={project.link} target="_blank" rel="noreferrer" className="text-warning text-decoration-none w-100 p-2 project-link d-block text-center rounded-3">Show Demo</a>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            <div className="justify-content-center text-center mt-5 mb-5">
                                <Button variant="outline-warning" onClick={toggleShowAll}>
                                    {showAll ? "Close" : "Show All Project"}
                                </Button>{' '}
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};
