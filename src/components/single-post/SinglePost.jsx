import './SinglePost.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../../API";

export default function SinglePost({ posts, setPosts }) {
  let { id } = useParams();
  let selectedPost = posts.find((el) => {
    if (el._id == id) {
      console.log(el);
      return el;
    }
  });
  console.log(selectedPost);
  return (
    <div>
      <h1>{selectedPost.title}</h1>
      <h2>
        User: <br />
        {selectedPost.author.username}
      </h2>
      <h2>
        Description: <br />
        {selectedPost.description}
      </h2>
      <h2>
        Delivery: <br />
        {selectedPost.willDeliver ? <h2>Yes</h2> : <h2>No</h2>}
      </h2>
      <h2>
        Price: <br />
        {selectedPost.price}
      </h2>
    </div>
  );
}
