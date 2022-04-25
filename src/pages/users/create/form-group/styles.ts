import { styled } from '@mui/system';

export const FormGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 0 35px 0',
});

export const FormGroupLabel = styled('label')(({ theme: { palette } }) => ({
  color: palette.grey[900],
  fontWeight: 700,
  margin: '0 0 10px 14px',
  fontSize: '10px',
}));
