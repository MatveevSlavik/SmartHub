import { Box, Grid } from '@material-ui/core';
import React from 'react';

const App = () => {
  return (
    <Grid container>
      <Grid item md={12}>
        <Box width="100%" height={200} bgcolor="green" />
        <Box width="100%" height={1500} bgcolor="#444" />
      </Grid>
    </Grid>
  );
};

export default App;
