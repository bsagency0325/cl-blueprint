import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';
import logo from '../images/logo.png';

import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });
    return (
        <>
        <section className="hero__content__subheader">
            <Container>
                <Row>
                    <Col>
                        <Zoom triggerOnce cascade>
                            <img className="image__logo" src={logo} alt="blueprint logo" />
                        </Zoom>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay hero__overlay--black"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Zoom triggerOnce cascade>
                                    <p className='text--lead text--white'>Helping your business grow faster and smarter</p>
                                    <h1 className="text--title text--white">Turn Clicks Into <span className="lighted lighted--secondary">Quote-Ready</span> Leads With <span className="lighted lighted--secondary">AI-Powered Precision</span>
                                    </h1>
                                    <h2 className="text--lead text--white">Blueprint Strategies uses advanced AI to generate and qualify<br /><span className='lighted lighted--secondary'>high-quality leads</span></h2>
                                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">Get Started Today</a>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Hero;