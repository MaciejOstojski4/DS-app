import { styled } from '@mui/system';

export const PersonalDetails = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Name = styled('div')({
  display: 'flex',
  '& > p': {
    marginRight: '4px',
  },
});
