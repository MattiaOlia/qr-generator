import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { saveInputValue, updateShow, voidInputValue } from "../redux/action";
import { Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

export default function Textfield({ inputName, row, addLine, textPlaceholder }) {
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
    <Box display={"flex"}
    flexDirection={"column"}
    width={"100%"}
    sx={{maxWidth: { xs: 350, sm: 400, md:600 }, margin:"0 auto"}}
    alignItems={"center"}
    justifyContent={"center"} >
    <Box
      component="form"
      noValidate
      autoComplete="off"
      display={"flex"}
    flexDirection={"column"}
    width={"100%"}
    sx={{maxWidth: { xs: 350, sm: 400, md:800 }}}
    alignItems={"center"}
    justifyContent={"center"} 
    >
      
      <TextField
  id={inputName}
  value={localState}
  onChange={handleChange}
  variant="standard"
  fullWidth
  multiline  // 
  rows={row}  // 
  placeholder={textPlaceholder}  // 
  InputProps={{
    disableUnderline: true, 
    style: {
    
      color: '#F9F6EE',  
      fontWeight:600,
      fontSize:"1.7rem"
    },
  }}
  InputPlaceHolderProps={{
    style: {
      color: '#F9F6EE', 
    },
  }}
/>

<IconButton
  style={{ color:"white", marginLeft: 'auto', borderRadius: '50%', padding: "16px" }}
  color='secondary'
  aria-label="cancel"
  onClick={handleCancel}
>
  <ArrowBackIcon fontSize="large" />
</IconButton>
   {addLine && <Divider sx={{ backgroundColor: 'grey', width:"100%", marginBottom:"4em" }} />}

    </Box>
   
   </Box>
  );
}
