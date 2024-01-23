import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c3e50",
      contrastText: "#F9F6EE",
    },
    secondary: {
      main: "#0277bd",
    },
    backgroundWhite: {
      main: "#fdfdfd",
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 'extra-bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;