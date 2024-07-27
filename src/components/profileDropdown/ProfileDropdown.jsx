import React from 'react'
import { Link } from "react-router-dom";

import './profileDropdown.css'
import PagesText from "../../content/PagesText.json";
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../../redux/slice';

const { header } = PagesText;
const { profileDropdown } = header;
export default function ProfileDropdown(props) {
    const { status, setStatus } = props
    const { lang, token } = useSelector((state) => state.baristica);

    const dispatch = useDispatch()

    const logout = () => {
        localStorage.setItem('baristicaToken', '')
        dispatch(setToken(''))
        dispatch(setUser(null))
        setStatus(false)
    }

    return (
        <div className={status ? 'profileDropdown border24 active' : 'profileDropdown border24'}>
            {
                token
                    ?
                    <>
                        <div className="profileDropdown-myProfile">
                            <Link className='f18 white border16' to={'/profile'} onClick={() => setStatus(false)}>
                                {lang ? profileDropdown[lang].myProfileBtn : ''}
                            </Link>
                        </div>
                        <div className="profileDropdown-logout border16" onClick={logout}>
                            <span className='f18 green800'>
                                {lang ? profileDropdown[lang].logoutBtn : ''}
                            </span>
                        </div>
                    </>
                    :
                    <div className="profileDropdown-myProfile">
                        <Link className='f18 white border16' to={'/login'} onClick={() => setStatus(false)}>
                            {lang ? profileDropdown[lang].login : ''}
                        </Link>
                    </div>
            }

        </div>
    )
}
