import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-recaptcha";

const FaqComp = () => {
    const formRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);

    const verifyCallback = (response) => {
        if (response) {
            setIsVerified(true);
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
            emailjs.init('Ayx-Zj0F9khkixi_W');
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

            const response = await emailjs.send("portofolio", "portofolio", {
                email: email,
                nama: nama,
                pesan: pesan,
            });

            console.log(response);

            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Email berhasil dikirim!",
                confirmButtonText: "Tutup",
            });
            formRef.current.reset();

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
        <div className="w-body" id="contact">
            <Container className="pt-5 pb-5">
                <Row>
                    <Col>
                        <h1 className="text-center text-warning">Contact Me</h1>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <Form ref={formRef} className="text-white w-50" onSubmit={sendToEmail} id="my-form">
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
                            <Form.Control type="text" placeholder="Enter message" name="pesan" id="pesan" />
                        </Form.Group>

                        <ReCAPTCHA
                            sitekey="6LdZ_NgpAAAAAB0dvSXNsonB5uAGCTqdMWI_5I-k"
                            render="onload"
                            verifyCallback={verifyCallback}
                        />

                        <Button variant="success" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default FaqComp;
