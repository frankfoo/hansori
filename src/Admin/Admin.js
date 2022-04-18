import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from '../AdminStyling/Admin.module.css';

/* Bootstrap Components */
import { Card, Button, Modal, Alert } from 'react-bootstrap';

const URL = process.env.REACT_APP_URL;
console.log(process.env.REACT_APP_URL);
console.log(process.env.REACT_APP_WEBSITE_NAME);

const Admin = () => {
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn');
        if (!loggedIn) {
            window.location.href = '/hansori/login';
        }
    }, [])

    const [concerts, setConcerts] = React.useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        fetch(`${URL}/getConcertList`, options)
            .then((res) => res.json())
            .then((res) => {
                if (res['Response'] === 'Error with server') {
                    console.log('Error');
                } else {
                    console.log(res['Response']);
                    setConcerts(res['Response']);
                }
            });
    }, [])

    const [target, setTarget] = React.useState(0);
    let deleteConcert = () => {
        console.log(target);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({target}),
        };
        fetch(`${URL}/removeConcert`, options)
            .then((res) => res.json())
            .then((res) => {
                if (res['Response'] === 'Success') {
                    setShow1(true)
                    setAlert('Concert successfully removed, please reload the page')
                } else {
                    setShow1(true)
                    setAlert('Error removing concert, please try again')
                }
            });
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show1, setShow1] = useState(false);
    const [alert, setAlert] = useState('');
    /* Alerts */
    function AlertDismissibleExample() {
        let variant = 'danger';
        let heading = 'Error';
        if (alert == 'Concert successfully removed, please reload the page') {
            variant = 'success';
            heading = 'Success';
        }
        return (
            <Alert variant={variant} onClose={() => setShow1(false)} dismissible>
                <Alert.Heading>{heading}</Alert.Heading>
                <p>{alert}</p>
            </Alert>
        );
        //return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <h1>ADMIN PANEL</h1>
                <h2>All Concerts</h2>
                <div className={styles.alert}>
                    {show1 && (
                        <AlertDismissibleExample />
                    )}
                </div>
                <div className={styles.concertGrid}>
                    {concerts.length > 0 && 
                        concerts.map((item) => {
                            return (
                                <Card className={styles.card} bg={'dark'} text={'light'} border={'light'}>
                                    <Card.Img 
                                        variant="top" 
                                        src={`${URL}/static/posters/${item[0]}.jpg`} 
                                        onError={({ currentTarget  }) => { 
                                            currentTarget.onError = null; 
                                            currentTarget.src=`${URL}/static/posterNotFound.jpg`
                                        }}
                                        className={styles.cardImg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{item[2]}</Card.Title>
                                        <Card.Link ><Link to={`/admin/edit/${item[0]}`} className={styles.navLink} >Edit Concert</Link></Card.Link>
                                        <Card.Link className={styles.navLink} onClick={() => {setTarget(item[0]);handleShow()}}>Delete Concert</Card.Link>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
                <div className={styles.buttons}>
                    <Button variant="dark"><Link to={`/admin/add`} className={styles.navLink}>Add New Concert</Link></Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete Concert</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this concert?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => {deleteConcert(); handleClose();}}>
                        Yes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Admin;