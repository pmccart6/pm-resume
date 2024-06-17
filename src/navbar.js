import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {

    return <div id='navbar'>
        <Link to='/'><button id='homeButton'>Home</button></Link>
        <Link to='/education'><button id='edButton'>Education</button></Link>
        <Link to='/experience'><button id='workButton'>Experience</button></Link>
    </div>
}

export default Navbar;