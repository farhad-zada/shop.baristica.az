import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from "../../../../content/PagesText.json";
import { Lock, Rate, Up } from '../../../../assets/images/icons/icons';
import  User  from '../../../../assets/images/user.png'

const { blog } = PagesText;

const BlogComments = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='blogComments'>
        <div className='container'>
            <div className='blogComments-title'>
                <h3 className='f30 green800'>{lang ? blog.comments[lang].title : ''}</h3>
                <p className='a-center flex f18 green800'><span>{Lock} &nbsp;</span> {lang ? blog.comments[lang].subtitle :''}</p>
            </div>
            <div className='blogComments-section'>
                <div className='blogComment flex a-center'>
                    <img src={User} alt="" className='blogComment-img'/>
                    <div className='blogComment-user'>
                        <div className='blogComment-user_name green800 f20'>Мамед Мамедов</div>
                        <div className='blogComment-user_text gray600'>Очень познавательная и подробная статья! Спасибо. Интересный ритуал и так много нюансов.</div>
                    </div>
                </div>
                <div className='blogComment flex a-center'>
                    <img src={User} alt="" className='blogComment-img'/>
                    <div className='blogComment-user'>
                        <div className='blogComment-user_name green800 f20'>Мамед Мамедов</div>
                        <div className='blogComment-user_text gray600'>Очень познавательная и подробная статья! Спасибо. Интересный ритуал и так много нюансов.</div>
                    </div>
                </div>
                <div className='blogComment flex a-center'>
                    <img src={User} alt="" className='blogComment-img'/>
                    <div className='blogComment-user'>
                        <div className='blogComment-user_name green800 f20'>Мамед Мамедов</div>
                        <div className='blogComment-user_text gray600'>Очень познавательная и подробная статья! Спасибо. Интересный ритуал и так много нюансов.</div>
                    </div>
                </div>
            </div>
            <form action="" className='blogComments-form border36'>
                <div className='flex a-center j-between'>
                    <h4 className='blogComments-form_title f24 green800 flex a-center'><span>{Rate}</span>{lang ? blog.comments[lang].form.title : ''}</h4>
                    <button className='defaultBtn'>
                        {Up}
                    </button>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder={lang ? blog.comments[lang].form.placeholder : ''} className="w-100 f18 gray600 border20"></textarea>
            </form>
        </div>
    </div>
  )
}

export default BlogComments