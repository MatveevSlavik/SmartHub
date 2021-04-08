import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import MainQuestionPreview from '../MainQuestionPreview/MainQuestionPreview';
import useStyles from './useStyles';

const QuestionPageContent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container>
      <Grid xs={12} item>
        <Typography className={classes.title} paragraph>
          Все вопросы
        </Typography>
      </Grid>
      <Box>
        <Button className={classes.mainButtons} variant="outlined">
          Новые вопросы
        </Button>
        <Button className={classes.mainButtons2} variant="outlined">
          Без ответа
        </Button>
      </Box>
      <Grid xs={12} item>
        <MainQuestionPreview
          language="python"
          title="Ошибка в использовании готовой Keras модели нейронной сети"
          hours="22 часа назад"
          watched="65 просмотров"
          answer="1 "
        />
      </Grid>
      <Grid xs={12} item>
        <MainQuestionPreview
          language="python"
          title="Ошибка в использовании готовой Keras модели нейронной сети"
          hours="22 часа назад"
          watched="65 просмотров"
          answer="1 "
        />
      </Grid>
    </Grid>
  )
};
export default QuestionPageContent;
