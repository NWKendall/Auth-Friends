import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Login(props) {

  const [loginForm, setLoginForm] = useState({
    credentials: {
      username: "",
      password: ""
    }
  })

  const handleChanges = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={""}>
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



export default Login

