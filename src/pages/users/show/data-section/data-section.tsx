import * as S from './styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const DataSection = ({ title, children }: Props) => (
  <S.Group>
    <S.Title fontWeight={700}>{title}</S.Title>
    <S.Wrapper>
      {children}
    </S.Wrapper>
  </S.Group>
);
