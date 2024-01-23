import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button} from "@mui/material";

import Textfield from "./Textfield"
import Qr from './Qr';
import { useSelector, useDispatch } from 'react-redux';
import { voidInputValue } from "../redux/action";
import { updateShow } from '../redux/action';

export default function TabsUrl() {
  const [isCancelClicked, setIsCancelClicked] = React.useState(false)
    
    const websitePath = useSelector((state) => state.input.inputs.input1)
    const shown = useSelector((state)=> state.input.show)
    const fullUrl = websitePath &&  websitePath.startsWith('www.')
    ?`https://${websitePath}`
    : websitePath;

    
    
    const usedispatch = useDispatch()

   
    
    const handleShow = () => {
      setIsCancelClicked(false);
      usedispatch(updateShow(true));
     
    };

    return (
        
  
    <Box
        display={"flex"}
        
        spacing={2}
        justifyContent={"center"}
        gap={5}
        border={"solid blue"}
        flexDirection={"column"}

      >
        <Textfield inputName={"input1"} isCancelClicked={isCancelClicked} setIsCancelClicked={setIsCancelClicked}/>
        
        <Box
            container
            p={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            border={"solid green"}
            flexDirection={"column"}
            
          > 
          <Button
          
          color={"secondary"}
          size="large"
          variant="outlined"
          onClick={handleShow}
        >
          Create QR CODE
        </Button>
    
            <Qr value={fullUrl} show={shown}/>
      </Box>
      
      </Box>
      
    )
}