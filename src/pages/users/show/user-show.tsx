import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../../app/hooks';
import { selectUser } from '../redux/selectors';
import { Avatar } from './avatar';
import { ContactDetails } from './contact-details';
import { DataSection } from './data-section';
import { PersonalDetails } from './personal-details';
import * as S from './styles';
import { Text } from './text';

export function UserShow() {
  const { t } = useTranslation('users');
  const user = useAppSelector(selectUser);

  return (
    <S.Container>
      <Avatar />
      <DataSection title={t('Personal details')}>
        <PersonalDetails />
      </DataSection>
      <DataSection title={t('About')}>
        <Text value={user?.about} />
      </DataSection>
      <DataSection title={t('Contact details')}>
        <ContactDetails />
      </DataSection>
    </S.Container>
  );
}
