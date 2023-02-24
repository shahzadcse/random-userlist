import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import UserContext from "./context/UserContext";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  // get context of users
  const users = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <h1>Random User List</h1>
          {users && <UserList users={users} />}
          <Routes>
            <Route path="/" element={<UserList users={users} />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
