import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Cards';
import Banner from './Banner';

import imgBanner from '../images/img-07.jpg';
import image01 from '../images/img-08.jpg';
import image02 from '../images/img-09.jpg';
import image03 from '../images/img-10.jpg';
import image04 from '../images/img-11.jpg';
import image05 from '../images/img-06.jpg';

import { Fade } from 'react-awesome-reveal';

export default function Services() {
  return (
    <div className="services">
      <Banner 
        imgBanner={imgBanner}
        title = "PROPUESTAS"
        subtitle = "Hola, Chiapas! Soy Justo Tomás Hernández y estoy emocionado de presentarles mi plataforma para un Chiapas más próspero y equitativo. Juntos, podemos construir un futuro brillante para nuestra comunidad."
      />
      <Container>
        <Row>
          <Col>
            <div className="services__container">
              <div className="services__content">
                <Fade cascade direction='right' triggerOnce>
                  <ul className="services__list">
                    <li className="services__item">
                      <Card 
                        image = {image01}
                        name = "1. Educación para Todos"
                        description = "Garantizaremos acceso universal a una educación de calidad, invirtiendo en infraestructura escolar y programas de capacitación para maestros. Ningún niño chiapaneco se quedará atrás en su búsqueda de conocimiento."
                      />
                    </li>
                    <li className="services__item">
                      <Card 
                        image = {image02}
                        name = "2. Desarrollo Económico Sostenible"
                        description = "Impulsaremos el crecimiento económico mediante el apoyo a pequeñas empresas locales y la promoción de industrias sostenibles. Crearemos oportunidades de empleo para todos, especialmente en las zonas rurales."
                      />
                    </li>
                    <li className="services__item">
                      <Card 
                        image = {image03}
                        name = "3. Salud y Bienestar"
                        description = "Mejoraremos el acceso a servicios de salud de calidad en toda la región, construyendo nuevos centros de salud y fortaleciendo los programas de atención primaria. La salud de nuestros ciudadanos es nuestra prioridad."
                      />
                    </li>
                    <li className="services__item">
                      <Card 
                        image = {image04}
                        name = "4. Preservación del Medio Ambiente"
                        description = "Protegeremos nuestros recursos naturales mediante la implementación de políticas de conservación y la promoción de energías renovables. Salvaguardar el medio ambiente es crucial para las generaciones futuras."
                      />
                    </li>
                    <li className="services__item">
                      <Card 
                        image = {image05}
                        name = "5. Justicia y Seguridad"
                        description = "Fortaleceremos las instituciones de justicia y seguridad para combatir la delincuencia y garantizar la protección de nuestros ciudadanos. Trabajaremos en colaboración con la comunidad para construir un Chiapas más seguro y pacífico."
                      />
                    </li>
                  </ul>
                </Fade>
              </div>
              <div className='services__footer'>
                <p className='text--body'>
                  Chiapas, nuestro potencial es ilimitado cuando trabajamos juntos. ¡Únete a nosotros en este viaje hacia un futuro más brillante para nuestra tierra y vota por Justo Tomás Hernández como tu próximo líder!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
