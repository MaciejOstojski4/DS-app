import { Theme } from '@mui/system';

export const DSButton = {
  styleOverrides: {
    outlined: (props: { theme: Theme }) => ({
      color: props.theme.palette.cyan[900],
      borderColor: props.theme.palette.cyan[900],

      '&:hover': {
        backgroundColor: props.theme.palette.white
      }
    }),
    contained: (props: { theme: Theme }) => ({
      backgroundColor: props.theme.palette.cyan[500],
      color: props.theme.palette.white,
      fontWeight: 700,
      boxShadow: 'none',

      '&:hover': {
        backgroundColor: props.theme.palette.cyan[900],
        boxShadow: 'none',
      }
    })
  }
};
