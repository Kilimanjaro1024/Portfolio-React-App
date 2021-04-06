import React from "react"
import "../../styling/About.scss"

const About = (props) =>{
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <div>               
                <img src="https://cdn.discordapp.com/attachments/771150639732359212/829110653704601640/unknown.png" alt="none"/>
                <p>I am a software developer with a background in video game design and programming. I pride myself on my ability to tackle logistical problems with research and planning as well as using logic and reasoning to solve technical problems. My background in gaming and experience with scripting and design enables me to properly leverage my skills in Javascript, C#, and CSS to their fullest extent.</p>
            </div>
        </div>
    )
}

export default About