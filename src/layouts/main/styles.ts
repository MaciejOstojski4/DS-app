import { styled } from '@mui/system';

export const Background = styled('div')(({ theme: { palette } }) => ({
  backgroundColor: palette.grey[100],
  minHeight: '100vh',
}));

export const Container = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  fontFamily: 'Lato'
});

export const Header = styled('header')({
  height: '66px',
  width: '100%',
});

export const Body = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
});

export const Main = styled('main')({
  padding: '40px 0 0 0',
});

export const Navigation = styled('nav')({
  width: '20%',
});
