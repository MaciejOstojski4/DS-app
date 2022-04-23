import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { compile } from 'path-to-regexp';

import { selectUser } from '../../../pages/users/redux/selectors';
import { routes } from '../../../routing/routes';
import { HeaderItem } from './header-item';
import * as S from './styles';
import { UserName } from './user-name';

export const Header = () => {
  const { t } = useTranslation('users');
  const user = useSelector(selectUser);

  return (
    <S.Header isUserCreated={!!user}>
      <UserName />
      <S.HeaderNav>
        <HeaderItem label={t('Create user')} to={routes.users.create} />
        {user && <HeaderItem label={t('My profile')} to={compile(routes.users.show)({ id: user.id })} />}
      </S.HeaderNav>
    </S.Header>
  );
};
