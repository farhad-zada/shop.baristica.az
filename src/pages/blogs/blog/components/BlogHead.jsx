import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from "../../../../content/PagesText.json";
import { Calendar, Clock, Eye, Comment } from '../../../../assets/images/icons/icons';

const { blogs } = PagesText;
const { head } = blogs;

const BlogHead = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='blogHead'>
        <div className='container'>
            <div className="blog-nav flex a-center">
                <p className='gray600'>Baristica /</p>
                <p className='gray600'>&nbsp;{lang ? head[lang].nav : ''}</p>
            </div>
            <div className='blog-title'><h1 className='green800 f72'>Как проводят чайные церемонии в Японии</h1></div>
            <div className='blog-subtitle'><p className='gray600 f30'>Как проводят чайные церемонии в Японии</p></div>
            <div className="blogCard-foot flex a-center j-between">
                <div className='blogCard-foot_stats flex a-center'>
                    <div className='blogCard-date flex a-center'>
                        {Calendar}
                        <p className='gray400 f16'>12 Февраля, 2023</p>
                    </div>
                    <div className='blogCard-date flex a-center'>
                        {Eye}
                        <p className='gray400 f16'>145 просмотров</p>
                    </div>
                    <div className='blogCard-time flex a-center'>
                        {Clock}
                        <p className='gray400 f16'>5 мин</p>
                    </div>
                </div>
                <div className='blogCard-foot_comment flex a-center'>
                    {Comment}
                    <p className='gray400 f16'>3 комментария</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogHead