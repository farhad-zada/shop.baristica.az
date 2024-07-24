import React from 'react'
import { useSelector } from "react-redux";
import PagesText from "../../../../content/PagesText.json";
import "./quizHead.css"

const { quiz } = PagesText;
const { head } = quiz;

const QuizHead = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='quizHead'>
        <div className="quizHead-nav flex a-center">
            <p className='gray600'>Baristica /</p>
            <p className='gray600'>&nbsp;{lang ? head[lang].nav : ''}</p>
        </div>
        <div className='quizHead-title'><h1 className='green800 f36'>{lang ? head[lang].title : ''}</h1></div>
        <div className='quizHead-subtitle'><p className='green800 f18'>{lang ? head[lang].subtitle : ''}</p></div>
    </div>
  )
}

export default QuizHead