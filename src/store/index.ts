import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authSlice } from 'slices/AuthSlice';
import { signinApi } from 'services/signin.api';
import { signupApi } from 'services/signup.api';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [signinApi.reducerPath]: signinApi.reducer,
    [signupApi.reducerPath]: signupApi.reducer,
  },
});
