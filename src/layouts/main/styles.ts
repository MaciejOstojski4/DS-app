import { styled } from '@mui/system';

export const Container = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: '80px auto',
  gridTemplateColumns: '80% 20%',
  gridTemplateAreas: '"header header" "main nav"',
});

export const Header = styled('header')({
  gridArea: 'header',
  padding: '15px 0',
});

export const Navigation = styled('nav')({
  gridArea: 'nav',
});

export const Main = styled('main')({
  gridArea: 'main',
});

export const Footer = styled('footer')({})