import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from "../../../../content/PagesText.json";
import BlogCard from "../../../../components/cards/blogCard/BlogCard"
import { Link } from 'react-router-dom';
import "../../blogs.css";

const { blogs } = PagesText;
const { body } = blogs;

const BlogsReceipts = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='blogs'>
        <div className='container'>
            <div className='blogs-top flex j-between a-center'>
                <div className='blogs-title f30 green800'>{body[lang]?.blogsReceipts?.title}</div>
                <Link className='blogs-link f18 green800' to={body[lang]?.blogsReceipts?.link}>{body[lang]?.blogsReceipts?.btn}</Link>
            </div>
            <div className='blogs-bottom flex a-center'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    </div>
  )
}

export default BlogsReceipts