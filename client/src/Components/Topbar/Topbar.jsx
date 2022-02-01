import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch("LOGOUT");
  };

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
          <li className="top-list-item" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img className="top-img" src={user.profilePic} alt="user" />
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
