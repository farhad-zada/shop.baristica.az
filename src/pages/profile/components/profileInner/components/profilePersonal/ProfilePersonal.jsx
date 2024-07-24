import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json'
const { profileInner } = PagesText;
const { body } = profileInner;

const ProfilePersonal = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='profilePersonal'>
      <div className="profilePersonal-title f36 green800">{lang ? body[lang].personal.title : ''}</div>
      <form action="" className="profilePersonal-form">
        <input type="text" className='border20 f18' placeholder={lang ? body[lang].personal.form.name : ''}/>
        <input type="text" className='border20 f18' placeholder={lang ? body[lang].personal.form.surname : ''}/>
        <input type="text" className='border20 f18' placeholder={lang ? body[lang].personal.form.mail : ''}/>
        <input type="text" className='border20 f18' placeholder={lang ? body[lang].personal.form.phone : ''}/>
        <input type="text" className='border20 f18' placeholder={lang ? body[lang].personal.form.password : ''}/>
        <input type="text" className='border20 f18' placeholder={lang ? body[lang].personal.form.password2 : ''}/>
        <button className='defaultBtn border20 f18'>{lang ? body[lang].personal.btn : ''}</button>
      </form>
    </div>
  )
}

export default ProfilePersonal