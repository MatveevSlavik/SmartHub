import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, Divider } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import useStyles from './useStyles';

const LeftSideBar = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Box className={classes.wrapper} component="aside">
      {isLoggedIn ? (
        'MENU'
      ) : (
        <Button
          onClick={() => push('/login')}
          startIcon={<AccountCircleIcon />}
          className={classes.authBut}
        >
          Войти на сайт
        </Button>
      )}

      <Divider className={classes.divider} />
      <Button startIcon={<LibraryBooksIcon />} className={classes.LeftButtons}>
        Все вопросы
      </Button>
      <Button startIcon={<LocalOfferIcon />} className={classes.LeftButtons}>
        Все теги
      </Button>
      <Button startIcon={<PeopleAltIcon />} className={classes.LeftButtons}>
        Пользователи
      </Button>
    </Box>
  );
};

export default LeftSideBar;
