import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { saveInputValue, updateShow, voidInputValue } from "../redux/action";
import { Button} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Textfield({ inputName}) {
  const [isCancelClicked, setIsCancelClicked] = React.useState(false)
  const [localState, setLocalState] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setLocalState(inputValue);

  
    dispatch(saveInputValue(inputName, inputValue));
    dispatch(updateShow(false));
  };
    
  const handleCancel = () => {
    setIsCancelClicked(true);
    dispatch(voidInputValue("input1", "input2"));
    dispatch(updateShow(false));
  
  }

  useEffect(() => {
    
    if (isCancelClicked) {
      setLocalState("");
      dispatch(voidInputValue(inputName));
      dispatch(updateShow(false));
      setIsCancelClicked(false)
      console.log("isCanClicked")
    }
  }, [isCancelClicked, inputName]);

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
      <TextField
        id={inputName}
        value={localState}
        onChange={handleChange}
        variant="standard"
      />
      <Button
          sx={{ minHeight: "100%", width: "50%" }}
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