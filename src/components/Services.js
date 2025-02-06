import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Cards';
import Banner from './Banner';

import imgBanner from '../images/img-15.jpg';
import image01 from '../images/img-12.jpg';
import image02 from '../images/img-13.jpg';
import image03 from '../images/img-14.jpg';

import { Fade } from 'react-awesome-reveal';

import { FaBullhorn, FaFilter, FaTrophy } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="services">
      <Banner 
        imgBanner={imgBanner}
        title = {<span>Our <span className='text--secondary'>Services</span></span>}
        subtitle = {<span>We provide cutting-edge <span className="text--secondary">solutions to help your business</span> excel in today's competitive landscape.</span>}
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
                        name = "1. Lead Generation with AI"
                        description={
                          <span>
                            <strong className='text--primary'>Drive a steady stream of high-quality leads</strong> to your business with our AI-powered lead generation platform. Our technology uses machine learning algorithms to identify and target potential customers who are most likely to convert.
                          </span>
                        }
                      />
                    </li>
                    <li className="services__item">
                      <Card 
                        image = {image02}
                        name = "2. Quote-Ready Leads"
                        description = {
                          <span>
                            <strong className="text--primary">AI qualifies and delivers leads that are ready</strong> for action. Our platform identifies prospects who are actively seeking your products or services, so you can focus on closing deals instead of chasing down leads.
                          </span>
                        }
                      />
                    </li>
                    <li className="services__item">
                      <Card 
                        image = {image03}
                        name = "3. Include a small CTA like"
                        description = {
                          <span>
                            <strong className='text--primary'>Learn more about how we can help you</strong> grow your business with our AI-powered lead generation platform and start generating more leads today with a free trial of our software solution.
                          </span>
                        }
                      />
                    </li>
                  </ul>
                </Fade>
                <div className='headercontent__content'>
                  <h3 className="text--subtitle text-center text-uppercase"><em>Our <span className="lighted lighted--secondary">Process</span></em></h3>
                </div>
                <ul className="boxes">
                  <li className="boxes__item">
                    <div className="boxes__icon">
                      <FaBullhorn size={75}/>
                    </div>
                    <h4 className="text--lead boxes__title">1. We Launch Targeted Ads:</h4>
                    <p className='text--body'>AI-optimized campaigns deliver a steady flow of leads.</p>
                  </li>
                  <li className="boxes__item">
                    <div className="boxes__icon">
                      <FaFilter size={75}/>
                    </div>
                    <h4 className="text--lead boxes__title">2. AI Qualifies Leads:</h4>
                    <p className='text--body'>Our system quickly engages and qualifies leads, ensuring they’re ready for your sales team.</p>
                  </li>
                  <li className="boxes__item">
                    <div className="boxes__icon">
                      <FaTrophy size={75}/>
                    </div>
                    <h4 className="text--lead boxes__title">3. You Close Deals:</h4>
                    <p className='text--body'>Get opportunities that are ready for action, saving you time and maximizing results.</p>
                  </li>
                </ul>
                <div className="about__content text-center">
                  <a className="btn btn--secondary" target="__blank" href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">Let's work togueter</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
