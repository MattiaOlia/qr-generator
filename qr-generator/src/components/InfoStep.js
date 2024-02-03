import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const InfoStep = ({number,title,desc}) => {
  return (
    <Box
      gap={2}
      display={"flex"}
      alignItems={"center"}
      flexDirection={{xs:"column",md:"row"}}
      maxWidth= {{ xs: 350, sm: 450, md:900}}
    >
       <Box display={"flex"} justifyContent={"center"} >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          backgroundColor: '#0277bd',
          color: 'white',
          marginRight: { xs: 0, lg: '20px' }, 
          
        }}
      >
        <Typography variant="h2">{number}</Typography>
      </Box>
      </Box>
      <Box color={'white'} display={"flex"} flexDirection={"column"} alignItems={"left"} mt={2} textAlign={"left"}>
      <Typography
      sx={{
        fontSize: { xs: 'h6.fontSize', lg: 'h5.fontSize' },
      }}
    >
      {title}
    </Typography>
        <Typography sx={{
        fontSize: { xs: 'body2.fontSize', lg: 'body1.fontSize' },
      }}>
         {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoStep;