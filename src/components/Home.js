import React from 'react';
import ReactPlayer from 'react-player'

/* Custom Components */
import Navbar from './Navbar.js';

/* Styling*/
import styles from '../Styling/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Bootstrap Components*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.video}>
                <div className={styles.videoContainer}>
                    <ReactPlayer url="https://youtu.be/VRhwWWMLQkE" playing="true" muted="true" controls="true" width="100%" height="100%" className={styles.videoPlayer}/>
                </div>
            </div>
            <div className={styles.banner1}>
                <p className={styles.banner1Title}>OUR VISION</p>
                <div className={styles.banner1Description}>
                    <p>Hansori Music aims to support and seek musicians of all ages to live their passions for performance on stage, 
                        at our biannual concert projects which have taken to Sydney Opera House, Charity functions, Westmead Children's 
                        hospital, Royal North Shore Hospital and primary to secondary schools in Sydney, Australia.</p>
                </div>
                <p className={styles.banner1JoinUs}>JOIN US</p>
                <div className={styles.button1Container}>
                    <Button variant="dark" className={styles.btn}>OUR STRING ENSEMBLE</Button>
                    <Button variant="dark" className={styles.btn}>VOLUNTEER WITH HANSORI</Button>
                    <Button variant="dark" className={styles.btn}>SPONSOR US</Button>
                </div>
            </div>
            <div className={styles.banner2}>
                <p className={styles.banner2Title}>CLICK FOR SPONSORSHIP FORM</p>
                <p>Download the file above and fill out our Hansori Music Sponsorship form to join our movement in empowering musicians with opportunities to perform at our Biannual events, learn more about your benefits</p>
            </div>
            <div className={styles.banner3}>
                <p>Banner here</p>
            </div>
            <div className={styles.photos}>
                <p>Photos here</p>
            </div>
        </div>
    )
};

export default Home;