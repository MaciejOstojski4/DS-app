import * as S from './styles';

interface Props {
  to: string;
  label: string;
}

export const HeaderItem = ({ to, label }: Props) => (
  <S.HeaderItem>
    <S.HeaderLink to={to}>
      <S.HeaderText>{label}</S.HeaderText>
    </S.HeaderLink>
  </S.HeaderItem>
);
