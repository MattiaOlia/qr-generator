import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChipColor from './ChipColor'; // Assicurati di importare correttamente il tuo componente ChipColor

export default function SocialShare({ url, setColor }) {
  return (
    <div>
      <Accordion sx={{ border: "solid 2px #0277bd ", padding:"1em" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#0277bd'}} />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
          SHARE
        </AccordionSummary>
        <AccordionDetails >
            <Button variant="outlined" sx={{ marginRight: 2 }}>
              <FacebookIcon />
            </Button>
            <Button variant="outlined" sx={{ marginRight: 2 }}>
              <TwitterIcon />
            </Button>
            <Button variant="outlined" sx={{ marginRight: 2 }}>
              <LinkedInIcon />
            </Button>
            <Button variant="outlined">
              <WhatsAppIcon />
            </Button>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}