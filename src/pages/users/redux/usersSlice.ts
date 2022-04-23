import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UsersState } from './types';

const initialState: UsersState = {
  user: undefined,
};

const userSetAction: CaseReducer<UsersState, PayloadAction<User>> = (state, action) => {
  state.user = action.payload;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userSet: userSetAction,
  }
});

export const { userSet } = usersSlice.actions;
export const { reducer: usersReducer } = usersSlice;
