import React, { useState } from 'react'
import { useSelector } from "react-redux";
import PagesText from "../../../../content/PagesText.json";
import "./quizBody.css"

const { quiz } = PagesText;
const { body } = quiz;

const QuizBody = () => {
  const [question, setQuestion] = useState(0)
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='quizBody border36'>
      {question === 0 ? 
        <div className='quizbody-section flex column j-between'>
          <div className='quizBody-top'>
            <div className='quizBody-title flex a-center j-between'>
                <h3 className='quizBody-question f30 green800'>{lang ? body[lang].question1.question : ''}</h3>
                <p className='quizBody-question_num f30 gray400'>1<span className='f30 green800'>/3</span></p>
            </div>
            <div className='quizBody-variants flex a-center'>
                {lang && body[lang].question1.answers.map((answer) => (
                    <div className='quizBody-variant gray600 f20 border20' onClick={() => setQuestion(1)}>{answer.icon} {answer.label}</div>
                ))}
            </div>
          </div>
          <div className='quizBody-bottom flex a-center'>
              <button className='border20 quizBody-btn defaultBtn f20 green600'>{lang ? body[lang].backBtn : ''}</button>
              <div className='quizBody-progress flex a-center'>
                <p className='gray600 f18'>{lang ? body[lang].progress : ''} 0%</p>
                <div className='progress border16 flex'>
                  <div className='progress-bar'></div>
                  <div className='progress-bar'></div>
                  <div className='progress-bar'></div>  
                </div>
              </div>
          </div>
        </div>
      : question === 1 ? 
        <div className='quizbody-section flex column j-between'>
          <div className='quizBody-top'>
            <div className='quizBody-title flex a-center j-between'>
                <h3 className='quizBody-question f30 green800'>{lang ? body[lang].question2.question : ''}</h3>
                <p className='quizBody-question_num f30 gray400'>2<span className='f30 green800'>/3</span></p>
            </div>
            <div className='quizBody-variants flex wrap a-center'>
                {lang && body[lang].question2.answers.map((answer) => (
                    <div className='quizBody-variant gray600 f20 border20' onClick={() => setQuestion(2)}>{answer.icon} {answer.label}</div>
                ))}
            </div>
          </div>
          <div className='quizBody-bottom flex a-center'>
              <button className='border20 quizBody-btn defaultBtn f20 green600' onClick={() => setQuestion(0)}>{lang ? body[lang].backBtn : ''}</button>
              <div className='quizBody-progress flex a-center'>
                <p className='gray600 f18'>{lang ? body[lang].progress : ''} 33%</p>
                <div className='progress border16 flex'>
                  <div className='progress-bar bg-green'></div>
                  <div className='progress-bar'></div>
                  <div className='progress-bar'></div>  
                </div>
              </div>
          </div>
        </div>
    : question === 2 ? <div className='quizbody-section flex column j-between'>
    <div className='quizBody-top'>
      <div className='quizBody-title flex a-center j-between'>
          <h3 className='quizBody-question f30 green800'>{lang ? body[lang].question1.question : ''}</h3>
          <p className='quizBody-question_num f30 gray400'>3<span className='f30 green800'>/3</span></p>
      </div>
      <div className='quizBody-variants flex a-center'>
          {lang && body[lang].question3.answers.map((answer) => (
              <div className='quizBody-variant gray600 f20 border20'>{answer.icon} {answer.label}</div>
          ))}
      </div>
    </div>
    <div className='quizBody-bottom flex a-center'>
        <button className='border20 quizBody-btn defaultBtn f20 green600' onClick={() => setQuestion(1)}>{lang ? body[lang].backBtn : ''}</button>
        <div className='quizBody-progress flex a-center'>
          <p className='gray600 f18'>{lang ? body[lang].progress : ''} 66%</p>
          <div className='progress border16 flex'>
            <div className='progress-bar bg-green'></div>
            <div className='progress-bar bg-green'></div>
            <div className='progress-bar'></div>  
          </div>
        </div>
    </div>
  </div>
  : null}
    </div>
  )
}

export default QuizBody