import * as S from './styles';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const DataSection = ({ title, children }: Props) => (
  <S.Group>
    {title && <S.Title fontWeight={700}>{title}</S.Title>}
    <S.Wrapper>
      {children}
    </S.Wrapper>
  </S.Group>
);
