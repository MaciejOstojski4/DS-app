import { RootState } from '../../../app/store';
import { User } from './types';

export const selectUser = (state: RootState): User | undefined => state.usersReducer.user;
