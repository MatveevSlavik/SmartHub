import { Divider, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';

const QuestionForm = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container>
      <Grid xs={12} item>
        <Typography>Новый вопрос</Typography>
        <Divider />
        <Typography>Суть вопроса</Typography>
        <Typography>
          Сформулируйте вопрос так, чтобы сразу было понятно, о чём речь.
        </Typography>
        <TextField
          className={classes.searchField}
          variant="outlined"
          size="small"
          fullWidth
          inputProps={{ className: classes.searchInput }}
        />
        <Typography>Теги вопроса</Typography>
        <Typography>
          Укажите от 1 до 5 тегов - предметных областей, к которым вопрос
          относится.
        </Typography>
        <TextField
          className={classes.searchField}
          variant="outlined"
          size="small"
          fullWidth
          inputProps={{ className: classes.searchInput }}
        />
      </Grid>
    </Grid>
  );
};

export default QuestionForm;
