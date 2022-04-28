import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { FormGroupAvatar, FormGroupDate, FormGroupInput } from './form-group';
import { useForm } from './hooks';
import * as S from './styles';

export const UserCreate = () => {
  const { t } = useTranslation('users');
  const {
    formObject,
    errors,
    handleInputChange,
    handleFileChange,
    handleDateChange,
    handleSubmit,
    cleanForm,
  } = useForm();

  return (
    <S.Form>
      <S.FormRow>
        <FormGroupAvatar
          name="avatar"
          errors={errors}
          label={t('Avatar')}
          value={formObject.avatar}
          placeholder={t('Avatar')}
          onChange={handleFileChange}
        />
      </S.FormRow>
      <S.FormRow>
        <S.FormColumn>
          <FormGroupInput
            name="firstName"
            errors={errors}
            label={t('First name')}
            placeholder={t('First name')}
            value={formObject.firstName}
            onChange={handleInputChange}
          />
          <FormGroupInput
            name="email"
            errors={errors}
            label={t('Email')}
            placeholder={t('Email')}
            value={formObject.email}
            onChange={handleInputChange}
          />
          <FormGroupDate
            name="birthdate"
            errors={errors}
            label={t('Birthdate')}
            placeholder={t('Birthdate')}
            value={formObject.birthdate}
            onChange={handleDateChange}
          />
        </S.FormColumn>
        <S.FormColumn>
          <FormGroupInput
            name="lastName"
            errors={errors}
            label={t('Last name')}
            placeholder={t('Last name')}
            value={formObject.lastName}
            onChange={handleInputChange}
          />
          <FormGroupInput
            name="phone"
            errors={errors}
            label={t('Phone')}
            placeholder={t('Phone')}
            value={formObject.phone}
            onChange={handleInputChange}
          />
        </S.FormColumn>
      </S.FormRow>
      <S.FormRow>
        <FormGroupInput
          name="about"
          errors={errors}
          label={t('About')}
          multiline
          minRows={3}
          placeholder={t('About')}
          value={formObject.about}
          onChange={handleInputChange}
        />
      </S.FormRow>
      <S.FormRow>
        <S.FormGroupSubmit>
          <Button
            variant="outlined"
            onClick={cleanForm}>
            {t('Clean')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}>
            {t('Submit')}
          </Button>
        </S.FormGroupSubmit>
      </S.FormRow>
    </S.Form>
  );
};
