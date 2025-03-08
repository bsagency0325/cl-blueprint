import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';
import logo from '../images/logo-icono.png';

import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay hero__overlay--black"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Zoom triggerOnce cascade>
                                    <img className="image__logo-icono" src={logo} alt="blueprint-logo"/>     
                                    <p className='text--lead text--white'>Helping your business grow faster and smarter</p>
                                    <h1 className="text--title text--white">Turn Clicks Into <span className="lighted lighted--secondary">Quote-Ready</span> Leads With <span className="lighted lighted--secondary">AI-Powered Precision</span>
                                    </h1>
                                    <h2 className="text--lead text--white">Blueprint Strategies uses advanced AI to generate and qualify<br /><span className='lighted lighted--secondary'>high-quality leads</span></h2>
                                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+17025780098?text=Blueprint%20Strategies%2C%20I%27m%20interested%20in%20growing%20my%20business">Get Started Today</a>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;