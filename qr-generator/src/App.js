import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveInputValue } from "./redux/action"; // Sostituisci con il percorso corretto delle tue azioni

import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";
import AnimationComp from "./AnimationComp";
import theme from "./theme";
import TabSms from "./components/TabSms";
import InputTabs from "./components/InputTabs";

const App = () => {
  const qrCodeRef = useRef(null);
  const dispatch = useDispatch();
 
  
  const handleDownload = () => {
    toPng(qrCodeRef.current)
      .then((dataUrl) => {
        saveAs(dataUrl, "qrcode.png");
      })
      .catch((error) => {
        console.error("Error generating QR code image:", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <AnimationComp />
      <Box
        sx={{
          m: 0,
          textAlign: "center",
          color: "#0277bd",
        }}
      >
        <h1>QR-CODE GENERATOR</h1>
        
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            width: "100%",
            border: "solid red",
            display: "flex",
            
          }}
        >   
          <InputTabs />
          
         
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default App;
