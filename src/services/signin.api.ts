import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from './_constants';

export const signinApi = createApi({
  reducerPath: 'signinApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({ url: '/signin', method: 'Post', body: data }),
    }),
  }),
});

export const { useSigninMutation } = signinApi;
