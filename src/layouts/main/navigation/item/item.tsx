import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';

interface Props {
  label: string;
  to: string;
  icon: IconProp;
  isActive: boolean;
}

export const Item = ({ label, to, icon, isActive }: Props) => (
  <S.ItemLink to={to} isActive={isActive}>
    <FontAwesomeIcon icon={icon} />
    <S.Label isActive={isActive} fontWeight={500}>{label}</S.Label>
  </S.ItemLink>
);
