import React from 'react';

/* Big Components */
import Navbar from './Navbar.js';

/* Styling*/
import styles from '../Styling/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Bootstrap Components*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <Container className={styles.container}>
            <Row className={styles.header}>
                <Col>
                    <Navbar />
                </Col>
            </Row>
            <Row className={styles.video}>
                <Col>Video goes here</Col>
            </Row>
            <Row className={styles.banner1}>
                <Col>Banner goes here</Col>
            </Row>
            <Row className={styles.banner2}>
                <Col>Banner goes here</Col>
            </Row>
            <Row className={styles.banner3}>
                <Col>Banner goes here</Col>
            </Row>
            <Row className={styles.pictureGrid}>
                <Col>Grid of pictures goes here</Col>
            </Row>
        </Container>
    )
};

export default Home;