import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "../../utils/setAuthHeader";
import { clearAuthHeader } from "../../utils/clearAuthHeader";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post("/users/signup", credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post("/users/login", credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue("No token found");
  }

  setAuthHeader(persistedToken);

  try {
    const res = await axios.get("/users/current");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
