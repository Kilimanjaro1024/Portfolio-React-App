import React from "react"
import Project from "./Project"

const Projects = (props) =>{
    console.log(props.projects.data)

    const loaded = () => {
        return (
            <div id="projects">
                <h1>Projects</h1>
                {props.projects.data.map((project, index) => {
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
        )
    }

    const loading = () => {
        return<h1>LOADING...</h1>
    }

    return props.projects.data ? loaded() : loading()

}

export default Projects