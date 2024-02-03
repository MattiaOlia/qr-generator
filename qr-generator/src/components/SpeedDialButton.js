import React, { useState } from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';// Assicurati di importare correttamente il componente SpeedDial
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/system'; // Modificato l'import
import useMediaQuery from '@mui/material/useMediaQuery';
import asterisco2 from "../asterisco2.svg"
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { SpeedDial } from '@mui/material';
import { Link as ScrollLink, Element } from "react-scroll";

const CustomSpeedDial = styled(SpeedDial)({
  '& .MuiFab-root': {
    backgroundColor: 'transparent',
    marginLeft: "3em",
    '&:hover': {
      backgroundColor: 'transparent',
    },
    boxShadow: 'none',
  },
});

export default function SpeedDialButton() {
  
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  if (isLargeScreen) {
  return (
    <Box  >
      <CustomSpeedDial
        ariaLabel="SpeedDial openIcon example"
        direction="left"
        icon={
          <div style={{ width: '100px', height: '100px', '@keyframes rotate': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
          animation: 'rotate 40s linear infinite', 
        }}>
            <img
              src={asterisco2}
              alt="Your Custom Image"
              style={{ width: '100%', height: '100%', borderRadius: '50%',transform: 'scale(1.3)' }}
            />
          </div>
        }
      >
        
        <SpeedDialAction key="Copy" icon={<Typography variant='h6' sx={{ '&:hover': {
      borderBottom:"solid",
    },}}><ScrollLink
    to="info-section"
    smooth={true}
    duration={500}
    spy={true}
    activeClass="active"
    style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
  >Info</ScrollLink></Typography>} />
        <SpeedDialAction key="Save" icon={<Typography variant='h6'  sx={{ '&:hover': {
      borderBottom:"solid",
    },}}><ScrollLink
    to="footer-section"
    smooth={true}
    duration={500}
    spy={true}
    activeClass="active"
    style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
  >Contact</ScrollLink></Typography>} />
      </CustomSpeedDial>
    </Box>
  );
} else {
  return (
    <React.Fragment>
      <Box >
      <CustomSpeedDial
        ariaLabel="SpeedDial openIcon example"
        direction="left"
        icon={
          <div style={{
            width: '50px',
            height: '50px',
            '@keyframes rotate': {
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
            },
            animation: 'rotate 40s linear infinite',
            
          }}>
            <img
              src={asterisco2}
              alt="Your Custom Image"
              style={{ width: '100%', height: '100%', borderRadius: '50%', transform: 'scale(1.3)' }}
            />
          </div>
        }
        onClick={toggleDrawer}
      />
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem>
            <Typography variant='h6'><ScrollLink
    to="info-section"
    smooth={true}
    duration={500}
    spy={true}
    activeClass="active"
    style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    onClick={toggleDrawer}
  >INFO</ScrollLink></Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6'><ScrollLink
    to="footer-section"
    smooth={true}
    duration={500}
    spy={true}
    activeClass="active"
    style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    onClick={toggleDrawer}
  >CONTACT</ScrollLink></Typography>
          </ListItem>
        </List>
      </Drawer>
      </Box>
    </React.Fragment>
  );
}
}



//import asterisco2 from "../asterisco2.svg"