import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gridimg from './Gridimg';

import { Fade } from 'react-awesome-reveal';

const imagePaths = [  
  require('../images/img-02.jpg'),
  require('../images/img-01.jpg'),
  require('../images/img-04.jpg'),
  require('../images/img-08.webp'),
  require('../images/img-06.jpg'),
  require('../images/img-11.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-12.jpg'),
  require('../images/img-05.jpg'),
  require('../images/img-13.jpg'),
  require('../images/img-15.jpg'),
  require('../images/img-14.jpg'),
  require('../images/img-07.jpg'),
  require('../images/img-09.jpg'),
  require('../images/img-16.jpg'),
];

export default function About() {
  return (
    <section className="about">
      <div className='polygon'>
        <div className='polygon__top--left'></div>
      </div>
      <div className="about__header">
        <Container>
          <Row>
            <Col>
              <Fade cascade triggerOnce direction="left">
                <div className='about__header__content'>
                  <h3 className="text--subtitle text-center text-uppercase"><em>¡Ahora más diversión!</em></h3>
                </div>  
                <div className="about__header__content">
                  <p className='text--body text--white text-center'>
                    Descubre los mejores paquetes de Internet, Televisión y Telefonía con Megacable, líder en servicios de telecomunicaciones en México. En Tuxtla Gutiérrez, ofrecemos soluciones personalizadas para cada hogar y negocio. 
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='polygon'>
        <div className='polygon__bottom--right'></div>
      </div>
      <Gridimg 
          imagePaths = {imagePaths}
      />
      <Container>
        <Row>
          <Col>
            <div className="about__content">
              <Fade triggerOnce>
              <p className='text--body'>
                Con velocidades de Internet ultrarrápidas y acceso a las aplicaciones de TV más populares como Netflix, HBO Max y Disney+, Megacable transforma tu experiencia de entretenimiento. Además, ofrecemos soluciones de conectividad diseñadas para mejorar la productividad y profesionalismo en tu oficina, asegurando que tanto el trabajo como el ocio se realicen con la máxima eficiencia. ¡Contáctanos hoy y descubre cómo podemos potenciar tu hogar y negocio con una conexión sin igual!
              </p>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
