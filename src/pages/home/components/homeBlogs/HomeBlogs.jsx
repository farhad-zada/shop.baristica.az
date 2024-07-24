import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogCard from '../../../../components/cards/blogCard/BlogCard';
import PagesText from "../../../../content/PagesText.json";
import "./homeBlogs.css"

const { home } = PagesText;
const { body } = home;

const HomeBlogs = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='homeBlogs'>
        <div className='container'>
            <div className='homeBlogs-top flex j-between a-center'>
                <div className='homeBlogs-title f30 green800'>{lang ? body[lang]?.interesting?.title : ''}</div>
                <Link className='homeBlogs-link f18 green800' to={lang ? body[lang]?.interesting?.link : ''}>{lang ? body[lang]?.interesting?.btn : ''}</Link>
            </div>
            <div className='homeBlogs-bottom flex a-center'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    </div>
  );
};

export default HomeBlogs;
