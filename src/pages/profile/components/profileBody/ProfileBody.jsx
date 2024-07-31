import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import PagesText from "../../../../content/PagesText.json";
import "./profileBody.css"
import { setToken, setUser } from '../../../../redux/slice';

const { profile } = PagesText;
const { body } = profile;

const ProfileBody = () => {
    const { lang } = useSelector((state) => state.baristica);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutData = {
        az: {
            "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjMgMjYuNzVMMjUuMTUgMjQuNkwzMC4yNSAxOS41SDEyLjc1VjE2LjVIMzAuMTVMMjUuMDUgMTEuNEwyNy4yIDkuMjVMMzYgMTguMDVMMjcuMyAyNi43NVpNMCAzNlYwSDE3LjU1VjNIM1YzM0gxNy41NVYzNkgwWiIgZmlsbD0iIzI5NDc0QyIvPgo8L3N2Zz4K",
            "title": "Profildən Çıxış",
        },
        ru: {
            "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjMgMjYuNzVMMjUuMTUgMjQuNkwzMC4yNSAxOS41SDEyLjc1VjE2LjVIMzAuMTVMMjUuMDUgMTEuNEwyNy4yIDkuMjVMMzYgMTguMDVMMjcuMyAyNi43NVpNMCAzNlYwSDE3LjU1VjNIM1YzM0gxNy41NVYzNkgwWiIgZmlsbD0iIzI5NDc0QyIvPgo8L3N2Zz4K",
            "title": "Выйти из профиля"
        },
        en: {
            "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjMgMjYuNzVMMjUuMTUgMjQuNkwzMC4yNSAxOS41SDEyLjc1VjE2LjVIMzAuMTVMMjUuMDUgMTEuNEwyNy4yIDkuMjVMMzYgMTguMDVMMjcuMyAyNi43NVpNMCAzNlYwSDE3LjU1VjNIM1YzM0gxNy41NVYzNkgwWiIgZmlsbD0iIzI5NDc0QyIvPgo8L3N2Zz4K",
            "title": "Logout",
        }
    }

    const logout = () => {
        localStorage.setItem('baristicaToken', '')
        dispatch(setToken(''))
        dispatch(setUser(null))
        navigate('/')
    }

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
                    <span className='profileBody-link flex column j-center a-center border36 pointer' onClick={logout}>
                        <img src={lang ? logoutData[lang].icon : ''} alt="" />
                        <h5 className='f20 green800'>{lang ? logoutData[lang].title : ''}</h5>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody