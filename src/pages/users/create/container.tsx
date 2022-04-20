import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useForm } from './hooks';
import * as S from './styles';

export const UserCreate = () => {
  const { t } = useTranslation('users');
  const {
    formObject,
    handleInputChange
  } = useForm();

  return (
    <S.Form>
      <S.FormRow>
        <S.FormColumn>
          <S.FormGroup>
            <TextField
              name="firstName"
              label={t('First name')}
              value={formObject.firstName}
              onChange={handleInputChange}
            />
          </S.FormGroup>
          <S.FormGroup>
            <TextField
              name="email"
              label={t('Email')}
              value={formObject.email}
              onChange={handleInputChange}
            />
          </S.FormGroup>
        </S.FormColumn>
        <S.FormColumn>
          <S.FormGroup>
            <TextField
              name="lastName"
              label={t('Last name')}
              value={formObject.lastName}
              onChange={handleInputChange}
            />
          </S.FormGroup>
          <S.FormGroup>
            <TextField
              name="phone"
              label={t('Phone')}
              value={formObject.phone}
              onChange={handleInputChange}
            />
          </S.FormGroup>
        </S.FormColumn>
      </S.FormRow>
    </S.Form>
  );
};
