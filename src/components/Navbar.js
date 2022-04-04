import React from 'react';
import { Link } from "react-router-dom";

/* Styling*/
import styles from '../Styling/Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Icons/logo.webp';

/* Bootstrap Components*/
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

/* https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react */
const openNewTab = (url) => {
    const newWindow = window.open(url, '_self', 'noopener, noreferrer')
}

const navBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" className={styles.navBar} variant="dark">
            <div className={styles.left} onClick={() => openNewTab('/hansori')} >
                <img src={logo} alt="Hansori Logo" className={styles.logo}/>
                <div className={styles.titleContainer}>
                    <p className={styles.titleText}>HANSORI MUSIC</p>
                    <p className={styles.titleText1}><span className={styles.orangeText}>MICHELLE</span> PARK</p>
                </div>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={styles.navBarContainer}>
            <Nav className={styles.navBarDropdown} style={{color: 'white'}}>
                <Nav.Link><Link to="/" className={styles.navLink}>Home</Link></Nav.Link>
                <Nav.Link><Link to="/about" className={styles.navLink}>About</Link></Nav.Link>
                <NavDropdown title="Concerts" id="basic-nav-dropdown" className={styles.navLink}>
                    <NavDropdown.Item><Link to="/concerts" className={styles.navLink1}>All Concerts</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/mosman-september-2020" className={styles.navLink1}>Mosman September 2020</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/shanghai-december-2019" className={styles.navLink1}>Shanghai December 2019</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/mosman-december-2019" className={styles.navLink1}>Mosman December 2019</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/imagine-august-2019" className={styles.navLink1}>IMAGINE August 2019</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/luke-zhang-recital-may-2019" className={styles.navLink1}>Luke Zhang Recital May 2019</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/masterclass-april-2019" className={styles.navLink1}>Masterclass April 2019</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/fantasy-iii-december-2018" className={styles.navLink1}>Fantasy III December 2018</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/festival-july-2018" className={styles.navLink1}>One Month Festival 2018</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/gallery-april-2018" className={styles.navLink1}>Gallery Art Index</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/masterclass-april-2018" className={styles.navLink1}>Masterclass April 2018</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/fantasy-december-2017" className={styles.navLink1}>Fantasy II December 2017</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/masterclass-july-2017" className={styles.navLink1}>Masterclass July 2017</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/soulmate-june-2016" className={styles.navLink1}>Soul Mate June 2016</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/fantasy-december-2015" className={styles.navLink1}>Fantasy December 2015</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/vivaldi-july-2015" className={styles.navLink1}>Rock and Vivaldi July 2015</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/concerts/gugak-september-2013" className={styles.navLink1}>Gugak and Classic September 2013</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Join Us" id="basic-nav-dropdown" className={styles.navLink}>
                    <NavDropdown.Item><Link to="/hansori-string-ensemble" className={styles.navLink1}>Hansori String Ensemble</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/volunteer" className={styles.navLink1}>Volunteer</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/sponsor-us" className={styles.navLink1}>Sponsor Us</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/contact" className={styles.navLink}>Contact Us</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

/* <Link to="/about">About</Link> */

export default navBar;