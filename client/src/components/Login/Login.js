import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { userLogin } from "../../JS/actions/userActions";
import Loader from "../loader/Loader";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    const userCred = { email, password };
    dispatch(userLogin(userCred));
    setEmail("");
    setPassword();
  };
  const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return loading ? (
    <Loader />
  ) : isAuth ? (
    <Navigate to="/ProfilClient" />
  ) : (
    <div className="form_div">
      {" "}
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form_login">
        <h3>Login Here</h3>
        <input
          type="email"
          placeholder="Email"
          id="username"
          className="input_login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="input_login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login_btn" onClick={login}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
