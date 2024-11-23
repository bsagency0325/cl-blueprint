import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { Fade } from 'react-awesome-reveal';

const Gridimg = ({imagePaths}) => {

    const images = imagePaths.map((path, index) => ({
        id: index +1,
        src: path,
        alt: `image-${index+1}`,
    }));

    return(
        <section className="gridimg">
            <Container>
                <Row>
                    <Col>
                        <div className="gridimg__container">
                            <div className="gridimg__content">
                                <Fade cascade triggerOnce>
                                <ul className="gridimg__list">
                                    {images.map((image) => (
                                        <li key={image.id} className="gridimg__item">
                                            <img className="gridimg__img" src={image.src} alt={image.alt} />
                                        </li>
                                    ))}
                                </ul>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Gridimg;