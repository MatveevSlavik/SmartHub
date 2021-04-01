import React from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './useStyles';

const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} component="aside">
      <Button
        startIcon={<AccountCircleIcon  />}
        className={classes.authBut}
      >
        Войни на сайт
      </Button>
      <Divider  className={classes.divider}/>
      {/* <AccountCircleIcon className={classes.leftIcons} /> */}
      <Button className={classes.LeftButtons}>Все вопросы</Button>
      {/* <AccountCircleIcon className={classes.leftIcons} /> */}
      <Button className={classes.LeftButtons}>Все теги</Button>
      {/* <AccountCircleIcon className={classes.leftIcons} /> */}
      <Button className={classes.LeftButtons}>Пользователи</Button>
    </Box>
  );
};

export default LeftSideBar;
