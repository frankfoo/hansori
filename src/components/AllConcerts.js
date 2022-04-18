import React from 'react';
import { Link } from "react-router-dom";

/* Styling*/
import styles from '../Styling/AllConcerts.module.css';

const URL = process.env.REACT_APP_URL;

const AllConcerts = () => {
    const [operaConcerts, setOperaConcerts] = React.useState([]);
    const [masterclass, setMasterclass] = React.useState([]);
    const [student, setStudent] = React.useState([]);
    const [other, setOther] = React.useState([]);

    React.useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        fetch(`${URL}/getConcertOfType`, options)
            .then((res) => res.json())
            .then((res) => {
                if (res['Response'] === 'Error with server') {
                    console.log('Error');
                } else {
                    console.log(res['Response'])
                    let concerts = res['Response']
                    
                    // Sydney Opera House Concerts
                    if (concerts[0].length > 0) {
                        setOperaConcerts(concerts[0])
                    }
                    // Masterclass Workshops
                    if (concerts[1].length > 0) {
                        setMasterclass(concerts[1])
                    }
                    // Student Recitals
                    if (concerts[2].length > 0) {
                        setStudent(concerts[2])
                    }
                    // Other
                    if (concerts[3].length > 0) {
                        setOther(concerts[3])
                    }
                }
            });
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.body} >
                {/* Sydney Opera House Concerts */}
                {operaConcerts.length > 0 && 
                    <div className={styles.posterContainer}>
                        <h2>SYDNEY OPERA HOUSE CONCERTS</h2>
                        <div className={styles.posters}>
                            {operaConcerts.map((item) => {
                                return (
                                    <div className={styles.individualPoster}>
                                        <p>{item[1]}</p>
                                        <img src={`${URL}/static/posters/${item[0]}.jpg`} onError={({ currentTarget  }) => { currentTarget.onError = null; currentTarget.src=`${URL}/static/posterNotFound.jpg`}} alt='poster' className={styles.img} />
                                        <button type="button" className={styles.btn}><Link to={`/concerts/${item[0]}`} className={styles.navLink}>Read More</Link></button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {/* Masterclass */}
                {masterclass.length > 0 && 
                <div className={styles.posterContainer}>
                    <h2>MASTERCLASS WORKSHOPS</h2>
                    <div className={styles.posters}>
                        {masterclass.map((item) => {
                            return (
                                <div className={styles.individualPoster}>
                                    <p>{item[1]}</p>
                                    <img src={`${URL}/static/posters/${item[0]}.jpg`} onError={({ currentTarget  }) => { currentTarget.onError = null; currentTarget.src=`${URL}/static/posterNotFound.jpg`}} alt='poster' className={styles.img} />
                                    <button type="button" className={styles.btn}><Link to={`/concerts/${item[0]}`} className={styles.navLink}>Read More</Link></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }
                {/* Student Recitals */}
                {student.length > 0 && 
                <div className={styles.posterContainer}>
                    <h2>STUDENT RECITALS</h2>
                    <div className={styles.posters}>
                        {student.map((item) => {
                            return (
                                <div className={styles.individualPoster}>
                                    <p>{item[1]}</p>
                                    <img src={`${URL}/static/posters/${item[0]}.jpg`} onError={({ currentTarget  }) => { currentTarget.onError = null; currentTarget.src=`${URL}/static/posterNotFound.jpg`}} alt='poster' className={styles.img} />
                                    <button type="button" className={styles.btn}><Link to={`/concerts/${item[0]}`} className={styles.navLink}>Read More</Link></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }
                {/* Other */}
                {other.length > 0 && 
                <div className={styles.posterContainer}>
                    <h2>OTHER</h2>
                    <div className={styles.posters}>
                        {other.map((item) => {
                            return (
                                <div className={styles.individualPoster}>
                                    <p>{item[1]}</p>
                                    <img src={`${URL}/static/posters/${item[0]}.jpg`} onError={({ currentTarget  }) => { currentTarget.onError = null; currentTarget.src=`${URL}/static/posterNotFound.jpg`}} alt='poster' className={styles.img} />
                                    <button type="button" className={styles.btn}><Link to={`/concerts/${item[0]}`} className={styles.navLink}>Read More</Link></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default AllConcerts;