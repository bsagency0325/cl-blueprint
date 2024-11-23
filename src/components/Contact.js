import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

import logomegavida from '../images/logo-megavida.webp'
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
                                    <h3 className="text--subtitle text--secondary">Contáctanos</h3>
                                </div>  
                                <div className="headercontent__content">
                                    <p className="text--lead text-uppercase text--secondary">
                                        Ponte en contacto y comienza a disfrutar de <br />Megacable Tuxtla
                                    </p>    
                                </div>
                                <a className="btn btn--primary" target="__blank" href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">Inicia tu contrato de Megacable</a>
                                <img src={logomegavida} alt="contrata internet en tuxtla" className='contact__img--logomegavida' />
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