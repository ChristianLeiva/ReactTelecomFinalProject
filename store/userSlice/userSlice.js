import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isActive: false,
    name: "",
    username: "",
    email: "",
    password: "",
    userID: "",
    token: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onLogin: (state, { payload }) => {
      if (!payload) return;

      
      const { username, name, email, password, token, _id} = payload.user;
      localStorage.setItem('user', JSON.stringify(payload));
      state.user = {
         isActive: true,
        username,
        _id, 
        name,
        email, 
        password
      }
      return state;
    },
    onLogout: (state) => {
      state.user ={
        isActive:  false,
        ...initialState.user
      }
      localStorage.setItem('user', '');
      return state
    },
  },
});

export const { onLogin, onLogout } = userSlice.actions;
