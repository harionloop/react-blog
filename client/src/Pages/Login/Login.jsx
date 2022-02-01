import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../Context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED" });
      console.log(err);
    }
  };

  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          ref={userRef}
          type="username"
          placeholder="Enter your username..."
          id="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button className="login-butt" type="submit" disabled={isFetching}>
          Login
        </button>
        {isFetching && <span>Something went wrong!!!</span>}
      </form>
      <button className="login-register-butt">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
