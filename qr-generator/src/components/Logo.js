import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import asterisco1 from "../asterisco1.svg"

export default function Logo() {
  return (
    <Box width="100%" display={"flex"} alignItems={"center"}>
        
      <Typography
        variant="h1"
        fontSize={{ xs: '2.5rem', lg: '4rem' }}
        fontWeight={{ xs: 600, lg: 700 }}
      >
        QR
      </Typography>
      
      <Typography
        variant="h2"
        fontSize={{ xs: '1.25rem', lg: '2rem' }}
        fontWeight={{ xs: 400, lg: 500 }}
      >
        GENERATOR
      </Typography>
      <Box
          width={"50px"}
          marginLeft={"0.5em"}
      >
        <img src={asterisco1} style={{ width: '100%' }} alt="Rotating Asterisk" />
      </Box>
    </Box>
  )}