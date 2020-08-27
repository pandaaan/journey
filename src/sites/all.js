import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import CountryData from '../data/headerData';
import Footer from '../component/footer';



class All extends React.Component {


    render() {

        return (
            <>
                <Footer />
                <p className="mini-headline">2019</p>
                {CountryData.twonineteen.map((postDetail, index) => {
                    return (
                        <>
                            <Row >
                                <Col xs={12} className="last-dest-col">

                                    <Link to={postDetail.link} >
                                        <Card className=" last-dest-card text-white">
                                            <Image src={require('../images/header' + postDetail.image)} className="last-dest-img" />
                                            <Card.ImgOverlay className="text-overlay d-flex flex-column justify-content-end">
                                                <Card.Title ><FontAwesomeIcon icon={faMapMarkerAlt} /> {postDetail.country}</Card.Title>
                                                <Card.Text>{postDetail.city}</Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                            <br /> <br />
                        </>

                    )
                })}
                <br /> <br /> <br />

            </>
        );
    }

}

export default All;


