import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, Divider, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import useStyles from './useStyles';
import { logOut } from '../../../../store/actions/authActions';

const LeftSideBar = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        dispatch({ type: 'LOGIN_FAILED' });
        push('/');
      })
      .catch((_err) => {
        dispatch();
      });
  };

  return (
    <Box className={classes.wrapper} component="aside">
      {isLoggedIn ? (
        <>
          <Button
            className={classes.signIn}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            className={classes.usersMenu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          onClick={() => push('/login')}
          startIcon={<AccountCircleIcon />}
          className={classes.authButton}
        >
          Войти на сайт
        </Button>
      )}

      <Divider className={classes.divider} />
      <Button onClick={() => push('/questions')} startIcon={<LibraryBooksIcon />} className={classes.LeftButtons}>
        Все вопросы
      </Button>
      <Button onClick={() => push('/tags')} startIcon={<LocalOfferIcon />} className={classes.LeftButtons}>
        Все теги
      </Button>
      <Button onClick={() => push('/users')} startIcon={<PeopleAltIcon />} className={classes.LeftButtons}>
        Пользователи
      </Button>
    </Box>
  );
};

export default LeftSideBar;
