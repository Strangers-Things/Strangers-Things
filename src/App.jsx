import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchPosts } from './API'
import Home from './components/home/Home'
import Nav from './components/navbar/Nav'
import Posts from './components/post/Posts'
import SinglePost from './components/single-post/SinglePost'
// import Login from './components/login/Login'
import Register from './components/register/Register'
import CreatePost from './components/create-post/CreatePost'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      setLoggedIn(true)
    }
  })
  return (
    <div>
      <Nav loggedIn = {loggedIn}/>
    

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/posts' element = {<Posts />} />
        <Route path = '/posts/:id' element = {<SinglePost />} />
        {/* <Route path='/login' element = {<Login />} /> */}
        <Route path='/register' element = {<Register loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>} />
      </Routes>
    </div>

  )
}

export default App
