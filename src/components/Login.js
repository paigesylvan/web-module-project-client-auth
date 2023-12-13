import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", cred)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/friends");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="login">
      <h2>Login.</h2>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={handleChange} />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <button id="login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
