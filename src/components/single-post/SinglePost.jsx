import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPosts } from '../../API';

export default function SinglePost(){

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

    let { id } = useParams()
    return (
        <h1>hello world</h1>
    )
}