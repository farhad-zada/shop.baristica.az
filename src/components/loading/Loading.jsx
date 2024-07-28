import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './loading.css'
import LoadingGif from '../../assets/images/loading.gif'

import pageText from '../../content/PagesText.json'

function Loading({  status }) {
    const { lang } = useSelector((state) => state.baristica);
    
    const {loading} = pageText

    // const scrollToTopAfterLoading = () => {
    //     window.scroll(0, 0);
    // }

    // useEffect(() => {
    //     if (status == true) {
    //         scrollToTopAfterLoading();
    //     }
    // })

    return (
        <div className={status ? "modal active" : 'modal'}>
            <div className="column g8 loading">
                <img src={LoadingGif} alt="" />
                <p>{lang ? loading[lang].text : ''}</p>
            </div>
        </div>
    );
}

export default Loading;
