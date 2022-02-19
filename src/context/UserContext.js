import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export default UserContext;

const url = "https://randomuser.me/api/?results=10";

export const UserProvider = (props) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  //fetch Data
  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch(url);
      response = await response.json();
      setUsers(response.results);
      setLoading(true);
    }
    try {
      fetchAPI();
    } catch (error) {
      setLoading(false);
    }
  }, []);
  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};
