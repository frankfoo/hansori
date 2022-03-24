import React from 'react';
import { Link } from "react-router-dom";

const navBar = () => {
    return (
        <nav>
            <Link to="/about">About</Link>
        </nav>
    )
};

export default navBar;