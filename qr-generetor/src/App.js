import "./App.css";
import QRCode from "react-qr-code";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Button, Container, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import CancelIcon from "@mui/icons-material/Cancel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { indigo } from "@mui/material/colors";

function App() {
  const [textValue, setTextValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [fgColor, setFgColor] = useState("black");
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "textValue") {
      setTextValue(value);
      setIsVisible(false);
    } else if (name === "bgColor") {
      setBgColor(value);
    } else if (name === "fgColor") {
      setFgColor(value);
    }
  }
  function handleClick() {
    setIsVisible((visible) => !visible);
    console.log("hadle clicked" + textValue);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setTextValue(event.target.value);
      setIsVisible((visible) => !visible);
    }
  }
  function handleClear() {
    setTextValue("");
    document.getElementById("outlined-basic").value = "";
    setIsVisible(false);
    console.log("clear");
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "	#F9F6EE",
      },
      secondary: {
        main: "#0277bd",
      },
      backgroundWhite: {
        main: "#F9F6EE",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          border: 1,
          m: 0,
          textAlign: "center",

          color: theme.palette.primary.contrastText,
        }}
      >
        <h1>QR CODE GENERATOR</h1>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            height: "100vh",
            maxWidth: 500,
            width: "100%",
          }}
        >
          <Box
            container
            mt={3}
            p={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              p={5}
              border={"solid"}
              sx={{
                backgroundColor: "#fff",
                width: "fit-content",
                borderRadius: "20px",
              }}
            >
              <QRCode
                size={200}
                value={`${textValue}`}
                title={`${textValue}`}
                bgColor={`${bgColor}`}
                fgColor={`${fgColor}`}
                style={{ visibility: isVisible ? "visible" : "hidden" }}
            /> 
            </Box>
          </Box>
          <Box
            container
            component="form"
            sx={{
              "& > :not(style)": { m: 1, Width: "80%" },
              padding: "2em",
              display: "flex",
              flexDirection: "column",
              backgroundColor: theme.palette.backgroundWhite.main,

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
            >
              <TextField
                id="outlined-basic"
                label="Insert your value"
                variant="outlined"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                name="textValue"
                sx={{
                  width: "400%",
                }}
              ></TextField>

              <Button
                sx={{ minHeight: "100%", width: "50%" }}
                color={"secondary"}
                size="large"
                variant="outlined"
                onClick={handleClear}
              >
                <CancelIcon />
              </Button>
            </Box>
            <FormControl sx={{ m: 10, minWidth: 130 }}>
              <InputLabel id="demo-simple-select-helper-label">
                BG color
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={bgColor}
                label="bgColor"
                name="bgColor"
                onChange={handleChange}
              >
                <MenuItem value="white">White</MenuItem>
                <MenuItem value={"red"}>Red</MenuItem>
                <MenuItem value={"green"}>Green</MenuItem>
                <MenuItem value={"blue"}>Blue</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 150 }} m={{ minWidth: 400 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Color
              </InputLabel>
              <Select
                color="secondary"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={fgColor}
                label="fgColor"
                name="fgColor"
                onChange={handleChange}
              >
                <MenuItem value="black">Black</MenuItem>
                <MenuItem value={"red"}>Red</MenuItem>
                <MenuItem value={"green"}>Green</MenuItem>
                <MenuItem value={"blue"}>Blue</MenuItem>
              </Select>
            </FormControl>
            <Button
              color="secondary"
              size="large"
              variant="outlined"
              onClick={handleClick}
            >
              {" "}
              generate a QR code
            </Button>
          </Box>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;