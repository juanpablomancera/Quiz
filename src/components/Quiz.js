import React from "react"
import axios from "axios"
import Question from "./Question"
import {nanoid} from "nanoid"


export default function Quiz(){
const [questions, setQuestions] = React.useState([])
const [questionsAsked, setQuestionsAsked] = React.useState(0)
const [correctAnswers, setCorrectAnswers] = React.useState(0)
const [startGame, setStartGame] = React.useState(false)

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

React.useEffect(function Quiz(){
    axios.get("https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple")
        .then(res => {
            setQuestions(res.data.results.map(item =>(
                {
                    question:item.question,
                    options: shuffle([...item.incorrect_answers, item.correct_answer]),
                    answer:item.correct_answer,
                    clicked:false,
                    id: nanoid(),
                }
            )))
        })

},[startGame])
function questionAnswered(){
    setQuestionsAsked(questionsAsked + 1)
    
}

function correctAnswered(){
    setCorrectAnswers(correctAnswers + 1)
}
function restartGame(){
    setCorrectAnswers(0)
    setQuestionsAsked(0)
    setStartGame(prevGame => !prevGame)
}
   /* function loadQuiz(){
         quiz = questions.map(item => (
            <Question 
            question={item.question} 
            answers={item.options} 
            clicked={item.clicked}
            key={item.id}
            answer={item.answer}
            questionsAsked={questionAnswered}
            correctAnswer={correctAnswered}
            />
        ))
        return quiz
    }*/
let quiz = questions.map(item => (
    <Question 
    question={item.question} 
    answers={item.options} 
    clicked={item.clicked}
    key={item.id}
    answer={item.answer}
    questionsAsked={questionAnswered}
    correctAnswer={correctAnswered}
    />
))

    return(
       <div className="quiz">
           
           {questionsAsked === questions.length ? 
           <div className="end-game">
               <p className="score">¡You scored {correctAnswers}/{questions.length}!</p>
               <button className="answers-btn" onClick={restartGame}>Start New Game</button>
            </div> :
            <div>{quiz}</div> }
               
        </div>
    )
}