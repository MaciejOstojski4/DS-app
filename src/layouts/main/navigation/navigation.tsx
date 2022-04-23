import { useTranslation } from 'react-i18next';
import { compile } from 'path-to-regexp';
import { faAddressCard, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { matchPath, useLocation } from 'react-router-dom';

import * as S from './styles';
import { Item } from './item';
import { routes } from '../../../routing/routes';
import { Logo } from './logo';

export const Navigation = () => {
  const { t } = useTranslation('users');
  const { pathname } = useLocation();
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
        <Item
          label={t('My profile')}
          to={compile(showPath)({ id: '1' })}
          icon={faAddressCard}
          isActive={isActive(showPath)}
        />
      </S.NavList>
    </S.Navigation>
  );
};
