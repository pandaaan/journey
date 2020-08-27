
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import Welcome from '../images/cherry-waiting.png'
import Footer from '../component/footer';

class Favorite extends React.Component {



    render() {
        return (
            <div className="all">
                <Footer />
                <div className="coming-soon d-flex justify-content-center align-items-center ">

                    <Row className="">
                        <Col xs={12} className="">
                            <div className="illustration">
                                <Image src={Welcome} fluid alt="https://icons8.de" className="" />
                                <h4 className="text-center mt-4">coming soon</h4>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>
        );
    }

}

export default Favorite;


