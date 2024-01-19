import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './reducer';
import thunk from 'redux-thunk';


const store = configureStore({
  reducer: {
    input: inputReducer,
  }
 
});

export default store;