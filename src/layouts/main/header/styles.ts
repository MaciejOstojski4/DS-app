import { styled } from '@mui/system';

export const Header = styled('div')<{ isUserCreated: boolean }>(({ isUserCreated }) => ({
  display: 'flex',
  justifyContent: isUserCreated ? 'space-between' : 'flex-end',
  padding: '25px 15px 15px 30px',
  width: '100%',
}
));

export const HeaderNav = styled('ul')({
  display: 'flex',
});
