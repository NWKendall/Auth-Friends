import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const Login = props => {

  const [loginForm, setLoginForm] = useState({
      username: "",
      password: ""
  });

  const handleChanges = e => {
    setLoginForm({
      ...loginForm,      
      [e.target.name]: e.target.value
      })      
    
  };

  const handleLogin = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", loginForm)
      .then(res => {
        console.log(`this is from login`, res)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected")
      })
      .catch(err => {
        console.log(`this is failed login`, err)
      })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={loginForm.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleChanges}
        />
        <button onSubmit={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login;

