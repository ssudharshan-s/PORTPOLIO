import React from "react";

import { Link } from "react-router-dom";
import './NavBar.css';

 
const Navbar = () => {
   


    return(
        <header className="header">
            <h1>Portfolio</h1>

            <nav className="navbar">
                <Link to="/Home" state={{scrollTo:'Hero-section'}} className="nav-link">Home</Link>
                <Link to="/" state={{scrollTo:'Education-section'}} className="nav-link" >Education</Link>
                <Link to="/" state={{scrollTo:'Skills-section'}}className="nav-link">Skills</Link>
                <Link to="/" className="nav-link" >Project</Link>
                <Link to="/" state={{scrollTo:'Contact-section'}}className="nav-link">Contact</Link>
            </nav>
        </header>
    )
}

export default Navbar;