import React from 'react';
import { Box } from '@material-ui/core';

import useStyles from './useStyles';

const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} component="aside">
      test
    </Box>
  );
};

export default LeftSideBar;
