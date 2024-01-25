import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabSms from "./TabSms";
import TabsUrl from './TabsUrl';
import { useDispatch } from 'react-redux';
import { updateShow, voidInputValue } from '../redux/action';
import TabEmail from "./TabEmail"
import TabPhone from './TabPhone';
import TabWifi from "./TabWifi"
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import { green } from '@mui/material/colors';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0} m={0} minWidth={"100%"}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InputTabs() {
  const [value, setValue] = React.useState(0);
  const usedispatch = useDispatch();
  
  const handleChange = (event, newValue) => {
    usedispatch(voidInputValue("input1", "input2"));
    usedispatch(updateShow(false));
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100' }}  alignItems={"flex-end"}>
      <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} sx={{ width: "100%", }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            
            width: "100%",
            borderTop:"solid 5px ",
            borderRadius:"1px",
  
           
            pt:"1em",
            maxWidth: { xs: 350, sm:900 },
            
          }}
        >
          <Tab label="URL"  sx={{
      "&.Mui-selected": {
        color: (theme) => theme.palette.secondary.main,
      }}} {...a11yProps(0)} />
          <Tab label="SMS" {...a11yProps(1)} />
          <Tab label="EMAIL" {...a11yProps(2)} />
          <Tab label="PHONE" {...a11yProps(3)} />
          <Tab label="WI-FI" {...a11yProps(4)} />
        </Tabs>
        <Box display={"flex"} flexDirection={"column"} width={"100%"} m={2}>
          <CustomTabPanel p={0} m={0} value={value} index={0}>
            <TabsUrl />
          </CustomTabPanel>
          <CustomTabPanel  p={0} m={0} value={value} index={1}>
            <TabSms />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TabEmail />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <TabPhone />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <TabWifi />
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
}