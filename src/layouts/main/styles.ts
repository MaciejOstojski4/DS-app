import { styled } from '@mui/system';
import { LARGE_DEVICES, MEDIUM_DEVICES, SMALL_DEVICES } from '../../theme/responsive-breakpoints';

export const Background = styled('div')(({ theme: { palette } }) => ({
  backgroundColor: palette.grey[100],
  minHeight: '100vh',
  display: 'flex',
  fontFamily: 'Lato',
}));

export const Container = styled('div')({
  display: 'flex',
  flex: 1,
});

export const Header = styled('header')({
  height: '66px',
  width: '100%',

  [`@media (max-width: ${SMALL_DEVICES})`]: {
    height: '90px'
  }
});

export const Body = styled('div')({
  margin: '0 auto',
  width: '1100px',
  display: 'flex',
  flexDirection: 'column',

  [`@media (max-width: ${LARGE_DEVICES})`]: {
    width: '900px',
  },

  [`@media (max-width: ${MEDIUM_DEVICES})`]: {
    width: '95vw'
  }
});

export const Main = styled('main')({
  padding: '40px 0 0 0',
});

export const Navigation = styled('nav')({
  width: '250px',

  [`@media (max-width: ${MEDIUM_DEVICES})`]: {
    display: 'none',
  }
});
