import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Qr from './Qr';
import { useSelector, useDispatch } from 'react-redux';
import { voidInputValue } from "../redux/action";
import { updateShow } from '../redux/action';
import TextField from './Textfield'

export default function TabWifi() {
  const [isCancelClicked, setIsCancelClicked] = useState(false);
  const shown = useSelector((state)=> state.input.show);
  const inputValue1 = useSelector((state) => state.input.inputs.input1);
  const inputValue2 = useSelector((state) => state.input.inputs.input2);
  const ssid = inputValue1;
  const password = inputValue2;

  const WifiUrl = `WIFI:T:WPA;S:${ssid};P:${password};;`;

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
      sx={{
        "& > :not(style)": { m: 1, Width: "80%" },
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
      }}
      noValidate
      autoComplete="on"
      m={1}
    >
      <Box
        display={"flex"}
        container
        spacing={0}
        justifyContent={"center"}
        sx={{ width: "96%" }}
        gap={1}
        border={"solid red"}
      >
        <TextField inputName={"input1"} />
        <TextField inputName={"input2"} />
        <Box
          container
          p={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"solid green"}
        >
  

          <Qr value={WifiUrl} show={shown} />
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
 