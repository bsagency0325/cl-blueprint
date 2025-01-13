import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useParallax } from 'react-scroll-parallax';
import { Fade } from 'react-awesome-reveal';

const Banner = ({imgBanner, title, subtitle}) => {
    
    const imageBanner = `url(${imgBanner})`;
    const { ref } = useParallax({ speed: 10 });

    return (
        
        <section className="banner--img" style={{backgroundImage: `${imageBanner}`}}>
            <div className="banner__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="banner__content">
                            <Fade cascade direction="right" triggerOnce>
                                <h1 className="text--title">{title}</h1>
                                <h2 className="text--lead">{subtitle}</h2>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;