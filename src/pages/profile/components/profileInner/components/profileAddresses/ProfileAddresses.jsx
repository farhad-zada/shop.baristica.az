import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json';
import { Link } from 'react-router-dom';
import { CancelColor, CancelSimple, CirclePlus } from '../../../../../../assets/images/icons/icons';

const { profileInner } = PagesText;
const { body } = profileInner;

const ProfileAddresses = ({setNewAddress}) => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='profileAddresses'>
      <h1 className='f36 green800'>{lang ? body[lang].address.title : ''}</h1>
      <div className='profileAddresses-all'>
      {lang && body[lang].address.addresses.map((elem) => (
        <div className={elem.selected ? 'profileAddress selectedAddress border20' : "profileAddress border20"}>
          <div className='flex j-between a-center'>
            <h4 className={elem.selected ? 'f24 white' : 'f24 green800'}>{elem.title}</h4>
            <button className='default_btn'>{elem.selected ? CancelSimple : CancelColor}</button>
          </div>
          <p className={elem.selected ? 'profileAddress-text white f16' : 'profileAddress-text green800 f16'}>{elem.description}</p>
          <Link className={elem.selected ? 'white f16' : 'green800 f16'}>{elem.edit}</Link>
        </div>
      ))}
      <Link className="profileAddress border20 flex column j-between" onClick={(e) => {e.preventDefault();setNewAddress(true)}}>
        <h4 className='f24 green800 pb48'>{lang ? body[lang].address.firstAddress : ''}</h4>
        {CirclePlus}
      </Link>
      </div>
    </div>
  )
}

export default ProfileAddresses