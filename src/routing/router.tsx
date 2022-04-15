import { Route, Routes } from 'react-router-dom';

import { UserCreate } from '../pages/users/create';
import { routes } from './routes';

export const Router = () => (
  <Routes>
    <Route path={routes.users.create} element={<UserCreate />} />
  </Routes>
);
