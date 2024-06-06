import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import '../css/main.css';
import '../css/service.css';
import Swal from "sweetalert2";
import feather from 'feather-icons';
import websiteKelas from '../assets/img/project/kelas.png';
import qrCodeImg from '../assets/img/project/qrcode.png';

const importAll = (r) => r.keys().map(r);
let images = importAll(require.context('../assets/img/skills/', false, /\.(png|jpe?g|svg)$/));
let certificate = importAll(require.context('../assets/img/certificate/', false, /\.(png|jpe?g|svg)$/));

export default function Service() {
    const [showAll, setShowAll] = useState(false);
    const [showCertificates, setShowCertificates] = useState(false);
    const [showSkills, setShowSkills] = useState(true);

    const titleSkills = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'MYSQL']

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    const toggleCertificates = () => {
        setShowCertificates(!showCertificates);
        setShowSkills(false);
    }

    const toggleSkills = () => {
        setShowSkills(!showSkills);
        setShowCertificates(false);
    }

    const toggleCheckCertificate = () => {
        certificate.forEach((img, index) => {
            Swal.fire({
                html: `
                    <div class="container-img" style="position: relative;">
                        <button id="swal-close-btn" style="position: absolute; top: 10px; right: 10px; background: none; border: none; color: white; font-size: 24px;">
                            <i data-feather="x"></i>
                        </button>
                        <img src="${img}" alt="Certificate" class="full-screen-image" />
                    </div>
                `,
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                },
                customClass: {
                    popup: 'full-screen-popup'
                },
                width: 'auto',
                padding: '0',
                background: 'none',
                backdrop: `
                    rgba(0, 0, 0, 0.4)
                `,
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    feather.replace();
                    document.getElementById('swal-close-btn').addEventListener('click', () => {
                        Swal.close();
                    });
                }
            });
        });
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center w-body text-white">
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
                                    <Col key={index} xs={6} md={4} className="text-center mt-5 d-flex justify-content-center">
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
                        {showCertificates && (
                            <Row className="justify-content-center mb-5 certificate-content animate__animated animate__fadeInRight">
                                {certificate.map((image, index) => (
                                    <Col key={index} xs={6} md={4} className="text-center mt-5 d-flex justify-content-center">
                                        <div className="skill-img-container" data-aos="fade-up" data-aos-delay={index * 100}>
                                            <img
                                                src={image}
                                                alt="Certificate"
                                                title={`Certificate ${index + 1}`}
                                                className="certificate-img"
                                                onClick={() => toggleCheckCertificate()}
                                            />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </div>

                    <Row className="justify-content-center">
                        <Col className="mt-5 text-center">
                            <h1>My Projects</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mb-5 align-items-center" style={{ height: '100%' }}>
                        <Col md={6}>
                            <div className="project rounded-3">
                                <iframe className="img-fluid rounded-3" width="100%" height="315" src="https://www.youtube.com/embed/QofPahiYfMo?si=RSePFEM7W1Pg5VsT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <div className="mx-3 my-2">
                                    <p>Website Kedai Kopi: Desain yang responsif dan elegan hanya dengan HTML, CSS, dan Javascript, menawarkan pengalaman pengguna yang interaktif dan memikat.</p>
                                    <a href="https://kedai-kopi-kita.netlify.app/halaman-utama/" target="_blank" rel="noreferrer" className="text-warning text-decoration-none w-100 p-2 project-link d-block text-center rounded-3">
                                        Show Demo
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="project rounded-3">
                                <iframe className="img-fluid rounded-3" width="100%" height="315" src="https://www.youtube.com/embed/os4mnM_xepo?si=TQ-L5KLuXko4aebw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div className="mx-3 my-2">
                                    <p>Manajemen Perpustakaan: Menggunakan Python, Flask, MySQL, HTML, CSS, JS, SweetAlert, EmailJS, dan OpenCV untuk solusi yang terintegrasi dan responsif.</p>
                                    <a href="https://manajemen-perpustakaan.vercel.app/" target="_blank" rel="noreferrer" className="text-warning text-decoration-none w-100 p-2 project-link d-block text-center rounded-3">Show Demo</a>
                                </div>
                            </div>
                        </Col>
                        {showAll && (
                            <Row>
                                <Col md={6}>
                                    <div className="project rounded-3">
                                        <iframe className="img-fluid rounded-3" width="100%" height="315" src="https://www.youtube.com/embed/ihBd1PjKnLY?si=1yMyr9D-7YzzQvV4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        <div className="mx-3 my-2">
                                            <p>Website untuk menerjemahkan nama-nama hewan dari bahasa Inggris, Jepang, dan Indonesia, semuanya dibuat menggunakan Python.</p>
                                            <a href="https://translate-python.vercel.app/" target="_blank" rel="noreferrer" className="text-warning text-decoration-none w-100 p-2 project-link d-block text-center rounded-3">Show Demo</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="project rounded-3">
                                        <img src={websiteKelas} alt="https://tkj2skanesa.vercel.app" width={'100%'} height={315} className="img-fluid rounded-3" />
                                        <div className="mx-3 my-2">
                                            <p>Membangun website kelas yang berfungsi sebagai pusat gallery beserta kenagan bagi teman-teman, berisikan tentang gallery class, blog, dll.</p>
                                            <a href="https://tkj2skanesa.vercel.app" target="_blank" rel="noreferrer" className="text-warning text-decoration-none w-100 p-2 project-link d-block text-center rounded-3">Show Demo</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="project rounded-3">
                                        <img src={qrCodeImg} alt="https://tkj2skanesa.vercel.app" width={'100%'} height={315} className="img-fluid rounded-3" />
                                        <div className="mx-3 my-2">
                                            <p>This project is a simple application to generate QR (Quick Response) codes from user-inputted text. QR Code is a type of two-dimensional barcode that can be quickly read by devices such as smartphone cameras..</p>
                                            <a href="https://qrcodegeneratorbyfajar.vercel.app/" target="_blank" rel="noreferrer" className="text-warning text-decoration-none w-100 p-2 project-link d-block text-center rounded-3">Show Demo</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        )}

                        <div className="justify-content-center text-center mt-5 mb-5">
                            <Button variant="outline-warning" onClick={toggleShowAll}>
                                {showAll ? "Close" : "Show All Project"}
                            </Button>{' '}
                        </div>
                    </Row>
                </Container>
            </div>
        </div >
    );
};
