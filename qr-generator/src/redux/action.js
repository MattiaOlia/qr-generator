export const SAVE_INPUT_VALUE = 'SAVE_INPUT_VALUE';
export const VOID_INPUT_VALUE = "VOID_INPUT_VALUE"
export const UPDATE_SHOW = "UPDATE_SHOW"

export const saveInputValue = (inputName, inputValue) => ({
  type: SAVE_INPUT_VALUE,
  payload: { inputName, inputValue },
});

export const voidInputValue = (inputName) => ({
    type: VOID_INPUT_VALUE,
    payload: { inputName },
  });

export const updateShow=(show) => ({
    type: UPDATE_SHOW,
    payload : {show}
})