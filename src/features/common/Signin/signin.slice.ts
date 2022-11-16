import { createSlice } from '@reduxjs/toolkit';

interface Action {
  type: string;
  payload: never;
}

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
});

export const { addUser, getData } = authSlice.actions;
