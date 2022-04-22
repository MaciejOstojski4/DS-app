import { styled } from '@mui/system';

export const Navigation = styled('div')(({ theme: { palette } }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '80px 25px 30px',
  backgroundColor: palette.white,
  borderLeft: `1px solid ${palette.grey[200]}`,
  borderRight: `1px solid ${palette.grey[200]}`,
  minHeight: '100vh',
}));
