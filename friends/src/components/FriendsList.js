import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendsList(props) {

  const [friends, setFriends] = useState({    
    friendsList: []    
  })

  useEffect(()=> {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(`this is FriendsList`, res)
        setFriends({
          friendsList: res.data
        })
      })
      .catch(err => {
        console.log(`this is error FriendsList`, err)
      })

  }, [friends])

  return (
    <div>
      kg
      {friends.friendsList.map((friend, i) => (
        <h2 index={i}>{friend.name}</h2>
      ))}
    </div>
  )
}


export default FriendsList

