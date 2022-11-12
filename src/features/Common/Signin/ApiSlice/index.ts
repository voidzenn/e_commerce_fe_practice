import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSigninSlice = createApi({
  reducerPath: 'apiSigninSlice',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL_ALT }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
});

export const { useGetTodosQuery } = apiSigninSlice;
