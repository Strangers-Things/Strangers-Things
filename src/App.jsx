import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchPosts } from "./API";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";
import Posts from "./components/post/Posts";
import SinglePost from "./components/single-post/SinglePost";
// import Login from './components/login/Login'
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import CreatePost from "./components/create-post/CreatePost";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <Nav loggedIn={loggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/posts"
          element={<Posts posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/posts/:id"
          element={<SinglePost posts={posts} setPosts={setPosts} />}
        />
        {/* <Route path='/login' element = {<Login />} /> */}
        <Route
          path="/register"
          element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
