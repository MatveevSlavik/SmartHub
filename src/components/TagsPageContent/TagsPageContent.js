import { Divider, Grid, Grow, List, ListItemText, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../../store/actions/tagsActions';
import useStyles from './useStyles';

const TagsPageContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { tags } = useSelector((state) => state.tagsData);
  console.log(tags);

  useEffect(() => {
    getTags()
      .then((snap) => {
        const data = snap.docs.map((doc) => doc.data());
        dispatch({ type: 'FETCH_TAGS_SUCCESS', payload: data });
      })
      .catch((_err) => {
        console.log('er');
      });
  }, [dispatch]);

  return (
    <Grid className={classes.wrapper} container item>
      <Typography className={classes.title}>Все теги</Typography>
      
      {tags.map((value) => {
        const { title } = value;
        return (
          <Grid xs={4}>
            <List className={classes.ul}>
              <ListItemText className={classes.language}>
              {title}
              </ListItemText>
              <Divider/>
              <Typography className={classes.question}>---вопросов</Typography>
            </List>
          </Grid>
          
        );
      })}
    </Grid>
  );
};

export default TagsPageContent;
