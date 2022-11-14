import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const signinApi = createApi({
  reducerPath: 'signinApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL_ALT }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
});

export const { useGetTodosQuery } = signinApi;
