import React from 'react'
import { Link } from "react-router-dom";

import './profileDropdown.css'
import PagesText from "../../content/PagesText.json";
import { useSelector } from 'react-redux';

const { header } = PagesText;
const { profileDropdown } = header;
export default function ProfileDropdown(props) {
  const { status,setStatus } = props
  const { lang } = useSelector((state) => state.baristica);
  return ( 
    <div className={status ? 'profileDropdown border24 active' : 'profileDropdown border24'}>
        <div className="profileDropdown-myProfile">
            <Link className='f18 white border16' to={'/profile'} onClick={() => setStatus(false)}>
                {lang ? profileDropdown[lang].myProfileBtn : ''}
            </Link>
        </div>
        <div className="profileDropdown-logout border16">
            <span className='f18 green800'>
                {lang ? profileDropdown[lang].logoutBtn : ''}
            </span>
        </div>
    </div>
  )
}
