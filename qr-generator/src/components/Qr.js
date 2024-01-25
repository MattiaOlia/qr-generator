import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import Box from '@mui/material/Box';
import QrColor from './QrColor';
import QrDownload from './QrDownload';
import SocialShare from './SocialShare';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Qr(props) {
  const qrCodeRef = useRef(null);
  const [color, setColor] = useState('black');

  return (
    <div>
      <Box m={2} sx={{ transform: 'translateY(-100px)' }} display={'flex'} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

      <Card mb={2} sx={{ width: "100%", minWidth: "300px", maxWidth: { xs: 350, sm: 400 }, bgcolor: "#0277bd",borderRadius:"50px"}}>
      
      <CardMedia sx={{display:"flex", justifyContent:"center",alignItems:"center", height:"300px", bgcolor:"white", border:"solid #0277bd 10px",borderRadius:"50px"  }} >
              {props.show && props.value && (
          <QRCode
            ref={qrCodeRef}
            size={250}
            value={props.value}
            title={props.value}
            bgColor={'white'}
            fgColor={color}
           
          />
          
        )}.
        </CardMedia>
        <CardContent sx={{
  backgroundImage: 'linear-gradient(to top, #adadad, #0277bd)', // Imposta i colori del gradiente
 
  marginTop:"0.5em"
}}>

</CardContent>

    </Card>
    <Box my={5} display={"flex"} flexDirection={"column"} gap={2} sx={{ width: "100%", minWidth: "300px", maxWidth: { xs: 350, sm: 400 }}}>
    <QrColor setColor={setColor} />
    <QrDownload qrCodeRef={qrCodeRef} /> 
    <SocialShare url={`https://http://localhost:3000/qrcode?value=${encodeURIComponent(props.value)}`} />
    </Box> 
       
        
       
        
      </Box>
    </div>
  );
}