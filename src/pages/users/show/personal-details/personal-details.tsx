import { format } from 'date-fns';

import { useAppSelector } from '../../../../app/hooks';
import { selectUser } from '../../redux/selectors';
import { Text } from '../text';
import * as S from './styles';

export const PersonalDetails = () => {
  const user = useAppSelector(selectUser);

  return (
    <S.PersonalDetails>
      <S.Name>
        <Text value={user?.firstName} />
        <Text value={user?.lastName} />
      </S.Name>
      <Text value={format(new Date(user?.birthdate || 0), 'MM.dd.yyyy')} />
    </S.PersonalDetails>
  );
};
