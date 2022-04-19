import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import styles from '../AdminStyling/Addconcert.module.css';

/* Bootstrap Components */
import { Form, Button, Alert, Badge } from 'react-bootstrap';

const URL = process.env.REACT_APP_URL;

const Editconcert = () => {
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn');
        if (!loggedIn) {
            window.location.href = '/hansori/login';
        }
    }, [])

    const [title, setTitle] = useState([]);
    const [shortTitle, setShortTitle] = useState([]);
    const [time, setTime] = useState([]);
    const [location, setLocation] = useState([]);
    const [tag, setTag] = useState('Other');

    const [images, setImages] = useState([]); /* Store the image file blob */
    const [base64, setBase64] = useState([]); /* Store the base64 image files */

    const [poster, setPoster] = useState([]); /* Store the concert poster */
    const [base64Poster, setbase64Poster] = useState([]); /* Store the base64 poster file */

    const [content, setContent] = useState([]); /* This one stores the actual input data */
    const [items, setItems] = useState([]); /* This one stores how many extra inputs we have */

    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState('');

    /* We get the concertID from the url, grab the data from the backend */
    let location1 = useLocation();
    let concertID = location1.pathname.split('/')[3];

    React.useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({concertID}),
        };

        fetch(`${URL}/getConcert`, options)
            .then((res) => res.json())
            .then((res) => {
                if (res['Response'] === 'Error with server') {
                    console.log('Error');
                } else {
                    console.log(res['Response']);
                    setTitle(res['Response'][0][1])
                    setShortTitle(res['Response'][5][1])
                    setTime(res['Response'][1][1])
                    setLocation(res['Response'][2][1])
                    setContent(JSON.parse(res['Response'][3][1]))
                    //console.log(res['Response'][3][1])

                    /* Rebuild the input */
                    let input = JSON.parse(res['Response'][3][1])
                    let tempItems = []
                    input.forEach((item) => {
                        tempItems.push(item[0])
                    })
                    setItems([...tempItems])
                    // let img = res['Response'][4][1];
                    // let temp = [];

                    // if (img.length != 0) {
                    //     for (let i = 0; i < img.length; i++) {
                    //         //console.log(img[i], i);
                    //         temp = [...temp, {original: `http://127.0.0.1:5000/static/${img[i]}/`}]
                    //     }
                    //     setImages([...temp]);
                    //     setImageFlag(1);
                    // }
                }
            });
    }, [])

    /* Add a new input */
    const newItem = (item) => {
        setItems([...items, item]);
        if (item == 'p') {
            let newContent = [...content, ['p', '']];
            setContent(newContent);
        } else if (item == 'l') {
            let newContent = [...content, ['l', '']];
            setContent(newContent);
        } else {
            let newContent = [...content, ['t', '']];
            setContent(newContent);
        }
    }

    /* Remove the last item added */
    const removeItem = (itemToRemove) => {
        if (items.length > 0) {
            /* Now remove the actual content */
            let newContent = [...content];
            for (let i = newContent.length - 1; i >=0; i--) {
                if (newContent[i][0] == itemToRemove) {
                    newContent.splice(i, 1);
                    setContent([...newContent]);
                    break;
                }
            }
            for (let i = items.length - 1; i >=0; i--) {
                if (items[i] == itemToRemove) {
                    let newItems = items;
                    newItems.splice(i, 1);
                    setItems([...newItems]);
                    break;
                }
            }
        }
    }

    const updateItem = (text, key, type) => {
        let newContent = [...content];
        if (type == 'p') {
            newContent[key] = ['p', text];
        } else if (type == 'l') {
            newContent[key] = ['l', text];
        } else {
            newContent[key] = ['t', text];
        }
        setContent(newContent);
    }

    /* My god this took forever to figure out */
    React.useEffect(() => {
        let tempArray = [];
        Array.from(images).forEach((img) => {
            getBase64(img).then(data => data.split(',')[1]).then(data => tempArray.push(data))
        });
        console.log(tempArray);
        setBase64(tempArray);
    }, [images])

    React.useEffect(() => {
        let tempArray1 = [];
        Array.from(poster).forEach((img) => {
            getBase64(img).then(data => data.split(',')[1]).then(data => tempArray1.push(data))
        });
        //console.log(tempArray);
        setbase64Poster(tempArray1);
        console.log(tempArray1);
    }, [poster])

    /* https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript */
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const SubmitForm = () => {
        console.log(content);
        console.log(shortTitle)
        /* Check user input */
        if (title.length == 0) {
            setAlert('Missing Concert Title');
            setShow(true);
        } else if (shortTitle.length == 0) {
            setAlert('Missing Short Concert Title');
            setShow(true);
        } else if (time.length == 0) {
            setAlert('Missing Time');
            setShow(true);
        } else if (location.length == 0) {
            setAlert('Missing Location');
            setShow(true);
        } else {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({concertID, title, shortTitle, time, location, content, tag, base64, base64Poster}),
            };
            console.log(base64Poster);
            console.log(base64);
            fetch(`${URL}/updateConcert`, options)
                .then((res) => res.json())
                .then((res) => {
                    if (res['Response'] === true) {
                        console.log('Success');
                        setAlert('Concert updated successfully!');
                        setShow(true);
                    } else {
                        console.log(res['Response']);
                        if (res['Response'] == 'Error') {
                            setAlert("Concert doesn't exist");
                            setShow(true);
                        } else {
                            setAlert('There was an error updating this concert to the server, please try again');
                            setShow(true);
                        }
                    }
                })
                .catch((error) => {
                    setAlert('There was an error contacting the server, please try again');
                    setShow(true);
                })
        }
    }

    /* Alerts */
    function AlertDismissibleExample() {
        let variant = 'danger';
        let heading = 'Error';
        if (alert == 'Concert updated successfully!') {
            variant = 'success';
            heading = 'Success';
        }
        return (
            <Alert variant={variant} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{heading}</Alert.Heading>
                <p>{alert}</p>
            </Alert>
        );
        //return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <h1>Edit Concert</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Concert Title </Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Short Concert Title</Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" value={shortTitle} onChange={(e) => setShortTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Concert Time</Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Concert Location</Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Add concert images</Form.Label>
                        <Form.Control type="file" multiple onChange={(e) => setImages(e.target.files)}/>
                    </Form.Group>
                    <Alert variant="info" className={styles.reminder}>
                        <Alert.Heading>You need to reupload all photos sorry - you can set the order in windows/mac first</Alert.Heading>
                    </Alert>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Add concert poster</Form.Label>
                        <Form.Control type="file" onChange={(e) => setPoster(e.target.files)}/>
                    </Form.Group>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3" onChange={(e) => console.log(e.target.value)}>
                            <Form.Check
                                inline
                                label="Sydney Opera House"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="Sydney Opera House"
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Masterclass Workshops"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="Masterclass Workshops"
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Student Recitals"
                                name="group1"
                                type={type}
                                id={`inline-${type}-3`}
                                value="Student Recitals"
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Other"
                                name="group1"
                                type={type}
                                id={`inline-${type}-4`}
                                value="Other"
                                onChange={(e) => setTag(e.target.value)}
                                defaultChecked={true}
                            />
                            </div>
                        ))}
                    </Form>
                    {items.map((idx, key) => {
                        //console.log(idx, key);
                        if (idx == 'p') {
                            return (
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Paragraph</Form.Label>
                                    <Form.Control as="textarea" value={content[key][1]} rows={5} onChange={(e) => updateItem(e.target.value, key, 'p')}/>
                                </Form.Group>
                            )
                        } else if (idx == 'l') {
                            return (
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>List</Form.Label>
                                    <Form.Control as="textarea" rows={2} value={content[key][1]} onChange={(e) => updateItem(e.target.value, key, 'l')}/>
                                    <Form.Text className="text-muted">
                                        Please enter a list of items, seperated by comma's like so: List Item 1, List Item 2, List Item 3
                                    </Form.Text>
                                </Form.Group>
                            )
                        } else {
                            return (
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Title" value={content[key][1]} onChange={(e) => updateItem(e.target.value, key, 't')}/>
                                </Form.Group>
                            )
                        }
                    })}
                    <Alert variant="info" className={styles.reminder}>
                        <Alert.Heading >The tag get's reset here so please choose the correct tag again</Alert.Heading>
                    </Alert>
                    <div className={styles.buttonContainer}>
                        <Button variant="light" onClick={() => newItem('p')}>
                            Add new paragraph
                        </Button>
                        <Button variant="light" onClick={() => removeItem('p')}>
                            Remove last paragraph
                        </Button>
                        <Button variant="light" onClick={() => newItem('l')}>
                            Add new list
                        </Button>
                        <Button variant="light" onClick={() => removeItem('l')}>
                            Remove last list
                        </Button>
                        <Button variant="light" onClick={() => newItem('t')}>
                            Add new title
                        </Button>
                        <Button variant="light" onClick={() => removeItem('t')}>
                            Remove last title
                        </Button>
                        <Button variant="light" onClick={() => SubmitForm()}>
                            Submit
                        </Button>
                    </div>
                    <div className={styles.alert}>
                        {show && (
                            <AlertDismissibleExample />
                        )}
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Editconcert;