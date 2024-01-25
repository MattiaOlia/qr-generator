import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import asterisco2 from '../asterisco2.svg';
import Textfield from './Textfield';
import Qr from './Qr';
import { useSelector, useDispatch } from 'react-redux';
import { updateShow } from '../redux/action';

export default function TabsUrl() {
  const [isCancelClicked, setIsCancelClicked] = React.useState(false);
  const websitePath = useSelector((state) => state.input.inputs.input1);
  const shown = useSelector((state) => state.input.show);
  const fullUrl = websitePath && websitePath.startsWith('www.') ? `https://${websitePath}` : websitePath;
  const dispatch = useDispatch();

  const handleShow = () => {
    setIsCancelClicked(false);
    dispatch(updateShow(true));
  };

  return (
    <Box
      display={'flex'}
      justifyContent={{ xs: 'center', lg: 'space-evenly' }}
      flexDirection={{ xs: 'column', lg: 'row' }}
      sx={{
        transform:  { xs: "" , lg: 'scale(0.8)' }, 
        transformOrigin: 'top center',
        maxWidth: { xs: 350, sm: '100%' },
        margin: '0 auto',
      }}
      gap={2}
      width={'100%'}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: { xs: 'space-between', lg: 'flex-start' },
          margin: { xs: '', lg: '3em auto' },
        }}
        width={'100%'}
        mt={4}
        pb={12}
      >
        <Textfield inputName={'input1'} isCancelClicked={isCancelClicked} setIsCancelClicked={setIsCancelClicked} textPlaceholder={"Insert your URL"} />
        <Box
          p={1}
          display={'flex'}
          alignItems={'center'}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          mt={{ xs: 2, md: '22.5em' }}
        >
          <Button
            color={'secondary'}
            variant="outlined"
            size="large"
            onClick={handleShow}
            sx={{
              display: 'flex',
              width: { xs: 300, sm: 400 },
              border: 'solid 2px',
              borderRadius: '20px',
              m: { xs: '1em auto', md: '0 1em' },
              p: '1.5em',
              color: 'white',
            }}
          >
            Create QR CODE
          </Button>
        </Box>
        <Box
      display={{ xs: "none" }}
      justifyContent={'left'}
      
      width={'200px'}
      alignSelf={'flex-start'}
      mt={4}
      sx={{
        '@keyframes rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        animation: 'rotate 50s linear infinite', // Imposta la durata e lo stile di animazione desiderati
      }}
    >
      <img src={asterisco2} style={{ width: '100%' }} alt="Rotating Asterisk" />
    </Box>
      </Box>
      <Box>
        <Qr value={fullUrl} show={shown} />
      </Box>
    </Box>
  );
}