import React, { useState } from 'react';
import ChipColor from './ChipColor';
import { Box } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';

export default function QrColor({ setColor }) {
  const [chosenColor, setChosenColor] = useState('');
  

  return (
    <div>
      <Accordion sx={{ border: "solid 2px #0277bd ", padding:"1em" }}>
    <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#0277bd' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         SET COLOR
        </AccordionSummary>
        <AccordionDetails>
            <ChipColor onColorChange={setColor} />
        </AccordionDetails>
        </Accordion>
        </div>
       
  );
}