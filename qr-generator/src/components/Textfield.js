import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { saveInputValue } from "../redux/action";

export default function Textfield({ inputName, isCancelClicked }) {
  const [localState, setLocalState] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setLocalState(inputValue);

    // Dispatch dell'azione con il nome dell'input e il valore dell'input
    dispatch(saveInputValue(inputName, inputValue));
    
  };

  useEffect(() => {
    // Azzerare localState se isCancelClicked è true
    if (isCancelClicked) {
      setLocalState("");
    }
  }, [isCancelClicked]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h5>Your Text</h5>
      <TextField id={inputName} value={localState} onChange={handleChange} variant="standard" />
    </Box>
  );
}