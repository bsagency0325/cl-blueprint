import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTeam from './CardTeam';

import image01 from '../images/team-01.jpg';
import image02 from '../images/team-02.jpg';
import image03 from '../images/team-03.jpg';
import image04 from '../images/team-04.jpg';
import image05 from '../images/team-05.jpg';
import image06 from '../images/team-06.jpg';
import image07 from '../images/team-07.jpg';
import image08 from '../images/team-08.jpg';
import image09 from '../images/team-09.jpg';

import { Fade } from 'react-awesome-reveal';

const Team = () => {
    return(
        <div className="team">
            <div className='polygon'>
                <div className='polygon__top--left--gray'></div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="team__container">
                            <div className='headercontent__container'>
                                <div className="team__header">
                                    <Fade cascade triggerOnce direction="up"> 
                                    <div className='team__header__content'>
                                        <h3 className="text--subtitle">Conoce a Nuestro Equipo</h3>
                                        <hr className='hr--basic'/>
                                    </div>  
                                    <div className="team__content">
                                        <p className="text--lead text-uppercase">
                                            Unidos por nuestra comunidad,<br />guiados por nuestro compromiso.
                                        </p>    
                                    </div>
                                    <div className='team__content'>
                                        <p className='text--small'>
                                            Queremos presentarte a las personas detrás de nuestra visión. Cada miembro de nuestro equipo está comprometido con el bienestar de nuestra comunidad y dedicado a trabajar incansablemente para lograr un Chiapas más próspero y equitativo. Descubre a quienes lideran el cambio y se comprometen con la excelencia en cada paso del camino.
                                        </p>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                            <Fade cascade triggerOnce direction='down'>
                            <ul className='team__list'>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image01}
                                        name = "Justo Tomás Hernández"
                                        description = "Presidente"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image02}
                                        name = "Marian Vázquez González"
                                        description = "Secretaría General"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image03}
                                        name = "Jorge Pedrero Gómez"
                                        description = "Secretario de Organización"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image04}
                                        name = "Rafael Alberto Camargo"
                                        description = "Secretario de Procesos Electorales y Afiliación"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image05}
                                        name = "Leticia Fabiola Vicente"
                                        description = "Secretaria de la Juventud y Atención a la Mujer"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image06}
                                        name = "José Maria Juárez Llaven"
                                        description = "Administración y Finanzas"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image07}
                                        name = "José Domingo Palacios Tovar"
                                        description = "Coordinador de Asuntos Juridicos"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image08}
                                        name = "Gerardo Hernández Arcos"
                                        description = "Centro de Formación y Desarrollo"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image09}
                                        name = "Paul André Solís Zúñiga"
                                        description = "Coordinador de Información y Transparencia"
                                    />
                                </li>
                            </ul>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team;