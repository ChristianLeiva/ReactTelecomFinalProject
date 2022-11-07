import React, { useState } from "react";
import { useForm } from "./../../../hooks/useForm";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onLogin} from "../../../store/userSlice/userSlice";
import { loginFromDb } from "../../../services/userServices";


export const LoginPage = () => {


  const [viewMessage, setviewMessage] = useState(false)
  const {
    onInputChange, onResetForm, setFormState, formState, email, password } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onFormSubmit = async(e) => {

    e.preventDefault();
    if (email.length <= 1 || password.length <= 1) return;

    const userData = await loginFromDb(email, password)  
    
    
    if(userData.user){
      dispatch(onLogin(userData))
      navigate('/', {replace:false})
    }else{
      setviewMessage(true)
    }
    onResetForm()
  };


  const emailOnFocus=()=> setviewMessage(false)


  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="bg-white p-5 w-25">
            <h1 className="text-center fw-bold">Login</h1>
            <hr />
            <form action="" onSubmit={onFormSubmit} onFocus={emailOnFocus}>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
              />

              <input
                className="form-control mb-2"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
              {
                viewMessage  ? <p className="text-danger">User or password doesn't exist</p> : ""
              }
              <div>
                <button className="btn btn-primary w-100">Login</button>
              </div>
              <div className="d-flex gap-5 mt-2">
                <p>Don't have an account</p>
                <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};