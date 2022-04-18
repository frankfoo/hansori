import React from 'react';
import { Link } from "react-router-dom";

/* Styling*/
import styles from '../Styling/Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Icons/logo.webp';

/* Bootstrap Components*/
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const URL = process.env.REACT_APP_URL;

/* https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react */
const openNewTab = (url) => {
    const newWindow = window.open(url, '_self', 'noopener, noreferrer')
}

const NavBar = () => {

    const [concerts, setConcerts] = React.useState([]);

    React.useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        fetch(`${URL}/getConcertList`, options)
            .then((res) => res.json())
            .then((res) => {
                if (res['Response'] === 'Error with server') {
                    console.log('Error');
                } else {
                    console.log(res['Response']);
                    setConcerts(res['Response']);
                }
            });
    }, [])



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
                    {concerts.map((item, key) => {
                        //console.log(idx, key);
                        return (
                            <NavDropdown.Item><Link to={`/concerts/${item[0]}`} className={styles.navLink1}>{item[1]}</Link></NavDropdown.Item>
                        )
                    })}
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

export default NavBar;