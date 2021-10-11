import React from "react"
import "../../styling/Footer.scss"
import {FaGithub, FaLinkedin, FontAwesome} from "react-icons/fa"

const Footer = (props) =>{
    return (
        <footer>
            <FaLinkedin/>
            <FaGithub/>
        </footer>
    )

}

export default Footer