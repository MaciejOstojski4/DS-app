import { styled } from '@mui/system';

export const Navigation = styled('div')(({ theme: { palette } }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '15px 0 30px',
  backgroundColor: palette.grey[900],
  minHeight: '100vh',
}));

export const NavList = styled('ul')({
  margin: '65px 0 0 0',
});
