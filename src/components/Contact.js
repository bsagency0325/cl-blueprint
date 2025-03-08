import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

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
                                    <h3 className="text--subtitle text--dark-primary">Let’s Connect and <span className="lighted lighted--secondary">Grow Your Business Together</span></h3>
                                </div>  
                                <div className="headercontent__content">
                                    <p className="text--lead text--dark-secondary">
                                        Contact us to learn how Blueprint Strategies can deliver results for your business.
                                    </p>    
                                </div>
                                <ul className="contact__buttons">
                                    <li className='contact__buttons__item'><a className="btn btn--secondary" target="__blank" href="mailto:blueprintstrategiesagency@gmail.com">E-Mail</a></li>
                                    <li className="contact__buttons__item"><a className="btn btn--whats" target="__blank" href="https://wa.me/+17025780098?text=Blueprint%20Strategies%2C%20I%27m%20interested%20in%20growing%20my%20business">WhatsApp</a></li>
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