import React from 'react'
import { Link } from 'react-router-dom'

export default function CartAuthorization(props) {
  const { authorization } = props
  return (
    <div className='cartAuthorization border24'>
      <h2 className="white f30">{authorization.heading}</h2>
      <p className="gray100 f20">{authorization.paragraph}</p>
      <div className="flex j-between">
        <Link className='green800 f20 border20 cartAuthorization-login' to={'/login'}>{authorization.loginBtn}</Link>
        <Link className='white f20 border20 cartAuthorization-register' to={'/signup'}>{authorization.registerBtn}</Link>
      </div>
    </div>
  )
}
