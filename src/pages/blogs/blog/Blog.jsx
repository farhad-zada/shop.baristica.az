import React from 'react'
import BlogHead from './components/BlogHead'
import BlogInfo from './components/BlogInfo'
import "./blog.css"
import HomeBlogs from '../../home/components/homeBlogs/HomeBlogs'
import BlogComments from './components/BlogComments'

const Blog = () => {
  return (
    <div>
        <BlogHead/>
        <BlogInfo/>
        <HomeBlogs/>
        <BlogComments/>
    </div>
  )
}

export default Blog