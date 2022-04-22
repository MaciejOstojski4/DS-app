import { Header } from './header';
import { Navigation } from './navigation';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IProps) => (
  <S.Background>
    <S.Container>
      <S.Header><Header /></S.Header>
      <S.Body>
        <S.Main>{children}</S.Main>
        <S.Navigation><Navigation /></S.Navigation>
      </S.Body>
      <S.Footer></S.Footer>
    </S.Container>
  </S.Background>
);
