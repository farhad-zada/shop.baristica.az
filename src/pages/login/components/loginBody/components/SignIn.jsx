import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../../../../../services/auth.service'
import { setToken } from '../../../../../redux/slice'

export default function SignIn(props) {
    const { loginType, setLoginType, lang, body, setLoading } = props

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })


    const authService = new AuthService()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onInputChange = (e) => {
        const { name, value } = e.target
        setLoginData(state => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    const login = async () => {
        setLoading(state => state = true)
        try {
            const formData = {
                creds: loginData
            }
            const response = await authService.login(formData)
            setLoading(state => state = false)
            const token = response.data.token
            localStorage.setItem('baristicaToken', token)
            dispatch(setToken(token))
            navigate('/')
        } catch (error) {
            setLoading(state => state = false)
        }
    }


    return (
        <>
            {loginType ?
                <form className='flex column'>
                    <input
                        name='email'
                        type="email"
                        placeholder='E-mail'
                        className='border20 f18 gray600'
                        onChange={(e) => { onInputChange(e) }}
                    />
                    <input
                        name='password'
                        type="password"
                        placeholder={lang ? body[lang]?.form.login.password : ''}
                        className='border20 f18 gray600'
                        onChange={(e) => { onInputChange(e) }}
                    />

                    <div className='rememberBtn flex a-center'>
                        <input type="checkbox" />
                        <label htmlFor="" className='f20 green800'>{lang ? body[lang]?.form.login.remember : ''}</label>
                    </div>

                    <button className='loginBtn f20 border20 defaultBtn pointer' type='button' onClick={login}>
                        {lang ? body[lang]?.form.login.loginBtn : ''}
                    </button>
                    {/* <div className='additional-logins flex a-center'>
                                    <Link className='flex a-center j-center border20 gray600'>{Gmail} <span className='f20'>Google</span></Link>
                                    <Link className='flex a-center j-center border20 gray600'>{Apple} <span className='f20'>Apple ID</span></Link>
                                </div> */}
                    <div className='flex column a-center mt15'>
                        <Link className='flex gray600 f20 forgetBtn'>{lang ? body[lang]?.form.login.forgetBtn : ''}</Link>
                        <Link className='flex gray600 f20 enterByTelNumBtn' onClick={() => setLoginType(false)}>{lang ? body[lang]?.form.login.enterByTelNum : ''}</Link>
                    </div>
                </form>
                : (<form className='flex column'>
                    <input type="text" placeholder='E-mail' className='border20 f18 gray600' />
                    <button className='loginBtn f20 border20 defaultBtn'>{lang ? body[lang]?.form.login.loginBtn : ''}</button>
                    <Link className='flex gray600 f20 j-center enterByEmailBtn' onClick={() => setLoginType("login")}>{lang ? body[lang]?.form.login.enterByEmail : ''}</Link>
                </form>)
            }
        </>
    )
}
