import React from 'react';
import { Box, Typography } from '@material-ui/core';

import AppBar from './components/AppBar';

import useStyles from './useStyles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar />
      <Box className={classes.layoutWrapper}>
        <Typography>left sidebar</Typography>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
