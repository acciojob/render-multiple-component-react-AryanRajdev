import React, {Component, useState} from "react";
import '../styles/App.css';

const projects = [
  {
    name: "AI Research Platform",
    description: "A platform to explore, train, and deploy AI models for real-world applications."
  },
  {
    name: "Smart Health Tracker",
    description: "An app that monitors health metrics using wearables and provides insights using ML."
  },
  {
    name: "EcoDrive",
    description: "A gamified platform encouraging sustainable driving habits using IoT and rewards."
  }
];

const App = () => {
  return (
    <div id="main">
      {
        projects.map((element,index) => {
          return(
            <div className="ns-wrapper" key={index}>
            <h1 data-ns-test = "project-name">{element.name}</h1>
            <h6 data-ns-test = "project-description">{element.description}</h6>
            </div>
          );
        })
      }
    </div>
  )
}


export default App;
