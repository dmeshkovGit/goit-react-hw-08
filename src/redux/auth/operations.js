import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const setAuthHeader = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
};

const clearAuthHeader = () => {
axios.defaults.headers.common["Authorization"] = ""
}

export const register = createAsyncThunk(
    "auth/register",
    async (userInfo, thunkApi) => {
        try {
            const response = await axios.post("/users/signup", userInfo);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (logInInfo, thunkApi) => {
        try {
            const response = await axios.post("/users/login", logInInfo);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logOut",
    async (_, thunkApi) => {
        try {
            const response = await axios.post("/users/logout");
            clearAuthHeader();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const getUser = createAsyncThunk(
    "auth/getUser",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
        const reduxState = thunkApi.getState();
        const savedToken = reduxState.auth.token
        setAuthHeader(savedToken);
          try {
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }, 
    {
        condition: (_, { getState }) => {
            const reduxState = getState();
            const savedToken = reduxState.auth.token;
            return savedToken !== null;
        }
    }
)