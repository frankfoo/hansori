import React from 'react';
import { Link, useLocation, Navigate } from "react-router-dom";
import ImageGallery from 'react-image-gallery';

/* Custom Components */
import Navbar from './Navbar.js';
import Footer from './Footer.js';

/* Styling*/
import styles from '../Styling/Concert.module.css';

import img1 from '../ConcertImages/1.jpg';
import img2 from '../ConcertImages/2.jpg';
import img3 from '../ConcertImages/3.jpg';
import img4 from '../ConcertImages/4.jpg';
import img5 from '../ConcertImages/5.jpg';
import img6 from '../ConcertImages/6.jpg';
import img7 from '../ConcertImages/7.jpg';
import img8 from '../ConcertImages/8.jpg';
import img9 from '../ConcertImages/9.jpg';
import img10 from '../ConcertImages/10.jpg';
import img11 from '../ConcertImages/11.jpg';

import imagine1 from '../ConcertImages/imagine1.jpg';
import imagine2 from '../ConcertImages/imagine2.jpg';
import imagine3 from '../ConcertImages/imagine3.jpg';
import imagine4 from '../ConcertImages/imagine4.jpg';
import imagine5 from '../ConcertImages/imagine5.jpg';

import aprilmasterclass2019 from '../ConcertImages/aprilmasterclass2019.jpg';

import fantasy31 from '../ConcertImages/fantasy31.jpg';
import fantasy32 from '../ConcertImages/fantasy32.jpg';
import fantasy33 from '../ConcertImages/fantasy33.jpg';

import oneMonth1 from '../ConcertImages/oneMonth1.jpg';
import oneMonth2 from '../ConcertImages/oneMonth2.jpg';

import gallery2018 from '../ConcertImages/gallery2018.jpg';

import masterclass21 from '../ConcertImages/masterclass21.jpg';
import masterclass22 from '../ConcertImages/masterclass22.jpg';
import masterclass23 from '../ConcertImages/masterclass23.jpg';
import masterclass24 from '../ConcertImages/masterclass24.jpg';
import masterclass25 from '../ConcertImages/masterclass25.jpg';
import masterclass26 from '../ConcertImages/masterclass26.jpg';
import masterclass27 from '../ConcertImages/masterclass27.jpg';
import masterclass28 from '../ConcertImages/masterclass28.jpg';
import masterclass29 from '../ConcertImages/masterclass29.jpg';
import masterclass210 from '../ConcertImages/masterclass210.jpg';
import masterclass211 from '../ConcertImages/masterclass211.jpg';
import masterclass212 from '../ConcertImages/masterclass212.jpg';
import masterclass213 from '../ConcertImages/masterclass213.jpg';
import masterclass214 from '../ConcertImages/masterclass214.jpg';
import masterclass215 from '../ConcertImages/masterclass215.jpg';
import masterclass216 from '../ConcertImages/masterclass216.jpg';
import masterclass217 from '../ConcertImages/masterclass217.jpg';
import masterclass218 from '../ConcertImages/masterclass218.jpg';
import masterclass219 from '../ConcertImages/masterclass219.jpg';
import masterclass220 from '../ConcertImages/masterclass220.jpg';
import masterclass221 from '../ConcertImages/masterclass221.jpg';

import masterclass1 from '../ConcertImages/masterclass1.jpg';
import masterclass2 from '../ConcertImages/masterclass2.jpg';
import masterclass3 from '../ConcertImages/masterclass3.jpg';
import masterclass4 from '../ConcertImages/masterclass4.jpg';
import masterclass5 from '../ConcertImages/masterclass5.jpg';
import masterclass6 from '../ConcertImages/masterclass6.jpg';
import masterclass7 from '../ConcertImages/masterclass7.jpg';
import masterclass8 from '../ConcertImages/masterclass8.jpg';
import masterclass9 from '../ConcertImages/masterclass9.jpg';
import masterclass10 from '../ConcertImages/masterclass10.jpg';
import masterclass11 from '../ConcertImages/masterclass11.jpg';
import masterclass12 from '../ConcertImages/masterclass12.jpg';
import masterclass13 from '../ConcertImages/masterclass13.jpg';
import masterclass14 from '../ConcertImages/masterclass14.jpg';
import masterclass15 from '../ConcertImages/masterclass15.jpg';
import masterclass16 from '../ConcertImages/masterclass16.jpg';
import masterclass17 from '../ConcertImages/masterclass17.jpg';
import masterclass18 from '../ConcertImages/masterclass18.jpg';
import masterclass19 from '../ConcertImages/masterclass19.jpg';
import masterclass20 from '../ConcertImages/masterclass20.jpg';
import masterclass21TWO from '../ConcertImages/masterclass21 2.jpg';
import masterclass22TWO from '../ConcertImages/masterclass22 2.jpg';

import soul1 from '../ConcertImages/soul1.jpg';
import soul2 from '../ConcertImages/soul2.jpg';
import soul3 from '../ConcertImages/soul3.jpg';
import soul4 from '../ConcertImages/soul4.jpg';
import soul5 from '../ConcertImages/soul5.jpg';
import soul6 from '../ConcertImages/soul6.jpg';
import soul7 from '../ConcertImages/soul7.jpg';
import soul8 from '../ConcertImages/soul8.jpg';
import soul9 from '../ConcertImages/soul9.jpg';
import soul10 from '../ConcertImages/soul10.jpg';
import soul11 from '../ConcertImages/soul11.jpg';
import soul12 from '../ConcertImages/soul12.jpg';
import soul13 from '../ConcertImages/soul13.jpg';
import soul14 from '../ConcertImages/soul14.jpg';

import fantasydecember1 from '../ConcertImages/fantasydecember1.jpg';
import fantasydecember2 from '../ConcertImages/fantasydecember2.jpg';
import fantasydecember3 from '../ConcertImages/fantasydecember3.jpg';
import fantasydecember4 from '../ConcertImages/fantasydecember4.jpg';
import fantasydecember5 from '../ConcertImages/fantasydecember5.jpg';
import fantasydecember6 from '../ConcertImages/fantasydecember6.jpg';
import fantasydecember7 from '../ConcertImages/fantasydecember7.jpg';
import fantasydecember8 from '../ConcertImages/fantasydecember8.jpg';
import fantasydecember9 from '../ConcertImages/fantasydecember9.jpg';
import fantasydecember10 from '../ConcertImages/fantasydecember10.jpg';
import fantasydecember11 from '../ConcertImages/fantasydecember11.jpg';
import fantasydecember12 from '../ConcertImages/fantasydecember12.jpg';
import fantasydecember13 from '../ConcertImages/fantasydecember13.jpg';
import fantasydecember14 from '../ConcertImages/fantasydecember14.jpg';

import rock1 from '../ConcertImages/rock1.jpg';
import rock2 from '../ConcertImages/rock2.jpg';
import rock3 from '../ConcertImages/rock3.jpg';
import rock4 from '../ConcertImages/rock4.jpg';
import rock5 from '../ConcertImages/rock5.jpg';
import rock6 from '../ConcertImages/rock6.jpg';
import rock7 from '../ConcertImages/rock7.jpg';
import rock8 from '../ConcertImages/rock8.jpg';
import rock9 from '../ConcertImages/rock9.jpg';
import rock10 from '../ConcertImages/rock10.jpg';
import rock11 from '../ConcertImages/rock11.jpg';
import rock12 from '../ConcertImages/rock12.jpg';
import rock13 from '../ConcertImages/rock13.jpg';
import rock14 from '../ConcertImages/rock14.jpg';
import rock15 from '../ConcertImages/rock15.jpg';
import rock16 from '../ConcertImages/rock16.jpg';
import rock17 from '../ConcertImages/rock17.jpg';
import rock18 from '../ConcertImages/rock18.jpg';
import rock19 from '../ConcertImages/rock19.jpg';
import rock20 from '../ConcertImages/rock20.jpg';
import rock21 from '../ConcertImages/rock21.jpg';

import gugak1 from '../ConcertImages/gugak1.jpg';
import gugak2 from '../ConcertImages/gugak2.jpg';
import gugak3 from '../ConcertImages/gugak3.jpg';
import gugak4 from '../ConcertImages/gugak4.jpg';
import gugak5 from '../ConcertImages/gugak5.jpg';
import gugak6 from '../ConcertImages/gugak6.jpg';
import gugak7 from '../ConcertImages/gugak7.jpg';
import gugak8 from '../ConcertImages/gugak8.jpg';
import gugak9 from '../ConcertImages/gugak9.jpg';

const Concert = ({  }) => {
    let location = useLocation();
    let concertID = location.pathname.split('/')[2];
    // console.log(concertID);

    /* Mimic a fetch to a backend */
    let title = "";
    let timeandlocation = "";
    let country = "";
    let Content = () => {return(<p></p>)};
    let images = [];
    let imageFlag = 0;

    switch (concertID) {
        case 'mosman-september-2020':
            title = "STUDENT RECITAL MOSMAN ART GALLERY 2020";
            timeandlocation = "10am - 2pm Grand Theatre";
            country = "Mosman Art Gallery";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>Held in the Grand Theatre of the Mosman Art Gallery, Hansori Music was thrilled to 
                            once again host our Student Recital for our students and families, with a special 
                            AMusA recital (featuring guest examiner Brieley Cutting) for our students preparing 
                            their AMEB exam repertoires. 
                        </p>
                        <p>We would like to thank all parents and students for their ongoing hard work & support 
                            despite the difficult times of COVID-19 and share our warm sentiments to everyone in 
                            these unprecedented times. For these reasons, we have strongly recommended that all 
                            attendees follow our safety instructions, such as abiding by our social distancing 
                            guidance & wearing a mask at our event to protect everyone's safety. #Stopthespread. 
                        ​</p>
                        <p>
                            Congratulations to all students involved!
                        </p>
                    </div>
                )
            }
            imageFlag = 1;
            images = [
                {original: img1, originalHeight: '500px'},{original: img2, originalHeight: '500px'},
                {original: img3, originalHeight: '500px'},{original: img4, originalHeight: '500px'},
                {original: img5, originalHeight: '500px'},{original: img6, originalHeight: '500px'},
                {original: img7, originalHeight: '500px'},{original: img8, originalHeight: '500px'},
                {original: img9, originalHeight: '500px'},{original: img10, originalHeight: '500px'},
                {original: img11, originalHeight: '500px'}
            ];
            break;
        case 'shanghai-december-2019':
            title = "END OF YEAR CONCERT AT THE SHANGHAI GUMEI CULTURAL CENTRE";
            timeandlocation = "7pm, 27th of December, 2019 Gumei Cultural Centre";
            country = "Shanghai, China";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <h3>Free Entry</h3>
                        <p>Presenting an enchanting evening concert of emerging bi-cultural Australian and other 
                            international pianists in the mesmerising city of Shanghai, China. Artists of Hansori 
                            Music include Michelle Park (Australia, founder & Music director), Luke Zhang 
                            (Australia), Vivian Park (South Korea) and more. Join us for a diverse series 
                            of beautiful and reinvigorating classical music, including well-known favourites, 
                            and featuring the well-known and charming “Yellow River” Concerto. </p>
                        <h3>Luke Zhang</h3>
                        <p>Luke Zhang, a New Zealand born Australian student and rising solo performer was 
                            accepted to study a Bachelor of Music (Performance) majoring in piano at the 
                            Sydney Conservatorium of Music in 2017. Under the guidance of his current teacher 
                            Michelle Park, he has performed as first violinist of the Hansori Music Ensemble 
                            since 2015 and have performed annually at the Sydney Opera House on both solo piano, 
                            violin and string ensemble. He was awarded first place for Senior piano and Overall 
                            Award at the Eisteddfod on the Mountains in 2016. Most recently, Luke achieved two 
                            first place prizes (Romantic & Elite D) at the La Pianista International Piano 
                            Competition 2018. Luke was also accepted to study one semester at the Melbourne 
                            University Conservatorium in 2018 for a Bachelor of Music (Performance), before 
                            returning back to the Sydney Conservatorium in 2019. Luke continues to build his 
                            performance repertoire as an emerging Australian classical performer and aspires 
                            to perform internationally in the future.</p>
                        <h3>Michelle Park</h3>
                        <p>Michelle Park, founder and music director of Hansori Music has been performing and 
                            directing solo and ensemble concerts since 2003, and  annually at the Sydney Opera 
                            House since 2013. Michelle Park's numerous professional performances as concert pianist have 
                            taken her to Australia, Austria, Bulgaria, Germany and more. Being a South-Korean born artist, 
                            Michelle was ranked champion in countless prestigious domestic piano competitions as a child, 
                            and was soon accepted to study a Bachelor of Piano Performance at the Juilliard School 
                            (New York). She specialised the piano under professor Slobodan Zivkovic （pupil of Guido) 
                            at the Australian International Conservatorium of Music and professor Nikolai Evrov at the 
                            Sydney Conservatorium of Music (Sydney University). Her passion for teaching the Piano 
                            and Cello have become the prologue of her current vision to support and empower young 
                            musicians, who have as a result achieved exemplary results in the AMEB, gained secondary 
                            private school and local community scholarships, entry to pursue higher musical studies 
                            around the world, as well as prizes in domestic both international piano eisteddfod 
                            competitions including the Sydney Eisteddfod every year. </p>
                        <h3>Vivian Park</h3>
                        <p>
                        Vivian Park is a South Korean born classical pianist. She first gained outstanding 
                        attention when she appeared as a soloist and became overall winner of the Sekwang 
                        Music Festival in 1998. Her awards include various Gold medals in national piano 
                        competitions, including the Korean News daily competition. Having completed her 
                        diploma in both the Australian Music Examinations Board (AMEB) and Associated Board 
                        of the Royal Schools of Music (ABRSM), Vivian was recently given the Best Piano 
                        Performance and Best Performance of Teacher awards by the ABRSM. She continues to 
                        pursue higher studies in music and is currently studying at the Seoul Cyber University 
                        with a full Piano Scholarship in performance.
                        </p>
                    </div>
                )
            }
            break;
        case 'mosman-december-2019':
            title = "END OF YEAR CONCERT AT THE MOSMAN ART GALLERY";
            timeandlocation = "6:30pm, 6th of December, 2019 Grand Theatre";
            country = "Mosman Art Gallery";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>HANSORI MUSIC invites parents and guests to our Annual end of year music concert 
                            held at the Mosman Art Gallery in celebration of our students’ talents and 
                            musical progress. 
                        </p>
                        <p>*Getting to Mosman Art Gallery is easy by public transport by either a bus to Spit 
                            Junction or a ferry to Mosman Wharf. The Gallery is a 5 minute walk from Spit Junction.
                        ​</p>
                        <p>Parking: Street parking and parking stations are available on Vista St and in 
                            Bridgepoint Shopping Centre.
                        </p>
                    </div>
                )
            }
            break;
        case 'imagine-august-2019':
            title = "IMAGINE: A TOTAL ART FAIR CHARITY NIGHT AT THE GIANT DWARF THEATRE";
            timeandlocation = "2pm, 31st of August, 2019";
            country = "Giant Dwarf Theater";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>Hansori Music and Honeycomb Redfern present:</p>
                        <p>IMAGINE is a performing arts gala and charity event where live music, dance and visual arts come 
                            together to create a community that encourages integration of diverse backgrounds and forms of 
                            expressions with a purpose. Wonderful artwork will be on display for a silent auction. Bring some 
                            cash and take home a piece of art that you love!
                        ​</p>
                        <div className={styles.blockOfText}>
                            <p>Date and Time:</p>
                            <p>2:00 pm - 8:30 pm, 31 August 2019</p>
                            <p>2:00pm – Doors open for Art exhibition</p>
                            <p>3:00pm – The Show</p>
                            <p>5:00pm – Milonga and party (social tango dancing) </p>
                            <p>8:30pm – Event concludes</p>
                        </div>
                        <p>Venue: Dwarf Theatre, 199 Cleveland Street, Redfern, Sydney</p>
                        <p>Dress code: Elegant</p>
                        <p>Courtyard bar opens at 2:00pm, the show starts at 3:00pm. Pop in before the show for a drink and mingle!</p>
                        <p>Your participation and donations will help to build the primary school, Hosanna Gardens in Mikameni, Kenya.</p>
                        <p>Giant Dwarf theatre is a licensed venue. Anyone under the age of 18 must be accompanied by a parent or guardian.</p>
                        <p>Come and be entertained by our gifted international artists.</p>
                        <p>Purchase tickets here: giantdwarf.com.au/events/imagine</p>
                        <p>The mission of Sydney Hosanna is to build up people and to share the new life found in the gospel. 
                            For that purpose, Sydney Hosanna is planning for VISION 2020. VISION 2020 is a strategic plan 
                            leading up to 2020 to expand the kingdom of God around the core values ​​of Hosanna; that is, to build up that 
                            'One Person' into a genuine disciple of Jesus Christ through worship, love, and mission. In order to achieve 
                            VISION 2020, the teams within Sydney Hosanna, being the Mobilisation and Training Team (M&T), Christian 
                            Education Team (C.E.A.M), and Business Mission Team (B.A.M.), are planning and putting into action various 
                            ministries and trainings.
                        </p>
                        <p>Sydney Hosanna Website: www.SydneyHosanna.com</p>
                    </div>
                )
            }
            imageFlag = 1;
            images = [{original: imagine1, originalHeight: '500px'}, {original: imagine2, originalHeight: '500px'}, {original: imagine3, originalHeight: '500px'}, {original: imagine4, originalHeight: '500px'}, {original: imagine5, originalHeight: '500px'}];
            break;
        case 'luke-zhang-recital-may-2019':
            title = "RECITAL AT THE SYDNEY CONSERVATORIUM OF MUSIC"
            timeandlocation = "6:30pm, 17th of May, 2019 Recital Hall West";
            country = "Sydney Conservatorium of Music";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>Free Entry</p>
                        <p>Second year student Luke Zhang, accompanied by Michelle Park, presents a piano 
                            recital featuring works by Chopin, Liszt and Ravel. Luke has been a student of 
                            Michelle Park since 2015.
                        </p>
                        <p>PROGRAM</p>
                        <div className={styles.blockOfText}>
                            <p>Frédéric Chopin (1810-1849)</p>
                            <p>Variations Brilliantes Op.12</p>
                            <p>Mazurka Op.17 No.1, 2, 3</p>
                            <p>Scherzo No.1</p>
                        </div>
                        <div className={styles.blockOfText}>
                            <p>Franz Liszt (1811-1886) </p>
                            <p>Piano Concerto No.1</p>
                        </div>
                        <div className={styles.blockOfText}>
                            <p>Maurice Ravel (1875-1937) </p>
                            <p>Alborada Del Grazioso from Miroirs</p>
                        </div>

                    </div>
                )
            }
            break;
        case 'masterclass-april-2019':
            title = "APRIL 2019 HOLIDAYS MASTERCLASS WORKSHOP & CONCERT";
            timeandlocation = "Masterclass workshop & Concert 13th April 2019";
            country = "Concourse, Studio (Chatswood) 409 Victoria Ave (Anderson Street, Backstage entry)";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>The event will be divided into the following two groups:</p>
                        <ul>
                            <li>
                                <p>Group A - Preliminary to Grade 7 students; Starting Time: 9:30am, Saturday 13th of April </p>
                            </li>
                            <li>
                                <p>Group B - Grade 8 and above students; Starting Time: 11am, Saturday 13th of April</p>
                            </li>
                        </ul>
                        <p>The Masterclass will be led by Director Michelle Park. *Hansori Junior Ensemble - please be at the venue by 10:30am</p>
                        <p>All members of the general public are invited to listen after paying a gold coin donation at the door.</p>
                        <p>Non students - Any non-students wishing to perform on the day (who are not Hansori’s students) are welcome to perform after contacting us through our email and paying a participation fee listed above.</p>
                        <p>If you have any questions regarding the above, please do not hesitate to contact Michelle. We look forward to hosting a wonderful afternoon presenting the progress of our student’s musical repertoires.</p>
                    </div>
                )
            }
            imageFlag = 1;
            images = [{original: aprilmasterclass2019, originalHeight: '500px'}];
            break;
        case 'fantasy-iii-december-2018':
            title = "FANTASY III : A Rococo Rêverie' CONCERT AT THE SYDNEY OPERA HOUSE";
            timeandlocation = "'Fantasy III' Concert December 2018";
            country = "Sydney Opera House";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>'An enchanting and family-friendly end of year concert of classical to contemporary 
                            music, FANTASY III at the Sydney Opera House promises a summer night to remember.'
                        </p>
                        <p>This end of year concert invites families, friends and lovers of classical to 
                            contemporary music to a summer night of Classical music favourites of Mozart, 
                            Beethoven, Romantic Liszt, Badarzewska, Wyman to 20st Century Debussy and more. 
                            Music Director Michelle Park presents her talented pupils as young as 4 years old 
                            to senior students pursuing higher musical studies, to share Hansori Music’s vision 
                            to celebrate musicians of all ages as they live their passions for performance on 
                            stage.
                        </p>
                        <p>The second half will feature a passionate interplay between the Tango Puro 
                            Dance group and the Hansori Music String Ensemble performing improvised Argentine 
                            Tango with Piazzolla, Dvorak and more.
                        </p>
                        <p>Join us for a family-friendly event in the theme of A Rococo Rêverie for a night to remember. 
                        </p>
                        <p>Presented by the Michelle Park.</p>
                        <p>1st of December 2018.</p>
                    </div>
                )
            }
            imageFlag = 1;
            images = [{original: fantasy31}, {original: fantasy32}, {original: fantasy33}]
            break;
        case 'festival-july-2018':
            title = "ONE MONTH FESTIVAL 2018 'Keeping Art Alive Daily for a Month'";
            timeandlocation = "3pm - 5pm Saturday 21st July 2018";
            country = "St John's Church Hall, 120 Darlinghurst Rd, Darlinghurst NSW 2010, Australia";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>For the month of July, the One Month Festival invites artists around the world to 
                        broadcast their performances live in celebration of 'Keeping Art Alive in Daily Life 
                        for a Month'. On the 21st July join the Hansori Music String Ensemble and Tango Puro 
                        at St John's Church Hall, Sydney as classical to Tango music meets the social 
                        improvisation of Argentine Tango. 
                        </p>
                        <p>All proceedings will be donated to the Asylum Seeker's Centre. </p>
                        <p>St John's Church Hall, 120 Darlinghurst Rd, Darlinghurst NSW 2010, Australia</p>
                        <p>TICKETS: Entry donations will be collected at the door. All proceedings will be 
                            donated to the Asylum Seeker's Centre. </p>
                        <p>Visit: https://asylumseekerscentre.org.au/</p>
                        <p>DATE: Saturday 21 July 2018.</p>
                        <p>TIME: 3.00pm – 5:00pm.</p>
                        <p>LOCATION: St John's Church Hall, 120 Darlinghurst Rd, Darlinghurst NSW 2010, Australia</p>
                        <div className={styles.blockOfText}>
                            <p>PROGRAM: </p>
                            <p>Schubert</p>
                            <p>Gardel</p>
                            <p>Piazzolla</p>
                            <p>D'Ágostino</p>
                            <p>TBA</p>
                        </div>
                        <p>ARTISTS: Hansori Music: Michelle Park (Piano), Luke Zhang (Piano/Violin), Xixi Wen (Violin), Lachlan Smith (Cello), HanJoo Park (Piano/Violin), Daniel Park (Piano). </p>
                        <p>Tango Puro (Dancers): Gabbie Koak, Aksana Fitzpatrick, Andrew Flannery, Cat Beatson, Craig Peterson, Crismen Tache, Federico G Mattiuzzi, Iris Toren, Krisz Faedda, Kseniya Borisovna, Nick Young, Pei Tango, Stephen Crosbie, Zara Choy </p>
                        <p>MC: Clara Fernandez</p>
                        <p>MORE INFORMATION: This concert will be streamed live on our Facebook page. www.hansorimusicsyd.com https://m.blog.naver.com/onemonthfestival/221293646883</p>
                    </div>
                )
            }
            imageFlag = 1;
            images = [{original: oneMonth1, originalHeight: '500px'}, {original: oneMonth2, originalHeight: '500px'}];
            break;
        case 'gallery-april-2018':
            title = "GALLERY CONCERT WITH ART INDEX 'An Evening with the Giants'";
            timeandlocation = "Guest invitation performance with Art Index's exhibition of works by Three of the Most Influential Artists";
            country = "Tower C Centennial Plaza, Surry Hills 2000";
            imageFlag = 1;
            images = [{original: gallery2018, originalHeight: '500px'}];
            break;
        case 'masterclass-april-2018':
            title = "APRIL HOLIDAYS MASTERCLASS WORKSHOP & CONCERT";
            timeandlocation = "2pm - 5pm 25th April 2018";
            country = "Parsons Music Chatswood, Sydney";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>We were excited to invite students and guests to our Masterclass Workshop and Concert 
                            this April school holidays. The 3-hour program consisted of:
                        </p>
                        <p>
                            A First Half where students had the opportunity to participate in a masterclass 
                            workshop, and a Second Half where all audience members were invited to listen 
                            to a miniature concert featuring our senior pupils, including some who are pursuing 
                            higher musical studies.
                        </p>
                        <p> The Masterclass was led by Teacher Michelle Park and her Hansori Music student teachers. </p>
                        <p> If you are interested in participating in our future event please contact us</p>
                    </div>
                )
            }
            imageFlag = 1;
            images = [{original: masterclass21, originalHeight: '500px'}, {original: masterclass22, originalHeight: '500px'}, 
                {original: masterclass23, originalHeight: '500px'}, 
                {original: masterclass24, originalHeight: '500px'}, {original: masterclass25, originalHeight: '500px'}, 
                {original: masterclass26, originalHeight: '500px'}, 
                {original: masterclass27, originalHeight: '500px'}, {original: masterclass28, originalHeight: '500px'}, 
                {original: masterclass29, originalHeight: '500px'}, 
                {original: masterclass210, originalHeight: '500px'}, {original: masterclass211, originalHeight: '500px'}, 
                {original: masterclass212, originalHeight: '500px'}, 
                {original: masterclass213, originalHeight: '500px'}, {original: masterclass214, originalHeight: '500px'}, 
                {original: masterclass215, originalHeight: '500px'}, 
                {original: masterclass216, originalHeight: '500px'}, {original: masterclass217, originalHeight: '500px'}, 
                {original: masterclass218, originalHeight: '500px'}, 
                {original: masterclass219, originalHeight: '500px'}, {original: masterclass220, originalHeight: '500px'}, 
                {original: masterclass221, originalHeight: '500px'},];
            break;
        case 'fantasy-december-2017':
            title = "'FANTASY II' CONCERT AT THE SYDNEY OPERA HOUSE";
            timeandlocation = "6/12/2017, 6:30pm - 9:30pm";
            country = "Uzton Room, Sydney Opera House";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>'An enchanting and family-friendly end of year concert of classical to contemporary 
                            music, FANTASY II at the Sydney Opera House promises a summer night to remember.'
                        </p>
                        <p>Hansori Music returns with our 7th and annual end of year concert, FANTASY II 
                            held at the Utzon Room of the Sydney Opera House. The concert invites families 
                            to hear from the youngest talented musicians retell some of the most beautiful 
                            classical pieces.
                        </p>
                        <p>In the second half, the concert will be joined by a passionate couplet between guest 
                            Tango Puro and the Hansori Music String Ensemble performing three of the most beloved 
                            traditional to contemporary Tango works, for a night to remember.</p>
                        <p>Sydney based Tango Puro led by Nick Young (of Love Tango) shares their love for both 
                            the performance art and social improvisation of Argentine Tango of intense 
                            connection and beauty.
                        </p>
                    </div>
                )
            }
            break;
        case 'masterclass-july-2017':
            title = "MASTERCLASS WORKSHOP & CONCERT";
            timeandlocation = "Winter Holidays Masterclass Workshop & Concert | 13 July 2017";
            country = "Fine Music Studios (Radio Station) St Leonards, Sydney";
            Content = () => {
                return (
                    <div className={styles.content}>
                        <p>Program: </p>
                        <p>1st Half - Masterclass workshop led by Michelle Park (Music Director) enriching 
                            musical knowledge and providing performance experience for young musicians 
                            (beginner to intermediate levels aged 5 to 13), including Michelle's own pupils 
                            or those learning from her senior pupils. 
                        </p>
                        <p>2nd Half- Concert by Michelle Park's senior students who are in advanced performing 
                            levels or pursuing higher musical studies 
                        </p>
                        <div className={styles.blockOfText}>
                            <p>
                                CHELSEA KIM
                            </p>
                            <p>
                                Chelsea Kim is studying Music 2 and Music extension as part of her High School 
                                Certificate this year at Willoughby Girls High school, and is the top in both 
                                courses in her year. In year 9 she gained her Amus A in piano and will complete 
                                her L Mus A after the HSC. As well as actively performing on the cello to a high 
                                standard, Chelsea has represented her school in numerous musical events such as
                                the North Shore Schools Music Spectacular, School Orchestra, Chamber Ensemble 
                                and recently the Gordon Waterhouse Memorial Music Scholarship finals
                            </p>
                        </div>
                        <div className={styles.blockOfText}>
                            <p>
                                SIMON CHA
                            </p>
                            <p>
                                Simon Cha has achieved the First Prize for Solo Piano at the Korea Music 
                                Competition in 1999 and Second Prize in Solo Piano at the Korea Music 
                                Competition in 2000. He was awarded the Performer's Certificate in Piano 
                                Performance with Merit at the Trinity College of London in 2005, and the 
                                Associate of Trinity College London Diploma in Piano Performance with Merit 
                                in 2006. In the same year, Simon had his Graduation Performance at Auckland 
                                Town Hall, Senior College of New Zealand. In 2010 he completed the Bachelor 
                                of Science Advanced (Biochemistry) at the University of Sydney and later a 
                                Bachelor of Dentistry at the University of Sydney in 2014. Currently as well
                                as being a dentist, he continues to pursue his dreams to extend his musical 
                                journey, and was recently awarded the Highly Commended Prize at the Sydney 
                                Eisteddfod Chopin competition in June.
                            </p>
                        </div>
                        <div className={styles.blockOfText}>
                            <p>
                                LUKE ZHANG
                            </p>
                            <p>
                                Luke Zhang having played the piano for seven years and the violin for 9 
                                years, studies a Bachelor of Music (Performance) specialising the piano 
                                at the Sydney Conservatorium of Music. He has been learning from his current 
                                teacher Michelle Park since 2014 , and have performed with her music group 
                                biannually at the Sydney Opera House on both solo piano, violin and string 
                                ensemble from 2015. Luke was awarded first place for Senior piano at the 
                                Eisteddfod on the Mountains in 2016. As well as the piano, Luke plays 
                                violin to a high standard and has completed the AMEB Certificate of Performance
                                for Violin in 2015. Luke aspires to gain more experience in domestic and 
                                international piano competitions over the upcoming years and develop his 
                                performing repertoire as a pianist.
                            </p>
                        </div>
                    </div>
                )
            }
            imageFlag = 1;
            images = [{original: masterclass1, originalHeight: '500px'}, {original: masterclass2, originalHeight: '500px'}, 
                {original: masterclass3, originalHeight: '500px'}, 
                {original: masterclass4, originalHeight: '500px'}, {original: masterclass5, originalHeight: '500px'}, 
                {original: masterclass6, originalHeight: '500px'}, 
                {original: masterclass7, originalHeight: '500px'}, {original: masterclass8, originalHeight: '500px'}, 
                {original: masterclass9, originalHeight: '500px'}, 
                {original: masterclass10, originalHeight: '500px'}, {original: masterclass11, originalHeight: '500px'}, 
                {original: masterclass12, originalHeight: '500px'}, 
                {original: masterclass13, originalHeight: '500px'}, {original: masterclass14, originalHeight: '500px'}, 
                {original: masterclass15, originalHeight: '500px'}, 
                {original: masterclass16, originalHeight: '500px'}, {original: masterclass17, originalHeight: '500px'}, 
                {original: masterclass18, originalHeight: '500px'}, 
                {original: masterclass19, originalHeight: '500px'}, {original: masterclass20, originalHeight: '500px'}, 
                {original: masterclass21TWO, originalHeight: '500px'},
                {original: masterclass22TWO, originalHeight: '500px'}];
            break;
        case 'soulmate-june-2016':
            title = "'SOUL MATE' CONCERT AT THE SYDNEY OPERA HOUSE";
            timeandlocation = "25 June 2016";
            country = "Utzon Room, Sydney Opera House";
            imageFlag = 1;
            images = [{original: soul1, originalHeight: '500px'}, {original: soul2, originalHeight: '500px'}, 
                {original: soul3, originalHeight: '500px'}, 
                {original: soul4, originalHeight: '500px'}, {original: soul5, originalHeight: '500px'}, 
                {original: soul6, originalHeight: '500px'}, 
                {original: soul7, originalHeight: '500px'}, {original: soul8, originalHeight: '500px'}, 
                {original: soul9, originalHeight: '500px'}, 
                {original: soul10, originalHeight: '500px'}, {original: soul11, originalHeight: '500px'}, 
                {original: soul12, originalHeight: '500px'}, 
                {original: soul13, originalHeight: '500px'}, {original: soul14, originalHeight: '500px'}];
            break;
        case 'fantasy-december-2015':
            title = "'FANTASY' CONCERT AT THE SYDNEY OPERA HOUSE";
            timeandlocation = "December 2016";
            country = "Sydney Opera House";
            imageFlag = 1;
            images = [{original: fantasydecember1, originalHeight: '500px'}, {original: fantasydecember2, originalHeight: '500px'}, 
                {original: fantasydecember3, originalHeight: '500px'}, 
                {original: fantasydecember4, originalHeight: '500px'}, {original: fantasydecember5, originalHeight: '500px'}, 
                {original: fantasydecember6, originalHeight: '500px'}, 
                {original: fantasydecember7, originalHeight: '500px'}, {original: fantasydecember8, originalHeight: '500px'}, 
                {original: fantasydecember9, originalHeight: '500px'}, 
                {original: fantasydecember10, originalHeight: '500px'}, {original: fantasydecember11, originalHeight: '500px'}, 
                {original: fantasydecember12, originalHeight: '500px'}, 
                {original: fantasydecember13, originalHeight: '500px'}, {original: fantasydecember14, originalHeight: '500px'}];
            break;
        case 'vivaldi-july-2015':
            title = "'ROCK AND VIVALDI CONCERT' AT THE SYDNEY OPERA HOUSE";
            timeandlocation = "'Rock and Vivaldi' Concert 15 July 2015";
            country = "Sydney Opera House";
            imageFlag = 1;
            images = [{original: rock1, originalHeight: '500px'}, {original: rock2, originalHeight: '500px'}, 
                {original: rock3, originalHeight: '500px'}, 
                {original: rock4, originalHeight: '500px'}, {original: rock5, originalHeight: '500px'}, 
                {original: rock6, originalHeight: '500px'}, 
                {original: rock7, originalHeight: '500px'}, {original: rock8, originalHeight: '500px'}, 
                {original: rock9, originalHeight: '500px'}, 
                {original: rock10, originalHeight: '500px'}, {original: rock11, originalHeight: '500px'}, 
                {original: rock12, originalHeight: '500px'},
                {original: rock13, originalHeight: '500px'}, {original: rock14, originalHeight: '500px'}, 
                {original: rock15, originalHeight: '500px'},
                {original: rock16, originalHeight: '500px'}, {original: rock17, originalHeight: '500px'}, 
                {original: rock18, originalHeight: '500px'},
                {original: rock19, originalHeight: '500px'}, {original: rock20, originalHeight: '500px'}, 
                {original: rock21, originalHeight: '500px'}];
            break;
        case 'gugak-september-2013':
            title = "'GUGAK AND CLASSIC' CONCERT AT THE SYDNEY OPERA HOUSE";
            timeandlocation = "September 2013";
            country = "Utzon Room, Sydney Opera House";
            imageFlag = 1;
            images = [{original: gugak1, originalHeight: '500px'}, {original: gugak2, originalHeight: '500px'}, 
                {original: gugak3, originalHeight: '500px'}, 
                {original: gugak4, originalHeight: '500px'}, {original: gugak5, originalHeight: '500px', originalHeight: '500px'}, 
                {original: gugak6, originalHeight: '500px'}, 
                {original: gugak7, originalHeight: '500px'}, {original: gugak8}, 
                {original: gugak9, originalHeight: '500px'}];
            break;
        default:
            console.log('???');
            <Navigate replace to="/hansori/" />
            break;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Navbar />
            </div>
            
            <div className={styles.body}>
                <h2>{title}</h2>
                <p className={styles.timeandlocation}>{timeandlocation}</p>
                <p>{country}</p>
                <Content />
                {imageFlag === 1 && 
                    <ImageGallery 
                        items={images} 
                        showIndex={true}
                        showBullets={true}
                    />
                }
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Concert;