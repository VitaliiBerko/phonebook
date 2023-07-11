import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { joinUser, logIn, refreshUser } from '../auth/auth.operations';
import Notiflix from 'notiflix';
import { IUserResponse, IUserWithoutPasswor } from '../../types/userTypes';

interface IAuthState {
    user : IUserWithoutPasswor;
    token: string | null;
    isLoading: boolean;
    error: unknown;
    isRefreshing: boolean;
    isLoggedIn: boolean

    
}

const initialState : IAuthState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {logOut: ()=> initialState },

  extraReducers: builder => {
    builder
      .addCase(joinUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(joinUser.fulfilled, (state, { payload } : PayloadAction<IUserResponse>) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.success('You are joined to us!')
      })
      .addCase(joinUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        Notiflix.Notify.failure("Something went wrong. Please, try again");
      })
      .addCase(logIn.pending, state=> {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, {payload})=>{
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.success('You are success logged in!')
      })
      .addCase(logIn.rejected, (state, {payload }) => {
        state.isLoading = false;
        state.error = payload;
        Notiflix.Notify.failure("Ooops... Innocent password or email");
      } )
      .addCase(refreshUser.pending, state=>{state.isLoading=true})
      .addCase(refreshUser.fulfilled, (state, {payload})=>{
        state.isLoading=false;
        state.user = payload;
        state.isLoggedIn=true;
        state.isRefreshing= false;
      })
      .addCase(refreshUser.rejected, (state, {payload})=>{
        state.isLoading= false;
        state.error=payload;
        state.isRefreshing= false;
      })
      ;
  },
});

export const {logOut} = authSlice.actions;

export const authReducer = persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: ['token', 'user']
  },
  authSlice.reducer
);

Notiflix.Notify.init({
  position: 'center-center',
});