import { myData } from "../../API";
import { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [myPosts, setMyPosts] = useState([])
  const [myMessages, setMyMessages] = useState([])
  useEffect(() => {
    async function fetchingProfile() {
      try {
        let result = await myData(localStorage.getItem("token"));
        setProfile(result);
        setMyPosts(result.posts)
        setMyMessages(result.messages)
      } catch (error) {
        console.log(error);
      }
    }
    fetchingProfile();
  }, []);
  return (
    <div className="profile-container">
      <div>
        <h1 className="profile-username">{profile.username}</h1>

        <div className="messages">
          <h2>My Messages</h2>
          {myMessages ? (
            <div>
              {myMessages.map((e) => {
                return <p className="message">{e.content}</p>;
              })}
            </div>
          ) : (
            <h3>You have no messages</h3>
          )}
        </div>

        <div className="posts">
          <h2>My Posts</h2>
          {myPosts ? (
            <div>
              {myPosts.map((e) => {
                return <p>{e.title}</p>;
              })}
            </div>
          ) : (
            <h3>You have no posts</h3>
          )}
        </div>
        
      </div>
    </div>
  );
}
