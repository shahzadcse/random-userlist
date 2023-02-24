import { useContext } from "react";
import UserItem from "./UserItem";
import UserContext from "../context/UserContext";
import Pagination from "./Pagination";
const UserList = (props) => {
  //grab data from global context
  const { users } = useContext(UserContext);
  //console.log(props);
  return (
    <div>
      <div className="container">
        <div className="list-wrapper">
          <ul className="list">
            {users !== null ? (
              users.map((user, index) => {
                return (
                  <li className="list-item" key={index}>
                    <UserItem user={user} />
                  </li>
                );
              })
            ) : (
              <p> Loading....</p>
            )}
          </ul>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default UserList;
