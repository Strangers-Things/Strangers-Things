import "./Posts.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link} from 'react-router-dom'
import { fetchPosts } from "../../API";

export default function Posts() {
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
  return (
    <div>
      <h1 className="posts-header">All Posts</h1>
      <div className="posts-container">
        {posts.map((e) => {
          return (
            <div key={e._id} className="individual-posts">
              <h3 className="author">{e.author.username}</h3>
              <h2 className="item-title">{e.title}</h2>
              <h3 className="item-price">{e.price}</h3>
              <h3 className="item-active">{e.active}</h3>
              <Link to = '/posts/:id'><button>See Details</button></Link>
            </div>
          );
        })}
      </div>
    </div>  
  );
}
