import * as yup from 'yup';

import { PHONE_REGEX } from '../../../constants/regexes';
import i18n from '../../../i18n';

export const validationSchema = yup.object().shape({
  firstName: yup.string().required(i18n.t('users:First name is required')),
  lastName: yup.string().required(i18n.t('users:Last name is required')),
  email: yup.string()
    .email(i18n.t('users:Email must be in valid format'))
    .required(i18n.t('users:Email is required')),
  phone: yup.string()
    .matches(PHONE_REGEX)
    .required(i18n.t('users:Phone is required')),
  about: yup.string().required(i18n.t('users:About is required')),
  birthdate: yup
    .date()
    .nullable()
    .required(i18n.t('users:Birthdate is required')),
});
