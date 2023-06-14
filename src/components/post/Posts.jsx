import "./Posts.css";
import { useState, useEffect } from "react";
import { fetchPosts } from "../../API";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);
  return (
    <>
      
    </>
  );
}
