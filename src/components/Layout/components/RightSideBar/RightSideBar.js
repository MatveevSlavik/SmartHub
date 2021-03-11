import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const RightSideBar = () => {
  const classes = useStyles();

  return (
    <Grid item md={4} className={classes.wrapper}>
      <Typography>Реклама</Typography>
    </Grid>
  );
};

export default RightSideBar;
