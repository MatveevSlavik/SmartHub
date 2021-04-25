import { Box, Button, Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../store/actions/questionActions';
import MainQuestionPreview from '../MainQuestionPreview';
import useStyles from './useStyles';

const QuestionPageContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questionsData);

  useEffect(() => {
    fetchQuestions().then((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: data });
    });
  }, [dispatch]);

  return (
    <Grid className={classes.wrapper} container>
      <Grid xs={12} item>
        <Typography className={classes.title} paragraph>
          Все вопросы
        </Typography>
      </Grid>
      <Box>
        <Button className={classes.newQuestion} variant="outlined">
          Новые вопросы
        </Button>
        <Button className={classes.noAnswer} variant="outlined">
          Без ответа
        </Button>
      </Box>
      {questions.map(({ id, question, tags, createdAt, answers }) => {
        const language = tags.map(({ title }) => title).join(', ');
        return (
          <Grid xs={12} item>
            <MainQuestionPreview
              key={id}
              language={language}
              title={question}
              hours={moment(createdAt).fromNow()}
              answer={answers || 0}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default QuestionPageContent;
