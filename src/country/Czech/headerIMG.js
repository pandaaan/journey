import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import lastdestimg from '../../images/header/prague.jpg';



class HeaderImg extends React.Component {


    render() {
        return (
            <>
                <Row >
                    <Col xs={12} className="last-dest-col">
                        <Card className=" last-dest-card text-white">
                            <Image src={lastdestimg} className="last-dest-img" />
                            <Card.ImgOverlay className="text-overlay d-flex flex-column justify-content-end">
                                <Card.Title > <FontAwesomeIcon icon={faMapMarkerAlt} /> Czech</Card.Title>
                                <Card.Text>Prague </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <br /> <br />


            </>
        );
    }

}

export default HeaderImg;
