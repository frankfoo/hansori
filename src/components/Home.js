import React from 'react';
import ReactPlayer from 'react-player'
import FileSaver from 'file-saver';

/* Custom Components */
import Navbar from './Navbar.js';
import Footer from './Footer.js';

/* Styling*/
import styles from '../Styling/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Bootstrap Components*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

/* Importing Images */
import email from '../Icons/email.jpg';
import facebook from '../Icons/facebook.jpg';
import instagram from '../Icons/instagram.jpg';

import grid1 from '../Images/grid1.jpg';
import grid2 from '../Images/grid2.jpg';
import grid3 from '../Images/grid3.jpg';
import grid4 from '../Images/grid4.jpg';
import grid5 from '../Images/grid5.jpg';
import grid6 from '../Images/grid6.jpg';
import grid7 from '../Images/grid7.jpg';
import grid8 from '../Images/grid8.jpg';
import grid9 from '../Images/grid9.jpg';
import grid10 from '../Images/grid10.jpg';
import grid11 from '../Images/grid11.jpg';
import grid12 from '../Images/grid12.jpg';

/* PDF File*/
import hansoriSponsorship from '../Files/SPONSORSITE.pdf';
const downloadFile = () => {
    console.log('click');
    FileSaver.saveAs(
        hansoriSponsorship,
        "HansoriSponsorship.pdf"
    )
}

/* https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react */
const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
}

/* Populating grid */

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
            <div className={styles.banner2} onClick={() => downloadFile()}>
                <p className={styles.banner2Title}>CLICK FOR SPONSORSHIP FORM</p>
                <p className={styles.banner2Description}>Download the file above and fill out our Hansori Music Sponsorship form to join our movement in empowering musicians with opportunities to perform at our Biannual events, learn more about your benefits</p>
            </div>
            <div className={styles.banner3}>
                <div className={styles.upperText}>
                    <p className={styles.upperTextTitle}>GET IN TOUCH</p>
                    <p className={styles.upperTextDesc}>We'd love to hear from you</p>
                </div>
                <div className={styles.banner3Photos}>
                    <div className={styles.banner3Left} onClick={() => openNewTab('mailto:HANSORIMUSICSYD@GMAIL.COM')}>
                        <img src={email} />
                        <p>hansorimusicsyd@gmail.com</p>
                    </div>
                    <div className={styles.banner3Middle} onClick={() => openNewTab('https://www.instagram.com/hansorimusic/')}>
                        <img src={instagram} />
                        <p>@hansorimusic</p>
                    </div>
                    <div className={styles.banner3Right} onClick={() => openNewTab('https://www.facebook.com/hansorimusicsyd/')}>
                        <img src={facebook} />
                        <p>@hansorimusicsyd</p>
                    </div>
                </div>
            </div>
            <div className={styles.photos}>
                <img src={grid1} alt="Grid " className={styles.gridImg}/>
                <img src={grid2} alt="Grid " className={styles.gridImg}/>
                <img src={grid3} alt="Grid " className={styles.gridImg}/>
                <img src={grid4} alt="Grid " className={styles.gridImg}/>
                <img src={grid5} alt="Grid " className={styles.gridImg}/>
                <img src={grid6} alt="Grid " className={styles.gridImg}/>
                <img src={grid7} alt="Grid " className={styles.gridImg}/>
                <img src={grid8} alt="Grid " className={styles.gridImg}/>
                <img src={grid9} alt="Grid " className={styles.gridImg}/>
                <img src={grid10} alt="Grid " className={styles.gridImg}/>
                <img src={grid11} alt="Grid " className={styles.gridImg}/>
                <img src={grid12} alt="Grid " className={styles.gridImg}/>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
};

export default Home;