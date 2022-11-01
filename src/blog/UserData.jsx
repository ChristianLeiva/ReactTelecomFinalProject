import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { deleteUser, updateUser } from "../../services/userServices";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onLogout } from "../../store/userSlice/userSlice";


export const UserData = ({user}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  
  const {
    formState,
    onInputChange,
    setFormState,
    onResetform,
    name,
    username,
    email,
    password,
  } = useForm({
    name: user ? user.name : "",
    username: user ? user.username: "",
    email: user ? user.email : "",
    password: user ? user.password : "",
  });

  const handleEdit = (e) => {
    e.preventDefault();
    updateUser(user._id, formState).then(() =>{
      Swal.fire({
        title: `User Updated succefuly!`,
        text: '',
        icon: 'success',
        confirmButtonText: 'Cool'
        }).then(()=>{
        navigate(`/home`, {
            replace: false,
        });
        })
    })

  };
  const handleDelete = () => {
    Swal.fire({
      title: 'Delete User',
      text: 'Are you sure you want to delete the user?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then(async (result)=>{
      
      if (result.isConfirmed) {
        await deleteUser(user._id)
        dispatch(onLogout())
        Swal.fire('Deleted!', '', 'success').then(()=>{
          navigate('/home')
        })
      } 
    })
  };
  return (
    <>
      <div className="container-fluid mt-2">
        <div className="bg-light p-3">
          <form action="">
            <div className="row">
              <div className="col">
                <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
              </div>
              <div className="col">
                <input
                  className="form-control mb-2 column"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              <div className="col">
                <input
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
            <button className="btn btn-warning me-2" onClick={handleEdit}><i className="bi bi-pencil"></i></button>
            <button type="button" className="btn btn-danger me-2"  onClick={handleDelete}><i className="bi bi-trash3"></i></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
