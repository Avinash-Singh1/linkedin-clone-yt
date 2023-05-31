import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
      user: null,
    },
  
  reducers: {
  
    login: (state,action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user =null;
    },   
  },
});

export const { login, logout } = userSlice.actions;
// seelctors allow us to pull info
export const selectUser = (state) => state.user;

export default userSlice.reducer;
