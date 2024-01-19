import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Textfield from "./Textfield"
import Qr from './Qr';
import { useSelector, useDispatch } from 'react-redux';
import { voidInputValue } from "../redux/action";

export default function TabsUrl() {
    const [isCancelClicked, setIsCancelClicked] = React.useState(false)
    const [isShowClicked, setIsShowClicked] = React.useState(false)
    const websitePath = useSelector((state) => state.input.inputs.input1)
    
    const fullUrl = websitePath &&  websitePath.startsWith('www.')
    ?`https://${websitePath}`
    : websitePath;
    
    const usedispatch = useDispatch()

   const handleCancel = () =>{
    
       usedispatch(voidInputValue("input1", "input2"))
       setIsCancelClicked(true)
       setIsShowClicked(false)
    }

    const handleShow = () =>{
        setIsShowClicked(true)
    }
   
    return (
        <Box
        container
        component="form"
        sx={{
          "& > :not(style)": { m: 1, Width: "80%" },
          padding: "2em",
          display: "flex",
          flexDirection: "column",
          
          borderRadius: "20px",
        }}
        noValidate
        autoComplete="on"
        m={1}
      >
    <Box
        display={"flex"}
        container
        spacing={0}
        justifyContent={"center"}
        sx={{ width: "96%" }}
        gap={1}
        border={"solid red"}
      >
        <Textfield inputName={"input1"} isCancelClicked={isCancelClicked}/>
        <Button
          sx={{ minHeight: "100%", width: "50%" }}
          color={"secondary"}
          size="large"
          variant="outlined"
          onClick={handleCancel}
        >
          <CancelIcon />
        </Button>
        <Box
            container
            p={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            border={"solid"}
           
          >
    
            <Qr value={fullUrl} show={isShowClicked}/>
      </Box>
      <Button
          sx={{ minHeight: "100%", width: "50%" }}
          color={"secondary"}
          size="large"
          variant="outlined"
          onClick={handleShow}
        >
          Create QR CODE
        </Button>
      </Box>
      </Box>
    )
}