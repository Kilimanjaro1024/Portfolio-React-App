import React, { useEffect, useState } from "react"
import Project from "./Project"
import "../../styling/Projects.scss"
import Tabletop from "tabletop"
import ProjectsJson from "../../json-files/projects.json"

const Projects = (props) =>{
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div className="projects">
                {ProjectsJson.map((project, index) => {
                    return (
                        
                        <Project 
                            name={project.name} 
                            description={project.description}
                            github={project.github}
                            img={project.img}
                            live={project.live}
                        /> 
                    )
                })}
            </div>
        </div>
    )
}

export default Projects