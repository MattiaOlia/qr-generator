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
    display={'flex'}
    justifyContent={{ xs: 'center', lg: 'space-evenly' }}
    flexDirection={{ xs: 'column', lg: 'row' }}
    sx={{
      transform:  { xs: "" , lg: 'scale(0.8)' }, 
      transformOrigin: 'top center',
      maxWidth: { xs: 350, sm: '100%' },
      margin: '0 auto',
    }}
    gap={2}
    width={'100%'}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: { xs: 'space-between', lg: 'flex-start' },
        margin: { xs: '', lg: '3em auto' },
      }}
      width={'100%'}
      mt={4}
      pb={12}
    > 
    <Box mb={8} p={2} border={"solid grey"} borderRadius={"15px"} width={"80%"} display={"flex"} justifyContent={"space-around"}>
    <TextField
      id="phone-prefix"
      select
      label="Prefix"
      value={selectedPrefix}
      
      onChange={handlePrefixChange}
      sx={{
        m: 1,
        minWidth: 200,
        borderRadius: 5, // Aggiungi il border radius
        color: 'white',
       
        '& .MuiSelect-icon': {
          color: 'white', // Cambia il colore della freccia
        },
        
      }}
     
    >
      {phonePrefixes.map((prefix) => (
        <MenuItem key={prefix} sx={{border:"solid grey 1px", color:"white", borderRadius:"0"}} value={prefix}>
          {prefix}
        </MenuItem>
      ))}
      <MenuItem sx={{border:"solid grey 1px", color:"white"}}  value="custom">Custom</MenuItem>
    </TextField>

    {selectedPrefix === 'custom' && (
      <TextField
        id="custom-prefix"
        label="Custom Prefix"
        value={customPrefix}
        onChange={handleCustomPrefixChange}
        sx={{ m: 1, minWidth: 200 }}
      />
    )}
     </Box>
      <Textfield inputName={"input1"}  isCancelClicked={isCancelClicked} setIsCancelClicked={setIsCancelClicked} row={1} addLine={false} textPlaceholder={"Insert your phone nuber"}/> {/* Assuming you have an appropriate inputName */}
      <Box
          p={1}
          display={'flex'}
          alignItems={'center'}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          mt={{ xs: 2, md: '11.5em' }}
        >
          <Button
            color={'secondary'}
            variant="outlined"
            size="large"
            onClick={handleShow}
            sx={{
              display: 'flex',
              width: { xs: 300, sm: 400 },
              border: 'solid 2px',
              borderRadius: '20px',
              m: { xs: '1em auto', md: '0 1em' },
              p: '1.5em',
              color: 'white',
            }}
          >
            Create QR CODE
          </Button>
        </Box>
      </Box>
        <Box>
 
          <Qr value={completePhoneNumber} show={shown} />
        </Box>

        </Box>
      
    
  );
}