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
        <div className={styles.container}>
            <div className={styles.left} onClick={() => openNewTab('/hansori')} >
                <img src={logo} alt="Hansori Logo" className={styles.logo}/>
                <div className={styles.titleContainer}>
                    <p className={styles.titleText}>HANSORI MUSIC</p>
                    <p className={styles.titleText1}><span className={styles.orangeText}>MICHELLE</span> PARK</p>
                </div>
            </div>
            <div className={styles.right}>
                <Navbar className={styles.navBar} variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link><Link to="/" className={styles.navLink}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about" className={styles.navLink}>About</Link></Nav.Link>
                        <NavDropdown title="Concerts" id="basic-nav-dropdown" className={styles.navLink} >
                            <NavDropdown.Item href="#action/3.1">All Concerts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mosman September 2020</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Shanghai December 2019</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Mosman December 2019</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">IMAGINE August 2019</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Luke Zhang Recital May 2019</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Masterclass April 2019</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fantasy III December 2018</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">One Month Festival 2018</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Gallery Art Index</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Masterclass April 2018</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fantasy II December 2017</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Masterclass July 2017</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Soul Mate June 2016</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fantasy December 2015</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Rock and Vivaldi July 2015</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gugak and Classic September 2013</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Join Us" id="basic-nav-dropdown" className={styles.navLink}>
                            <NavDropdown.Item href="#action/3.1">Hansori String Ensemble</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Volunteer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sponser Us</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to="/contact" className={styles.navLink}>Contact Us</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
};

/* <Link to="/about">About</Link> */

export default navBar;