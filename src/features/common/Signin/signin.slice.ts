import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface Action {
  type: string;
  payload: never;
}

export const fetchTodos: any = createAsyncThunk('auth/fetchTodos', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
    { params: { _limit: 10 } }
  );
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: [],
    payload: [],
    // users: [],
  },
  reducers: {
    addUser: (state, action) => {},
    getData: (state: any) => {},
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state: any, action: any) => {
      // state.users = action.payload;
    },
  },
});

export const { addUser, getData } = authSlice.actions;
