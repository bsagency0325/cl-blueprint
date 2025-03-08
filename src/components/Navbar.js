import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

// import { useState } from "react";
import {Link} from 'react-scroll';

import logoNavbar from '../images/logo-lineal-white-icon.png';

const Navbar = () => {

    // const [visible, setVisible] = useState(true);
    // const toggleNavbar = () => {
    //     setVisible(!visible);
    // }

    return (
        <nav className="navBar">
            <Container>
                <Row>
                    <Col>
                        <div className="navBar__container">
                            <div className="navBar__col">
                                <Link href="#" to="hero" smooth={true} duration={500} className="navBar__brand"><img className="image__logo-navbar" alt="logo-blueprint" src={logoNavbar}/></Link>
                            </div>
                            {/* <div className="navBar__col">
                                <button className="navBar__toggle" onClick={toggleNavbar}>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                </button>
                            </div>
                            <div className="navBar__col">
                                <ul className={`navBar__nav ${visible ? 'visible' : ''}`}>
                                    <li className="navBar__nav__item"><Link href="#" to="hero" smooth={true} duration={500}  activeClassName="active">Home</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="products" smooth={true} duration={500}>Services</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="about" smooth={true} duration={500}>About</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="contact" smooth={true} duration={500}>Contacto</Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    ) 
}
export default Navbar;