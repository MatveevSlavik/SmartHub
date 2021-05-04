import { Box, Button, Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import { filter } from 'lodash';
import qs from 'querystring';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { fetchQuestions } from '../../store/actions/questionActions';
import MainQuestionPreview from '../MainQuestionPreview';
import useStyles from './useStyles';

const QuestionPageContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { replace } = useHistory();
  const { questions } = useSelector((state) => state.questionsData);

  const { tag } = qs.parse(search.replace('?', ''));

  useEffect(() => {
    fetchQuestions().then((snap) => {
      const data = snap.docs.map((doc) => doc.data());

      if (tag) {
        const filteredQuestions = data.filter(
          ({ tags }) => !!filter(tags, ['title', tag]).length,
        );
        dispatch({
          type: 'FETCH_QUESTIONS_SUCCESS',
          payload: filteredQuestions,
        });
      } else {
        dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: data });
      }
    });
  }, [dispatch, tag]);

  const handleClickNewQuestions = () => {
    replace({ search: '' });

    fetchQuestions(true).then((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: data });
    });
  };

  const handleClickWithoutAnswers = () => {
    const filteredData = filter(
      questions,
      ({ answers = [] }) => !answers.length,
    );

    dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: filteredData });
  };

  return (
    <Grid className={classes.wrapper} container>
      <Grid xs={12} item>
        <Typography className={classes.title} paragraph>
          Все вопросы
        </Typography>
      </Grid>
      <Box>
        <Button
          onClick={handleClickNewQuestions}
          className={classes.newQuestion}
          variant="outlined"
        >
          Новые вопросы
        </Button>
        <Button
          onClick={handleClickWithoutAnswers}
          className={classes.noAnswer}
          variant="outlined"
        >
          Без ответа
        </Button>
      </Box>
      {questions.map(({ id, question, tags, createdAt, answers = [] }) => {
        const language = tags.map(({ title }) => title).join(', ');
        return (
          <Grid xs={12} item key={id}>
            <MainQuestionPreview
              id={id}
              language={language}
              title={question}
              hours={moment(createdAt).fromNow()}
              answers={answers}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default QuestionPageContent;
