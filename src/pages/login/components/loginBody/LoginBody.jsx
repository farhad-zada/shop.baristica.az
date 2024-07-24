import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import PagesText from "../../../../content/PagesText.json";
import Tabs from '../../../../components/tabs/Tabs';
import { Apple, Gmail } from '../../../../assets/images/icons/icons';
import "./loginBody.css"

const { login } = PagesText;
const { body } = login;

const LoginBody = () => {
    const { lang } = useSelector((state) => state.baristica);

    const [loginType, setLoginType] = useState(true)
    return (
        <div className='loginBody border36'>
            <div className="loginBody-tabs">
                <Tabs>
                    <div className='loginBody-tab f24' label={lang ? body[lang]?.form.tabs.title : ''}>
                        {loginType ?
                            <form className='flex column'>
                                <input type="text" placeholder='E-mail' className='border20 f18 gray600' />
                                <input type="password" placeholder={lang ? body[lang]?.form.login.password : ''} className='border20 f18 gray600' />
                                <div className='rememberBtn flex a-center'>
                                    <input type="checkbox" />
                                    <label htmlFor="" className='f20 green800'>{lang ? body[lang]?.form.login.remember : ''}</label>
                                </div>
                                <button className='loginBtn f20 border20 defaultBtn'>{lang ? body[lang]?.form.login.loginBtn : ''}</button>
                                <div className='additional-logins flex a-center'>
                                    <Link className='flex a-center j-center border20 gray600'>{Gmail} <span className='f20'>Google</span></Link>
                                    <Link className='flex a-center j-center border20 gray600'>{Apple} <span className='f20'>Apple ID</span></Link>
                                </div>
                                <div className='flex column a-center'>
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
                    </div>
                    <div className='loginBody-tab f24' label={lang ? body[lang]?.form.tabs.registration : ''} >
                        <form className='flex column'>
                            <input type="text" placeholder={lang ? body[lang]?.form.registration.email : ''} className='border20 f18 gray600' />
                            <input type="password" placeholder={lang ? body[lang]?.form.registration.password : ''} className='border20 f18 gray600' />
                            <input type="password" placeholder={lang ? body[lang]?.form.registration.password2 : ''} className='border20 f18 gray600' />
                            <button className='loginBtn f20 border20 defaultBtn'>{lang ? body[lang]?.form.registration.btn : ''}</button>
                            <div className='additional-logins flex a-center'>
                                <Link className='flex a-center j-center border20 gray600'>{Gmail} <span className='f20'>Google</span></Link>
                                <Link className='flex a-center j-center border20 gray600'>{Apple} <span className='f20'>Apple ID</span></Link>
                            </div>
                            <div className='flex column a-center'>
                                <Link className='fflex gray600 f20 forgetBtn'>{lang ? body[lang]?.form.registration.backToLogin : ''}</Link>
                            </div>
                        </form>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default LoginBody