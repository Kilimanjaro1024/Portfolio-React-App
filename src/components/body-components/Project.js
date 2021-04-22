import React from "react"
import "../../styling/Project.scss"

const Project = (props) =>{
    return (
        <div className="project">
            <p>{props.name}</p>
            <img src={props.img} alt="image"/>
            <p>{props.description}</p>
            <a href={props.github}>github</a>
        </div>
    )
}

export default Project