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
        <div className="d-flex flex-column justify-content-center w-light text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#202020" fillOpacity="1" d="M0,256L0,256L96,256L96,224L192,224L192,288L288,288L288,64L384,64L384,224L480,224L480,256L576,256L576,160L672,160L672,256L768,256L768,160L864,160L864,64L960,64L960,96L1056,96L1056,160L1152,160L1152,96L1248,96L1248,288L1344,288L1344,224L1440,224L1440,0L1344,0L1344,0L1248,0L1248,0L1152,0L1152,0L1056,0L1056,0L960,0L960,0L864,0L864,0L768,0L768,0L672,0L672,0L576,0L576,0L480,0L480,0L384,0L384,0L288,0L288,0L192,0L192,0L96,0L96,0L0,0L0,0Z"></path></svg>
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
                                    <label htmlFor="quote" className="mx-1 cursor-pointer" onClick={toggleQuote}>Get a Quote</label>
                                </div>
                                <h4 className="my-3">Email</h4>
                                <a href="mailto:directorfajarsite@gmail.com" className="text-decoration-none text-white">
                                    <AttachEmail className="mx-2" style={{ color: "#fff" }} />
                                    mailto : mochammad alfajjar
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#202020" fillOpacity="1" d="M0,96L0,160L96,160L96,64L192,64L192,256L288,256L288,160L384,160L384,256L480,256L480,288L576,288L576,160L672,160L672,96L768,96L768,96L864,96L864,128L960,128L960,224L1056,224L1056,160L1152,160L1152,288L1248,288L1248,288L1344,288L1344,128L1440,128L1440,320L1344,320L1344,320L1248,320L1248,320L1152,320L1152,320L1056,320L1056,320L960,320L960,320L864,320L864,320L768,320L768,320L672,320L672,320L576,320L576,320L480,320L480,320L384,320L384,320L288,320L288,320L192,320L192,320L96,320L96,320L0,320L0,320Z"></path></svg>
        </div>
    );
}

export default FaqComp;
