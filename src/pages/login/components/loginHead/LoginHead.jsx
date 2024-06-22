import React from 'react'
import { useSelector } from "react-redux";
import PagesText from "../../../../content/PagesText.json";
import "./loginHead.css"

const { login } = PagesText;
const { head } = login;

const LoginHead = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='loginHead'>
        <div className="loginHead-nav flex a-center">
            <p className='gray600'>Baristica /</p>
            <p className='gray600'>&nbsp;{head[lang].nav}</p>
        </div>
        <div className='loginHead-title'><h1 className='green800 f36'>{head[lang].title}</h1></div>
        <div className='loginHead-subtitle'><p className='green800 f18'>{head[lang].subtitle}</p></div>
    </div>
  )
}

export default LoginHead