import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import App from '../../../../App';

const RightSideBar = () => {
  const classes = useStyles();

  return (
      <Grid item md={3}>
        <Typography className={classes.wrapper} >Реклама</Typography>
      </Grid>
  );
};

export default RightSideBar;
