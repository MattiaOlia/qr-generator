import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';
import Textfield from './Textfield';
import Qr from './Qr';
import { useSelector, useDispatch } from 'react-redux';
import { voidInputValue, updateShow } from '../redux/action';
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';

const defaultPrefixes = ['+1', '+44', '+49', '+81', '+86', '+91', '+33', '+34', '+39', '+52'];

export default function TabPhone() {
  const [isCancelClicked, setIsCancelClicked] = useState(false);
  const phoneNumber = useSelector((state) => state.input.inputs.input1);
  const shown = useSelector((state) => state.input.show);
  const [phonePrefixes, setPhonePrefixes] = useState(defaultPrefixes);
  const [selectedPrefix, setSelectedPrefix] = useState('');
  const [customPrefix, setCustomPrefix] = useState('');
  
  const dispatch = useDispatch();

  const handleShow = () => {
    setIsCancelClicked(false);
    dispatch(updateShow(true));
  };

  useEffect(() => {
    setPhonePrefixes(defaultPrefixes);
  }, []);

  const handlePrefixChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPrefix(selectedValue);
    
    if (selectedValue === 'custom') {
      setCustomPrefix('');
    }
  };

  const handleCustomPrefixChange = (event) => {
    const customPrefixValue = event.target.value;
    setCustomPrefix(customPrefixValue);
  };

  const completePhoneNumber = selectedPrefix === 'custom' ? customPrefix + phoneNumber : selectedPrefix + phoneNumber;


  return (
    <Box
      container
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "80%" },
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
      }}
      noValidate
      autoComplete="on"
      m={1}
    >
      <Textfield inputName={"input1"} /> {/* Assuming you have an appropriate inputName */}

      <Box
        display={"flex"}
        container
        spacing={0}
        justifyContent={"center"}
        sx={{ width: "96%" }}
        gap={1}
        border={"solid red"}
      >
        <TextField
          id="phone-prefix"
          select
          label="Prefix"
          value={selectedPrefix}
          onChange={handlePrefixChange}
          sx={{ m: 1, minWidth: 120 }}
        >
          {phonePrefixes.map((prefix) => (
            <MenuItem key={prefix} value={prefix}>
              {prefix}
            </MenuItem>
          ))}
          <MenuItem value="custom">Custom</MenuItem>
        </TextField>

        {selectedPrefix === 'custom' && (
          <TextField
            id="custom-prefix"
            label="Custom Prefix"
            value={customPrefix}
            onChange={handleCustomPrefixChange}
            sx={{ m: 1, minWidth: 120 }}
          />
        )}

        <Box
          container
          p={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"solid green"}
        >
 
          <Qr value={completePhoneNumber} show={shown} />
        </Box>

        <Button
          sx={{ minHeight: "100%", width: "50%" }}
          color={"secondary"}
          size="large"
          variant="outlined"
          onClick={handleShow}
        >
          Create QR CODE
        </Button>
      </Box>
    </Box>
  );
}