import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label htmlFor="username">username:</label>
        <input
          type="username"
          placeholder="Enter your username..."
          id="username"
        />
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
