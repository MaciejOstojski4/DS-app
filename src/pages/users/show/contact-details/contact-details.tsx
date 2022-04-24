import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/selectors';
import { Text } from '../text';
import * as S from './styles';

export const ContactDetails = () => {
  const { t } = useTranslation('users');
  const user = useSelector(selectUser);

  return (
    <S.ContactDetails>
      <S.DataWrapper>
        <S.DataTitle>{`${t('Email')}:`}</S.DataTitle>
        <Text value={user?.email} />
      </S.DataWrapper>
      <S.DataWrapper>
        <S.DataTitle>{`${t('Phone')}:`}</S.DataTitle>
        <Text value={user?.phone} />
      </S.DataWrapper>
    </S.ContactDetails>
  );
};
