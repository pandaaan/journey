import React from 'react';
import '../../styles/Country.scss'
import { Row, Col } from 'react-bootstrap';
import Footer from '../../component/footer';
import HeaderIMG from './headerIMG';
import ReadMore from '../../component/readMore';
import IMGColumn from './imgcolumn';


class Blog extends React.Component {



    render() {
        return (
            <div className="country">
                <Footer />
                <Row>
                    <Col xs={6} className="text-left">
                        <p className="mini-headline">May 2019</p>
                    </Col>

                </Row>
                <HeaderIMG />
                <Row>
                    <Col>
                        <ReadMore >

                            <p>Travelblogger cute design expedition design pretty fun, <span className="font-weight-bold">theme whimsical adventure traveler</span> travelblogger fun clean. Travelblogger cute expedition travelblogger wanderlust website WordPress. Darn webdesign theme excursion design, organized fun travelblogger Travel design. Travel modern pretty WordPress website, colorful colorful adventure simple adventure traveler. Webdesign pretty organized colorful Travel, expedition traveling webdesign webdesign colorful. Cute webdesign pretty simple, design WordPress simple wanderlust webdesign wanderlust. Clean blogger excursion Travel fun clean darn traveling. Design expedition modern webdesign, theme pretty pretty darn Travel WordPress. Travel pretty webdesign clean cute traveler whimsical colorful clean.</p>

                        </ReadMore>
                    </Col>
                </Row>
                <IMGColumn />


            </div>
        );
    }

}

export default Blog;
