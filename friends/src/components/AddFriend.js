import React, { useState } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {

  const [friend, setFriend] = useState({
    name: "",
    age: null,
    email: ""
  })

  const handleChangeS = e => {
    console.log(e)
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })   
  }

  const submitFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", friend)
      .then(res => console.log(`SUBMIT FRIEND`, res))
      .catch(err => console.log(`SUBMIT FAILED`, err))
  }

  return (
    <form onSubmit={submitFriend}>
      <input 
        type="text"
        name="name"
        onChange={handleChangeS}
        value={friend.name}
      />
      <input 
        type="number"
        name="age"
        onChange={handleChangeS}
        value={friend.age}
      />
      <input 
        type="email"
        name="email"
        onChange={handleChangeS}
        value={friend.email}
      />
      <button>New Friend</button>
    </form>
  )
}

export default AddFriend
