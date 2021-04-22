import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import Page from './components/Page'
import axios from "axios";

function App() {
  const URL= "https://claytons-projects.herokuapp.com/"
  console.log(URL)

  const [projects, setProjects] = useState([])

  const getProjects = (project) => {
    console.log("hello")
    axios.get(URL + "projects").then((projects) => {
      setProjects(projects)
    })
  }

  useEffect(() => {
    getProjects()
    
  }, [])

  return (
    <div className="App">
      <Page projects={projects} />
    </div>
  );
}

export default App;
