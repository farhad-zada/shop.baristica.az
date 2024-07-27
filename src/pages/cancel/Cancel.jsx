import React from 'react'
import { useSelector } from 'react-redux'
import './cancel.css'

import CancelImg from '../../assets/images/cancel.png'

import pageText from '../../content/PagesText.json'
import { useNavigate } from 'react-router-dom'
export default function Cancel() {
    const { cancel } = pageText
    const { lang } = useSelector((state) => state.baristica);
    const navigate = useNavigate()
    return (
        <div className='cancelPage flex column j-center a-center'>
            <div className="cancelImg flex j-center">
                <img src={CancelImg} alt="" />
            </div>
            <h2 className="green800 f72 text-center">{lang ? cancel[lang].heading : ''}</h2>
            <p className='gray600 f18'>{lang ? cancel[lang].paragraph : ''}</p>
            <div className="cancelPage-btns flex j-center g8">
                <button type='button' className="cancelPage-repeatBtn white f18 border16">
                    {lang ? cancel[lang].repeatBtn : ''}
                </button>
                <button type='button' className="cancelPage-toHome green800 f18 border16" onClick={() => navigate('/')}>
                    {lang ? cancel[lang].toHome : ''}
                </button>
            </div>
        </div>
    )
}
