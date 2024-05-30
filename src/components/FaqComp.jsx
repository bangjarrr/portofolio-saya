import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const FaqComp = () => {
    const formRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");

    const onChange = (value) => {
        if (value) {
            setIsVerified(true);
            setRecaptchaToken(value);
        }
    };

    const sendToEmail = async (event) => {
        event.preventDefault();

        if (!isVerified) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Harap verifikasi bahwa Anda bukan robot.",
            });
            return;
        }

        try {
            emailjs.init('mU8eRB0v5jnQgLrVc');
            const nama = formRef.current.elements['nama'].value;
            const email = formRef.current.elements['email'].value;
            const pesan = formRef.current.elements['pesan'].value;

            if (!nama || !email || !pesan) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Harap isi semua form sebelum mengirim pesan.",
                });
                return;
            }

            emailjs.send('portofolio', 'portofolio', {
                email: email,
                nama: nama,
                pesan: pesan,
                'g-recaptcha-response': recaptchaToken,
            });

            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Email berhasil dikirim!",
                confirmButtonText: "Tutup",
            }).then((r) => {
                if (r.isConfirmed) {
                    formRef.current.reset();
                    window.location.reload();
                } else {
                    window.location.reload();
                }
            })

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Terjadi kesalahan saat mengirim pesan. ${error.message}`,
                confirmButtonText: "Tutup...",
            });
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center w-body text-white" id="contact">
            <div className="mt-5">
                <Container className="pb-5">
                    <Row>
                        <Col className="pb-5 mb-5">
                            <h1 className="text-center text-warning">Contact Me</h1>
                            <div className="border-bottom"></div>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center mb-5 pb-5 w-100">
                        <Form ref={formRef} className="text-white w-100" onSubmit={sendToEmail} id="my-form">
                            <Form.Group className="mb-3" controlId="formNama">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="nama" id="nama" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" id="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPesan">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter message" name="pesan" id="pesan" />
                            </Form.Group>


                            <ReCAPTCHA
                                sitekey="6LdZ_NgpAAAAAB0dvSXNsonB5uAGCTqdMWI_5I-k"
                                onChange={onChange}
                            />

                            <Button variant="success" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default FaqComp;
