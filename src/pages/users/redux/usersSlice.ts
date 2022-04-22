import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UsersState } from './types';

const initialState: UsersState = {
  users: []
};

const push: CaseReducer<UsersState, PayloadAction<User>> = (state, action) => {
  state.users = [...state.users, action.payload];
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    push,
  }
});

export const { push: usersPush } = usersSlice.actions;
export const { reducer: usersReducer } = usersSlice;
