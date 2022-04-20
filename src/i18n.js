import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uesrsEn from './i18n/en/users.json';

const resources = {
  en: {
    users: uesrsEn,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
