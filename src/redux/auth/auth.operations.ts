import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, setAuthHeader } from "../../http/http";
import { IUser } from "../../types/userTypes";
import { RootState } from "../store";
// import { selectAuthToken } from "./auth.selector";
// import { toast } from "react-toastify";

export const joinUser = createAsyncThunk(
  "auth/register",
  async (credentials: IUser, thunkApi) => {
    try {
      const { data } = await privateApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: Pick<IUser, "email" | "password">, thunkApi) => {
    try {
      const { data } = await privateApi.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state: any = thunkApi.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistToken);
      const { data } = await privateApi.get("/users/current");
      return data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);
