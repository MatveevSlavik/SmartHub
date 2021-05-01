import React, { useEffect, useState } from 'react';
import moment from 'moment';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import CommentForm from './components/CommentForm';
import { fetchQuestion } from '../../store/actions/questionActions';

import useStyles from './useStyles';
import MainQuestionAnswer from '../MainQuestionAnswer';

const MainQuestion = () => {
  const classes = useStyles();

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const { displayName = '' } = firebase.auth().currentUser || {};

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLoading(true);

    fetchQuestion(id)
      .then((snap) => {
        const data = snap.data();
        setCurrentQuestion(data);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const {
    question = '',
    tags = [],
    description = '',
    createdAt = new Date().getTime(),
    nickname = '',
    answers = [],
  } = currentQuestion;

  const answersCount = answers.length;

  const getQuestion = () => {
    fetchQuestion(id).then((snap) => {
      const data = snap.data();
      setCurrentQuestion(data);
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
        ...currentQuestion,
        answers: [
          ...answers,
          {
            id: generatedId,
            createdAt: new Date().getTime(),
            comment: values.comment,
            nickname: displayName,
          },
        ],
      })
      .then(() => {
        getQuestion();
        resetForm();
        setStatus({ text: 'Комментарий успешно добавлен' });
      })
      .catch((err) => setStatus({ text: err.message }))
      .finally(() => setSubmitting(false));
  };

  return (
    <Grid container className={classes.wrapper}>
      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <>
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
              <Typography
                gutterBottom
                className={classes.bold}
                variant="overline"
              >
                {`Ответы на вопрос (${answersCount})`}
              </Typography>
              <Divider className={classes.commentDivider} />
              {answers.map((answerProps) => {
                const { id } = answerProps;
                return <MainQuestionAnswer key={id} {...answerProps} />;
              })}
            </>
          )}
          {isLoggedIn && <CommentForm handleSubmit={handleSaveComment} />}
        </>
      )}
    </Grid>
  );
};

export default MainQuestion;
