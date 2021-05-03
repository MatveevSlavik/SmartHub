import React from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Grid, TextField } from '@material-ui/core';

import { searchQuestions } from '../../../../store/actions/questionActions';

import useStyles from './useStyles';

const SearchBar = () => {
  const { push } = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSearch = debounce(({ target: { value } }) => {
    searchQuestions(value).then((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: data });
    });
  }, 500);

  return (
    <Grid container className={classes.wrapper}>
      <Grid item md={9}>
        <TextField
          className={classes.searchField}
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleSearch}
          placeholder="Найти вопрос,ответ,тег или пользователя"
          inputProps={{ className: classes.searchInput }}
        />
      </Grid>
      <Grid container justify={'center'} item md={3}>
        <Button
          onClick={() => push('/create-question')}
          className={classes.buttonQuestion}
          variant="contained"
        >
          Задать вопрос
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
