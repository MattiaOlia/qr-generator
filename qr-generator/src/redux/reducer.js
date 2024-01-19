import { SAVE_INPUT_VALUE } from './action';
import {VOID_INPUT_VALUE} from './action'
const initialState = {
  inputs: {
    input1: '',
    input2: '',
    
  },
  
  
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INPUT_VALUE:
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [inputName]: inputValue,
        },
      };
      case VOID_INPUT_VALUE:
          return {
            ...state,
            inputs: {
              ...state.inputs,
              [action.payload.inputName]: '',
            },
          };
         
    default:
      return state;
  }
};

export default inputReducer;