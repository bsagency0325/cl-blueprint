import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
// import { FaRocket, FaBullseye, FaChartLine } from 'react-icons/fa';

import partners01 from '../images/partners-01.png';
import icon04 from '../images/icon-04.png';
import icon05 from '../images/icon-05.png';
import icon06 from '../images/icon-06.png';

const imagePaths = [  
  require('../images/img-02.jpg'),
  require('../images/img-03.jpg'),
];

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="left">
            <div className="about__header">
              <div className="about__header__content">
                <h3 className="text--subtitle text-center text-uppercase text--dark-primary"><em>Who Are <span className="lighted lighted--secondary">We?</span></em></h3>
                <p className='text--body text-center text--dark-secondary'>
                  We’re a Las Vegas-based agency that helps home improvement companies secure top-tier, quote-ready leads through strategic advertising and AI-driven automation. Our targeted approach not only frees you up to focus on your craft but also ensures your growth is driven by genuinely interested clients—making your business expansion smooth and efficient.
                </p>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    
      <Gridimg 
          imagePaths = {imagePaths}
      />
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="right">
              <div className="about__content">
                <ul className='about__partners'>
                  <li className='about__partners__item'>
                    <h4 className="text--lead text-center text-uppercase text--dark-primary"><em>Our<br /><span className="lighted lighted--secondary">Partners</span></em></h4>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners01} alt="MetaAds"/>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners01} alt="GoHighLevel"/>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners01} alt="Appointwise"/>
                  </li>
                </ul>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
              <Fade triggerOnce>
                <div className='headercontent__content'>
                  <h3 className="text--subtitle text-center text-uppercase text--dark-primary"><em>What Makes Us <span className="lighted lighted--secondary">Different</span></em></h3>
                </div>
                <div className="about__content">
                  <ul className="boxes">
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        {/* <FaRocket size={75}/> */}
                        <img src={icon04} alt="icon-blueprint" className="boxes__img"/>
                      </div>
                      <h4 className="text--lead boxes__title">AI-Driven Precision</h4>
                      <p className='text--body boxes__content'>Our automated processes deliver faster, more accurate results by engaging and qualifying leads instantly.</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        {/* <FaBullseye size={75}/> */}
                        <img src={icon05} alt="icon-blueprint" className="boxes__img"/>
                      </div>
                      <h4 className="text--lead boxes__title">Custom Solutions</h4>
                      <p className='text--body boxes__content'>Every campaign is tailored to your specific business goals, ensuring you only speak with quote-ready prospects.</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        {/* <FaChartLine size={75}/> */}
                        <img src={icon06} alt="icon-blueprint" className="boxes__img"/>
                      </div>
                      <h4 className="text--lead boxes__title">Measurable Success</h4>
                      <p className='text--body boxes__content'>Our transparent reporting tools track your ROI and provide clear insights into your lead pipeline.</p>
                    </li>
                  </ul>
                </div>
                <div className="about__content text-center">
                  <a className="btn btn--secondary" target="__blank" href="mailto:blueprintstrategiesagency@gmail.com">Learn More</a>
                </div>
                
              </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
