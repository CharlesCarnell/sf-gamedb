

import { useState, useEffect } from 'react'

import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Box,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import UserProfileForm from './Forms/UserProfileForm';

import {
  // ReviewForm,
} from '../../components';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={ value !== index }
    { ...other }
  >
    { value === index && (
      <Box sx={ { p: 3 } }>
        { children }
      </Box>
    ) }
  </div>
);

export default function Account({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 4 }>
          <Box sx={ { width: '100%' } }>
            <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
              <Tabs value={ activeTab } onChange={ handleTabChange } orientation="vertical">
                <Tab label="User Profile" id="1" />
                <Tab label="Security" id="2" />
                <Tab label="Notifications" id="3" />
              </Tabs>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={ 8 }>
          <TabPanel value={ activeTab } index={ 0 }>
            <UserProfileForm />
          </TabPanel>
          <TabPanel value={ activeTab } index={ 1 }>
            Security Form
          </TabPanel>
          <TabPanel value={ activeTab } index={ 2 }>
            Notifications Form
          </TabPanel>
        </Grid2>
      </Grid2>
    </>
  );
}