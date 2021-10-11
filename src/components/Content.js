import React from "react"
import "../styling/Content.scss"

import About from "./body-components/About"
import Skills from "./body-components/Skills"
import Projects from "./body-components/Projects"
// import Contact from "./body-components/Contact"

const Content = (props) =>{
    console.log(props.projects)
    return (
        <div class="content">
            <About/>
            <Skills/>
            <Projects projects={props.projects} />
            {/* <Contact/> */}
        </div>
    )
}

export default Content

