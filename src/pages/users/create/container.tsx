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
    errors,
    handleInputChange,
    handleDateChange,
    handleSubmit,
    cleanForm,
  } = useForm();

  const findError = (fieldName: string): string | undefined => errors.find(err => err.path === fieldName)?.message;

  return (
    <S.Form>
      <S.FormRow>
        <S.FormColumn>
          <S.FormGroup>
            <TextField
              name="firstName"
              label={t('First name')}
              value={formObject.firstName}
              helperText={findError('firstName')}
              error={!!findError('firstName')}
              onChange={handleInputChange}
            />
          </S.FormGroup>
          <S.FormGroup>
            <TextField
              name="email"
              label={t('Email')}
              value={formObject.email}
              helperText={findError('email')}
              error={!!findError('email')}
              onChange={handleInputChange}
            />
          </S.FormGroup>
          <S.FormGroup>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={t('Birthdate')}
                value={formObject.birthdate}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="birthdate"
                    helperText={findError('birthdate')}
                    error={!!findError('birthdate')}
                  />
                )}
              />
            </LocalizationProvider>
          </S.FormGroup>
        </S.FormColumn>
        <S.FormColumn>
          <S.FormGroup>
            <TextField
              name="lastName"
              label={t('Last name')}
              helperText={findError('lastName')}
              error={!!findError('lastName')}
              value={formObject.lastName}
              onChange={handleInputChange}
            />
          </S.FormGroup>
          <S.FormGroup>
            <TextField
              name="phone"
              label={t('Phone')}
              helperText={findError('phone')}
              error={!!findError('phone')}
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
            helperText={findError('about')}
            error={!!findError('about')}
            value={formObject.about}
            onChange={handleInputChange}
          />
        </S.FormGroup>
      </S.FormRow>
      <S.FormRow>
        <S.FormGroupSubmit>
          <Button onClick={cleanForm}>{t('Clean')}</Button>
          <Button onClick={handleSubmit}>{t('Submit')}</Button>
        </S.FormGroupSubmit>
      </S.FormRow>
    </S.Form>
  );
};
