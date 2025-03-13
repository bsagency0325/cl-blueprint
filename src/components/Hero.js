import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';
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
                                    <h1 className="text--title text--white">We Generate <span className="lighted lighted--secondary">Quote-Ready</span> Home Improvement <span className="lighted lighted--secondary">Leads for You</span>
                                    </h1>
                                    <h2 className="text--lead text--white mb-5">No Heavy Lifting Required!</h2>
                                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+17025780098?text=Blueprint%20Strategies%2C%20I%27m%20interested%20in%20growing%20my%20business">Get more leads</a>
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