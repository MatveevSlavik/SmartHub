import React from 'react';
import { Box } from '@material-ui/core';

import AppBar from './components/AppBar';
import LeftSideBar from './components/LeftSideBar';

import useStyles from './useStyles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar />
      <Box className={classes.layoutWrapper}>
      <LeftSideBar/>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
