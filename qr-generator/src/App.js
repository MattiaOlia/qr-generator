import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AnimationComp from "./AnimationComp";
import theme from "./theme";
import InputTabs from "./components/InputTabs";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
     
      <Box
        sx={{
          m: "1em",
          textAlign: "left",
          color: theme.palette.secondary.main, // Usa il colore di secondo livello dal tema
        }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        border={"solid red"}
      >
       <Box my={2} display={"flex"} alignItems={"center"}><Typography variant="h1">QR</Typography><Typography variant="h2">GENERATOR</Typography></Box> 
        <Box
          sx={{
            height: "auto",
            margin: "0 auto",
            width: "100%",
            
            
          }}
        >
          <InputTabs />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
