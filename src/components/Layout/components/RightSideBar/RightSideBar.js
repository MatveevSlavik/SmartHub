import React from 'react';

import { Box,  Grid, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import SidebarQuestion from '../../../SidebarQuestion/SidebarQuestion';

const RightSideBar = () => {
  const classes = useStyles();

  return (
    <Grid item md={4} className={classes.wrapper}>
      <Box className={classes.rightBarQuestion}>
        <Typography className={classes.title} variant="button" paragraph>Самое интересное за 24 часа</Typography>
        <SidebarQuestion title="Стоит ли использовать везде GraphQL" answer="1 ответ"/>
        <SidebarQuestion title="Стоит ли использовать везде GraphQL" answer="1 ответ"/>
      </Box>
    </Grid>
  );
};

export default RightSideBar;
