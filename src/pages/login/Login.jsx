import React from 'react'
import LoginBody from './components/loginBody/LoginBody'
import LoginHead from './components/loginHead/LoginHead'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className='container'>
            <LoginHead/>
            <LoginBody/>
        </div>
    </div>
  )
}

export default Login