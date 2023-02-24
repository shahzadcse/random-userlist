import { useState } from "react";

import UserCard from "./UserCard";

import PopUp from "./PopUp";

import "./userlist.css";

const UserItem = (props) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <UserCard user={props.user} setTrigger={setTrigger} />
      <PopUp trigger={trigger} setTrigger={setTrigger}>
        <UserCard user={props.user} details={true} />
      </PopUp>
    </>
  );
};

export default UserItem;
