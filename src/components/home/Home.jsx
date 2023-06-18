import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ loggedIn }) {
  return (
    <>
      <div className="home-container">
        <h1 className="title">STRANGER'S THINGS</h1>
        {loggedIn ? (
          <div className="home-buttons-container">
            <Link to="/posts">
              <button className="home-buttons">Continue to Posts</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="home-buttons-container">
              <Link to="/login">
                <button className="home-buttons">Login</button>
              </Link>
              <Link to="/register">
                <button className="home-buttons">Register</button>
              </Link>
            </div>
            <Link to="/posts">
              <h2 className="guest-button">Continue as Guest</h2>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
