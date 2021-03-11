import { Grid } from '@material-ui/core';
import React from 'react';
import RightSideBar from './components/Layout/components/RightSideBar';

const App = () => {
  return (
    <Grid container>
      <Grid item md={9} > 
        Main Content
      </Grid>
      {/* <Box height={2000}>main content</Box> */}
      <RightSideBar/>
    </Grid>
  );
};

export default App;
