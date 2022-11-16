import { configureStore } from '@reduxjs/toolkit';
import { signinApi } from 'services/signin.api';
import { signupApi } from 'services/signup.api';

export const store = configureStore({
  reducer: {
    [signupApi.reducerPath]: signupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signupApi.middleware),
});
