import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';

import icon01 from '../images/icon-01.png';
import icon02 from '../images/icon-02.png';
import icon03 from '../images/icon-03.png';

import { Fade } from 'react-awesome-reveal';

const imagePaths = [  
  require('../images/img-04.jpg'),
  require('../images/img-05.jpg'),
];

// import { FaBullhorn, FaFilter, FaTrophy } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="services">
      {/* <Banner 
        imgBanner={imgBanner}
        title = {<span>Our <span className='text--secondary'>Services</span></span>}
        subtitle = {<span>We provide cutting-edge <span className="text--secondary">solutions to help your business</span> excel in today's competitive landscape.</span>}
      /> */}
      <Container>
        <Row>
          <Col>
            <div className="services__container">
              <div className="services__content">
                <Fade cascade direction='right' triggerOnce>
                  <div className='headercontent__content'>
                    <h3 className="text--subtitle text-center text-uppercase text-white"><em>Our <span className="lighted lighted--secondary">Services</span></em></h3>
                  </div>
                  <ul className="boxes">
                    <li className="boxes__item">
                      <h4 className="text--lead boxes__title">Lead Generation with AI:</h4>
                      <p className='text--body boxes__content'>Drive a steady stream of high-quality leads using advanced AI technology and strategic ad campaigns.</p>
                    </li>
                    <li className="boxes__item">
                      <h4 className="text--lead boxes__title">Quote-Ready Leads:</h4>
                      <p className='text--body boxes__content'>Our AI system qualifies leads and ensures they are ready to take action, saving you time and effort.</p>
                    </li>
                    <li className="boxes__item">
                      <h4 className="text--lead boxes__title">Done-For-You Sales Pipeline:</h4>
                      <p className='text--body boxes__content'>We manage every step from lead generation to appointment setting, integrating everything into your CRM with GoHighLevel.</p>
                    </li>
                  </ul>
                  <Gridimg 
                    imagePaths = {imagePaths}
                  />
                </Fade>
                <div className='headercontent__content'>
                  <h3 className="text--subtitle text-center text-uppercase text-white"><em>How We Deliver <span className="lighted lighted--secondary">High-Quality Leads</span></em></h3>
                </div>
                <ul className="boxes">
                  <li className="boxes__item">
                    <div className="boxes__icon">
                      <img src={icon01} alt="icon-01" className="boxes__img"/>
                      {/* <FaBullhorn size={75}/> */}
                    </div>
                    <h4 className="text--lead boxes__title">We Launch Targeted Ads:</h4>
                    <p className='text--body boxes__content'>Our AI-optimized campaigns ensure your business is seen by homeowners actively seeking your services.</p>
                  </li>
                  <li className="boxes__item">
                    <div className="boxes__icon">
                      <img src={icon02} alt="icon-01" className="boxes__img"/>
                      {/* <FaFilter size={75}/> */}
                    </div>
                    <h4 className="text--lead boxes__title">AI Qualifies Leads:</h4>
                    <p className='text--body boxes__content'>Our system engages, nurtures, and qualifies leads via automated text, email, and soon, AI-powered phone calls.</p>
                  </li>
                  <li className="boxes__item">
                    <div className="boxes__icon">
                      <img src={icon03} alt="icon-01" className="boxes__img"/>
                      {/* <FaTrophy size={75}/> */}
                    </div>
                    <h4 className="text--lead boxes__title">You Close Deals:</h4>
                    <p className='text--body boxes__content'>We handle everything up to setting appointments, leaving you to focus on what you do best—closing deals and growing your business.</p>
                  </li>
                </ul>
                <div className="about__content text-center">
                  <a className="btn btn--secondary" target="__blank" href="tel:+17025780098">Get Started</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
