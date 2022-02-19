import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FcFeedback, FcCellPhone, FcHome } from "react-icons/fc";
import { FaBirthdayCake } from "react-icons/fa";
import "./userlist.css";
import UserDetails from "./UserDetails";
import UserContext from "../context/UserContext";

const UserItem = (props) => {
  const users = useContext(UserContext);
  console.log(users);
  const { name, username, email, dob, address, phone, image } = props;

  const [trigger, setTrigger] = useState(false);
  return (
    <div className="container">
      <div className="list-wrapper">
        <ul className="list">
          <li className="list-item">
            <div className="list-item-wrapper">
              <img src={image} alt={name.first} className="list-item-image" />
            </div>
            <div className="list-item-content">
              <h4>
                <Link
                  to="/"
                  onClick={() => {
                    setTrigger(true);
                  }}
                >
                  {" "}
                  {name.first} {name.last}{" "}
                </Link>
              </h4>
              <em>@{username}</em>
              <hr />
              <p>
                <FcFeedback /> {email}
              </p>
              <p>
                <FaBirthdayCake />{" "}
                {dob.date.slice(0, 10).split("-").reverse().join("/")}
              </p>
              <p>
                <FcCellPhone /> {phone.split("-").join("")}
              </p>
              <p>
                <FcHome />{" "}
                {`${address.street.number} , 
                ${address.street.name}, ${address.country} 
                ${address.postcode}`}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <UserDetails trigger={trigger} setTrigger={setTrigger}>
        <div className="list-item-content">
          <h4
            onClick={() => {
              setTrigger(true);
            }}
          >
            {name.first} {name.last}{" "}
          </h4>
          <em>@{username}</em>
          <hr />
          <p>
            <FcFeedback /> {email}
          </p>
          <p>
            <FaBirthdayCake />{" "}
            {dob.date.slice(0, 10).split("-").reverse().join("/")}
          </p>
          <p>
            <FcCellPhone /> {phone.split("-").join("")}
          </p>
          <p>
            <FcHome />{" "}
            {`${address.street.number} , 
                ${address.street.name}, ${address.country} 
                ${address.postcode}`}
          </p>
        </div>
      </UserDetails>
    </div>
  );
};

export default UserItem;
