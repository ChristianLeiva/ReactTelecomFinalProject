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
    navigate("home", {
      replace: true
    })
  };

  const handleRegister = () =>{
    return navigate('/register')
    
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white px-3">
        <div className="container-fluid">
          <div>
          <i class="bi bi-house me-2"></i>
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
              <>
              <i class="bi bi-newspaper me-2"></i>
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
              </>
            ) : (
              " "
            )}
          </div>

          {isActive ? (
            <div>
              <i class="bi bi-person"></i>
              <Link
                to='/userPage'
                className="mx-2 fw-bold"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bolder",
                  fontSize: "17px"
                }}
              >
                {username}
              </Link>
              <button className="btn btn-danger" onClick={isLogout}>
                Logout
                <i className="ms-2 bi bi-box-arrow-right"></i>
              </button>
            </div>
          ) : (
            <div>
              <span className="mx-2 fw-semibold"> {""}</span>
              <button className="btn btn-success" onClick={isLogin}>
                Login
              </button>{" "}
              <button className="btn btn-success" onClick={handleRegister}>Register</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
