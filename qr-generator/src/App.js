import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "./theme";
import InputTabs from "./components/InputTabs";
import "./App.css";
import Logo from "./components/Logo";
import Info from "./components/Info";
import Footer from "./components/Footer";
import SpeedDialButton from "./components/SpeedDialButton";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="app-container"
        sx={{
          margin: "0 auto",
          maxWidth: { xs: 350, sm: 500, md: 800, lg: 1200 },
          textAlign: "left",
          color: theme.palette.secondary.main,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 0,
        }}
      >
        <Box
          width={"100%"}
          maxWidth={900}
          mt={{ xs: 1 }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ padding: "0.5em 0" }}
        >
          <Logo />
          <SpeedDialButton />
        </Box>

        <Box
         id="inputs-section"
          sx={{
            
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InputTabs />
          
          <Box
            id="info-section"
            sx={{
              transform: { lg: "translateY(-200px)" },
            }}
          >
            <Info />
          </Box>
         
          <Box id="footer-section"  sx={{
              transform: { lg: "translateY(-100px)" },
            }}
          >
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

