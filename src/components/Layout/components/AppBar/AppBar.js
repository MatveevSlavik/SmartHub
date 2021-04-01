import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const AppBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box maxWidth={1400} width="100%" margin="0px auto">
        <Typography variant="h6" className={classes.logo}>
          SmartHub
        </Typography>
      </Box>
    </Box>
  );
};

export default AppBar;
