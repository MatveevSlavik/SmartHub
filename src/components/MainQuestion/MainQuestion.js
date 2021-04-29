import React from 'react';
import moment from 'moment';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
import { Avatar, Box, Divider, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import CommentForm from './components/CommentForm';
import { fetchQuestions } from '../../store/actions/questionActions';

import useStyles from './useStyles';

const MainQuestion = () => {
  const classes = useStyles();

  const { id } = useParams();
  const dispatch = useDispatch();
  const { questions = [] } = useSelector((state) => state.questionsData);
  const {
    auth: { email },
  } = useSelector((state) => state.firebase);

  const [currentPost] = questions.filter((el) => el.id === id);

  const {
    question,
    tags,
    description,
    createdAt,
    nickname,
    answers = [],
  } = currentPost;

  const answersCount = answers.length;

  const getQuestions = () => {
    fetchQuestions().then((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: data });
    });
  };

  const handleSaveComment = ({
    values,
    setStatus,
    setSubmitting,
    resetForm,
  }) => {
    setSubmitting(true);

    const generatedId = uuid();

    firebase
      .firestore()
      .collection('questions')
      .doc(id)
      .set({
        ...currentPost,
        answers: [
          ...answers,
          {
            id: generatedId,
            createdAt: new Date().getTime(),
            comment: values.comment,
            nickname: email,
          },
        ],
      })
      .then(() => {
        setStatus({ text: 'Комментарий успешно добавлен' });
        getQuestions();
        resetForm();
      })
      .catch((err) => setStatus({ text: err.message }))
      .finally(() => setSubmitting(false));
  };

  return (
    <Grid container className={classes.wrapper}>
      <Box className={classes.userWrapper}>
        <Avatar />
        <Typography variant="body2" className={classes.nickname}>
          {nickname}
        </Typography>
      </Box>
      <Divider className={classes.divider} />
      <Typography variant="caption">
        {tags.map(({ title }) => title).join(', ')}
      </Typography>
      <Typography paragraph variant="h6" className={classes.bold}>
        {question}
      </Typography>
      <Typography gutterBottom>{description}</Typography>
      <Typography paragraph color="textSecondary" variant="caption">
        Вопрос задан: {moment(createdAt).fromNow()}
      </Typography>
      {!!answersCount && (
        <>
          <Typography gutterBottom className={classes.bold} variant="overline">
            {`Ответы на вопрос (${answersCount})`}
          </Typography>
          <Divider className={classes.commentDivider} />
        </>
      )}
      <CommentForm handleSubmit={handleSaveComment} />
    </Grid>
  );
};

export default MainQuestion;
