import React from 'react';
import { useNavigate } from 'react-router-dom';
import './successModal.css'

import SuccessIcon from '../../assets/images/success.png'
import CloseIcon from '../../assets/images/close.png'
import { useSelector } from 'react-redux';
export default function SuccessModal({ data, status, setStatus }) {
    const { lang } = useSelector((state) => state.baristica);

    const closeContent = {
        az: 'Bağla',
        ru: 'Закрыть',
        en: 'Close'
    }

    const navigate = useNavigate()

    const closePopup = (navigateTo) => {
        if (navigateTo === undefined) {
            setStatus(false)
        } else {
            navigate(`/${navigateTo}`)
            setStatus(false)
        }
    }

    return (
        <div className={status ? 'modal active' : 'modal'}>
            <div className="modal-content border20 sign-succes_modal">
                <h2 className="flex j-end">
                    <span className='pointer' onClick={() => closePopup(data.navigateTo)}>
                        <img src={CloseIcon} alt="" />
                    </span>
                </h2>
                <div className="flex j-center modal-content_img">
                    <img src={SuccessIcon} alt="" />
                </div>
                <p className='green800 f20 text-center'>
                    {data?.message && lang ? data?.message[lang] : ''}
                </p>
                <div className='w-100 flex j-center'>
                    <button className="white pointer f18 border16 closeBtn" type='button' onClick={() => closePopup(data.navigateTo)}>
                        {lang ? closeContent[lang] : ''}
                    </button>
                </div>
            </div>
        </div>
    );
}
