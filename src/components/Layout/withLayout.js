import React from 'react';
import { Box } from '@material-ui/core';

import AppBar from './components/AppBar';
import LeftSideBar from './components/LeftSideBar';
import SearchBar from './components/SearchBar';
import RightSideBar from './components/RightSideBar';
import useProtectedRoute from '../../hooks/useProtectRoute';

import useStyles from './useStyles';

const withLayout = (children) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useProtectedRoute();

  return (
    <Box className={classes.root}>
      <AppBar />
      <Box className={classes.layoutWrapper}>
        <LeftSideBar />
        <Box className={classes.childrenWrapper} component="section">
          <SearchBar />
          <Box
            display="flex"
            alignItems="start"
            bgcolor="#fff"
            height="100%"
            style={{ overflowY: 'auto' }}
          >
            {children}
            <RightSideBar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withLayout;
