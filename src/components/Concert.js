import React from 'react';
import { Link, useLocation, Navigate } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import { Buffer } from 'buffer';

/* Styling*/
import styles from '../Styling/Concert.module.css';

const URL = process.env.REACT_APP_URL;

const Concert = ({  }) => {
    let location = useLocation();
    let concertID = location.pathname.split('/')[2];
    //console.log(concertID);
    let [imageFlag, setImageFlag] = React.useState(0);
    let [title, setTitle] = React.useState([]);
    let [time, setTime] = React.useState([]);
    let [location1, setLocation1] = React.useState([]);
    let [content, setContent] = React.useState([]);
    let [images, setImages] = React.useState([]);

    // let [stagingImages, setStagingImages] = React.useState([]);

    React.useEffect(() => {
        setTitle([])
        setTime([])
        setLocation1([])
        setContent([])
        /* Not sure if this does anything */

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
                    //console.log(res['Response']);
                    setTitle(res['Response'][0][1])
                    setTime(res['Response'][1][1])
                    setLocation1(res['Response'][2][1])
                    setContent(JSON.parse(res['Response'][3][1]))

                    let img = res['Response'][4][1];
                    let temp = [];

                    if (img.length != 0) {
                        for (let i = 0; i < img.length; i++) {
                            //console.log(img[i], i);
                            temp = [...temp, {original: `${URL}/static/${img[i]}/`, originalHeight: '500px'}]
                        }
                        setImages([...temp]);
                        setImageFlag(1);
                    }
                }
            });
    }, [concertID])

    // React.useEffect(() => {
    //     if (stagingImages.length != 0) {
    //         for (let i = 0; i < stagingImages.length; i++) {
    //             console.log(stagingImages[i], i);
    //             setImages([...images, {original: `http://127.0.0.1:5000/static/${stagingImages[i]}/`}])
    //             console.log([...images, {original: `http://127.0.0.1:5000/static/${stagingImages[i]}/`}])
    //         }
    //         setImageFlag(1);
    //     }
    //     console.log(images);
    // }, [stagingImages])

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.timeandlocation}>{time}</p>
                <p className={styles.location}>{location1}</p>
                <div className={styles.content}>
                    {content.map((item, key) => {
                        console.log(item);
                        if (item[0] == 'p') {
                            return (
                                <p className={styles.blockOfText}>{item[1]}</p>
                            )
                        } else if (item[0] == 't') {
                            return (
                                <h4 className={styles.title}>{item[1]}</h4>
                            )
                        } else if (item[0] == 'l') {
                            let tempList = item[1].split(',');
                            let tempList1 = [];
                            tempList.forEach((item) => {
                                tempList1.push(<li>{item}</li>)
                            })
                            
                            return (<ul className={styles.List}>{tempList1}</ul>)
                        }
                    })}
                </div>
                {imageFlag === 1 &&
                    <ImageGallery 
                        items={images} 
                        showIndex={true}
                        showBullets={true}
                    />
                }
            </div>
        </div>
    )
}

export default Concert;