import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Textfield from "./Textfield";
import Qr from './Qr';
import { useSelector } from 'react-redux';

export default function TabSms() {
  const [color, setColor] = useState("red");

  const inputValue1 = useSelector((state) => state.input.inputs.input1);
  const inputValue2 = useSelector((state) => state.input.inputs.input2);
  const phoneNumber = inputValue1;
  const smsText = inputValue2;

  const smsUrl = `smsto:${encodeURIComponent(phoneNumber)}:${smsText}`;

  const handleChange = () => {
    setColor("green");
  };

  useEffect(() => {
    console.log(color); // Log quando il componente viene montato o il colore cambia
  }, [color]);

  return (
    <div>
      <Box
        display={"flex"}
        container
        spacing={0}
        justifyContent={"center"}
        sx={{ width: "96%" }}
        gap={1}
        border={"solid red"}
      >
        <Textfield inputName={"input1"} />
        <Textfield inputName={"input2"} />
        <Button
          sx={{ minHeight: "100%" }}
          color={"secondary"}
          size="large"
          variant="outlined"
        >
          <CancelIcon />
        </Button>
        <Box
          container
          p={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"solid"}
        >
          <Qr value={smsUrl} color={color} />
        </Box>
        <Box>
          <p>Choose color</p>
          <button onClick={handleChange}>Change</button>
        </Box>
      </Box>
    </div>
  );
}