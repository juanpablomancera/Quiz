import React from "react"
import {nanoid} from "nanoid"

export default function Question(props){
    const [clicked, setClicked] = React.useState(props.clicked)

    function changeState(event, id){
        const item = document.getElementById(id)
        if(!clicked){
            if(item.innerHTML === props.answer){
                item.classList.add('green')
                setClicked(prevClick => !prevClick)
                props.correctAnswer()
                props.questionsAsked()
            }
            else{
                item.classList.add('red')
                for(let i = 0; i< answers.length ; i++){
                    if(answers[i].props.children === props.answer){
                        const answer = document.getElementById(answers[i].props.id)
                        answer.classList.add('green')
                    }
                }
                setClicked(prevClick => !prevClick)
                props.questionsAsked()
            }
        }
        
    }
    const answers = props.answers.map(answer => {
        const id = nanoid()
        return <p id={id} onClick={(event)=> changeState(event, id)}>{answer}</p>
    })
    

    return(
        <>
        <div className="single-question">
            <h1 className="question-title">{props.question}</h1>
            <div className="answers">
                {answers}
            </div>
           </div>
        </>
    )
}