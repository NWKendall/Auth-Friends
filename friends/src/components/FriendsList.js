import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from './AddFriend';


const FriendsList = () => {

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

  }, [])

  return (
    <div>
      <AddFriend />
      <h2>Your FriendsList</h2>
      {friends.friendsList.map(friend => (
        <Friend 
          index={friend.id} 
          friend={friend}
        />
      ))}
    </div>
  )
}


export default FriendsList

