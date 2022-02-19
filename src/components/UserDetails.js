import React from "react";
import "./userdetails.css";

const UserDetails = (props) => {
  return props.trigger ? (
    <div className="user-details-popup">
      <div className="user-details-popup-inner">
        <button
          className="close"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default UserDetails;
