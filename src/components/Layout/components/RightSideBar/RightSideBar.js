import React from 'react';

import { Box, Divider, Grid, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import SidebarQuestion from '../../../SidebarQuestion/SidebarQuestion';

const RightSideBar = () => {
  const classes = useStyles();

  return (
    <Grid item md={4} className={classes.wrapper}>
      <Box className={classes.rightBarQuestion}>
        <Typography>Самое интересное за 24 часа</Typography>
        <Divider className={classes.divider} />
        <SidebarQuestion title="Стоит ли использовать везде GraphQL" />
        <SidebarQuestion answer="1 ответ" />
        <Divider className={classes.divider} />
        <SidebarQuestion title="Стоит ли использовать везде GraphQL" />
        <SidebarQuestion answer="1 ответ" />
      </Box>
    </Grid>
  );
};

export default RightSideBar;
