import React, { useRef, useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { RocketLaunch } from "@mui/icons-material";
import Aos from 'aos';

const FormSayHi = () => {
    const formRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [customMessage, setCustomMessage] = useState(false);
    const [selectMessage, setSelectMessage] = useState(false);

    const options = [
        { value: '', text: "let's get acquainted" },
        { value: 'Hello! How are you?', text: 'Hello! How are you?' },
        { value: 'Hi, I hope you are having a wonderful and surprising day!', text: 'Hi, I hope you are having a wonderful and surprising day!' },
        { value: 'Hi there! Just wanted to check in and say hello.', text: 'Hi there! Just wanted to check in and say hello.' },
        { value: 'Hello, I hope your day is smooth and highly productive.', text: 'Hello, I hope your day is smooth and highly productive.' },
    ];

    const customMessageToggle = () => {
        if (customMessage && selectMessage) {
            setSelectMessage(true);
            setCustomMessage(false);
        } else {

            setCustomMessage(true);
            setSelectMessage(false);
        }
    }

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
            const email = formRef.current.elements['email'].value;
            const pesan = formRef.current.elements['pesan'].value;

            if (!email || !pesan) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Harap isi semua form sebelum mengirim pesan.",
                });
                return;
            }

            await emailjs.send('iINO!l(q17BM1ELmgPU8dGrA', 'DLKrw$R$VVy$2T9_t9Q5epL=', {
                mail: email,
                name: email,
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

    const mediaPhone = window.matchMedia('(max-width:768px)');


    useEffect(() => {
        Aos.init();
        setSelectMessage(true);
    }, []);

    return (
        <>
            <Form ref={formRef} className="text-white w-100" onSubmit={sendToEmail} id="my-form" data-aos="fade-up">
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

                {customMessage ? (
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
                        <div className={mediaPhone.matches ? "d-block form-check form-switch mx-2 my-3" : "d-none"}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="customMessage"
                                name="customMessage"
                                checked={customMessage}
                                onChange={customMessageToggle}
                            />
                            <label className="form-check-label text-dark" htmlFor="customMessage">
                                Custom Message ?
                            </label>
                        </div>
                    </Form.Group>
                ) : (

                    <Form.Group className="mb-3" controlId="pesan">
                        <Form.Label className="text-dark form-label mx-2">Message</Form.Label>
                        <Form.Select className='text-white border-0 border-bottom form-control' style={{ backgroundColor: "#404040" }} name='pesan' id='pesan' required>
                            {options.map((option) => {
                                return (
                                    <option key={option.value} value={option.value} className='mx-1'>
                                        {option.text}
                                    </option>
                                );
                            })}
                        </Form.Select>
                        <div className={mediaPhone.matches ? "d-block form-check form-switch mx-2 my-3" : "d-none"}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="customMessage"
                                name="customMessage"
                                checked={customMessage}
                                onChange={customMessageToggle}
                            />
                            <label className="form-check-label text-dark" htmlFor="customMessage">
                                Custom Message ?
                            </label>
                        </div>
                    </Form.Group>
                )}

                <div className="d-flex align-items-center">
                    <ReCAPTCHA
                        sitekey="6LdZ_NgpAAAAAB0dvSXNsonB5uAGCTqdMWI_5I-k"
                        onChange={onChange}
                        theme="dark"
                        className="mx-2"
                    />

                    <div className={mediaPhone.matches ? "d-none" : "d-block form-check form-switch mx-2"}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="customMessage"
                            name="customMessage"
                            checked={customMessage}
                            onChange={customMessageToggle}
                        />
                        <label className="form-check-label text-dark" htmlFor="customMessage">
                            Custom Message ?
                        </label>
                    </div>
                </div>

                <Button variant="warning" type="submit" className="my-3 mx-2 px-5 py-2 d-flex align-items-center">
                    Send Now !
                    <RocketLaunch size="small" className="ms-2" />
                </Button>
            </Form>
        </>
    )
}

export default FormSayHi;