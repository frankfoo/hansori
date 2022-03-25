import React from 'react';
import styles from '../Styling/Footer.module.css';

import youtube from '../Icons/youtubeFooter.svg';
import facebook from '../Icons/facebookFooter.svg';
import instagram from '../Icons/instagramFooter.svg';

/* https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react */
const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
}

const footer = () => {
    return (
        <div className={styles.container}>
            <p>© 2022 by Hansori Music</p>
            <div className={styles.logos}>
                <img src={facebook} onClick={() => openNewTab('https://www.facebook.com/hansorimusicsyd/')} />
                <img src={instagram} onClick={() => openNewTab('https://www.instagram.com/hansorimusic/')} />
                <img src={youtube} onClick={() => openNewTab('https://www.youtube.com/channel/UChj2_rvyVD38h-Y7XywSJ7w')} />

            </div>
        </div>
    );
}

export default footer;