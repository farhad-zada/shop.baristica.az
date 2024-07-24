import React from 'react'
import { useSelector } from 'react-redux';
import './pageHeadingLeft.css'

export default function PageHeadingLeft(props) {
    const { content } = props
    const { lang } = useSelector((state) => state.baristica);

    return (
        <div className="pageHeading-left">
            <h3 className='gray600 f16 flex a-center'>
                <span>Baristica</span>
                <span>/</span>
                <span>{lang ? content[lang]?.head?.pageName : ''}</span>
            </h3>
            <h2 className='green800 f36'>{lang ? content[lang]?.head?.pageName : ''}</h2>
        </div>
    )
}
