import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import PagesText from "../../../../content/PagesText.json";
import "./profileBody.css"

const { profile } = PagesText;
const { body } = profile;

const ProfileBody = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='profileBody'>
        <div className='container'>
            <div className='profileBody-links'>
                {lang && body[lang].links.map((link) => (
                    <Link className='profileBody-link flex column j-center a-center border36' to={link.link}>
                        <img src={link.icon} alt="" /> 
                        <h5 className='f20 green800'>{link.title}</h5>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProfileBody