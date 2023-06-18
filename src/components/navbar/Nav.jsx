import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ loggedIn, setLoggedIn }) {
  return (
    <div className="nav-container">
      <div className="nav-buttons">
        {loggedIn ? (
          <>
            <Link to="/">
              <button className="nav-single-button">Home</button>
            </Link>
            <Link to="/posts">
              <button className="nav-single-button">Posts</button>
            </Link>
            <Link to="/create-post">
              <button className="nav-single-button">Create a Post</button>
            </Link>
            <Link to="/profile">
              <button className="nav-single-button">Profile</button>
            </Link>
            <button
              onClick={() => {
                setLoggedIn(false);
                localStorage.removeItem("token");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">
              <button className="nav-single-button">Home</button>
            </Link>
            <Link to="/posts">
              <button className="nav-single-button">Posts</button>
            </Link>
            <Link to="/login">
              <button className="nav-single-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="nav-single-button">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
