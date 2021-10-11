import React from "react"
import "../../styling/Footer.scss"
import {FaGithub, FaLinkedin, FontAwesome} from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = (props) =>{
    return (
        <footer>
            <a href="https://www.linkedin.com/in/clayton-miller-software-engineer/">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Kilimanjaro1024">
                <FaGithub />
            </a>
        </footer>
    )

}

export default Footer