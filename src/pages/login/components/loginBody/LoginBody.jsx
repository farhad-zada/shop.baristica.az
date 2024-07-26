import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import PagesText from "../../../../content/PagesText.json";
import Tabs from '../../../../components/tabs/Tabs';
import { Apple, Gmail } from '../../../../assets/images/icons/icons';
import "./loginBody.css"
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Loading from '../../../../components/loading/Loading';

const { login } = PagesText;
const { body } = login;

const LoginBody = () => {
    const { lang } = useSelector((state) => state.baristica);

    const [loginType, setLoginType] = useState(true)
    const [loading,setLoading] = useState(false)
    
    return (
        <div className='loginBody border36'>
            <Loading status={loading} />
            <div className="loginBody-tabs">
                <Tabs>
                    <div className='loginBody-tab f24' label={lang ? body[lang]?.form.tabs.title : ''}>
                        <SignIn loginType={loginType} lang={lang} setLoginType={setLoginType} body={body} setLoading={setLoading} />
                    </div>
                    <div className='loginBody-tab f24' label={lang ? body[lang]?.form.tabs.registration : ''} >
                        <Signup lang={lang} body={body} setLoading={setLoading} />
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default LoginBody