import { useTranslation } from 'react-i18next';
import { compile } from 'path-to-regexp';
import { faAddressCard, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { matchPath, useLocation } from 'react-router-dom';

import * as S from './styles';
import { Item } from './item';
import { routes } from '../../../routing/routes';
import { Logo } from './logo';
import { selectUser } from '../../../pages/users/redux/selectors';
import { useAppSelector } from '../../../app/hooks';

export const Navigation = () => {
  const { t } = useTranslation('users');
  const { pathname } = useLocation();
  const user = useAppSelector(selectUser);
  const { create: createPath, show: showPath } = routes.users;

  const isActive = (path: string): boolean => {
    return !!matchPath(path, pathname);
  };

  return (
    <S.Navigation>
      <Logo />
      <S.NavList>
        <Item
          label={t('Create new user')}
          to={createPath}
          icon={faUserPlus}
          isActive={isActive(createPath)}
        />
        {user && <Item
          label={t('My profile')}
          to={compile(showPath)({ id: user.id })}
          icon={faAddressCard}
          isActive={isActive(showPath)}
        />}
      </S.NavList>
    </S.Navigation>
  );
};
