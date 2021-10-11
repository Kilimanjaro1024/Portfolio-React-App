import React from "react"
import "../../styling/Skills.scss"
import { FaCss3, FaHtml5, FaUnity, FontAwesome } from "react-icons/fa"
import { DevIcons, DiCodepen, DiGit, DiGithub, DiHeroku, DiJavascript, DiJqueryLogo, DiLinux, DiMongodb, DiMysql, DiNodejs, DiPostgresql, DiReact, DiRuby, DiSass, DiTrello, DiUbuntu } from "react-icons/di"

const Skills = (props) =>{
    return (
        <div id="skills" className="skills">
            <div className="container">
                <h1>Skills</h1>
                <div className="icons">
                    <div className="icon">
                        <FaHtml5 />
                        <p>HTML</p>
                    </div>
                    <div className="icon">
                        <FaUnity/>
                        <p>Unity</p>
                    </div>
                    <div className="icon">
                        <FaCss3/>
                        <p>CSS</p>

                    </div>
                    <div className="icon">
                        <DiJavascript/>
                        <p>Javascript</p>
                    </div>
                    <div className="icon">
                        <DiGit/>
                        <p>Git</p>
                    </div>
                    <div className="icon">
                        <DiGithub/>
                        <p>Github</p>
                    </div>
                    <div className="icon">
                        <DiHeroku/>
                        <p>Heroku</p>
                    </div>
                    <div className="icon">
                        <DiLinux/>
                        <p>Linux</p>
                    </div>
                    <div className="icon">
                        <DiJqueryLogo/>
                        <p>Jquery</p>
                    </div>
                    <div className="icon">
                        <DiPostgresql/>
                        <p>Postgresql</p>
                    </div>
                    <div className="icon">
                        <DiNodejs/>
                        <p>Node</p>
                    </div>
                    <div className="icon">
                        <DiMongodb/>
                        <p>MongoDB</p>
                    </div>
                    <div className="icon">
                        <DiMysql/>
                        <p>MySQL</p>
                    </div>
                    <div className="icon">
                        <DiReact/>
                        <p>React</p>
                    </div>
                    <div className="icon">
                        <DiSass/>
                        <p>SCSS</p>
                    </div>
                    <div className="icon">
                        <DiUbuntu/>
                        <p>Ubuntu</p>
                    </div>
                    <div className="icon">
                        <DiRuby/>
                        <p>Ruby</p>
                    </div>
                    <div className="icon">
                        <DiTrello/>
                        <p>Trello</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Skills