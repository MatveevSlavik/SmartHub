import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

import useStyles from './useStyles';

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper}>
      <Grid item md={9}>
        <TextField
          className={classes.searchField}
          variant="outlined"
          size="small"
          fullWidth
          placeholder='Найти вопрос,ответ,тег или пользователя'
          inputProps={{className: classes.searchInput}}
        />
      </Grid>
      <Grid container justify={'center'} item md={3}>
        <Button className={classes.but} variant="contained">
          Задать вопрос
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
