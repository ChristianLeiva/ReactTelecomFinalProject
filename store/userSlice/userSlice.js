import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUpdating: null,
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
      console.log(payload)
      if (!payload) return;

      const { username, token, _id} = payload;
      state.user = {
         isActive: true,
        username,
        _id
      }
      return state;
    },
    onLogout: (state) => {
      state.user ={
        isActive:  false,
        ...initialState.user
      }
      return state
    },
  },
});

export const { onLogin, onLogout } = userSlice.actions;
