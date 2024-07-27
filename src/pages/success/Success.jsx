import React from 'react'
import { useSelector } from 'react-redux'
import './success.css'

import SuccessImg from '../../assets/images/success.png'

import pageText from '../../content/PagesText.json'
import { useNavigate } from 'react-router-dom'
export default function Success() {
    const { success } = pageText
    const { lang } = useSelector((state) => state.baristica);
    const navigate = useNavigate()
    return (
        <div className='successPage flex column j-center a-center'>
            <div className="successImg flex j-center">
                <img src={SuccessImg} alt="" />
            </div>
            <h2 className="green800 f72 text-center">{lang ? success[lang].heading : ''}</h2>
            <p className='gray600 f18'>{lang ? success[lang].paragraph : ''}</p>
            <div className="successPage-btns flex j-center g8">
                <button type='button' className="successPage-toHome white f18 border16 pointer" onClick={() => navigate('/')}>
                    {lang ? success[lang].toHome : ''}
                </button>
            </div>
        </div>
    )
}
