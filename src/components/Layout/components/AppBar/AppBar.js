import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const AppBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h6" className={classes.logo}>SmartHub</Typography>
    </Box>
  );
};

export default AppBar;
