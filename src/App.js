import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import MainQuestionPreview from './components/MainQuestionPreview/MainQuestionPreview';
import useStyles from './useStyles';
// import MainQuestion from './components/MainQuestion/MainQuestionPreview';

const App = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12}>
        <Box width="100%" height={1500} bgcolor="white">
          <Typography className={classes.mainTitle}>Все вопросы</Typography>
          <Button className={classes.mainButtons} variant="outlined">
            Новые вопросы
          </Button>
          <Button className={classes.mainButtons} variant="outlined">Без ответа</Button>
          <Grid container>
            <Box className={classes.wrapQuestion}>
              <Grid item md={9}>
                <MainQuestionPreview  language="python" />
                <MainQuestionPreview
                  title="ошибка в использовании готовой Keras модели нейронной сети"
                />
                <MainQuestionPreview hours="22 часа назад" />
                <MainQuestionPreview watched="65 просмотров"/>
              </Grid>
            </Box>
            <Grid className={classes.answers} item md={3}>
              <MainQuestionPreview answer="1 ответ" />
            </Grid>
          </Grid>
          <Divider className={classes.divider}/>
          <Grid container>
            <Box className={classes.wrapQuestion}>
              <Grid item md={9}>
                <MainQuestionPreview language="python" />
                <MainQuestionPreview
                  title="ошибка в использовании готовой Keras модели нейронной сети"
                />
                <MainQuestionPreview hours="22 часа назад" />
                <MainQuestionPreview watched="65 просмотров"/>
              </Grid>
            </Box>
            <Grid className={classes.answers} item md={3}>
              <MainQuestionPreview answer="1 ответ" />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      
    </Grid>
  );
};

export default App;
