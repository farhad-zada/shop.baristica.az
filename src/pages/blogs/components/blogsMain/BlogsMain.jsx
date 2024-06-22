import React from 'react'
import { Link } from 'react-router-dom'
import InterestingImg from "../../../../assets/images/interesting.png"
import { Calendar, Clock } from '../../../../assets/images/icons/icons'

const BlogsMain = () => {
  return (
    <div className='main-blog'>
        <div className='container'>
            <Link className='blogCard flex reversed-row'>
                <div className="blogCard-img flex a-center j-center">
                    <img src={InterestingImg} alt="" className="border24"/>
                </div>
                <div className="blogCard-body">
                    <h3 className='blogCard-body_news blueAccent f18'>Новости</h3>
                    <h2 className='blogCard-body_title green800 f48'>Как проводят чайные церемонии в Японии</h2>
                    <p className='blogCard-body_description gray500 f16'>AeroPress - это превосходная кофеварка на одну чашку, которая использует экстракцию под высоким давлением для приготовления невероятной чашки кофе.</p>
                    <div className="blogCard-foot flex a-center j-between">
                        <div className='blogCard-date flex a-center'>
                            {Calendar}
                            <p className='gray400 f16'>12 Февраля, 2023</p>
                        </div>
                        <div className='blogCard-time flex a-center'>
                            {Clock}
                            <p className='gray400 f16'>5 мин</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default BlogsMain