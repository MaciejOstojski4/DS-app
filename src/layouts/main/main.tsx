import { Header } from './header';
import { Navigation } from './navigation';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IProps) => (
  <S.Background>
    <S.Navigation><Navigation /></S.Navigation>
    <S.Container>
      <S.Body>
        <S.Header><Header /></S.Header>
        <S.Main>{children}</S.Main>
      </S.Body>
    </S.Container>
  </S.Background>
);
