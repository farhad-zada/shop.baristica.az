import React from 'react'
import ProfileInnerHead from './components/profileInnerHead/ProfileInnerHead'
import ProfileInnerBody from './components/profileInnerBody/ProfileInnerBody'
import "./profileInner.css"

const ProfileInner = () => {
  return (
    <div className='profileInner'>
        <ProfileInnerHead/>
        <ProfileInnerBody/>
    </div>
  )
}

export default ProfileInner