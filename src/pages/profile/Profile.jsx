import ProfileBody from './components/profileBody/ProfileBody'
import ProfileHead from './components/profileHead/ProfileHead'
import "./profile.css"
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user,token } = useSelector((state) => state.baristica);

  return (
    <div className='profile'>
      <ProfileHead user={user} />
      <ProfileBody  />
    </div>
  )
}

export default Profile