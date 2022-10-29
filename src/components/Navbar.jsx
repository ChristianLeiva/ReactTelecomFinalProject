import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../../store/userSlice/userSlice";

export const Navbar = () => {
  const { isActive, username } = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = () => {
    dispatch(onLogin());
    navigate("/login", {
      replace: true,
    });
  };

  const isLogout = () => {
    dispatch(onLogout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white px-3">
        <div className="container-fluid">
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bolder",
              }}
              className="me-5"
            >
              Home
            </Link>

            {isActive ? (
              <Link
                to="/newArticle"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bolder",
                }}
                className="me-5"
              >
                New Article
              </Link>
            ) : (
              " "
            )}
          </div>

          {isActive ? (
            <div>
              <span
                className="mx-2 fw-semibold"
                style={{
                  color: "inherit",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                {username}
              </span>
              <button className="btn btn-danger" onClick={isLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <span className="mx-2 fw-semibold"> {""}</span>
              <button className="btn btn-success" onClick={isLogin}>
                Login
              </button>{" "}
              <button className="btn btn-success">Register</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
