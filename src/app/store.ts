import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { usersReducer } from '../pages/users/redux/usersSlice';

const initialState = localStorage.getItem('dsapp-state');

export const store = configureStore({
  reducer: {
    usersReducer,
  },
  preloadedState: initialState ? JSON.parse(initialState) : undefined,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('dsapp-state', JSON.stringify(state));
});
