import { styled } from '@mui/system';

export const Background = styled('div')(({ theme: { palette } }) => ({
  backgroundColor: palette.grey[100],
  minHeight: '100vh',
}));

export const Container = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

export const Header = styled('header')({
  padding: '15px 0',
  height: '50px',
});

export const Body = styled('div')({
  display: 'flex',
});

export const Main = styled('main')({
  width: '75%',
});

export const Navigation = styled('nav')({
  width: '25%',
  margin: '-50px 0 0 0',
});


export const Footer = styled('footer')({});
