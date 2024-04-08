import { toast } from "react-hot-toast";
import { getUser, logIn, logOut, register } from "./operations";
import {createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  },
  extraReducers: (builder) => 
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`User ${action.payload.user.name} registered successfully`)
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`Welcome ${action.payload.user.name} !`)
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = "";
        state.token = "";
        state.isLoggedIn = false;
        toast.success(`Log out`)
      })
      .addCase(getUser.fulfilled, (state, action) => {
        console.log(action.payload);
      })
})




export default slice.reducer;