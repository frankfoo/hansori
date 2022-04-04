import React from 'react';

/* Custom Components */
import Navbar from './Navbar.js';
import Footer from './Footer.js';

/* Styling*/
import styles from '../Styling/About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.body}>
                <div className={styles.upper}>
                    <p className={styles.firstName}>MICHELLE</p>
                    <p className={styles.lastName}>PARK</p>
                </div>
                <div className={styles.lower}>
                    <p className={styles.lowerName}><span className={styles.lowerFirstName}>MICHELLE</span> PARK</p>
                    <p className={styles.lowerRole}>Artistic and Music Director of Hansori Music</p>
                    <p className={styles.lowerJobs}>Past Concert Pianist | AMEB Piano and Cello teacher</p>
                    <p className={styles.lowerBio}>Biography</p>
                    <p className={styles.lowerText}>
                    Michelle Park, founder of Hansori Music has been performing and directing solo 
                    to ensemble concerts since 2003, and biannually at the Sydney Opera House since 2013. 
                    Michelle Park's numerous professional performances as concert pianist has taken her 
                    to Rome, Paris, Sydney, Vienna, Austria, Sofia, Vrazhdebna, Bulgaria, Hasselburg, 
                    Hamburg, Germany and more. She specialised the piano under professor 
                    Slobodan Zivkovic （pupil of Guido) at the Australian International 
                    Conservatorium of Music and professor Nikolai Evrov at the Sydney 
                    Conservatorium of Music (Sydney University).
                    </p>
                    <p className={styles.lowerText}>
                    Her passion for teaching Piano and Cello under the AMEB and piano accompaniment for 
                    students have become the prologue of her current vision to support and empower young 
                    musicians, who have as a result achieved exemplary results in the AMEB, gained secondary 
                    private school and local community scholarships, entry to pursue higher musical studies 
                    around the world, as well as prizes in domestic both international piano eisteddfod 
                    competitions including the Sydney Eisteddfod every year. 
                    </p>
                    <p className={styles.lowerText}>
                    Hansori Music aims to support and seek musicians of all age to live their passions for performance 
                    on stage, at our biannual concert projects which have taken to Sydney Opera House, Charity 
                    functions at the Westmead Children's hospital and Royal North Shore Hospital, as well as 
                    primary to secondary schools in Sydney, Australia. Our Hansori string ensemble members, solo 
                    guest performers and pupils of Michelle Park have also participated in worldwide events such 
                    as the One Month Festival (July) 2015-2016, La Pianista International Piano Competition (2018) 
                    and more. 
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;