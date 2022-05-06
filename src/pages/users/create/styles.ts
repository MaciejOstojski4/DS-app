import { styled } from '@mui/system';
import { SMALL_DEVICES } from '../../../theme/responsive-breakpoints';

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 0 30px 0',
});

export const FormRow = styled('div')({
  display: 'flex',
  width: '100%',
  padding: '0 30px',

  [`@media (max-width: ${SMALL_DEVICES})`]: {
    flexDirection: 'column',
  }
});

export const FormColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 15px',
  width: '350px',

  [`@media (max-width: ${SMALL_DEVICES})`]: {
    width: 'auto',
    margin: '0',
  }
});

export const FormGroupSubmit = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',

  '& > button': {
    margin: '0 0 0 15px',
  }
});
