import { styled } from '@mui/system';
import { SMALL_DEVICES } from '../../../theme/responsive-breakpoints';

export const Header = styled('div')<{ isUserCreated: boolean }>(({ isUserCreated }) => ({
  display: 'flex',
  justifyContent: isUserCreated ? 'space-between' : 'flex-end',
  padding: '25px 15px 15px 30px',
  width: '100%',

  [`@media (max-width: ${SMALL_DEVICES})`]: {
    flexDirection: 'column',
  }
}
));

export const HeaderNav = styled('ul')({
  display: 'flex',

  [`@media (max-width: ${SMALL_DEVICES})`]: {
    margin: '15px 0',
  }
});
