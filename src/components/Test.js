import React from 'react';
import styles from '../Styling/Test.module.css';

/* Custom Components */
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Test = () => {
    return (
        <div className={styles.container}>
          <div className={styles.header}>
            <Navbar />
          </div>
          <div className={styles.body}>
            <h1>Page not found</h1>
          </div>
          <div className={styles.footer}>
          </div>
        </div>
    )
}

export default Test;