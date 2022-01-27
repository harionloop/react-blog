import { Link } from "react-router-dom";

import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="top-left">
        <i className="top-icon fab fa-github-square"></i>
        <i className="top-icon fab fa-linkedin"></i>
        <i className="top-icon fab fa-stack-overflow"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="top-list-item">
            {" "}
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="top-list-item">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-img"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
            alt="user"
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="top-search fas fa-search"></i>
      </div>
    </div>
  );
}
