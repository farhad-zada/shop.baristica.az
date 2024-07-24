import React, { useEffect, useState } from 'react'
import './productDetailBodyLeft.css'
import { Link } from 'react-scroll'

import { Info, Kitchen, Package, Smile } from '../../../../../../assets/images/icons/icons'

export default function ProductDetailBodyLeft(props) {
    const { info } = props

    const [activeLink, setActiveLink] = useState('description');

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    useEffect(() => {
        setActiveLink('description');
    }, []);
    return (
        <nav className='productDetail-body_left'>
            <div>
                <Link
                    className={activeLink === 'description' ? 'active flex a-center g8 pointer' : ' flex a-center g8 pointer'}
                    to="description"
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    spy={true}
                    onSetActive={handleSetActive}
                >
                    {Info}
                    <span className='f18 gray400'>{info?.description}</span>
                </Link>
            </div>

            <div>
                <Link
                    className={activeLink === 'delivery' ? 'active flex a-center g8 pointer' : ' flex a-center g8 pointer'}
                    to="delivery"
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    spy={true}
                    onSetActive={handleSetActive}
                >
                    {Package}
                    <span className='f18 gray400'>{info?.delivery}</span>
                </Link>
            </div>

            <div>
                <Link
                    className={activeLink === 'guarantee' ? 'active flex a-center g8 pointer' : ' flex a-center g8 pointer'}
                    to="guarantee"
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    spy={true}
                    onSetActive={handleSetActive}
                >
                    {Smile}
                    <span className='f18 gray400'>{info?.guarantee}</span>
                </Link>
            </div>

            <div>
                <Link
                    className={activeLink === 'keeping' ? 'active flex a-center g8 pointer' : ' flex a-center g8 pointer'}
                    to="keeping"
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    spy={true}
                    onSetActive={handleSetActive}
                >
                    {Kitchen}
                    <span className='f18 gray400'>{info?.keeping}</span>
                </Link>
            </div>
        </nav>
    )
}
