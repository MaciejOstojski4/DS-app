import { Header } from './header';
import { Navigation } from './navigation';
import * as S from './styles'

interface IProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IProps) => (
  <S.Container>
    <S.Header><Header /></S.Header>
    <S.Navigation><Navigation /></S.Navigation>
    <S.Main>{children}</S.Main>
    <S.Footer></S.Footer>
  </S.Container>
);
