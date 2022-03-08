import React from "react"

export default function Start(props){
    return(
        <div className="start-page">
            <div className="blob"></div>
            <h1 className="start-title">Geography Test</h1>
            <h3 className="start-description">See if you know as much about geography as you think you do.</h3>
            <button className="start-button" onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}