import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

import iconMail from '../images/icon-mail.png';
import iconWhats from '../images/icon-whats.png';

const Contact = () => {
    return(
        <section className='contact'>
            <Container>
                <Row>
                    <Col>
                        <div className="headercontent__container">
                            <div className="headercontent__header">
                                <Fade cascade triggerOnce direction="up"> 
                                <div className='headercontent__header__content'>
                                    <h3 className="text--subtitle text--dark-primary">Get 10 New <span className="lighted lighted--secondary">Quote-Ready Leads</span></h3>
                                </div>  
                                <div className="headercontent__content">
                                    <p className="text--lead text--dark-secondary">
                                        Within 30 Days, or You Don’t Pay
                                    </p>    
                                </div>
                                <ul className="contact__buttons">
                                    <li className='contact__buttons__item'>
                                        <a className="contact__buttons__btn" target="__blank" href="mailto:blueprintstrategiesagency@gmail.com">
                                            <img src={iconMail} alt="e-mail" className="contact__buttons__icon"/>
                                        </a></li>
                                    <li className="contact__buttons__item">
                                        <a className="contact__buttons__btn" target="__blank" href="https://wa.me/+17025780098?text=Blueprint%20Strategies%2C%20I%27m%20interested%20in%20growing%20my%20business">
                                            <img src={iconWhats} alt="whatsapp" className="contact__buttons__icon"/>
                                        </a>
                                    </li>
                                </ul>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;
