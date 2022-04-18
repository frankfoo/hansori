// import logo from './logo.svg';
import * as React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { HashRouter } from "react-router-dom";

/* Styling */
// import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css"

/* Components */
import Home from './components/Home.js';
import About from './components/About.js';
import Join from './components/Join.js';
import AllConcerts from './components/AllConcerts.js';
import Concert from './components/Concert.js';
import Test from './components/Test.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';
import Admin from './Admin/Admin.js';
import Addconcert from './Admin/Addconcert.js';
import Editconcert from './Admin/Editconcert.js';

function App() {;
  return (
    <BrowserRouter basename="/hansori">
      <div className={StyleSheet.container}>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hansori-string-ensemble" element={<Join flag="1"/>} />
          <Route path="/volunteer" element={<Join flag="2"/>} />
          <Route path="/sponsor-us" element={<Join flag="3"/>} />
          <Route path="/concerts" element={<AllConcerts />} />
          <Route path="concerts/:concertID" element={<Concert />} />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/admin" element={<Admin /> } />
          <Route path="/admin/add" element={<Addconcert /> } />
          <Route path="/admin/edit/:concertID" element={<Editconcert /> } />
          <Route path="/*" element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
