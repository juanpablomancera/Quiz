import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

export default function App(){
  const [startQuiz, setStartQuiz] = React.useState(false)
  
  function changeQuiz(){
    setStartQuiz(prevState => !prevState)
  }

  if(startQuiz){
    return <Quiz />
  } else {
    return <Start startQuiz={changeQuiz}/>
  }
}
