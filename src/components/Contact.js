import React from 'react';
import styles from '../Styling/Contact.module.css';

import email from '../Icons/email.jpg';
import facebook from '../Icons/facebook.jpg';
import instagram from '../Icons/instagram.jpg';

const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
}

const Contact = () => {
    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default Contact;