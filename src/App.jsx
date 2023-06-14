import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchPosts } from './API'
import Home from './components/home/Home'
import Nav from './components/navbar/Nav'
import Posts from './components/post/Posts'
// import Login from './components/login/Login'
import Register from './components/register/Register'
import CreatePost from './components/create-post/CreatePost'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <Nav loggedIn = {loggedIn}/>
    

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/posts' element = {<Posts />} />
        <Route path = '/create-post' element = {<CreatePost />} />
        {/* <Route path='/login' element = {<Login />} /> */}
        <Route path='/register' element = {<Register loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>} />
      </Routes>
    </div>

  )
}

export default App
