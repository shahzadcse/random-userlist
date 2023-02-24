import { useState } from "react";

import { Link } from "react-router-dom";
import { FcFeedback, FcCellPhone, FcHome } from "react-icons/fc";
import { FaBirthdayCake } from "react-icons/fa";
import UserPic from "./UserPic";
import PopUp from "./PopUp";
import "./userlist.css";
import "./PopUp.css";

const UserCard = (props) => {
  const [showPic, setShowPic] = useState(false);

  const {
    name,
    login,
    email,
    dob,
    location,
    phone,
    picture,
    gender,
    registered,
  } = props.user;

  return (
    <>
      <div className="list-item-wrapper">
        <Link
          to="/"
          onClick={() => {
            setShowPic(true);
          }}
        >
          <img
            src={picture.medium}
            alt={name.first}
            className="list-item-image"
          />
        </Link>
      </div>
      <div className="list-item-content">
        <h4>
          <Link
            to="/"
            onClick={() => {
              props.setTrigger(true);
            }}
          >
            {" "}
            {name.first} {name.last}{" "}
          </Link>
        </h4>
        <em>@{login.username}</em>{" "}
        {props.details ? (
          <em>
            {" "}
            | {gender.toUpperCase()} | Age : {dob.age} Years
          </em>
        ) : (
          ""
        )}
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
          {`${location?.street?.number} , 
                ${location?.street?.name}, ${location.country} 
                ${location.postcode}`}
        </p>
        {props.details ? <p> Member Since {registered.age} Years</p> : ""}
      </div>

      <PopUp trigger={showPic} setTrigger={setShowPic}>
        <UserPic picture={picture.large} name={name} />
      </PopUp>
    </>
  );
};

export default UserCard;
