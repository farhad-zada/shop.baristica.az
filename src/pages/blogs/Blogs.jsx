import React from 'react'
import BlogsBanner from './components/blogsBanner/BlogsBanner'
import BlogsPreparation from './components/blogsPreparation/BlogsPreparation'
import "./blogs.css"
import BlogsReceipts from './components/blogsReceipts/BlogsReceipts'
import BlogsRoasting from './components/blogsRoasting/BlogsRoasting'
import BlogsMain from './components/blogsMain/BlogsMain'

const Blogs = () => {
  return (
    <div>
      <BlogsBanner/>
      <BlogsMain/>
      <BlogsPreparation/>
      <BlogsReceipts/>
      <BlogsRoasting/>
    </div>
  )
}

export default Blogs