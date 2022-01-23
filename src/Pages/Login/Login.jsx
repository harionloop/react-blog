import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Enter your email..." id="email" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button className="login-butt">Login</button>
      </form>
      <button className="login-register-butt">
        {" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
