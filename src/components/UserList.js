import React, { useContext } from "react";

import UserItem from "./UserItem";
import UserContext from "../context/UserContext";
const UserList = (props) => {
  //grab data from global context
  const users = useContext(UserContext);
  console.log(users);
  return (
    <div>
      {users !== null ? (
        users.map((user, index) => {
          return (
            <>
              <UserItem
                name={user.name}
                username={user.login.username}
                email={user.email}
                dob={user.dob}
                address={user.location}
                phone={user.phone}
                image={user.picture.medium}
                key={index}
              />
            </>
          );
        })
      ) : (
        <p>Loading .... </p>
      )}
    </div>
  );
};

export default UserList;
