import React from "react";
import "../../styling/ProjectModal.scss"

const Modal = (props) =>  {
    if (!props.show) {
        console.log(props.show)
        return null
    }
    else{
        return(
            <div className="project-modal" onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">{props.name}</h4>
                    </div>
                    <div className="modal-body">
                    <p>{props.description}</p>
            <a href={props.github}>github</a>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        )

    }

}

export default Modal