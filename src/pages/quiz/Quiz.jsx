import React from 'react'
import QuizBody from './components/quizBody/QuizBody'
import QuizHead from './components/quizHead/QuizHead'
import "./quiz.css"

const Quiz = () => {
  return (
    <div className='quiz'>
        <div className='container'>
            <QuizHead/>
            <QuizBody/>
        </div>
    </div>
  )
}

export default Quiz