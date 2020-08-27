
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import NotFoundimg from '../images/cherry-no-messages.png'
import Footer from '../component/footer';

class NotFound extends React.Component {



    render() {
        return (
            <div className="all">
                <Footer />
                <div className="coming-soon d-flex justify-content-center align-items-center ">

                    <Row className="">
                        <Col xs={12} className="">
                            <div className="illustration">
                                <Image src={NotFoundimg} fluid alt="https://icons8.de" className="" />
                                <h4 className="text-center mt-4">404 - Page Not Found</h4>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>
        );
    }

}

export default NotFound;


