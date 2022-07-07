import { TextField } from '@mui/material';
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

export const AvatarFieldWrapper = styled('div')(({ theme: { palette } }) => ({
  position: 'relative',
  borderRadius: '6px',
  border: `1px solid ${palette.cyan[900]}`,
  width: '120px',
  height: '160px',
  cursor: 'pointer',

  '& > svg': {
    color: palette.cyan[900],
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '50px'
  }
}));

export const AvatarImage = styled('img')({
  objectFit: 'cover',
  height: '160px',
  width: '118px',
  borderRadius: '6px',
});

export const AvatarTextField = styled(TextField)({
  width: '160px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '& fieldset': {
    display: 'none',
  },
  '& .MuiInputBase-root': {
    display: 'block',
    position: 'static',
    height: '180px',
  },
  '& input': {
    minHeight: '160px',
    opacity: 0,
    padding: 0,
    cursor: 'pointer',
  },
  '& .MuiFormHelperText-root': {
    marginLeft: '35px',
  }
});
