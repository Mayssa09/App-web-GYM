import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../JS/actions/userActions";
import Loader from "../loader/Loader";
import "./register.css";

const Register = () => {
  const [first_Name, setFirst_Name] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [password, setPassword] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const loading = useSelector((state) => state.userReducer.loading);

  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    const newUser = { first_Name, last_Name, password, email, phone };
    dispatch(userRegister(newUser));
    console.log(newUser);
    setFirst_Name("");
    setLast_Name("");
    setPassword("");
    setEmail("");
    setPhone("");
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="form_div">
      {" "}
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form_register">
        <h3>Register Here</h3>
        <input
          type="email"
          placeholder="First Name"
          id="username"
          className="input_login"
          value={first_Name}
          onChange={(e) => setFirst_Name(e.target.value)}
        />
        <input
          type="email"
          placeholder="Last Name"
          id="username"
          className="input_login"
          value={last_Name}
          onChange={(e) => setLast_Name(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          id="username"
          className="input_login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Phone Number Last Name"
          id="username"
          className="input_login"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="input_login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="register_btn" onClick={register}>
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Register;
