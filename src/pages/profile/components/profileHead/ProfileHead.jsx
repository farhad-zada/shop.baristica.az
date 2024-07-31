import React, { useEffect, useState } from 'react'
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
                            <div className="profileHead_stat border16">
                                <p className='f14 gray600'>{lang ? head[lang].stats.ordersCompleted : ''}</p>
                                <span className='f24 green800'>{user?.statistics?.ordersCompleted ? user.statistics.ordersCompleted : '0'}</span>
                            </div>

                            <div className="profileHead_stat border16">
                                <p className='f14 gray600'>{lang ? head[lang].stats.inWebsite : '0'}</p>
                                <span className='f24 green800'>{user?.statistics?.inWebsite ? user.statistics.inWebsite : '0'} days</span>
                            </div>

                            <div className="profileHead_stat border16">
                                <p className='f14 gray600'>{lang ? head[lang].stats.myDiscount : ''}</p>
                                <span className='f24 green800'>{user?.statistics?.myDiscount ? user.statistics.myDiscount : '0'} %</span>
                            </div>

                            <div className="profileHead_stat border16">
                                <p className='f14 gray600'>{lang ? head[lang].stats.totalSpent : ''}</p>
                                <span className='f24 green800'>{user?.statistics?.totalSpent ? +user.statistics.totalSpent / 100 : '0'} AZN</span>
                            </div>

                            <div className="profileHead_stat border16">
                                <p className='f14 gray600'>{lang ? head[lang].stats.savedMoney : ''}</p>
                                <span className='f24 green800'>{user?.statistics?.savedMoney ? +user.statistics.savedMoney / 100 : '0'} AZN</span>
                            </div>

                            <div className="profileHead_stat border16">
                                <p className='f14 gray600'>{lang ? head[lang].stats.weight : ''}</p>
                                <span className='f24 green800'>{user?.statistics?.weight ? user.statistics.weight : '0'} kg</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHead