import React, { useState } from 'react'
import AuthService from '../../../../../services/auth.service'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../../../redux/slice'

export default function Signup(props) {
    const { lang, body, setLoading} = props

    const [signUpData, setSignupData] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const hintMessage = {
        ru: {
            passwordsMismatch: 'Пароли не совпадают',
            incompleteFields: 'Заполните все поля'
        },
        en: {
            passwordsMismatch: 'Passwords do not match',
            incompleteFields: 'Please fill in all fields'
        },
        az: {
            passwordsMismatch: 'Şifrələr uyğun deyil',
            incompleteFields: 'Bütün sahələri doldurun'
        }
    }

    const [showHintMessage, setShowHintMessage] = useState({
        show: false,
        message: ''
    })

    const authService = new AuthService()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signUp = async () => {
        if (!signUpData.email || !signUpData.password || !signUpData.passwordConfirm) {
            setShowHintMessage({ show: true, message: 'incompleteFields' })
            return
        }

        if (signUpData.password !== signUpData.passwordConfirm) {
            setShowHintMessage({ show: true, message: 'passwordsMismatch' })
            return
        }

        setShowHintMessage({ show: false, message: '' })
        setLoading(state => state = true)
        try {
            // Sign up logic here
            const response = await authService.register({user: signUpData})
            localStorage.setItem('baristicaToken', response.data.token)
            setLoading(state => state = false)
            dispatch(setToken(response.data.token))
            navigate('/')
        } catch (error) {
            // Handle signup error
            setLoading(state => state = false)
        }
    }

    const onInputChange = (e) => {
        const { name, value } = e.target
        setSignupData(state => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    return (
        <form className='flex column'>

            <input
                name='name'
                type="text"
                placeholder={lang ? body[lang]?.form.registration.name : ''}
                className='border20 f18 gray600'
                onChange={(e) => { onInputChange(e) }}
            />
            <input
                name='lastName'
                type="text"
                placeholder={lang ? body[lang]?.form.registration.lastName : ''}
                className='border20 f18 gray600'
                onChange={(e) => { onInputChange(e) }}
            />
            <input
                name='phone'
                type="text"
                placeholder={lang ? body[lang]?.form.registration.phone : ''}
                className='border20 f18 gray600'
                onChange={(e) => { onInputChange(e) }}
            />
            <input
                name='email'
                type="email"
                placeholder={lang ? body[lang]?.form.registration.email : ''}
                className='border20 f18 gray600'
                onChange={(e) => { onInputChange(e) }}
            />
            <input
                name='password'
                type="password"
                placeholder={lang ? body[lang]?.form.registration.password : ''}
                className='border20 f18 gray600'
                onChange={(e) => { onInputChange(e) }}
            />
            <input
                name='passwordConfirm'
                type="password"
                placeholder={lang ? body[lang]?.form.registration.password2 : ''}
                className='border20 f18 gray600'
                onChange={(e) => { onInputChange(e) }}
            />
            <p className={showHintMessage.show ? "hintMessage f20 active" : "hintMessage f20"}>
                {lang ? hintMessage[lang][showHintMessage.message] : ''}
            </p>

            <button className='loginBtn f20 border20 defaultBtn pointer' type='button' onClick={signUp}>
                {lang ? body[lang]?.form.registration.btn : ''}
            </button>

            <div className='flex column a-center'>
                <Link className='fflex gray600 f20 forgetBtn'>{lang ? body[lang]?.form.registration.backToLogin : ''}</Link>
            </div>
        </form>
    )
}
