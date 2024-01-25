import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Qr from './Qr';
import { useSelector, useDispatch } from 'react-redux';
import { voidInputValue } from "../redux/action";
import { updateShow } from '../redux/action';
import TextField from './Textfield'

export default function TabSms() {
  const [isCancelClicked, setIsCancelClicked] = useState(false);
  const shown = useSelector((state)=> state.input.show);
  const inputValue1 = useSelector((state) => state.input.inputs.input1);
  const inputValue2 = useSelector((state) => state.input.inputs.input2);
  const inputValue3 = useSelector((state) => state.input.inputs.input3);

  const yourEmail = inputValue1;
  const subject = inputValue2;
  const body = inputValue3

  const emailURL = `mailto:${encodeURIComponent(yourEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const usedispatch = useDispatch();

  const handleShow = () => {
    setIsCancelClicked(false);
    usedispatch(updateShow(true));
  };

  const handleCancel = () => {
    setIsCancelClicked(true);
    usedispatch(voidInputValue("input1", "input2"));
    usedispatch(updateShow(false));
  };

  useEffect(() => {
    if (isCancelClicked) {
      setIsCancelClicked(false);
      console.log("isCanClicked");
    }
  }, [isCancelClicked]);

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
      <Box  width={"100%"} sx={{ transformOrigin: 'top center',transform:  { xs: "" , lg: 'scale(0.8)' }}}>
        <TextField inputName={"input1"} row={1} addLine={true} textPlaceholder={"Insert your email"}  />
        <TextField inputName={"input2"} row={1} addLine={true} textPlaceholder={"Insert your object"} />
        <TextField inputName={"input3"} row={3} textPlaceholder={"Insert your text"} />
        </Box>
        <Box
          p={1}
          display={'flex'}
          alignItems={'center'}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          mt={{ xs: 2, md: '-5em' }}
          
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
        <Qr value={emailURL} show={shown} />
      </Box>
      </Box>
       
  );
}
 