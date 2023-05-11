import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginUserInput, RegisterUserInput, User } from "./types";
import { request } from "../../api/api";
import { CURRENT_USER_API, LOGIN_API, REGISTER_API } from "../../utilities/string_constants";

export const loginUser = createAsyncThunk<User, LoginUserInput>(
  "loginUser",
  async (user, thunkAPI) => {
    try {
      return await request.post(LOGIN_API, user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const registerUser = createAsyncThunk<User, RegisterUserInput>(
  "registerUser",
  async (user, thunkAPI) => {
    try {
      return await request.post(REGISTER_API, {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.userName,
        email: user.email,
        password: user.password,
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<User>(
  "fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      return await request.get(CURRENT_USER_API);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
);