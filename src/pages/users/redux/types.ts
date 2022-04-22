import { IEntity } from '../../../constants/types';

export interface User extends IEntity {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  about: string;
  birthdate: Date | null;
}

export interface UsersState {
  users: User[];
}
