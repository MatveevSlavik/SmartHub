import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import MainQuestionPreview from './components/MainQuestionPreview/MainQuestionPreview';
import useStyles from './useStyles';
// import MainQuestion from './components/MainQuestion/MainQuestionPreview';

const App = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.wrapper} container>
      <Grid xs={12} item>
        <Typography className={classes.title}>
          Все вопросы
        </Typography>
        </Grid>
        <Box className={classes.mainButtons}>
          <Button className={classes.mainButtons} variant="outlined">Новые вопросы</Button>
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
  );
};

export default App;
