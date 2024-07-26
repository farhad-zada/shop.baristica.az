import React from 'react'
import { useSelector } from "react-redux";
import { CartIcon } from '../../../../assets/images/icons/icons';
import PagesText from "../../../../content/PagesText.json";
import "./profileHead.css"

const { profile } = PagesText;
const { head } = profile;

const ProfileHead = (props) => {
    const { user } = props
    const { lang } = useSelector((state) => state.baristica);
    return (
        <div className='profileHead'>
            <div className='container'>
                <div className="profileHead-section flex a-center j-between">
                    <div className='profileHead_welcome'>
                        <div className="profileHead-nav flex a-center">
                            <p className='gray600'>Baristica /</p>
                            <p className='gray600'>&nbsp;{lang ? head[lang].nav : ''}</p>
                        </div>
                        <div className='profileHead_welcome-text'>
                            <h1 className='f72 green800'>{lang ? head[lang].title : ''}, {user ? user.name : ''}</h1>
                        </div>
                    </div>
                    <div className='profileHead_stats border36'>
                        <div className='profileHead_stats-title flex a-center'>
                            <div className='profileHead_stats-icon flex border12'>{CartIcon}</div>
                            <h6 className='f30 white'>{lang ? head[lang].stats.title : ''}</h6>
                        </div>
                        <div className='profileHead_stats-grid'>
                            {lang && head[lang].stats.labels?.map((label) => (
                                <div className='profileHead_stat border16' key={label.id}>
                                    <p className='f14 gray600'>{label.label}</p>
                                    <span className='f24 green800'>{label.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHead