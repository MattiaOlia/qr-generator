import React from 'react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import { Button } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';

export default function QrDownload({ qrCodeRef }) {
  const handleDownload = (format) => {
    let downloadFunction;

    switch (format) {
      case 'png':
        downloadFunction = toPng;
        break;
      case 'jpeg':
        downloadFunction = toJpeg;
        break;
      case 'svg':
        downloadFunction = toSvg;
        break;
      default:
        return;
    }

    downloadFunction(qrCodeRef.current)
      .then((dataUrl) => {
        saveAs(dataUrl, `qrcode.${format}`);
      })
      .catch((error) => {
        console.error(`Error generating QR code image in ${format} format:`, error);
      });
  };

  return (
    <div>
        <Accordion sx={{ border: "solid 2px #0277bd ", padding:"1em" }}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon sx={{ color: '#0277bd' }} />}
  aria-controls="panel1-content"
  id="panel1-header"
>
DOWNLOAD
</AccordionSummary>
<AccordionDetails sx={{ gap: 2 }}>
<Button variant="outlined" onClick={() => handleDownload('png')} sx={{ marginRight: 2 }}>
    PNG
  </Button>
  <Button variant="outlined" onClick={() => handleDownload('jpeg')} sx={{ marginRight: 2 }}>
    JPEG
  </Button>
  <Button variant="outlined" onClick={() => handleDownload('svg')}>
    SVG
  </Button>
</AccordionDetails>
</Accordion>
    </div>


  );
}