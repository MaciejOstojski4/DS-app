import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/selectors';
import { Text } from '../text';
import * as S from './styles';

export const PersonalDetails = () => {
  const user = useSelector(selectUser);

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
