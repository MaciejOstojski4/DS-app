import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/selectors';
import * as S from './styles';

export const Avatar = () => {
  const { t } = useTranslation('users');
  const user = useSelector(selectUser);

  if (!user) return <></>;

  return (
    <S.AvatarImage src={user.avatar} alt={t('User avatar')} />
  );
};
