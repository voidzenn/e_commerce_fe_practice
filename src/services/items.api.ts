import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { ItemsData, ItemsModel } from './types';

import { BASE_URL } from './_constants';

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Items'],
  endpoints: (builder) => ({
    getItems: builder.query<ItemsData, string>({
      query: () => ({ url: '/items' }),
      providesTags: ['Items'],
    }),
    createItem: builder.mutation<ItemsData, ItemsModel>({
      query: (data) => ({ url: '/items', method: 'Post', body: data }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const { useGetItemsQuery, useCreateItemMutation } = itemsApi;
