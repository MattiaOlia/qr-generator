import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import Box from '@mui/material/Box';
import QrColor from './QrColor';
import QrDownload from './QrDownload';

export default function Qr(props) {
  const qrCodeRef = useRef(null);
  const [color, setColor] = useState('black');

  return (
    <div>
      <Box
        p={3}
        border={'solid red'}
        sx={{
          backgroundColor: '#fff',
          width: '50%',
          borderRadius: '20px',
        }}
      >
        {props.show && props.value && (
          <QRCode
            ref={qrCodeRef}
            size={170}
            value={props.value}
            title={props.value}
            bgColor={'white'}
            fgColor={color}
          />
        )}
        <Box>
          <QrColor setColor={setColor} />
        </Box>
        <Box>
          <QrDownload qrCodeRef={qrCodeRef} /> {/* Passa la ref come prop */}
        </Box>
      </Box>
    </div>
  );
}