import React from "react"
import "../../styling/Header.scss"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from "./Nav"

const Header = (props) =>{
    return (
        <Navbar expand="lg">
            <h1>Stuff</h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#about">Skills</a>    
                    </li>
                    <li>
                        <a href="#about">Projects</a>                       
                    </li>
                    <li>
                        <a href="#about">Contact</a>                        
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
        // <header>
        //     <img src="https://i.imgur.com/INnsE9J.png" alt="" width="56" height="56" />
        //     <img src="https://i.imgur.com/INnsE9J.png" alt="" width="56" height="56" />
        // </header>
    )

}

export default Header