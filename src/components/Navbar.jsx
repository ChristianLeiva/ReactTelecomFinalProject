import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../../store/userSlice/userSlice";


export const Navbar = () => {
  const { isActive, username } = useSelector((state) => state.users.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLogin= () =>{
    console.log("saliendo del sitio");
    dispatch(onLogin())
    navigate("/login", {
      replace: true,
    });
  }

  const isLogout= () =>{
    console.log("saliendo del sitio");
    dispatch(onLogout())
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white px-3">
        <div className="container-fluid">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bolder",
            }}
          >
            Home
          </Link>

          {isActive ? (
            <div>
              <span className="mx-2 fw-semibold"> {username}</span>
              <button className="btn btn-danger" onClick={isLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <span className="mx-2 fw-semibold"> {""}</span>
              <button className="btn btn-success" onClick={isLogin}>Login</button>{' '}
              <button className="btn btn-success">Register</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
