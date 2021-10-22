import { createSlice } from "@reduxjs/toolkit";
import {httpRequest} from "./middleware/restMiddleware";

const slice = createSlice({
    name: "userSlice",
    initialState: {
        isLoading: false,
        error: null,
        login: null,
        isAuth: false
    },
    reducers: {
        accessProfile: (state, { payload }) => {
            state.login = payload.login;
            state.isAuth = true;
        },
        toggleLoading: (state, { payload }) => {
          state.isLoading = payload;
        },

        loginError: (state, { payload }) => {
            state.error = payload;
        },

        loginResponse: (state, { payload }) => {
            if(payload.status){
                state.error = null;
                state.login = payload.user.login;
                state.isAuth = true;
                localStorage.setItem("token", payload.user.login);
            }
        },
        logout: (state, {payload}) =>{
            localStorage.removeItem("token");
            state.isAuth = false;
            state.login = null;
        }
    }
});

export const { loginResponse, loginError, toggleLoading, accessProfile, logout } = slice.actions;

export default slice.reducer;

export const login = (data) => {
    return httpRequest({
        url: '/user',
        method: 'POST',
        data,
        onLoading: toggleLoading.type,
        onSuccess: loginResponse.type,
        onError: loginError.type,
    });
};
