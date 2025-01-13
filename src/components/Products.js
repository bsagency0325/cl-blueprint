import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Slide, Zoom } from 'react-awesome-reveal';

import CardPack from './CardPack';
import imgview from '../images/logo-view.svg';
import imgapptv from '../images/logo-netflix.png';
import imgmegamil from '../images/img-megamil.png';
import imgmegas from '../images/img-megas.jpg';

export default function Products() {
  const [visibleDiv, setVisibleDiv] = useState('doblepack');

  return (
    <div className="products">
      <div className="products__header">
        <Container>
          <Row>
            <Col>
              <Slide triggerOnce cascade>
              <div className="about__header__content">
                <h2 className="text--subtitle text-center text--white">PRODUCTOS  </h2>
              </div>
              <div className="about__header__content">
                <p className='text--body text-center text--white'>
                  ¡Transforma tu manera de conectarte con los paquetes de Megacable! Disfruta de Internet de alta velocidad, canales de televisión premium y telefonía confiable, todo en un solo lugar. 
                </p>
              </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='polygon'>
        <div className='polygon__bottom--right'></div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="products__container">
              <div className="products__content">
                <Slide triggerOnce cascade>
                <div className='products__buttons'>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('basicpack')}>Basic Pack</button>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('doblepack')}>Doble Pack</button>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('triplepack')}>Triple Pack</button>
                </div>
                
                <p className='text--lead text-center mb-4'>
                  (Cliente Nuevo)
                </p>
                </Slide>
                {visibleDiv === 'basicpack' && (
                  <Zoom triggerOnce cascade>
                  <ul className="products__list basicpack">
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 60 Megas"}
                        megas={"120 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$300"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 100 Megas"}
                        megas={"200 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$400"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 250 Megas"}
                        megas={"500 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$500"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 500 Megas"}
                        megas={"1000 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$600"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                  </ul>
                  </Zoom>
                )}
                {visibleDiv === 'doblepack' && (
                  <Zoom triggerOnce cascade>
                  <ul className="products__list doblepack">
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 60 Megas"}
                        megas={"120 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$360"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 100 Megas"}
                        megas={"200 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$460"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 250 Megas"}
                        megas={"500 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$560"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 500 Megas"}
                        megas={"1000 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$660"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                  </ul>
                  </Zoom>
                )}
                {visibleDiv === 'triplepack' && (
                  <Zoom triggerOnce cascade>
                  <ul className="products__list triplepack">
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 60 Megas"}
                        megas={"120 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$510"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 100 Megas"}
                        megas={"200 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$610"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 250 Megas"}
                        megas={"500 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$710"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 500 Megas"}
                        megas={"1000 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$810"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                  </ul>
                  </Zoom>
                )}
                <Zoom triggerOnce cascade>
                <ul className='cardpack__list-img'>
                  <li className="cardpack__list-img__item">
                    <a target="__blank" rel='norel' href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">
                      <img src={imgmegas} alt="megacable-en-tuxtla" class="cardpack__list-img__img"/>
                    </a>
                  </li>
                  <li className="cardpack__list-img__item">
                    <a target="__blank" rel='norel' href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">
                      <img src={imgmegamil} alt="megacable-en-tuxtla" class="cardpack__list-img__img"/>
                    </a>
                  </li>
                </ul>
                <p className='text--body text-center'>
                  En Tuxtla Gutiérrez, personalizamos cada paquete para satisfacer las necesidades únicas de tu hogar o negocio, asegurando que siempre estés conectado con lo que más te importa.
                </p>
                </Zoom>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        
  )
}
