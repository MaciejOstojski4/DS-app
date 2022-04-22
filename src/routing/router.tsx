import { Route, Routes } from 'react-router-dom';

import { UserCreate } from '../pages/users/create';
import { UserShow } from '../pages/users/show';
import { routes } from './routes';

export const Router = () => (
  <Routes>
    <Route path={routes.users.create} element={<UserCreate />} />
    <Route path={routes.users.show} element={<UserShow />} />
  </Routes>
);
