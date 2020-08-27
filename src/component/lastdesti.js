import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import lastdestimg from '../images/header/croatia.jpg';
import Preview from '../component/preview';


class LastDesti extends React.Component {


    render() {
        return (
            <>
                <Row>
                    <Col xs={6} className="text-left">
                        <p className="mini-headline">last destination</p>
                    </Col>
                    <Col xs={6} className="text-right">
                        <Link to="/croatia" className="a-navi"> <p className="mini-headline see-more">more details</p></Link>
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} className="last-dest-col">
                        <Link to="/croatia" >  <Card className=" last-dest-card text-white">
                            <Image src={lastdestimg} className="last-dest-img" />
                            <Card.ImgOverlay className="text-overlay d-flex flex-column justify-content-end">
                                <Card.Title ><FontAwesomeIcon icon={faMapMarkerAlt} /> Croatia</Card.Title>
                                <Card.Text>Pag, Zadar, Pula, Rovinj </Card.Text>
                            </Card.ImgOverlay>
                        </Card></Link>
                    </Col>
                </Row>
                <br /> <br />
                <Preview />

            </>
        );
    }

}

export default LastDesti;
