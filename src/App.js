import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/Logout";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <nav>
        <h2 id="title">Friends Database</h2>
        <div className="links">
          <Link className="link" to="/login">
            Login.
          </Link>
          <Link className="link" to="/friends">
            FriendsList.
          </Link>
          <Link className="link" to="/friends/add">
            Add Friend.
          </Link>
          <Link className="link" to="/logout">
            Logout.
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriends />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
