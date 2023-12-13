import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriends = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", form)
      .then(() => {
        navigate("/friends");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="addFriend">
      <h2>AddFriends.</h2>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Friend Name</label>
          <input type="text" id="name" onChange={handleChange} />
        </div>{" "}
        <div className="email">
          <label htmlFor="email">Friend Email</label>
          <input type="text" id="email" onChange={handleChange} />
        </div>
        <button id="addFriend" type="submit">
          Add Friend
        </button>
      </form>
    </div>
  );
};

export default AddFriends;
