import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PagesText from '../../../../../../content/PagesText.json'
const { profileInner } = PagesText;
const { body } = profileInner;

const FirstOrder = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='firstOrder'>
        <div className='container'>
            <h1 className='firstOrder-title green800 f36'>
                {lang ? body[lang].orders.firstOrder.title : ''}
            </h1>
            <Link className='firstOrder-link f18 defaultBtn border16'>
                {lang ? body[lang].orders.firstOrder.btn : ''}
            </Link>
        </div>
    </div>
  )
}

export default FirstOrder