import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import asterisco3 from "../asterisco3.svg";
import Logo from "./Logo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={{ xs: "column", md: "row" }}
        margin={"0 auto"}
        sx={{ maxWidth: { xs: 350, sm: 900 } }}
      >
        <Box
          sx={{
            display: 'flex',
            margin: '0 auto',
          }}
        >
          <Box
            sx={{
              '@media (min-width:900px)': {
                transform: 'rotate(-90deg) translateY(260px)',
              },
              width: { xs: 300, md: 300 },
            }}
          >
            <img src={asterisco3} style={{ width: '100%' }} alt="Rotating Asterisk" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          flexDirection={"column"}
          align={"center"}
          
          gap={4}
          minHeight={500}
          sx={{
            height: "100%",
            borderTop: { xs: "solid 5px ", md: "none" },
            borderLeft: { xs: "none", md: "solid 5px" },
            borderRadius: "1px",
            pt: "1em",
            pl: { xs: "0", md: "2em" },
            margin: "0 auto",
            marginBottom: "4em",
            zIndex: "5"
          }}
        >
 
            <Logo />
            <Box display={"flex"} sx={{ width: "100%" }} justifyContent={"left"} gap={5}  >
              <Box display="flex" justifyContent="left" sx={{  textAlign: "left" }} flexDirection="column" pl={2} alignItems="start" >
                <Box mt={0}>
                  <Typography  variant="body1" sx={{ fontSize: 20, textDecoration: "underline", transition: 'fade in 0.3s ease', '&:hover': { color: 'white' } }}>
                    <ScrollLink
                      to="inputs-section"
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass="active"
                      style={{ textDecoration: 'none', color: 'inherit', cursor: "pointer" }}
                      offset={-100}
                    >
                      Home
                    </ScrollLink>
                  </Typography>
                  <Typography  variant="body1" sx={{ fontSize: 20, textDecoration: "underline", transition: 'fade in 0.3s ease', '&:hover': { color: 'white' } }}>
                    <ScrollLink
                      to="info-section"
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass="active"
                      style={{ textDecoration: 'none', color: 'inherit', cursor: "pointer" }}
                      offset={-100}
                    >
                      Projects
                    </ScrollLink>
                  </Typography>
                  <Typography  variant="body1" sx={{ fontSize: 20, textDecoration: "underline", transition: 'fade in 0.3s ease', '&:hover': { color: 'white' } }}>
                    <ScrollLink
                      to="footer-section"
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass="active"
                      style={{ textDecoration: 'none', color: 'inherit', cursor: "pointer" }}
                      offset={-100}
                    >
                      About
                    </ScrollLink>
                  </Typography>
                </Box>
              </Box>

          
          </Box>

          <Box>
            
            <Box display={"flex"} flexDirection={"column"} textAlign={"left"} justifyContent={"center"}>
              <Typography variant='body1'>Feel free to get in touch if you have any questions or inquiries.</Typography>
              <Box pb={2} display={"flex"} flexDirection={"row"} justifyContent={"left"}>
                <IconButton
                  sx={{ color: "#0277bd" }}
                  component="a"
                  href="https://www.linkedin.com/in/mattiaolia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: "3rem", transition: 'fade in 0.3s ease', '&:hover': { color: 'white' } }} />
                </IconButton>
                <IconButton
                  sx={{ color: "#0277bd" }}
                  component="a"
                  href="https://github.com/MattiaOlia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon sx={{ fontSize: "3rem", transition: 'fade in 0.3s ease', '&:hover': { color: 'white' } }} />
                </IconButton>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} textAlign={"left"} justifyContent={"center"}>
              <Typography variant='body1'>Feel free to get in touch if you have any questions or inquiries.</Typography>
              <Typography>
                You can email me at:<br />
              </Typography>
              <a style={{ textDecoration: "underline", color: "#0277bd" }} href="mailto:mattiaolia97@gmail.com">
                <Typography sx={{
                  transition: 'fade in 0.3s ease',
                  '&:hover': {
                    color: 'white'
                  }
                }} variant='h6'>mattiaolia97@gmail.com</Typography>
              </a>
              <Typography variant='body1'><br /> Designed and developed with ♡ by: <br /> Mattia Olia<br />
                2023.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;