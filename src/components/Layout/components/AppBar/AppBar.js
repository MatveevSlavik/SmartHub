import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const AppBar = () => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <Box className={classes.wrapper}>
      <Box maxWidth={1400} width="100%" margin="0px auto">
        <Typography
          variant="h6"
          className={classes.logo}
          onClick={() => push('/')}
        >
          SmartHub
        </Typography>
      </Box>
    </Box>
  );
};

export default AppBar;
