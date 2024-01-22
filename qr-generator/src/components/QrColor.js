import React, { useState } from 'react';
import ChipColor from './ChipColor';
import { Box } from '@mui/material';

export default function QrColor({ setColor }) {
  const [chosenColor, setChosenColor] = useState('');
  

  return (
    <div>
      <p>Choose color</p>
      <Box >
        <ChipColor onColorChange={setColor} />
      </Box>
    </div>
  );
}