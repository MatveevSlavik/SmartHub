import { Divider, Grid, List, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTags } from '../../store/actions/tagsActions';
import useStyles from './useStyles';

const TagsPageContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { tags } = useSelector((state) => state.tagsData);

  useEffect(() => {
    getTags().then((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      dispatch({ type: 'FETCH_TAGS_SUCCESS', payload: data });
    });
  }, [dispatch]);

  return (
    <Grid className={classes.wrapper} container item>
      <Typography className={classes.title}>Все теги</Typography>

      {tags.map((value) => {
        const { title, id } = value;

        return (
          <Grid item xs={4} key={id}>
            <List className={classes.ul}>
              <Link className={classes.language} to={`/questions?tag=${title}`}>
                <Typography style={{ fontWeight: 'bold' }}>{title}</Typography>
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

export default TagsPageContent;
