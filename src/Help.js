import React from 'react';
import './Help.css'; 
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className='help'
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
         <NavigationMeniu/>
      <Tabs
        orientation="vertical"
        variant="scrollable"      
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Tab One" {...a11yProps(1)}  />
        <Tab label="Tab Two" {...a11yProps(1)} />
        <Tab label="Tab Three" {...a11yProps(2)} />
        <Tab label="Tab Four" {...a11yProps(3)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
        Details tab one
      </TabPanel>
      <TabPanel value={value} index={1}>
      Details tab two
      </TabPanel>
      <TabPanel value={value} index={2}>
      Details tab three
      </TabPanel>
      <TabPanel value={value} index={3}>
      Details tab four
      </TabPanel>
     
    </div>
  );
}
