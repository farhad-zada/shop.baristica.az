import React, { useState } from 'react'
import { useSelector } from "react-redux";
import PagesText from "../../../../content/PagesText.json";
import "./blogsBanner.css"

const { blogs } = PagesText;
const { head } = blogs;

const BlogsBanner = () => {
    const { lang } = useSelector((state) => state.baristica);
    const [activeTab, setActiveTab] = useState(lang ? head[lang].tabs[0].link : '');

    const handleTabClick = (link) => {
        setActiveTab(link);
    };

    return (
        <div className='blogsBanner'>
            <div className="container">
                <div className="blogsBanner-nav flex a-center">
                    <p className='gray600'>Baristica /</p>
                    <p className='gray600'>&nbsp;{head[lang].nav}</p>
                </div>
                <div className='blogsBanner-title'><h1 className='green800 f72'>{lang ? head[lang].title : ''}</h1></div>
                <div className='blogsBanner-tabs flex a-center'>
                    {lang &&  head[lang].tabs?.map((tab) => (
                        <div className={`blogsBanner-tab gray400 f20 ${activeTab === tab.link ? 'activeTab' : ''}`} id={tab.link}
                            onClick={() => handleTabClick(tab.link)}>{tab.title}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogsBanner