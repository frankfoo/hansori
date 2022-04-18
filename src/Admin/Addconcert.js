import React, { useEffect, useState } from 'react';
import styles from '../AdminStyling/Addconcert.module.css';

/* Bootstrap Components */
import { Form, Button, Alert, Badge } from 'react-bootstrap';

const URL = process.env.REACT_APP_URL;

const Addconcert = () => {
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
        console.log(items);
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
                body: JSON.stringify({title, shortTitle, time, location, content, tag, base64, base64Poster}),
            };
            console.log(base64Poster);
            console.log(base64);
            fetch(`${URL}/addconcert`, options)
                .then((res) => res.json())
                .then((res) => {
                    if (res['Response'] === true) {
                        console.log('Success');
                        setAlert('Concert added successfully!, reload the page to see it under the concerts tab');
                        setShow(true);
                    } else {
                        console.log(res['Response']);
                        if (res['Response'] == 'Concert Exists') {
                            setAlert('Concert already exists');
                            setShow(true);
                        } else {
                            setAlert('There was an error adding this concert to the server, please try again');
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
        if (alert == 'Concert added successfully!, reload the page to see it under the concerts tab') {
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
                <h1>Add New Concert</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Concert Title </Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" placeholder="Enter Concert Title" onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Short Concert Title</Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" placeholder="Enter a short 3 word Concert Title" onChange={(e) => setShortTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Concert Time</Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" placeholder="Enter Concert Time" onChange={(e) => setTime(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Concert Location</Form.Label> <Badge pill bg="light" text="dark">*</Badge> 
                        <Form.Control type="text" placeholder="Enter Concert Location" onChange={(e) => setLocation(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Add concert images</Form.Label>
                        <Form.Control type="file" multiple onChange={(e) => setImages(e.target.files)}/>
                    </Form.Group>
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

export default Addconcert;