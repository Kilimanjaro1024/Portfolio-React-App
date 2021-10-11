import React from "react"
import "../styling/Page.scss"
import Content from "./Content"

import Header from "./page-components/Header"
import Nav from "./page-components/Nav"
import Footer from "./page-components/Footer"


const Page = (props) =>{
    console.log(props.projects)
    return (
        <div class="body">
            <Header/>
            <Content projects={props.projects}/>
            <Footer/>
        </div>
    )
}

export default Page