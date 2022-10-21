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
      if (!payload) return;

      const { user, token } = payload;
      //let newState = { ...state };
      state.user = {...user, isActive: true}
      // state.user = {
      //   isActive: true,
      //   name: user.name,
      //   username: user.username,
      //   email: user.email,
      //   password: user.password,
      //   userID: user._id,
      //   token,
      // }

      return state;
    },
    onLogout: (state) => {
      let newState = { ...state };
      newState.user = {
        isActive: false,
        ...initialState.user
      };
      return newState;
    },
  },
});

export const { onLogin, onLogout } = userSlice.actions;
