import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {

  const [loginForm, setLoginForm] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const handleChanges = e => {
    setLoginForm({
      ...loginForm,
      credentials: {
        [e.target.name]: e.target.value
      }      
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", loginForm.credentials)
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
      <form onSubmit={() => login}>
        <input
          type="text"
          name="username"
          value={loginForm.credentials.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          value={loginForm.credentials.password}
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default withRouter(Login);

