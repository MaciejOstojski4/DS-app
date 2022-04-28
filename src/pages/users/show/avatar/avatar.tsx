import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../../../app/hooks';
import { selectUser } from '../../redux/selectors';
import * as S from './styles';

export const Avatar = () => {
  const { t } = useTranslation('users');
  const user = useAppSelector(selectUser);

  if (!user) return <></>;

  return (
    <S.AvatarImage src={user.avatar} alt={t('User avatar')} />
  );
};
