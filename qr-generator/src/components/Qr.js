import React, { useRef } from 'react';
import QRCode from 'react-qr-code';
import Box from '@mui/material/Box';

export default function Qr(props) {
  const qrCodeRef = useRef(null);

  return (
    <div>
      <Box
        p={3}
        border={'solid red'}
        sx={{
          backgroundColor: '#fff',
          width: '5em',
          borderRadius: '20px',
        }}
      >
        
        {props.show && props.value && <QRCode
          ref={qrCodeRef}
          size={170}
          value={props.value}
          title={`${props.textValue}`}
          bgColor={'white'}
          fgColor={`${props.fgColor}`}
         
        />}
      </Box>
    </div>
  );
}