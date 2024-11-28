import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';
// import logo from '../images/logo.png';

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
                                    <p className='text--lead text--white'>Effortless Business Growth</p>
                                    <h1 className="text--title text--white">We Generate <span className="lighted">Quote-Ready</span> Home Improvement <span className="lighted">Leads for You</span>
                                    </h1>
                                    <h2 className="text--lead text--white">No Heavy Lifting Required!<span className='lighted'><br />Based in Nevada</span></h2>
                                    <a className="btn btn--primary" target="__blank" href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">Get More Leads</a> */
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='polygon'>
                <div className='polygon__top--left'></div>
            </div>
        </section>
    )
}

export default Hero;