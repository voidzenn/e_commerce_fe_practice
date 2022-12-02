import { configureStore } from '@reduxjs/toolkit';
import { itemsApi } from 'services/items.api';
import { signinApi } from 'services/signin.api';
import { signupApi } from 'services/signup.api';

export const store = configureStore({
  reducer: {
    [signinApi.reducerPath]: signinApi.reducer,
    [signupApi.reducerPath]: signupApi.reducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      signinApi.middleware,
      signupApi.middleware,
      itemsApi.middleware
    ),
});
