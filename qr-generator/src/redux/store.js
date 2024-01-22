import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './reducer';

const store = configureStore({
  reducer: {
    input: inputReducer,
  },
  // Aggiungi questa riga per abilitare DevTools
  //devTools: process.env.NODE_ENV !== 'production',
});

export default store;