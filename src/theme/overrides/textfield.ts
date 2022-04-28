import { Theme } from '@mui/system';

export const DSTextField = {
  styleOverrides: {
    root: (props: { theme: Theme }) => ({
      '& .MuiInputBase-root': {
        height: '40px',
      },
      '& div.MuiInputBase-multiline': {
        height: 'unset',
      },
      '& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: props.theme.palette.cyan[900],
      }
    })
  },
};
