import { Divider, Grid, List, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../store/actions/usersActions';
import useStyles from './useStyles';

const UsersPageContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.usersData);

  useEffect(() => {
    getUsers().then((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    });
  }, [dispatch]);

  return (
    <Grid className={classes.wrapper} container item>
      <Typography className={classes.title}>Пользователи</Typography>

      {users.map((value) => {
        const { nickname, id } = value;

        return (
          <Grid item xs={4} key={id}>
            <List className={classes.ul}>
              <Link className={classes.language}>
                <Typography style={{ fontWeight: 'bold' }}>{nickname}</Typography>
              </Link>
              <Divider />
              <Typography className={classes.question}>---вопросов</Typography>
            </List>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default UsersPageContent;
