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
      container
      component="form"
      noValidate
      autoComplete="on"
      m={1}
    >
      <Box
        display={"flex"}
        container
        spacing={0}
        justifyContent={"center"}
        gap={1}
        border={"solid red"}
      >
        <TextField inputName={"input1"} />
        <TextField inputName={"input2"} />
        <TextField inputName={"input3"} />
        <Box
          container
          p={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"solid green"}
        >
          <Qr value={emailURL} show={shown} />
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
 