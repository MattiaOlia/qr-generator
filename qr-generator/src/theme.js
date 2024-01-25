import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0277bd',  // Colore principale del tema scuro
      contrastText: '#F9F6EE',  // Testo in contrasto con il colore principale
    },
    secondary: {
      main: '#0277bd',  // Colore secondario del tema scuro
    },
    background: {
      default: '#0277bd',  // Colore di sfondo predefinito del tema scuro
      paper: 'rgb(16, 20, 24)',  // Colore di sfondo per la carta o le aree contenenti il contenuto
    },
    text: {
      primary: '#0277bd',  // Colore del testo principale
      secondary: 'white',  // Colore del testo secondario
    }},
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
    borderRadius: 20,
  },
});

export default theme;