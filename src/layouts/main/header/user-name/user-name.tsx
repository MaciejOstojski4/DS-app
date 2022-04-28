import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../../../app/hooks';
import { selectUser } from '../../../../pages/users/redux/selectors';
import * as S from './styles';

export const UserName = () => {
  const { t } = useTranslation('users');
  const user = useAppSelector(selectUser);

  if (!user) return <></>;

  return (
    <S.UserName fontWeight={700}>
      {t('Welcome', { firstName: user.firstName })}
    </S.UserName>
  );
};
