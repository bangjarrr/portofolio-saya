import React, { useState } from "react";
import { Container, Row, Col, } from 'react-bootstrap';
import { Telegram, GitHub, Instagram, Facebook, AttachEmail } from "@mui/icons-material";
import FormSayHi from "./formSayHi";
import FormGetQuote from "./formGetQuote";

const FaqComp = () => {

    const [getQuote, setGetQuote] = useState(false);
    const [hay, setHay] = useState(false);


    const toggleQuote = () => {
        if (getQuote) {
            setGetQuote(true);
            setHay(false);
        } else {
            setGetQuote(true);
            setHay(false);
        }
    }

    const toggleHay = () => {
        if (hay) {
            setHay(true);
            setGetQuote(false);
        } else {
            setGetQuote(false);
            setHay(true);
        }
    }



    const matchMediaPhone = window.matchMedia("(max-width: 768px)");

    return (
        <div className="d-flex flex-column justify-content-center text-dark w-body">
            <Container className="my-5 pt-5" id="contact">
                <Row className={matchMediaPhone.matches ? "d-flex flex-column align-items-center justify-content-center" : "d-flex flex-row align-items-center justify-content-center"}>
                    <Col md={matchMediaPhone.matches ? 8 : 4} className="h-100 mb-5 pb-5">
                        <div className="container w-100 h-100 card py-4" style={{ backgroundColor: "#404040" }}>
                            <div className="d-flex flex-column align-items-center justify-content-center text-white" style={{ height: "100%" }}>
                                <h1 className="my-2" style={{ borderBottom: "1px solid #fff" }}>Contact Me</h1>
                                <div className="d-flex justify-content-center w-100 align-items-center my-3">
                                    <input type="radio" id="say-hi" name="radio" className="mx-2" onClick={toggleHay} />
                                    <label htmlFor="say-hi" className="mx-1 cursor-pointer" onClick={toggleHay}>Say Hi !</label>
                                    <input type="radio" id="quote" name="radio" className="mx-2" onClick={toggleQuote} />
                                    <label htmlFor="quote" className="mx-1 cursor-pointer" onClick={toggleQuote}>Ask Something</label>
                                </div>
                                <h4 className="my-3">Email</h4>
                                <a href="mailto:info@alfajjar.my.id" className="text-decoration-none text-white">
                                    <AttachEmail className="mx-2" style={{ color: "#fff" }} />
                                    mailto : info@alfajjar.my.id
                                </a>
                                <div className="d-flex justify-content-evenly align-items-center w-100 my-4">
                                    <a href="https://github.com/alfajjarjaya" target="_blank" rel="noreferrer" className="text-decoration-none">
                                        <GitHub style={{ color: "#fff" }} />
                                    </a>
                                    <a href="https://www.instagram.com/bang_jarrrz/" target="_blank" rel="noreferrer" className="text-decoration-none">
                                        <Instagram style={{ color: "#fff" }} />
                                    </a>
                                    <a href="https://www.facebook.com/alfajjar.alfajjar.90?mibextid=9R9pXO" target="_blank" rel="noreferrer" className="text-decoration-none">
                                        <Facebook style={{ color: "#fff" }} />
                                    </a>
                                    <a href="https://t.me/Njir_18" target="_blank" rel="noreferrer" className="text-decoration-none">
                                        <Telegram style={{ color: "#fff" }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} className="h-100 mb-5 pb-5">
                        {getQuote ? (
                            <>
                                <FormGetQuote />
                            </>
                        ) : (
                            <>
                                <FormSayHi />
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FaqComp;
