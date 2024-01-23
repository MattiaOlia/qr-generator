import { SAVE_INPUT_VALUE, VOID_INPUT_VALUE, UPDATE_SHOW } from './action';

const initialState = {
  inputs: {
    input1: '',
    input2: '',
    input3: ''
  },
  show: false,
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
        show: false, // Aggiunto questo per assicurarsi che lo show venga impostato su false quando si aggiorna l'input
      };
    case VOID_INPUT_VALUE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.inputName]: '',
        },
        show: false, // Aggiunto questo per assicurarsi che lo show venga impostato su false quando si cancella l'input
      };
    case UPDATE_SHOW:
      return {
        ...state,
        show: action.payload.show,
      };
    default:
      return state;
  }
};

export default inputReducer;