import React from 'react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import { Button } from '@mui/material';

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
      <h1>Download</h1>
      <Button onClick={() => handleDownload('png')}>Download as PNG</Button>
      <Button onClick={() => handleDownload('jpeg')}>Download as JPEG</Button>
      <Button onClick={() => handleDownload('svg')}>Download as SVG</Button>
    </div>
  );
}