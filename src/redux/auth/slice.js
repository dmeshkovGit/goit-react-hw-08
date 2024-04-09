import { toast } from "react-hot-toast";
import { getUser, logIn, logOut, refreshUser, register } from "./operations";
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
  isRefreshing: null,
  },
  extraReducers: (builder) => 
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`User ${action.payload.user.name} registered successfully`)
      })
      .addCase(register.rejected, () => {
        toast.error(`Something went wrong, try again`)
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
      .addCase(logIn.rejected, () => {
        toast.error(`Something went wrong, try again`)
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, () => {
        toast.error(`Something went wrong, try to reload the page`)
      })
})




export default slice.reducer;