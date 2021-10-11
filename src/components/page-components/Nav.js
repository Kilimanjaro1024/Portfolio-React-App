import React from "react"
import "../../styling/Nav.scss"

const Nav = (props) =>{
    return (
        <nav>
            <ul>
                <li>
                    <h5>About</h5>
                </li>
                <li>
                    <h5>Skills</h5>
                </li>
                <li>
                    <h5>Projects</h5>
                </li>
                {/* <li>
                    <h5>Contact</h5>
                </li> */}
            </ul>
        </nav>
    )

}

export default Nav