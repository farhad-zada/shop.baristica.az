import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json';
import { Link } from 'react-router-dom';
import { CirclePlus } from '../../../../../../assets/images/icons/icons';

const { profileInner } = PagesText;
const { body } = profileInner;

const   FirstAddress = ({setNewAddress}) => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='firstAddress' onClick={() => setNewAddress(true)}>
      <h1 className='f36 green800'>{lang ? body[lang].address.title : ''}</h1>
      <div className='firstAddress_link'>
        <Link className="profileAddress border20 flex column j-between">
            <h4 className='f24 green800'>{lang ? body[lang].address.firstAddress : ''}</h4>
            {CirclePlus}
        </Link>
      </div>
    </div>
  )
}

export default FirstAddress