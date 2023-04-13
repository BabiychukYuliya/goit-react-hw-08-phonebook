import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operationsAuth";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
//   isRefreshing: false,
};

const authSlice = createSlice({
name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(register.pending, state => {
        state.isLoading = true;
      })
  }
})

export const authReducer = authSlice.reducer;