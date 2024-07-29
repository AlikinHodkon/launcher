import { createAction, createReducer } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";

export const login = createAction("auth/login");
export const registration = createAction("auth/registration");
export const logout = createAction("auth/logout");

export const authReducer = createReducer({isAuth: localStorage.getItem('token') ? true : false, email: localStorage.getItem('email')}, builder => {
    builder.addCase(login, (state, action) => {
        AuthService.login(action.payload.email, action.payload.password);
        state.email = action.payload.email;
        localStorage.setItem('email', state.email);
        state.isAuth = true;
    }).addCase(registration, (state, action) => {
        AuthService.registration(action.payload.email, action.payload.password);
        state.email = action.payload.email;
        localStorage.setItem('email', state.email);
        state.isAuth = true;
    }).addCase(logout, (state, action) => {
        AuthService.logout();
        state.isAuth = false;
        localStorage.removeItem('email');
    })
})

export const selectAuth = (state) => state.auth;