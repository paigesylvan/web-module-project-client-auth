import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="friendsList">
      <h2>FriendsList.</h2>
      <ul>
        {friends.map((friend, key) => {
          return (
            <li key={key}>
              {friend.name} // {friend.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
