import React from 'react'
import ProfileInnerHead from './components/profileInnerHead/ProfileInnerHead'
import ProfileInnerBody from './components/profileInnerBody/ProfileInnerBody'
import "./profileInner.css"
import { useSelector } from 'react-redux'

const ProfileOrder = () => {
  const { user } = useSelector((state) => state.baristica);

  return (
    <div className='profileInner'>
        <ProfileInnerHead/>
        <ProfileInnerBody user={user} />
    </div>
  )
}

export default ProfileOrder