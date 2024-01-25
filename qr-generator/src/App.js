import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AnimationComp from "./AnimationComp";
import theme from "./theme";
import InputTabs from "./components/InputTabs";
import "./App.css"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
     
      <Box  
      className="app-container"
        sx={{
          margin:"0 auto",
          maxWidth: { xs: 350, sm:1200 },
          textAlign: "left",
          color: theme.palette.secondary.main, // Usa il colore di secondo livello dal tema
        }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        
        p={0}
        
      >
       <Box mt={{ xs: 1}} display={"flex"} alignItems={"center"}><Typography fontSize={{ xs: "2rem", lg: "4rem" }} fontWeight={{ xs: 400, lg: 600 }}>QR</Typography><Typography variant="h2">GENERATOR</Typography></Box> 
        <Box
          sx={{
            height: "auto",
            padding: "0",
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
