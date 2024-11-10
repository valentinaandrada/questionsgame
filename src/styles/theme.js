import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22223B',
    },
    secondary: {
      main: '#4A4E69',
    },
    other: {
        main: '#9A8C98'
    },
    background: {
        main: '#C9ADA7',
        paper: '#F2E9E4'
    }
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',

    h1: {
        fontFamily: 'Grandstander, cursive',
        fontWeight: 600,
    },
    h6: {
      fontFamily: 'Grandstander, cursive',
      fontWeight: 600,
  }
  },
});

export default theme;
