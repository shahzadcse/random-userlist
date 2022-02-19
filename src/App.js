import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UserContext from "./context/UserContext";
import "./App.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import UserItem from "./components/UserItem";
import { UserProvider } from "./context/UserContext";

function App() {
  // Initialize state

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <h1>Random User List</h1>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/details" element={<UserItem />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
