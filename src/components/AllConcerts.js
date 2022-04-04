import React from 'react';

/* Custom Components */
import Navbar from './Navbar.js';
import Footer from './Footer.js';

/* Styling*/
import styles from '../Styling/AllConcerts.module.css';

import fantasy3 from '../Images/fantasy3.jpg';
import fantasy2 from '../Images/fantasy2.jpg';
import soulmate from '../Images/soulmate.jpg';
import rockvivaldi from '../Images/rockvivaldi.jpg';

import masterclass1 from '../Images/masterclass.jpg';

const operaConcerts = [[fantasy3, 'fantasy-ii-december-2017'], [fantasy2, 'masterclass-july-2017'], [soulmate, 'soul-mate-june-2016'], [rockvivaldi, 'copy-of-soul-mate-june-2016']];
const masterclass = [[masterclass1, '??']];


const AllConcerts = ({ flag }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.opera}>
                <h2>SYDNEY OPERA HOUSE CONCERTS</h2>
                <div className={styles.posters}>
                    {operaConcerts.map((item) => {
                        console.log(item);
                        return (
                            <div>
                                <img src={item[0]} alt='poster' className={styles.img} />
                                <button type="button" className={styles.btn}>Read More</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.workshop}>
                <h2>MASTERCLASS WORKSHOPS</h2>
                <div className={styles.posters}>
                    {masterclass.map((item) => {
                        return (
                            <div>
                                <img src={item[0]} alt='poster' className={styles.img} />
                                <button type="button" className={styles.btn}>Read More</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.recitals}>
                <h2>STUDENT RECITALS</h2>
            </div>
            <Footer />
        </div>
    )
}

export default AllConcerts;