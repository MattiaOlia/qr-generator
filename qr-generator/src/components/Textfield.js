import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { saveInputValue, updateShow, voidInputValue } from "../redux/action";
import { Button} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Textfield({ inputName }) {
  const [localState, setLocalState] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setLocalState(inputValue);

    dispatch(saveInputValue(inputName, inputValue));
    dispatch(updateShow(false));
  };

  const handleCancel = () => {
    setLocalState("");
    dispatch(voidInputValue(inputName));
    dispatch(updateShow(false));
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <h5>Your Text</h5>
      <TextField
        id={inputName}
        value={localState}
        onChange={handleChange}
        variant="standard"
        sx={{width:"80%"}}
      />
      <Button
        
        color={"secondary"}
        size="large"
        variant="outlined"
        onClick={handleCancel}
      >
        <CancelIcon />
      </Button>
    </Box>
  );
}
