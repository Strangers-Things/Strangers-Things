import React, { useState } from "react";
import { createPost } from "../../API";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  async function submit(event) {
    event.preventDefault();

    try {
      let result = await createPost(
        localStorage.getItem("token"),
        title,
        description,
        price,
        location,
        willDeliver
      );
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Create a Post</legend>

          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            placeholder="Title Here"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows={"5"}
            cols={"50"}
            placeholder="Enter Description Here"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>

          <label htmlFor="price">Price:</label>
          <input
            name="price"
            type="number"
            placeholder="$$$"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>

          <label htmlFor="location">Location:</label>
          <input
            name="location"
            type="text"
            placeholder="Location Here"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          ></input>

          <button type="submit">Create</button>
        </fieldset>
      </form>
    </div>
  );
}
