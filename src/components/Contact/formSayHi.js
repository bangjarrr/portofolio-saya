import React, {useRef, useState, useEffect} from 'react';
import { Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { RocketLaunch } from "@mui/icons-material";
import Aos from 'aos';

function FormSayHi() {
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
            emailjs.init('yOnzflsGxmHZpMjlw');
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

            await emailjs.send('iINO!l(q17BM1ELmgPU8dGrA', 'DLKrw$R$VVy$2T9_t9Q5epL=', {
                mail: email,
                name: nama,
                message: pesan,
                phone: 'this is a form Say Hi :D',
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
            });

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Terjadi kesalahan saat mengirim pesan. ${error.message}`,
                confirmButtonText: "Tutup...",
            });
        }
    };

    useEffect(() => {
        Aos.init();
    });

    return (
        <>
            <Form ref={formRef} className="text-white w-100" onSubmit={sendToEmail} id="my-form" data-aos="fade-up">
                <Form.Group className="mb-3" controlId="nama">
                    <Form.Label className="text-dark form-label mx-2">Enter Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="nama"
                        id="nama"
                        className="text-white border-0 border-bottom form-control"
                        style={{ backgroundColor: '#404040' }}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="text-dark form-label mx-2">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        className="text-white border-0 border-bottom form-control"
                        style={{ backgroundColor: '#404040' }}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pesan">
                    <Form.Label className="text-dark form-label mx-2">Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="pesan"
                        id="pesan"
                        className="text-white border-0 border-bottom form-control"
                        style={{ backgroundColor: '#404040' }}
                        required
                    />
                </Form.Group>

                <ReCAPTCHA
                    sitekey="6LdZ_NgpAAAAAB0dvSXNsonB5uAGCTqdMWI_5I-k"
                    onChange={onChange}
                    theme="dark"
                    className="mx-2"
                />

                <Button variant="warning" type="submit" className="my-3 mx-2 px-5 py-2 d-flex align-items-center">
                    Send Now !
                    <RocketLaunch size="small" className="ms-2" />
                </Button>
            </Form>
        </>
    )
}

export default FormSayHi;