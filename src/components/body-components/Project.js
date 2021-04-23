import React, {useState} from "react"
import "../../styling/Project.scss"
import Modal from "./ProjectModal"

const Project = (props) =>{
    const [show, setShow] = useState(false)
    return (
        <div className="project">
            <p>{props.name}</p>
            <img src={props.img} alt="image" onClick={() => setShow(true)} />
            
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