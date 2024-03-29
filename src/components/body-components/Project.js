import React, {useState} from "react"
import "../../styling/Project.scss"
import Modal from "./ProjectModal"

const Project = (props) =>{
    const [show, setShow] = useState(false)
    return (
        <div className="project" onClick={() => setShow(true)}>
            <div className="overlay">
                <h5>{props.name}</h5>
                <p>{props.description}</p>
                <div>
                    <a href={props.github}>Github</a>
                    <a href={props.live}>Site</a>
                </div>
            </div>
            <img src={props.img} alt="image" onClick={() => setShow(true)}/>
            
            {/* <button onClick={() => setShow(true) }>Show Modal</button> */}
            <Modal onClose={() => setShow(false)} show={show} name={props.name} 
                            description={props.description}
                            github={props.github}
                            img={props.img}
                            live={props.live}/>
        </div>
    )
}

export default Project