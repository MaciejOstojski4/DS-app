import { createTheme } from '@mui/material';

import { colors } from './colors';
import { DSButton } from './overrides/button';
import { DSTextField } from './overrides/textfield';

export const theme = createTheme({
  palette: colors,
  typography: {
    fontFamily: '"Lato"',
  },
  components: {
    MuiTextField: DSTextField,
    MuiButton: DSButton,
  }
});
