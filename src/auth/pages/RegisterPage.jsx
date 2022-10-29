import React from 'react'
import { useForm } from './../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { createUserFromDb } from '../../../services/userServices';
import Swal from 'sweetalert2'

export const RegisterPage = () => {

  const {
    onInputChange,
    onResetForm,
    formState,
    name,
    username,
    email,
    password,
  } = useForm({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onFormSubmit = async(e) => {
    e.preventDefault();
    if (
      username.length <= 1 ||
      name.length <= 1 ||
      email.length <= 1 ||
      password.length <= 1
    ) return;
      const result =await createUserFromDb(formState)
      console.log(result)
      if(result.code === "bad request"){
        Swal.fire({
          title: 'Error!',
          text: '',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        onResetForm()
      }else{
        Swal.fire({
          title: 'User created succefuly!',
          text: '',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate("/login", {
          replace: false,
        });
      }
  };

  const onCancel = () =>{
    navigate("/home", {
      replace:false
    })

  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100 bg-info">
        <div className="bg-white p-5 w-25">
          <h1 className="text-center fw-bold">Register</h1>
          <hr />
          <form action="" onSubmit={onFormSubmit}>
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onInputChange}
              required
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
              required
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              required
            />

            <input
              className="form-control mb-2"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              required
            />
            <div>
              <button className="btn btn-primary w-100">Register</button>
              
              <button className="btn btn-danger w-100 mt-2" onClick={onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

