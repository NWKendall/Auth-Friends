import React from 'react'

const Friend = ({ friend }) => {

  const { name, age, email } = friend;

  return (
    <div style={{ border: "1px solid black"}}>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{email}</p>
    </div>
  )
}


export default Friend

