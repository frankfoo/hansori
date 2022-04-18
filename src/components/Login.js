import React, { useEffect, useState } from 'react';
import styles from '../Styling/Login.module.css';

import { Form, Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

/* Custom Components */
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const URL = process.env.REACT_APP_URL;

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState([]);
    
    const login = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        };

        //fetch('https://hansori-backend.herokuapp.com/login', options)
        fetch(`${URL}/login`, options)
            .then((res) => res.json())
            .then((res) => {
                if (res['Response'] == false) {
                    setAlert(['Username or password is incorrect']);
                } else {
                    localStorage.setItem('loggedIn', true);
                    //console.log('We got true!');
                    window.location.href = '/hansori/admin';
                }
            });
    }
    
    useEffect(() => {
        if (localStorage.getItem('loggedIn')) {
            window.location.href = '/hansori/admin';
        }
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <Navbar />
            </div>
            <div className={styles.body}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={(e) => login(e)}>
                        Login
                    </Button>
                </Form>
                {alert.map((text) => <Alert severity="warning">{text}</Alert>)}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Login;