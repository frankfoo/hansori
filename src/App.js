// import logo from './logo.svg';
import * as React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

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

function App() {;
  return (
    <BrowserRouter basename="/hansori">
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hansori-string-ensemble" element={<Join flag="1"/>} />
        <Route path="/volunteer" element={<Join flag="2"/>} />
        <Route path="/sponsor-us" element={<Join flag="3"/>} />
        <Route path="/concerts" element={<AllConcerts />} />
        <Route path="concerts/:concertID" element={<Concert />} />
        <Route path="/*" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
