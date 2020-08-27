import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBuilding, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';




class Footer extends React.Component {
    render() {
        return (
            <>
                <Link to="/"><p className="header-Title"> <FontAwesomeIcon icon={faGlobeEurope} /> Journey</p></Link>
                <footer class="footer">
                    <div class="container  navi-icon d-flex justify-content-between ">
                        <NavLink exact to="/" activeClassName="selected" className="a-navi"><FontAwesomeIcon icon={faBuilding} /></NavLink>
                        <NavLink to="/all" activeClassName="selected" className="a-navi"><FontAwesomeIcon icon={faCompass} /></NavLink>
                        <NavLink to="/favorite" activeClassName="selected" className="a-navi"><FontAwesomeIcon icon={faHeart} /></NavLink>
                    </div>
                </footer>
            </>
        )
    }
}
export default Footer;