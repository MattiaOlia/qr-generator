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
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
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
  const usedispatch = useDispatch ()
  const handleChange = (event, newValue) => {
    usedispatch(voidInputValue("input1","input2"))
    usedispatch(updateShow(false))
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100' }} display={"flex"}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', border:"solid green" }}>
        <Tabs value={value} onChange={handleChange} aria-label="Inputs">
          <Tab label="URL" {...a11yProps(0)} />
          <Tab label="SMS" {...a11yProps(1)} />
          <Tab label="EMAIL" {...a11yProps(2)} />
          <Tab label="PHONE" {...a11yProps(3)} />
          <Tab label="WI-FI" {...a11yProps(4)} />
        </Tabs>
      
      <CustomTabPanel value={value} index={0}>
          <Box  display={"flex"} flexDirection={"column"}>
            <TabsUrl />
          </Box> 
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      
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
  );
}