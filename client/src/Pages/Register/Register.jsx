import { Link } from "react-router-dom";
import "./register.css";

export default function Login() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="Enter your username..." id="username" />
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Enter your email..." id="email" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password..."
        />
        <button className="register-butt">Register</button>
      </form>
      <button className="register-login-butt">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
