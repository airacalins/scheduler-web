import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../../utilities/enums";
import { fetchCurrentUser, loginUser, registerUser } from "./action";
import { UsersState } from "./types";
import { stat } from "fs";

export const initialState: UsersState = {
  isFetching: false,
  currentUser: undefined
}

export const userSlice = createSlice({
  name: SLICE_NAME.AUTH,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login user
    builder.addCase(
      loginUser.pending,
      (state, _) => {
        state.isFetching = true;
      }
    );
    builder.addCase(
      loginUser.fulfilled,
      (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    );
    builder.addCase(
      loginUser.rejected,
      (state, _) => {
        state.isFetching = false;
      }
    );

    // Register user
    builder.addCase(
      registerUser.pending,
      (state, _) => {
        state.isFetching = true;
      }
    );
    builder.addCase(
      registerUser.fulfilled,
      (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    )
    builder.addCase(
      registerUser.rejected,
      (state, _) => {
        state.isFetching = false;
      }
    );

    // Get current user
    builder.addCase(
      fetchCurrentUser.pending,
      (state, _) => {
        state.isFetching = true;
      }
    );
    builder.addCase(
      fetchCurrentUser.fulfilled,
      (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    );
    builder.addCase(
      fetchCurrentUser.rejected,
      (state, _) => {
        state.isFetching = false;
      }
    );
  }
});

export const userReducer = userSlice.reducer;