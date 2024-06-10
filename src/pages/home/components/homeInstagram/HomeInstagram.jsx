import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PagesText from "../../../../content/PagesText.json";
import PostImg from "../../../../assets/images/post.png"
import "./homeInstagram.css"

const { home } = PagesText;
const { body } = home;

const HomeInstagram = () => {
  const { lang } = useSelector((state) => state.baristica);
  console.log(body, 'body')
  return (
    <div className='homeInstagram'>
        <div className='container'>
            <div className='homeInstagram-top flex a-center j-between'>
                <h6 className='f30 white'>#baristicashop</h6>
                <Link className='homeInstagram-link white f18' to={body[lang]?.instagram_btn?.link}>{body[lang]?.instagram_btn?.text}</Link>
            </div>
            <div className='homeInstagram-bottom flex a-center'>
                <div className='homeInstagram-post'>
                    <img className='border24' src={PostImg} alt="" />
                </div>
                <div className='homeInstagram-post'>
                    <img className='border24' src={PostImg} alt="" />
                </div>
                <div className='homeInstagram-post'>
                    <img className='border24' src={PostImg} alt="" />
                </div>
                <div className='homeInstagram-post'>
                    <img className='border24' src={PostImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomeInstagram;
