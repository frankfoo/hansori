import React from 'react';
import { Link } from "react-router-dom";

/* Custom Components */
import Navbar from './Navbar.js';
import Footer from './Footer.js';

import pic1 from '../Images/grid1.jpg';
import pic2 from '../Images/volunteer.jpg';
import pic3 from '../Images/sponsorus1.jpg';
/* Styling*/
import styles from '../Styling/Join.module.css';

const Ensemble = () => {
    return (
        <div className={styles.body}>
            <div className={styles.info}>
                <h2>OUR STRING ENSEMBLE</h2>
                <p>Hansori Music's string Ensemble led by Michelle Park is looking for passionate Violinists/Violists/Cellists of all ages who have:</p>
                <ul>
                    <li>
                        Moderate to intermediate performance skills and experience
                    </li>
                    <li>
                        Availability and commitment level for rehearsals once a week
                    </li>
                </ul>
                <p>
                    To find out more information or to present an expression of interest, please fill out your contact information including your name, email address, 
                    phone number, instrument, as well as a brief description of your music experiences, and brief introduction of your self. 
                </p>
                <button type="button"><Link to="/contact" className={styles.link}>Contact Us</Link></button>
            </div>
            <img src={pic1} alt="String Ensemble" className={styles.pic} />
        </div>
    )
}

const Volunteer = () => {
    return (
        <div className={styles.body}>
            <div className={styles.info}>
                <h2>VOLUNTEER WITH HANSORI</h2>
                <p>Non-for profit Volunteering </p>
                <ul>
                    <li>
                        Event Program Facilitator (Running of Events)
                    </li>
                    <li>
                        Photography/ Filming
                    </li>
                </ul>
                <p>
                    Hansori Music aims to support and seek musicians of all ages to live their passions for performance on stage, 
                    at our biannual concert projects which have taken to Sydney Opera House, Charity functions at the Westmead Children's 
                    hospital and Royal North Shore Hospital, as well as primary to secondary schools in Sydney, Australia.
                </p>
                <p>
                    Our Hansori string ensemble members, solo guest performers and pupils of Michelle Park have also participated in worldwide events such as the 
                    One Month Festival (July) 2015-2016.  
                </p>
                <p>
                    To apply for volunteering positions, submit your name, contact number, email and cv to our contacts page. 
                </p>
                <button type="button"><Link to="/contact" className={styles.link}>Contact Us</Link></button>
            </div>
            <img src={pic2} alt="String Ensemble" className={styles.pic} />
        </div>
    )
}

const Sponsor = () => {
    return (
        <div className={styles.body}>
            <div className={styles.info}>
                <h2>SPONSOR US</h2>
                <p>
                    We are looking for kind Sponsors such as you to join our movement to empower young musicians with the opportunity to perform at Hansori Music’s major 
                    music events, including our annual concerts at the Sydney Opera House. 
                </p>
                <p>
                   Hansori Music has always aimed to scout musicians to share an unique opportunity to live their performance dreams. Our journey has taken us to performing 
                   at charitable community events such as the Royal North Shore Hospital and Westmead Children’s Hospital. Our students have achieved exemplary 
                   results in the AMEB, gained secondary private school and local community scholarships, and have won prizes at both domestic and international 
                   piano competitions every year. Recently, we had our July Holidays Masterclass workshop and concert at the Fine Music Studios (Radio Station 102.5 FM). 
                </p>
                <p>
                    We would be grateful if you supported us to give more opportunities to musicians at our annual Sydney Opera House concerts. This event will be 
                    advertised internationally at Sydney Opera House’s ‘What’s On’ programs, the box office, our social media platforms and in various places around 
                    the local community. Every event will anticipate an audience of more than 200 at one of Australia’s most iconic landmarks, the stunning Utzon Room of the 
                    Sydney Opera House with an ocean lit view of the Sydney Harbour.
                </p>
                <p>
                    As well as our annual Sydney Opera House concerts, we are looking for sponsors to support our ongoing work for Masterclass workshops for all musicians and 
                    charitable community concerts which will occur across the year. Additionally, we are planning to establish our first Hansori Music Competition for young, 
                    talented musicians such as HSC music students in Sydney, Australia.  Your invaluable support is much needed.
                </p>
                <button type="button"><Link to="/contact" className={styles.link}>Contact Us</Link></button>
            </div>
            <img src={pic3} alt="String Ensemble" className={styles.pic} />
        </div>
    )
}

const Join = ({ flag }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Navbar />
            </div>
            {flag === "1" && 
                <Ensemble /> 
            }
            {flag === "2" &&
                <Volunteer />
            }
            {flag === "3" &&
                <Sponsor />
            }
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Join;