import React from 'react';
import ReactPlayer from 'react-player'
import FileSaver from 'file-saver';
import { Link } from "react-router-dom";

/* Styling*/
import styles from '../Styling/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Bootstrap Components*/
import Button from 'react-bootstrap/Button';

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
            <div className={styles.video}>
                <ReactPlayer url="https://youtu.be/VRhwWWMLQkE" muted="true" controls="true" width="100%" className={styles.videoPlayer}/>
            </div>
            <div className={styles.banner1}>
                <h1>OUR VISION</h1>
                <p>Hansori Music aims to support and seek musicians of all ages to live their passions for performance on stage, 
                    at our biannual concert projects which have taken to Sydney Opera House, Charity functions, Westmead Children's 
                    hospital, Royal North Shore Hospital and primary to secondary schools in Sydney, Australia.</p>
                <h2>JOIN US</h2>
                <div className={styles.banner1Buttons}>
                    <Button variant="dark" className={styles.btn}><Link to="/hansori-string-ensemble" className={styles.navLink}>OUR STRING ENSEMBLE</Link></Button>
                    <Button variant="dark" className={styles.btn}><Link to="/volunteer" className={styles.navLink}>VOLUNTEER WITH HANSORI</Link></Button>
                    <Button variant="dark" className={styles.btn}><Link to="/sponsor-us" className={styles.navLink}>SPONSOR US</Link></Button>
                </div>
            </div>
            <div className={styles.banner2} onClick={() => downloadFile()}>
                <h2>CLICK FOR SPONSORSHIP FORM</h2>
                <p>Download the file above and fill out our Hansori Music Sponsorship form to join our movement in empowering musicians with opportunities to perform at our Biannual events, learn more about your benefits</p>
            </div>
            <div className={styles.banner3}>
                <h2>GET IN TOUCH</h2>
                <p>We'd love to hear from you</p>
                <div className={styles.banner3PhotoGrid}>
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
                <img src={grid1} alt="Grid " />
                <img src={grid2} alt="Grid " />
                <img src={grid3} alt="Grid " />
                <img src={grid4} alt="Grid " />
                <img src={grid5} alt="Grid " />
                <img src={grid6} alt="Grid " />
                <img src={grid7} alt="Grid " />
                <img src={grid8} alt="Grid " />
                <img src={grid9} alt="Grid " />
                <img src={grid10} alt="Grid " />
                <img src={grid11} alt="Grid " />
            </div>
        </div>
    )
};

export default Home;