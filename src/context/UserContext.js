import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [url, setUrl] = useState(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc${page}`
  );

  const fetchAPI = async () => {
    let response = await fetch(url);
    response = await response.json();
    setIsLoading(true);
    setUsers(response.results);
    setTotalPages(response.info.results);
  };

  //fetch Data from api
  useEffect(() => {
    try {
      fetchAPI();
    } catch (error) {
      setIsLoading(false);
    }
  }, [url]);

  return (
    <>
      <UserContext.Provider
        value={{
          users,
          isLoading,
          page,
          totalPages,
          setPage,
          setUrl,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  );
};
export default UserContext;
