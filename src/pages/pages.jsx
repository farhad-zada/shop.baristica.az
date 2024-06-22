import React from 'react'
import Blogs from './blogs/Blogs'
import Blog from './blogs/blog/Blog'
import Home from './home/Home'
import Compare from './compare/Compare'
import Favorites from './favorites/Favorites'
import Login from './login/Login'
import Quiz from './quiz/Quiz'

export const HomePage = () => {
    return (
        <Home />
    )
}

export const BlogsPage = () => {
    return (
        <Blogs />
    )
}

export const BlogPage = () => {
    return (
        <Blog />
    )
}

export const ComparePage = () => {
    return (
        <Compare />
    )
}

export const FavoritesPage = () => {
    return (
        <Favorites />
    )
}

export const LoginPage = () => {
    return (
        <Login />
    )
}

export const QuizPage = () => {
    return (
        <Quiz />
    )
}

