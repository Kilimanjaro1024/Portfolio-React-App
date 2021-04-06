import React from "react"
import "../../styling/Skills.scss"
import { FaCss3, FaHtml5, FaUnity, FontAwesome } from "react-icons/fa"
import { DevIcons, DiCodepen, DiGit, DiGithub, DiHeroku, DiJavascript, DiJqueryLogo, DiLinux, DiMongodb, DiMysql, DiNodejs, DiPostgresql, DiReact, DiRuby, DiSass, DiTrello, DiUbuntu } from "react-icons/di"

const Skills = (props) =>{
    return (
        <div>
            <h1>Skills</h1>
            <div>
                <FaHtml5 />
                <FaUnity/>
                <FaCss3/>
                <DiCodepen/>
                <DiJavascript/>
                <DiGit/>
                <DiGithub/>
                <DiHeroku/>
                <DiLinux/>
                <DiJqueryLogo/>
                <DiPostgresql/>
                <DiNodejs/>
                <DiMongodb/>
                <DiMysql/>
                <DiReact/>
                <DiSass/>
                <DiUbuntu/>
                <DiRuby/>
                <DiTrello/>

            </div>
        </div>
    )

}

export default Skills