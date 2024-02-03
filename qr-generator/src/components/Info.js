import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoStep from "./InfoStep";
import theme from "../theme";
import asterisco3 from "../asterisco3.svg"
import InfoAccordation from "./InfoAccordation";



export default function Info() {
    return (
        <ThemeProvider theme={theme}>
            <Box display={"flex"} flexDirection={"column"}  margin={"0 auto"} sx={{maxWidth: { xs: 350, sm:900 }}}>
            <Box
display={"flex"}
      justifyContent={'center'}
      width={'300px'}
      alignItems={'center'}
      margin={"0 auto"}
      marginRight={{xs:"",md:2}}
    >
      <img src={asterisco3} style={{ width: '100%' }} alt="Rotating Asterisk" />
    </Box>
            <Box display={"flex"} 
            flexDirection={"column"}
            alignItems={"center"}
            gap={4}
           
            sx={{
            width: "100%",
            borderTop:"solid 5px ",
            borderRadius:"1px",
            pt:"1em",
            margin:"0 auto",
            marginBottom:"4em"
          }}>
                
               <Typography variant="h4">Create your custom QR Code with Logo</Typography>
               <InfoStep number={"1"} title={"Set QR Content"} desc={"Select a content type at the top for your QR code (URL, Text, Email...) After selecting your type, you will see all available options. Enter all fields that should appear when scanning your QR code. Make sure everything you enter is correct because you can’t change the content once your QR code is printed."}/>
               <InfoStep number={"2"} title={"Fill in the details"} desc={"Enter all the information needed in the fields that appear. This could be a link, contact information, text or any other type of info. Once you’re done, select “Generate.”"}/>
               <InfoStep number={"3"} title={"Download the QR Code"} desc={"You may choose to have a standard black and white design or choose colors and frames to help you attract more scans. If not, proceed to download your finished Code."}/>
               </Box>
               <Box display={"flex"} 
            flexDirection={"column"}
            alignItems={"center"}
            gap={4}
            sx={{
            width: "100%",
            borderTop:"solid 5px ",
            borderRadius:"1px",
            pt:"1em",
            margin:"0 auto",
            marginBottom:"2em"
          }}>
             <Typography variant="h4">Create your custom QR Code with Logo</Typography>
             <InfoAccordation />
          </Box>
               </Box>
        </ThemeProvider>
       
    )
}

