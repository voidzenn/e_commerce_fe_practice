import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignupModel } from './types';
import { BASE_URL } from './_constants';

export const signupApi = createApi({
  reducerPath: 'signupApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signup: builder.mutation<SignupModel, SignupModel>({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation } = signupApi;
