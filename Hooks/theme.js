import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      light: '#0066ff',
      main: '#e3f2fd',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    texts: {
      main: '#e3f2fd',
    },
  },
});