import { styled } from '@mui/system';

export const Form = styled('form')({
  display: 'flex',
  width: '100%',
});

export const FormRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 30px',
});

export const FormColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});

export const FormGroup = styled('div')({
  margin: '0 0 15px 0',
});
