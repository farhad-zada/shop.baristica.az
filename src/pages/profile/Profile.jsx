import React from 'react'
import ProfileBody from './components/profileBody/ProfileBody'
import ProfileHead from './components/profileHead/ProfileHead'
import "./profile.css"

const Profile = () => {
  return (
    <div className='profile'>
        <ProfileHead/>
        <ProfileBody/>
    </div>
  )
}

export default Profile