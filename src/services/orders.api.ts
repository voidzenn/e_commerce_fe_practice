import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from './_constants';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({ url: '/orders', method: 'Post', body: data }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
