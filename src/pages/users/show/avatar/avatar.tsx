import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/selectors';
import * as S from './styles';

export const Avatar = () => {
  const user = useSelector(selectUser);

  if (!user) return <></>;

  return (
    <S.AvatarImage src={user.avatar} />
  );
};
