import React from 'react';
import { Box } from '@material-ui/core';

import AppBar from './components/AppBar';
import LeftSideBar from './components/LeftSideBar';
import SearchBar from './components/SearchBar';
import RightSideBar from './components/RightSideBar';

import useStyles from './useStyles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar />
      <Box className={classes.layoutWrapper}>
        <LeftSideBar />
        <Box className={classes.childrenWrapper} component="section">
          <SearchBar />
          <Box display="flex" alignItems="start">
            {children}
            <RightSideBar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
