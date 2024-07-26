import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json'
import UsersService from '../../../../../../services/users.service';

import Loading from '../../../../../../components/loading/Loading';
const { profileInner } = PagesText;
const { body } = profileInner;

const ProfilePersonal = (props) => {
  const { lang, token } = useSelector((state) => state.baristica);
  const { user } = props

  const [userData, setUserData] = useState({ password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const [showHintMessage, setShowHintMessage] = useState(false)

  const hintMessage = {
    ru: 'Пароли не совпадают',
    en: 'Passwords do not match',
    az: 'Şifrələr uyğun deyil'
  }

  const usersService = new UsersService()

  const updateUser = async () => {
    if (userData.password !== userData.confirmPassword) {
      setShowHintMessage(true)
      return
    }

    setShowHintMessage(false)
    setLoading(true)

    try {
      const response = await usersService.updateUser(token, userData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target
    setUserData(state => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  useEffect(() => {
    if (user) {
      setUserData({ ...user, ...userData })
    }
  }, [user])

  return (
    <div className='profilePersonal'>
      <Loading status={loading} />
      <div className="profilePersonal-title f36 green800">{lang ? body[lang].personal.title : ''}</div>
      <form action="" className="profilePersonal-form">

        <input
          name='name'
          type="text"
          className='border20 f18'
          placeholder={lang ? body[lang].personal.form.name : ''}
          value={userData?.name ? userData.name : ''}
          onChange={(e) => onInputChange(e)}
        />

        <input
          name='lastName'
          type="text"
          className='border20 f18'
          placeholder={lang ? body[lang].personal.form.surname : ''}
          value={userData?.lastName ? userData.lastName : ''}
          onChange={(e) => onInputChange(e)}
        />
        <input
          name='email'
          type="email"
          className='border20 f18'
          placeholder={lang ? body[lang].personal.form.mail : ''}
          value={userData?.email ? userData.email : ''}
          onChange={(e) => onInputChange(e)}
        />

        <input
          name='phone'
          type="text"
          className='border20 f18'
          placeholder={lang ? body[lang].personal.form.phone : ''}
          value={userData?.phone ? userData.phone : ''}
          onChange={(e) => onInputChange(e)}
        />
        <input
          name='password'
          type="password"
          className='border20 f18'
          placeholder={lang ? body[lang].personal.form.password : ''}
          onChange={(e) => onInputChange(e)}
        />
        <input
          name='confirmPassword'
          type="password"
          className='border20 f18'
          placeholder={lang ? body[lang].personal.form.password2 : ''}
          onChange={(e) => onInputChange(e)}
        />

        <button className='defaultBtn border20 f18 pointer' type='button' onClick={updateUser}>
          {lang ? body[lang].personal.btn : ''}
        </button>
      </form>
      <p className={showHintMessage ? "hintMessage f20 active w100" : "hintMessage f20"}>
        {lang ? hintMessage[lang] : ''}
      </p>
    </div>
  )
}

export default ProfilePersonal
