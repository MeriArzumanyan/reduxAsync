import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { forGettingUsers } from "./store/slices/slices";
import { Loader } from "./Components/Loading/Loading";
import { NavLink } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(forGettingUsers());
  }, []);
  const { users, isloading } = useSelector((state) => {
    return state.users;
  });

  // console.log(users);
  return (
    <div className="container">
      {isloading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="users">
          {users.map((el) => {
            return (
              <div key={el.id} className="userInfo">
                <div className="forNames">
                  <h2>{el.name.firstname}</h2>
                  <h2>{el.name.lastname}</h2>
                </div>
                <p className="address">City: {el.address.city}</p>
                <NavLink to={"https://gmail.com"}>
                  <p>{el.email}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
