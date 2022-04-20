import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useTranslation } from 'react-i18next';

import { useForm } from './hooks';
import * as S from './styles';

export const UserCreate = () => {
  const { t } = useTranslation('users');
  const {
    formObject,
    handleInputChange,
    handleDateChange
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
          <S.FormGroup>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={t('Birthdate')}
                value={formObject.birthdate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
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
      <S.FormRow>
        <S.FormGroup>
          <TextField
            name="about"
            label={t('About')}
            value={formObject.about}
            onChange={handleInputChange}
          />
        </S.FormGroup>
      </S.FormRow>
      <S.FormRow>
        <S.FormGroupSubmit>
          <Button>{t('Clean')}</Button>
          <Button>{t('Submit')}</Button>
        </S.FormGroupSubmit>
      </S.FormRow>
    </S.Form>
  );
};
