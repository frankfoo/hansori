import logo from './logo.svg';
import * as React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

/* Styling */
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Components */
import Home from './components/Home.js';
import About from './components/About.js';

function App() {;
  return (
    <BrowserRouter basename="/hansori">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
