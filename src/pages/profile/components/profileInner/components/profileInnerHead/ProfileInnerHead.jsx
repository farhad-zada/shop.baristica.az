import React from 'react'
import { useSelector } from 'react-redux';
import Tabs from '../../../../../../components/tabs/Tabs';
import PagesText from "../../../../../../content/PagesText.json";
import ProfileInnerBody from '../profileInnerBody/ProfileInnerBody';
import "./profileInnerHead.css"

const { profile, profileInner } = PagesText;
const { head } = profileInner;

const ProfileInnerHead = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='profileInnerHead'>
      <div className='container'>
        <div className="profileInner-nav flex a-center">
          <p className='gray600'>Baristica /</p>
          <p className='gray600'>&nbsp;{lang ? profile.head[lang].nav : ''} /</p>
          <p className='gray600'>&nbsp;{lang ? head[lang].nav : ''}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInnerHead