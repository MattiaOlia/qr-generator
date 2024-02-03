import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function InfoAccordation() {
  return (
    <Box mt={2} mb={10}>
      <Accordion sx={{ border: "solid 2px #0277bd ", padding:"1em", color:"white"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What is the purpose of the QR Code generator?
        </AccordionSummary>
        <AccordionDetails>
        The QR Code generator is a specialized tool designed for creating a variety of QR Codes to serve different purposes. Whether you intend to open a website, access a PDF file, enjoy music, watch YouTube videos, store image files, or connect to a WiFi network, our generator offers diverse options. Explore the various types of QR Codes available and tailor them to suit your specific needs.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: "solid 2px #0277bd ", padding:"1em", color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What kind of information can be stored in a QRcode?
        </AccordionSummary>
        <AccordionDetails>
        QR Codes exhibit remarkable versatility by accommodating a range of information based on your requirements. They can store a URL, simplifying webpage access through a quick scan. Additionally, QR Codes can store contact details, eliminating the need for manual entry of names, phone numbers, and email addresses when saving contacts to your phone.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: "solid 2px #0277bd ", padding:"1em", color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What is the validity period of Static QR Codes, and under what circumstances might they appear to "expire"?
        </AccordionSummary>
        <AccordionDetails>
        Static QR Codes remain valid indefinitely and do not come with an expiration date. The only scenario in which a Static QR Code might seem to "expire" is if the linked content is altered or removed, rendering the QR Code unscannable. As long as the underlying information remains accessible, the Static QR Code will continue to be functional.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: "solid 2px #0277bd ", padding:"1em", color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          What options are available for customizing the color of a QR Code, and how many colors can be chosen from using the color picker?
        </AccordionSummary>
        <AccordionDetails>
        Absolutely! You have the flexibility to choose any color you prefer for your QR Code. Whether it's matching your brand colors, incorporating your company's theme, or simply selecting a color that you find visually appealing, you can customize the QR Code to align with your preferences. The color picker provides a wide range of options, allowing you to explore and select from the vast spectrum of 16,777,216 colors in the #RRGGBB notation. Feel free to experiment and find the perfect color for your QR Code!
        </AccordionDetails>
    
      </Accordion>
    </Box>
  );
}